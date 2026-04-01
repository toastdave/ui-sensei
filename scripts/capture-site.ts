#!/usr/bin/env bun

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const ANSI_RE = /\x1b\[[0-?]*[ -/]*[@-~]/g;
const KNOWN_TECH: Record<string, string> = {
  three: "Possible Three.js or WebGL-related script reference detected.",
  r3f: "Possible React Three Fiber-related reference detected.",
  "@react-three": "Possible React Three Fiber-related reference detected.",
  gsap: "Possible GSAP animation reference detected.",
  framer: "Possible Framer Motion or Framer-related reference detected.",
  motion: "Possible motion library reference detected; verify manually.",
  lottie: "Possible Lottie animation reference detected.",
  lenis: "Possible smooth-scroll library reference detected.",
  locomotive: "Possible smooth-scroll library reference detected.",
  barba: "Possible page transition library reference detected."
};

type DomData = {
  title?: string;
  counts?: Record<string, number>;
  headings?: Array<{ tag: string; text: string }>;
  sections?: Array<{ index: number; label: string | null; text_preview: string }>;
  scripts?: string[];
  signals?: {
    has_webgl_context?: boolean;
    has_lenis_global?: boolean;
  };
};

function clean(text: string): string {
  return text.replace(ANSI_RE, "").trim();
}

function run(cmd: string[], input?: string): string {
  const result = spawnSync(cmd[0], cmd.slice(1), {
    cwd: ROOT,
    encoding: "utf8",
    input
  });

  if (result.status !== 0) {
    const message = clean(`${result.stderr || ""}\n${result.stdout || ""}`);
    throw new Error(`Command failed: ${cmd.join(" ")}\n${message}`);
  }

  return result.stdout || "";
}

function ensureParent(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
}

function writeText(path: string, content: string): void {
  ensureParent(path);
  writeFileSync(path, `${content.replace(/\s+$/, "")}\n`, "utf8");
}

function writeJson(path: string, value: unknown): void {
  ensureParent(path);
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith("--")) continue;
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for ${key}`);
    }
    args[key.slice(2)] = value;
    i += 1;
  }

  return args;
}

function captureEval(session: string, script: string): DomData {
  const raw = clean(run(["agent-browser", "--session", session, "eval", "--stdin"], script));
  return JSON.parse(raw) as DomData;
}

function deriveTechHints(domData: DomData): string[] {
  const hints: string[] = [];
  const scriptUrls = (domData.scripts || []).map((url) => url.toLowerCase());

  for (const scriptUrl of scriptUrls) {
    for (const [token, hint] of Object.entries(KNOWN_TECH)) {
      if (scriptUrl.includes(token) && !hints.includes(hint)) {
        hints.push(hint);
      }
    }
  }

  const counts = domData.counts || {};
  if ((counts.canvas || 0) > 0) {
    hints.push("Canvas elements are present; inspect for advanced rendering or chart usage.");
  }
  if ((counts.video || 0) > 0) {
    hints.push("Video elements are present; confirm whether motion relies on video backgrounds or demos.");
  }
  if (domData.signals?.has_webgl_context) {
    hints.push("A WebGL context was detected during automated inspection.");
  }
  if (domData.signals?.has_lenis_global) {
    hints.push("A Lenis-like smooth-scroll global was detected during automated inspection.");
  }
  if (hints.length === 0) {
    hints.push("No clear library signal was detected automatically; confirm animation and rendering stack manually if needed.");
  }

  return hints;
}

function buildDomNotes(domData: DomData): string {
  const lines = [`# DOM Notes for ${domData.title || "Untitled page"}`, "", "## Element Counts"];

  for (const [key, value] of Object.entries(domData.counts || {}).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`- ${key}: ${value}`);
  }

  if ((domData.headings || []).length > 0) {
    lines.push("", "## Heading Outline");
    for (const heading of domData.headings || []) {
      lines.push(`- ${heading.tag}: ${heading.text}`);
    }
  }

  if ((domData.sections || []).length > 0) {
    lines.push("", "## Section Samples");
    for (const section of domData.sections || []) {
      lines.push(`- ${section.label || `section-${section.index}`}: ${section.text_preview || ""}`);
    }
  }

  if ((domData.scripts || []).length > 0) {
    lines.push("", "## Script References");
    for (const script of (domData.scripts || []).slice(0, 20)) {
      lines.push(`- ${script}`);
    }
  }

  return lines.join("\n");
}

