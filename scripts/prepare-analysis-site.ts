#!/usr/bin/env bun

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");

type Manifest = {
  site: string;
  url: string;
  batch: string;
  captured_at: string;
  viewports: string[];
  assets: {
    full_page_screenshots: string[];
    above_the_fold_screenshots: string[];
    mobile_screenshots: string[];
    dom_snapshot: string | null;
    visible_text_export: string | null;
  };
  notes: {
    section_notes: string[];
    interaction_notes: string[];
    technology_hints: string[];
    missing_evidence?: string[];
  };
};

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

function readText(path: string): string {
  return readFileSync(path, "utf8").trim();
}

function optionalText(path: string | null): string {
  if (!path) return "Not provided.";
  return readText(path);
}

function fileExists(path: string): boolean {
  return existsSync(path);
}

function ensureDir(path: string): void {
  mkdirSync(path, { recursive: true });
}

function relativePath(path: string): string {
  return path.replace(`${ROOT}/`, "");
}

function codeBlock(language: string, content: string): string {
  return ["```" + language, content, "```"].join("\n");
}

const args = parseArgs(process.argv.slice(2));
const batch = args.batch;
const site = args.site;

if (!batch || !site) {
  console.error("Usage: bun run scripts/prepare-analysis-site.ts --batch <batch> --site <site>");
  process.exit(1);
}

const captureDir = join(ROOT, "data", "captures", batch, site);
const promptDir = join(ROOT, "data", "prompts", batch);
const reportPath = join(ROOT, "data", "reports", batch, `${site}.md`);
const jsonPath = join(ROOT, "data", "json", batch, `${site}.json`);
const manifestPath = join(captureDir, "manifest.json");

if (!fileExists(manifestPath)) {
  console.error(`Capture manifest not found: ${manifestPath}`);
  process.exit(1);
}

ensureDir(promptDir);
ensureDir(join(ROOT, "data", "reports", batch));
ensureDir(join(ROOT, "data", "json", batch));

const manifest = JSON.parse(readText(manifestPath)) as Manifest;
const masterPrompt = readText(join(ROOT, "prompts", "master-research-prompt.md"));
const skillPath = "skills/frontend-design-researcher.md";

const desktopScreenshots = [
  ...manifest.assets.above_the_fold_screenshots,
  ...manifest.assets.full_page_screenshots.filter((item) => !manifest.assets.mobile_screenshots.includes(item))
].map((item) => `data/captures/${batch}/${site}/${item}`);

const mobileScreenshots = manifest.assets.mobile_screenshots.map(
  (item) => `data/captures/${batch}/${site}/${item}`
);

const domNotesPath = manifest.assets.dom_snapshot
  ? join(captureDir, manifest.assets.dom_snapshot)
  : null;
const visibleTextPath = manifest.assets.visible_text_export
  ? join(captureDir, manifest.assets.visible_text_export)
  : null;
const interactionNotesPath = join(captureDir, "interaction-notes.md");
const techHintsPath = join(captureDir, "tech-hints.md");
const desktopSnapshotPath = join(captureDir, "snapshot-desktop-interactive.txt");
const mobileSnapshotPath = join(captureDir, "snapshot-mobile-interactive.txt");

const promptSections = [
  `# Analysis Packet: ${manifest.site}`,
  "",
  "## Goal",
  "",
  "Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.",
  "",
  "## Source Instructions",
  "",
  `- Skill: \`${skillPath}\``,
  "- Prompt: `prompts/master-research-prompt.md`",
  "",
  "## Output Targets",
  "",
  `- Report: \`${relativePath(reportPath)}\``,
  `- JSON: \`${relativePath(jsonPath)}\``,
  "",
  "## Research Instructions",
  "",
  masterPrompt,
  "",
  "## Site Metadata",
  "",
  codeBlock("json", JSON.stringify(manifest, null, 2)),
  "",
  "## Available Screenshots",
  "",
  "### Desktop",
  "",
  desktopScreenshots.map((path) => `- \`${relativePath(path)}\``).join("\n") || "- None",
  "",
  "### Mobile",
  "",
  mobileScreenshots.map((path) => `- \`${relativePath(path)}\``).join("\n") || "- None",
  "",
  "## Visible Text",
  "",
  codeBlock("text", optionalText(visibleTextPath)),
  "",
  "## DOM Notes",
  "",
  codeBlock("md", optionalText(domNotesPath)),
  "",
  "## Interaction Notes",
  "",
  codeBlock("md", optionalText(interactionNotesPath)),
  "",
  "## Tech Hints",
  "",
  codeBlock("md", optionalText(techHintsPath)),
  "",
  "## Interactive Snapshot: Desktop",
  "",
  codeBlock("text", optionalText(desktopSnapshotPath)),
  "",
  "## Interactive Snapshot: Mobile",
  "",
  codeBlock("text", optionalText(mobileSnapshotPath)),
  "",
  "## Required Deliverables",
  "",
  "1. Create a full site report matching `docs/templates/per-site-report-template.md`.",
  "2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.",
  "3. Preserve explicit separation between observed, inferred, and uncertain findings.",
  "4. Include a section called `How to apply this without copying`.",
  "",
  "## Finish Condition",
  "",
  `When complete, save the markdown report to \`${relativePath(reportPath)}\` and the JSON summary to \`${relativePath(jsonPath)}\`.`
];

const prompt = promptSections.join("\n");

const outputPath = join(promptDir, `${site}-analysis.md`);
writeFileSync(outputPath, `${prompt.trim()}\n`, "utf8");

console.log(outputPath);
