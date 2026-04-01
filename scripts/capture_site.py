#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
ANSI_RE = re.compile(r"\x1b\[[0-?]*[ -/]*[@-~]")
KNOWN_TECH = {
    "three": "Possible Three.js or WebGL-related script reference detected.",
    "r3f": "Possible React Three Fiber-related reference detected.",
    "@react-three": "Possible React Three Fiber-related reference detected.",
    "gsap": "Possible GSAP animation reference detected.",
    "framer": "Possible Framer Motion or Framer-related reference detected.",
    "motion": "Possible motion library reference detected; verify manually.",
    "lottie": "Possible Lottie animation reference detected.",
    "lenis": "Possible smooth-scroll library reference detected.",
    "locomotive": "Possible smooth-scroll library reference detected.",
    "barba": "Possible page transition library reference detected.",
}


def clean(text: str) -> str:
    return ANSI_RE.sub("", text).strip()


def run(cmd: list[str], input_text: str | None = None) -> str:
    result = subprocess.run(
        cmd, text=True, input=input_text, capture_output=True, cwd=ROOT
    )
    if result.returncode != 0:
        message = clean((result.stderr or "") + "\n" + (result.stdout or ""))
        raise RuntimeError(f"Command failed: {' '.join(cmd)}\n{message}")
    return result.stdout


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def write_json(path: Path, content: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(content, indent=2) + "\n", encoding="utf-8")


def relative_name(path: Path) -> str:
    return path.name


def capture_eval(session: str, script: str) -> object:
    raw = run(
        ["agent-browser", "--session", session, "eval", "--stdin"], input_text=script
    )
    raw = clean(raw)
    return json.loads(raw)


def derive_tech_hints(dom_data: dict) -> list[str]:
    hints: list[str] = []
    script_urls = [url.lower() for url in dom_data.get("scripts", [])]

    for script_url in script_urls:
        for token, hint in KNOWN_TECH.items():
            if token in script_url and hint not in hints:
                hints.append(hint)

    counts = dom_data.get("counts", {})
    if counts.get("canvas", 0) > 0:
        hints.append(
            "Canvas elements are present; inspect for advanced rendering or chart usage."
        )
    if counts.get("video", 0) > 0:
        hints.append(
            "Video elements are present; confirm whether motion relies on video backgrounds or demos."
        )
    if dom_data.get("signals", {}).get("has_webgl_context"):
        hints.append("A WebGL context was detected during automated inspection.")
    if dom_data.get("signals", {}).get("has_lenis_global"):
        hints.append(
            "A Lenis-like smooth-scroll global was detected during automated inspection."
        )
    if not hints:
        hints.append(
            "No clear library signal was detected automatically; confirm animation and rendering stack manually if needed."
        )
    return hints


def build_dom_notes(dom_data: dict) -> str:
    lines = [
        f"# DOM Notes for {dom_data.get('title', 'Untitled page')}",
        "",
        "## Element Counts",
    ]
    for key, value in sorted(dom_data.get("counts", {}).items()):
        lines.append(f"- {key}: {value}")

    headings = dom_data.get("headings", [])
    if headings:
        lines.extend(["", "## Heading Outline"])
        for heading in headings:
            lines.append(f"- {heading['tag']}: {heading['text']}")

    sections = dom_data.get("sections", [])
    if sections:
        lines.extend(["", "## Section Samples"])
        for section in sections:
            label = section.get("label") or f"section-{section['index']}"
            preview = section.get("text_preview") or ""
            lines.append(f"- {label}: {preview}")

    scripts = dom_data.get("scripts", [])
    if scripts:
        lines.extend(["", "## Script References"])
        for script in scripts[:20]:
            lines.append(f"- {script}")

    return "\n".join(lines)


def build_interaction_notes(snapshot_text: str) -> str:
    lines = [
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
        "## Baseline Snapshot Excerpt",
    ]

    excerpt = snapshot_text.splitlines()[:20]
    for line in excerpt:
        lines.append(f"- {line}")

    return "\n".join(lines)