function buildInteractionNotes(snapshotText: string): string {
  const excerpt = snapshotText.split("\n").slice(0, 20);
  const lines = [
    "# Interaction Notes",
    "",
    "This file was generated from the baseline automated capture.",
    "No manual hover, click, or scroll probing was performed beyond loading the page and recording visible interactive elements.",
    "",
    "## Follow-Up Probes Recommended",
    "- Hover the primary and secondary CTAs.",
    "- Check whether the header becomes sticky or changes style on scroll.",
    "- Probe tabs, carousels, demos, accordions, or cards with hover states.",
    "- Note any section reveal, parallax, cursor, or 3D behavior.",
    "",
    "## Baseline Snapshot Excerpt"
  ];

  for (const line of excerpt) {
    lines.push(`- ${line}`);
  }

  return lines.join("\n");
}

const domEvalScript = String.raw`
const normalize = (text) => (text || '').replace(/\s+/g, ' ').trim();
const sections = Array.from(document.querySelectorAll('main section, section')).slice(0, 20).map((section, index) => ({
  index: index + 1,
  label: section.id || normalize(section.getAttribute('aria-label')) || normalize(section.className).slice(0, 80) || null,
  text_preview: normalize(section.innerText).slice(0, 220)
}));
const headings = Array.from(document.querySelectorAll('h1,h2,h3')).slice(0, 30).map((heading) => ({
  tag: heading.tagName.toLowerCase(),
  text: normalize(heading.innerText).slice(0, 160)
}));
const scripts = Array.from(document.scripts).map((script) => script.src).filter(Boolean).slice(0, 50);
let hasWebglContext = false;
try {
  hasWebglContext = Array.from(document.querySelectorAll('canvas')).some((canvas) => !!(canvas.getContext('webgl') || canvas.getContext('webgl2')));
} catch (error) {
  hasWebglContext = false;
}
JSON.stringify({
  title: document.title,
  url: location.href,
  counts: {
    section: document.querySelectorAll('section').length,
    button: document.querySelectorAll('button').length,
    link: document.querySelectorAll('a').length,
    image: document.querySelectorAll('img').length,
    video: document.querySelectorAll('video').length,
    canvas: document.querySelectorAll('canvas').length,
    form: document.querySelectorAll('form').length,
    input: document.querySelectorAll('input').length
  },
  headings,
  sections,
  scripts,
  signals: {
    has_webgl_context: hasWebglContext,
    has_lenis_global: typeof window.Lenis !== 'undefined',
    has_scroll_timeline_support: typeof CSS !== 'undefined' && typeof CSS.supports === 'function' ? CSS.supports('animation-timeline: scroll()') : false
  }
});
`;

if (!existsSync(join(ROOT, "package.json"))) {
  console.error("package.json not found. Run this script from the repository.");
  process.exit(1);
}

const args = parseArgs(process.argv.slice(2));
const batch = args.batch;
const slug = slugify(args.slug || "");
const url = args.url;
const desktopWidth = Number(args["desktop-width"] || "1440");
const desktopHeight = Number(args["desktop-height"] || "900");
const mobileDevice = args["mobile-device"] || "iPhone 14";

if (!batch || !slug || !url) {
  console.error("Usage: bun run scripts/capture-site.ts --batch <batch> --slug <slug> --url <url>");
  process.exit(1);
}

const outputDir = join(ROOT, "data", "captures", batch, slug);
mkdirSync(outputDir, { recursive: true });

