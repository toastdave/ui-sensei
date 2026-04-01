# Capture Batch Runbook

## Goal

Run a repeatable capture pass for a batch of websites so analysis agents have enough evidence to produce reliable reports.

## Recommended V1 Approach

Use a browser automation agent or browser tool in a semi-structured way.

The repo now includes an executable baseline workflow:

```bash
python scripts/check_capture_env.py
python scripts/run_capture_batch.py --config config/batches/batch-01.json
```

That flow runs a preflight check and then captures each configured site into `data/captures/<batch>/<site>/`.

For each site, collect:

- full-page desktop screenshot
- above-the-fold desktop screenshot
- mobile screenshot
- visible text export
- DOM snapshot or section notes
- hover, click, and scroll notes
- basic technology hints
- missing evidence notes

This repository already defines the contract in `schemas/capture.schema.json`.

## Batch Folder Setup

For a first batch, create folders like this:

```text
data/captures/batch-01/
  railway/
  notion-product/
  posthog/
  voidzero/
  airbnb/
```

Inside each site folder, store:

```text
data/captures/batch-01/<site>/
  manifest.json
  screenshot-desktop-full.png
  screenshot-desktop-hero.png
  screenshot-mobile-full.png
  visible-text.md
  dom-notes.md
  interaction-notes.md
  tech-hints.md
  snapshot-desktop-interactive.txt
  snapshot-mobile-interactive.txt
```

## Per-Site Capture Steps

### 1. Open the site

- Start on the homepage or the exact target URL.
- Wait for major hero content to finish loading.
- If the site has intro animations, wait until the default resting state is visible.

### 2. Capture desktop evidence

- Take an above-the-fold screenshot at a common desktop size like `1440x900`.
- Take a full-page screenshot.
- Scroll slowly through the page and note section order.

### 3. Capture mobile evidence

- Switch to a mobile viewport like `390x844`.
- Take at least one mobile full-page screenshot.
- Note whether nav, hero, cards, and CTA sections adapt cleanly.

### 4. Probe interaction behavior

Trigger obvious interactions and write down what happens:

- primary and secondary CTA hover states
- nav dropdowns or sticky behavior
- cards or tiles with hover motion
- tabs, accordions, carousels, or demos
- scroll-triggered reveals
- unusual cursor or 3D behavior

If interaction capture is incomplete, say so explicitly.

### 5. Save visible text

Collect the main copy visible on the page:

- headline
- subhead
- CTA labels
- feature headings
- proof text
- testimonial snippets
- footer positioning language

Do not worry about perfect completeness in V1. Prioritize meaningful text.

### 6. Save DOM or structure notes

If you can export a DOM snapshot, save it.

If not, write section-level notes covering:

- section order
- likely layout pattern
- content hierarchy
- component types in each section

### 7. Save technology hints

Note any evidence that suggests:

- WebGL or canvas
- Three.js or React Three Fiber
- GSAP or Framer Motion
- smooth scrolling
- video background
- lazy loading
- heavy masking, clipping, or shader effects

Only note what is visible or strongly suggested.

### 8. Fill the manifest

Create `manifest.json` using the shape from `schemas/capture.schema.json`.

If you use the provided scripts, this manifest is created automatically.

## Manifest Example

Use this structure as a starting point:

```json
{
  "site": "railway",
  "url": "https://railway.com",
  "batch": "batch-01",
  "captured_at": "2026-04-01T00:00:00Z",
  "viewports": ["1440x900", "390x844"],
  "assets": {
    "full_page_screenshots": [
      "screenshot-desktop-full.png",
      "screenshot-mobile-full.png"
    ],
    "above_the_fold_screenshots": [
      "screenshot-desktop-hero.png"
    ],
    "mobile_screenshots": [
      "screenshot-mobile-full.png"
    ],
    "dom_snapshot": "dom-notes.md",
    "visible_text_export": "visible-text.md"
  },
  "notes": {
    "section_notes": [
      "Hero uses centered copy with product UI preview.",
      "Feature sections alternate between text and interface previews."
    ],
    "interaction_notes": [
      "Primary CTA brightens on hover with low-distance motion.",
      "Sections reveal progressively on scroll."
    ],
    "technology_hints": [
      "Likely smooth scroll behavior.",
      "Possible Framer Motion or GSAP for section reveals."
    ],
    "missing_evidence": [
      "Could not confirm exact animation library.",
      "Did not inspect authenticated product experience."
    ]
  }
}
```

## V1 Batch Checklist

For each site, verify you have:

- at least 2 screenshots on desktop
- at least 1 screenshot on mobile
- visible text notes
- section order notes
- interaction notes
- technology hints
- missing evidence list
- valid `manifest.json`

## Suggested First Batch

- `https://railway.com`
- `https://www.notion.com/product`
- `https://posthog.com`
- `https://voidzero.dev`
- `https://www.airbnb.com`

## After Capture

Once a site's capture folder is complete:

1. Pass the folder contents into `skills/frontend-design-researcher.md`.
2. Use `prompts/master-research-prompt.md`.
3. Save the resulting report to `data/reports/batch-01/<site>.md`.
4. Save the normalized JSON to `data/json/batch-01/<site>.json`.

## Practical V1 Recommendation

Until we add automation scripts, the simplest process is:

1. Use a browser-capable agent to inspect one site at a time.
2. Save the artifacts manually into the batch folder.
3. Validate the manifest shape against `schemas/capture.schema.json`.
4. Hand the capture package to the research skill.

That is enough to get batch one moving without over-engineering capture first.

## Automated Baseline Workflow

### Preflight

Run:

```bash
python scripts/check_capture_env.py
```

This checks that `agent-browser` is available and that it can launch a browser successfully.

### Run a full batch

Run:

```bash
python scripts/run_capture_batch.py --config config/batches/batch-01.json
```

### Run a single site

Run:

```bash
python scripts/capture_site.py --batch batch-01 --slug railway --url https://railway.com
```

### What the automated workflow does

For each site, it:

- opens the page in a desktop viewport
- captures desktop hero and full-page screenshots
- records a desktop interactive snapshot
- exports visible page text
- generates `dom-notes.md`
- generates `interaction-notes.md`
- generates `tech-hints.md`
- reopens the page in a mobile device profile
- captures a mobile full-page screenshot
- records a mobile interactive snapshot
- writes `manifest.json`

### Limits of the baseline automation

The script is designed to get you to a strong baseline quickly, but it does not fully replace a manual or agent-driven interaction pass.

It will not reliably discover:

- nuanced hover motion
- hidden nav menus that require judgment
- complex demo interactions
- exact animation stack usage
- timing and easing quality beyond obvious cues

For higher-fidelity research, run the baseline script first and then let a browser-capable agent augment `interaction-notes.md` for any site that looks especially motion- or interaction-heavy.