def capture_site(
    batch: str,
    slug: str,
    url: str,
    desktop_width: int,
    desktop_height: int,
    mobile_device: str,
) -> Path:
    slug = slugify(slug)
    output_dir = ROOT / "data" / "captures" / batch / slug
    output_dir.mkdir(parents=True, exist_ok=True)

    session = f"capture-{batch}-{slug}"

    desktop_hero = output_dir / "screenshot-desktop-hero.png"
    desktop_full = output_dir / "screenshot-desktop-full.png"
    mobile_full = output_dir / "screenshot-mobile-full.png"
    snapshot_desktop = output_dir / "snapshot-desktop-interactive.txt"
    snapshot_mobile = output_dir / "snapshot-mobile-interactive.txt"
    visible_text = output_dir / "visible-text.md"
    dom_notes = output_dir / "dom-notes.md"
    interaction_notes = output_dir / "interaction-notes.md"
    tech_hints = output_dir / "tech-hints.md"
    manifest = output_dir / "manifest.json"

    js = r"""
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
const output = {
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
};
JSON.stringify(output);
"""

    try:
        run(["agent-browser", "--session", session, "open", "about:blank"])
        run(
            [
                "agent-browser",
                "--session",
                session,
                "set",
                "viewport",
                str(desktop_width),
                str(desktop_height),
                "1",
            ]
        )
        run(["agent-browser", "--session", session, "open", url])
        run(["agent-browser", "--session", session, "wait", "--load", "networkidle"])
        run(["agent-browser", "--session", session, "wait", "1500"])
        run(["agent-browser", "--session", session, "screenshot", str(desktop_hero)])
        run(
            [
                "agent-browser",
                "--session",
                session,
                "screenshot",
                str(desktop_full),
                "--full",
            ]
        )

        desktop_snapshot_text = run(
            ["agent-browser", "--session", session, "snapshot", "-i"]
        )
        write_text(snapshot_desktop, clean(desktop_snapshot_text))

        text_body = run(["agent-browser", "--session", session, "get", "text", "body"])
        write_text(visible_text, clean(text_body))

        dom_data = capture_eval(session, js)
        write_text(dom_notes, build_dom_notes(dom_data))
        write_text(
            interaction_notes, build_interaction_notes(clean(desktop_snapshot_text))
        )
        write_text(
            tech_hints,
            "# Tech Hints\n\n"
            + "\n".join(f"- {item}" for item in derive_tech_hints(dom_data)),
        )

        run(["agent-browser", "--session", session, "set", "device", mobile_device])
        run(["agent-browser", "--session", session, "open", url])
        run(["agent-browser", "--session", session, "wait", "--load", "networkidle"])
        run(["agent-browser", "--session", session, "wait", "1500"])
        run(
            [
                "agent-browser",
                "--session",
                session,
                "screenshot",
                str(mobile_full),
                "--full",
            ]
        )
        mobile_snapshot_text = run(
            ["agent-browser", "--session", session, "snapshot", "-i"]
        )
        write_text(snapshot_mobile, clean(mobile_snapshot_text))
    finally:
        subprocess.run(
            ["agent-browser", "--session", session, "close"],
            text=True,
            capture_output=True,
            cwd=ROOT,
        )

    manifest_payload = {
        "site": slug,
        "url": url,
        "batch": batch,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "viewports": [f"{desktop_width}x{desktop_height}", mobile_device],
        "assets": {
            "full_page_screenshots": [
                relative_name(desktop_full),
                relative_name(mobile_full),
            ],
            "above_the_fold_screenshots": [relative_name(desktop_hero)],
            "mobile_screenshots": [relative_name(mobile_full)],
            "dom_snapshot": relative_name(dom_notes),
            "visible_text_export": relative_name(visible_text),
        },
        "notes": {
            "section_notes": [
                "See dom-notes.md for automated heading and section sampling.",
                "See snapshot-desktop-interactive.txt and snapshot-mobile-interactive.txt for baseline structure evidence.",
            ],
            "interaction_notes": [
                "See interaction-notes.md for the baseline interaction checklist.",
                "This automated pass did not manually probe hover or click states.",
            ],
            "technology_hints": derive_tech_hints(dom_data),
            "missing_evidence": [
                "Exact animation library remains unconfirmed unless obvious script references were detected.",
                "Manual probing is still recommended for hidden navigation, hover states, and motion timing.",
            ],
        },
    }
    write_json(manifest, manifest_payload)
    return output_dir


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Capture baseline evidence for one website using agent-browser."
    )
    parser.add_argument(
        "--batch", required=True, help="Batch slug, for example batch-01"
    )
    parser.add_argument("--slug", required=True, help="Site slug")
    parser.add_argument("--url", required=True, help="Site URL")
    parser.add_argument("--desktop-width", type=int, default=1440)
    parser.add_argument("--desktop-height", type=int, default=900)
    parser.add_argument("--mobile-device", default="iPhone 14")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if not shutil.which("agent-browser"):
        print("agent-browser is not installed or not on PATH.", file=sys.stderr)
        return 1

    try:
        output_dir = capture_site(
            batch=args.batch,
            slug=args.slug,
            url=args.url,
            desktop_width=args.desktop_width,
            desktop_height=args.desktop_height,
            mobile_device=args.mobile_device,
        )
    except Exception as error:  # noqa: BLE001
        print(str(error), file=sys.stderr)
        return 1

    print(output_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