const session = `capture-${batch}-${slug}`;
const desktopHero = join(outputDir, "screenshot-desktop-hero.png");
const desktopFull = join(outputDir, "screenshot-desktop-full.png");
const mobileFull = join(outputDir, "screenshot-mobile-full.png");
const snapshotDesktop = join(outputDir, "snapshot-desktop-interactive.txt");
const snapshotMobile = join(outputDir, "snapshot-mobile-interactive.txt");
const visibleText = join(outputDir, "visible-text.md");
const domNotes = join(outputDir, "dom-notes.md");
const interactionNotes = join(outputDir, "interaction-notes.md");
const techHints = join(outputDir, "tech-hints.md");
const manifest = join(outputDir, "manifest.json");

let domData: DomData = {};

try {
  run(["agent-browser", "--session", session, "open", "about:blank"]);
  run(["agent-browser", "--session", session, "set", "viewport", `${desktopWidth}`, `${desktopHeight}`, "1"]);
  run(["agent-browser", "--session", session, "open", url]);
  run(["agent-browser", "--session", session, "wait", "--load", "networkidle"]);
  run(["agent-browser", "--session", session, "wait", "1500"]);
  run(["agent-browser", "--session", session, "screenshot", desktopHero]);
  run(["agent-browser", "--session", session, "screenshot", desktopFull, "--full"]);

  const desktopSnapshotText = clean(run(["agent-browser", "--session", session, "snapshot", "-i"]));
  writeText(snapshotDesktop, desktopSnapshotText);

  const textBody = clean(run(["agent-browser", "--session", session, "get", "text", "body"]));
  writeText(visibleText, textBody);

  domData = captureEval(session, domEvalScript);
  writeText(domNotes, buildDomNotes(domData));
  writeText(interactionNotes, buildInteractionNotes(desktopSnapshotText));
  writeText(techHints, `# Tech Hints\n\n${deriveTechHints(domData).map((item) => `- ${item}`).join("\n")}`);

  run(["agent-browser", "--session", session, "set", "device", mobileDevice]);
  run(["agent-browser", "--session", session, "open", url]);
  run(["agent-browser", "--session", session, "wait", "--load", "networkidle"]);
  run(["agent-browser", "--session", session, "wait", "1500"]);
  run(["agent-browser", "--session", session, "screenshot", mobileFull, "--full"]);
  const mobileSnapshotText = clean(run(["agent-browser", "--session", session, "snapshot", "-i"]));
  writeText(snapshotMobile, mobileSnapshotText);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  spawnSync("agent-browser", ["--session", session, "close"], {
    cwd: ROOT,
    encoding: "utf8"
  });
}

if (process.exitCode && process.exitCode !== 0) {
  process.exit(process.exitCode);
}

const manifestPayload = {
  site: slug,
  url,
  batch,
  captured_at: new Date().toISOString(),
  viewports: [`${desktopWidth}x${desktopHeight}`, mobileDevice],
  assets: {
    full_page_screenshots: [desktopFull.split("/").pop(), mobileFull.split("/").pop()],
    above_the_fold_screenshots: [desktopHero.split("/").pop()],
    mobile_screenshots: [mobileFull.split("/").pop()],
    dom_snapshot: domNotes.split("/").pop(),
    visible_text_export: visibleText.split("/").pop()
  },
  notes: {
    section_notes: [
      "See dom-notes.md for automated heading and section sampling.",
      "See snapshot-desktop-interactive.txt and snapshot-mobile-interactive.txt for baseline structure evidence."
    ],
    interaction_notes: [
      "See interaction-notes.md for the baseline interaction checklist.",
      "This automated pass did not manually probe hover or click states."
    ],
    technology_hints: deriveTechHints(domData),
    missing_evidence: [
      "Exact animation library remains unconfirmed unless obvious script references were detected.",
      "Manual probing is still recommended for hidden navigation, hover states, and motion timing."
    ]
  }
};

writeJson(manifest, manifestPayload);
console.log(outputDir);
