# Analysis Packet: voidzero

## Goal

Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.

## Source Instructions

- Skill: `skills/frontend-design-researcher.md`
- Prompt: `prompts/master-research-prompt.md`

## Output Targets

- Report: `data/reports/batch-01/voidzero.md`
- JSON: `data/json/batch-01/voidzero.json`

## Research Instructions

You are running the Frontend Design Researcher skill.

Goal:
Analyze the provided website materials and extract reusable design, UX, copy, motion, rendering, accessibility, and implementation patterns. Do not clone the site. Convert findings into transferable frontend standards.

Deliverables:
1. A full research report for each site.
2. A normalized JSON summary for each site.
3. A cross-site synthesis when multiple sites are provided.
4. A list of atomic pattern candidates to add to the pattern library.
5. A final list of reusable frontend design rules.

Requirements:
- Be concrete and implementation-aware.
- Separate direct observation from inference.
- Mark uncertain areas clearly.
- Prefer rendered evidence over assumptions.
- Include accessibility and performance cautions.
- Include a section called `How to apply this without copying`.

When the evidence is incomplete, continue with best-effort analysis and state what is missing.

Output format:
- Follow the skill structure.
- Include the JSON block for each site.
- Keep reusable rules imperative and transferable.

## Site Metadata

```json
{
  "site": "voidzero",
  "url": "https://voidzero.dev",
  "batch": "batch-01",
  "captured_at": "2026-04-01T19:51:19.632Z",
  "viewports": [
    "1440x900",
    "iPhone 14"
  ],
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
      "See dom-notes.md for automated heading and section sampling.",
      "See snapshot-desktop-interactive.txt and snapshot-mobile-interactive.txt for baseline structure evidence."
    ],
    "interaction_notes": [
      "See interaction-notes.md for the baseline interaction checklist.",
      "This automated pass did not manually probe hover or click states."
    ],
    "technology_hints": [
      "Canvas elements are present; inspect for advanced rendering or chart usage.",
      "A WebGL context was detected during automated inspection."
    ],
    "missing_evidence": [
      "Exact animation library remains unconfirmed unless obvious script references were detected.",
      "Manual probing is still recommended for hidden navigation, hover states, and motion timing."
    ]
  }
}
```

## Available Screenshots

### Desktop

- `data/captures/batch-01/voidzero/screenshot-desktop-hero.png`
- `data/captures/batch-01/voidzero/screenshot-desktop-full.png`

### Mobile

- `data/captures/batch-01/voidzero/screenshot-mobile-full.png`

## Visible Text

```text
ANNOUNCING VITE+ ALPHA: OPEN SOURCE. UNIFIED. NEXT-GEN.
Open Source 
Blog
About
Void 
prod server
/
running
The JavaScriptTooling Company

Making JavaScript developers more productive than ever before.

Trusted by the world's best software teams

OSS
Open Source

We are the creators, maintainers, and contributors of some of the most critical infrastructure projects in the JavaScript ecosystem.

Vite+
Vite
Vitest
Rolldown
Oxc
VITE+
The unified toolchain for the web

Vite+ is the entry point to web application development that manages your runtime, package manager, and frontend toolchain.

Explore Vite+
new
VITE
The build tool for the web

Vite is the default choice for single-page web applications and the foundation for fullstack frameworks like TanStack Start, Nuxt, SvelteKit and more.

Explore Vite
79.4k
stars
1,254
contributors
VITEST
The next-generation test runner

Vitest is a feature-rich test runner that understands your Vite config, is Jest-compatible, and works out-of-the-box with TypeScript & ESM.

Explore Vitest
16.3k
stars
729
contributors
ROLLDOWN
The blazing fast JavaScript bundler

Rolldown is a Rust-based bundler with Rollup-compatible API, and esbuild-equivalent performance & feature set. It also powers Vite version 8 and above.

Explore Rolldown
13.2k
stars
169
contributors
OXC
The fastest JavaScript language toolchain

Oxc is the foundation of our unified toolchain. It includes linter (oxlint), formatter (oxfmt), parser, resolver, transformer, and minifier, all with state-of-the-art performance.

Explore Oxc
20.4k
stars
336
contributors
Trusted by millions of developers around the world
Total downloads
0
Vite Downloads

March 2020

Today

0+

Weekly NPM downloads

0+

GitHub Stars

0+

Contributors

Our mission is to make the next generation of JavaScript developers more productive than ever before.
Learn more

Backed by the very best in the dev tools space.

Featured resources & updates
All Resources
js
resources
.filter(i => i.collection === "featured")
.filter(i => i.postedBy === "VoidZero")
.filter(i => i.articles.length === 8)
// UPDATES
Tales from the Void: March Launch Week Recap
// ANNOUNCEMENTS
Announcing Vite+ Alpha
// ECOSYSTEM
VoidZero and npmx: Building Better Tools Together
// UPDATES
What’s New in ViteLand: February 2026 Recap
// UPDATES
What’s New in ViteLand: January 2026 Recap
// ANNOUNCEMENTS
Announcing Rolldown 1.0 RC
// UPDATES
What’s New in ViteLand: December 2025 Recap
// ANNOUNCEMENTS
Announcing Oxlint Type-Aware Linting Alpha
// UPDATES
Tales from the Void: March Launch Week Recap
// ANNOUNCEMENTS
Announcing Vite+ Alpha
// ECOSYSTEM
VoidZero and npmx: Building Better Tools Together
// UPDATES
What’s New in ViteLand: February 2026 Recap
// UPDATES
What’s New in ViteLand: January 2026 Recap
// ANNOUNCEMENTS
Announcing Rolldown 1.0 RC
// UPDATES
What’s New in ViteLand: December 2025 Recap
// ANNOUNCEMENTS
Announcing Oxlint Type-Aware Linting Alpha
// UPDATES
Tales from the Void: March Launch Week Recap
// ANNOUNCEMENTS
Announcing Vite+ Alpha
// ECOSYSTEM
VoidZero and npmx: Building Better Tools Together
// UPDATES
What’s New in ViteLand: February 2026 Recap
// UPDATES
What’s New in ViteLand: January 2026 Recap
// ANNOUNCEMENTS
Announcing Rolldown 1.0 RC
// UPDATES
What’s New in ViteLand: December 2025 Recap
// ANNOUNCEMENTS
Announcing Oxlint Type-Aware Linting Alpha
Item 2 of 8
Interested in the future of Javascript tooling?
Subscribe to our monthly newsletter
Subscribe

PRODUCT

Void

OSS

Vite+
Vite
Vitest
Rolldown
Oxc

COMPANY

Blog
About
Branding
Terms of Service
Privacy Policy
Acceptable Use Policy

SOCIAL

GitHub
X.com
Discord
YouTube
Bluesky

© 2026 VoidZero Inc. All Rights Reserved.
```

## DOM Notes

```md
# DOM Notes for VoidZero | The Javascript Tooling company

## Element Counts
- button: 17
- canvas: 3
- form: 1
- image: 58
- input: 1
- link: 63
- section: 16
- video: 0

## Heading Outline
- h1: The JavaScriptTooling Company
- h2: Open Source
- h3: Trusted by millions of developers around the world
- h1: 0
- h2: 0+
- h2: 0+
- h2: 0+
- h3: Our mission is to make the next generation of JavaScript developers more productive than ever before.
- h3: Featured resources & updates
- h2: Interested in the future of Javascript tooling?
- h3: Subscribe to our monthly newsletter

## Section Samples
- wrapper wrapper--ticks border-t pt-10 md:pt-14 md:pb-5 flex flex-col items-cente: Trusted by the world's best software teams
- bg-primary: OSS Open Source We are the creators, maintainers, and contributors of some of the most critical infrastructure projects in the JavaScript ecosystem. Vite+ Vite Vitest Rolldown Oxc VITE+ The unified toolchain for the web 
- wrapper border-t p-5 md:pl-10: OSS
- wrapper wrapper--ticks border-t px-10 h-48 sm:h-90 flex flex-col justify-center : Open Source We are the creators, maintainers, and contributors of some of the most critical infrastructure projects in the JavaScript ecosystem.
- wrapper wrapper--ticks border-t flex: Vite+ Vite Vitest Rolldown Oxc VITE+ The unified toolchain for the web Vite+ is the entry point to web application development that manages your runtime, package manager, and frontend toolchain. Explore Vite+ new VITE Th
- wrapper px-5 md:px-10 h-36 md:h-48 sm:h-80 flex flex-col justify-center gap-5: Trusted by millions of developers around the world
- wrapper wrapper--ticks border-t grid grid-cols-1 md:grid-cols-2 divide-y md:divi: Total downloads 0 Vite Downloads March 2020 Today
- wrapper wrapper--ticks border-t grid grid-cols-1 md:grid-cols-3 divide-y md:divi: 0+ Weekly NPM downloads 0+ GitHub Stars 0+ Contributors
- wrapper wrapper--ticks border-t px-5 md:px-10 py-10 md:py-40 flex flex-col items: Our mission is to make the next generation of JavaScript developers more productive than ever before. Learn more
- wrapper wrapper--ticks border-t items-center bg-[#FBFAF7] grid grid-cols-1 md:gr: Backed by the very best in the dev tools space.
- wrapper wrapper--ticks border-t h-16 sm:h-30: 
- wrapper border-t wrapper--ticks grid grid-cols-1 md:grid-cols-10 divide-x-0 md:d: Featured resources & updates All Resources js resources .filter(i => i.collection === "featured") .filter(i => i.postedBy === "VoidZero") .filter(i => i.articles.length === 8) // UPDATES Tales from the Void: March Launch
- Gallery: // UPDATES Tales from the Void: March Launch Week Recap // ANNOUNCEMENTS Announcing Vite+ Alpha // ECOSYSTEM VoidZero and npmx: Building Better Tools Together // UPDATES What’s New in ViteLand: February 2026 Recap // UPD
- wrapper wrapper--ticks border-t h-16 sm:h-30: 
- wrapper: Interested in the future of Javascript tooling? Subscribe to our monthly newsletter Subscribe PRODUCT Void OSS Vite+ Vite Vitest Rolldown Oxc COMPANY Blog About Branding Terms of Service Privacy Policy Acceptable Use Pol
- wrapper wrapper--ticks border-t py-5 px-5 md:px-24 flex flex-col md:flex-row gap: © 2026 VoidZero Inc. All Rights Reserved.

## Script References
- https://voidzero.dev/assets/app.XcXk5zCS.js
- https://cdn.usefathom.com/script.js
```

## Interaction Notes

```md
# Interaction Notes

This file was generated from the baseline automated capture.
No manual hover, click, or scroll probing was performed beyond loading the page and recording visible interactive elements.

## Follow-Up Probes Recommended
- Hover the primary and secondary CTAs.
- Check whether the header becomes sticky or changes style on scroll.
- Probe tabs, carousels, demos, accordions, or cards with hover states.
- Note any section reveal, parallax, cursor, or 3D behavior.

## Baseline Snapshot Excerpt
- - link "Vite+ icon ANNOUNCING VITE+ ALPHA: OPEN SOURCE. UNIFIED. NEXT-GEN." [ref=e1]
- - button "Close banner" [ref=e2]
- - link "VoidZero" [ref=e3]
- - link "Open Source " [ref=e58]
- - link "Blog" [ref=e59]
- - link "About" [ref=e60]
- - link "Void " [ref=e61]
- - link "GitHub" [ref=e4]
- - link "X" [ref=e5]
- - link "Discord" [ref=e6]
- - link "Bluesky" [ref=e7]
- - heading "The JavaScript Tooling Company" [level=1, ref=e8]
- - heading "Open Source" [level=2, ref=e22]
- - button "Vite+ Vite+" [ref=e70]
- - button "Vite Vite" [ref=e71]
- - button "Vitest Vitest" [ref=e72]
- - button "Rolldown Rolldown" [ref=e73]
- - button "Oxc Oxc" [ref=e74]
- - heading "The unified toolchain for the web" [level=4, ref=e23]
- - link "Explore Vite+" [ref=e24]
```

## Tech Hints

```md
# Tech Hints

- Canvas elements are present; inspect for advanced rendering or chart usage.
- A WebGL context was detected during automated inspection.
```

## Interactive Snapshot: Desktop

```text
- link "Vite+ icon ANNOUNCING VITE+ ALPHA: OPEN SOURCE. UNIFIED. NEXT-GEN." [ref=e1]
- button "Close banner" [ref=e2]
- link "VoidZero" [ref=e3]
- link "Open Source " [ref=e58]
- link "Blog" [ref=e59]
- link "About" [ref=e60]
- link "Void " [ref=e61]
- link "GitHub" [ref=e4]
- link "X" [ref=e5]
- link "Discord" [ref=e6]
- link "Bluesky" [ref=e7]
- heading "The JavaScript Tooling Company" [level=1, ref=e8]
- heading "Open Source" [level=2, ref=e22]
- button "Vite+ Vite+" [ref=e70]
- button "Vite Vite" [ref=e71]
- button "Vitest Vitest" [ref=e72]
- button "Rolldown Rolldown" [ref=e73]
- button "Oxc Oxc" [ref=e74]
- heading "The unified toolchain for the web" [level=4, ref=e23]
- link "Explore Vite+" [ref=e24]
- link [ref=e25]
- heading "The build tool for the web" [level=4, ref=e26]
- link "Explore Vite" [ref=e27]
- link [ref=e28]
- heading "The next-generation test runner" [level=4, ref=e29]
- link "Explore Vitest" [ref=e30]
- link [ref=e31]
- heading "The blazing fast JavaScript bundler" [level=4, ref=e32]
- link "Explore Rolldown" [ref=e33]
- link [ref=e34]
- heading "The fastest JavaScript language toolchain" [level=4, ref=e35]
- link "Explore Oxc" [ref=e36]
- link [ref=e37]
- heading "Trusted by millions of developers around the world" [level=3, ref=e9]
- heading "Total downloads" [level=6, ref=e10]
- heading "0" [level=1, ref=e11]
- button "Select project: Vite" [expanded=false, ref=e38]
- heading "0+" [level=2, ref=e12]
- heading "0+" [level=2, ref=e13]
- heading "0+" [level=2, ref=e14]
- heading "Our mission is to make the next generation of JavaScript developers more productive than ever before." [level=3, ref=e15]
- link "Learn more" [ref=e16]
- heading "Featured resources & updates" [level=3, ref=e17]
- link "All Resources" [ref=e18]
- region "Gallery" [ref=e19] focusable [tabindex]
  - link "Tales from the Void: March Launch Week Recap // UPDATES Tales from the Void: March Launch Week Recap" [ref=e75]
    - heading "Tales from the Void: March Launch Week Recap" [level=4, ref=e83]
  - link "Announcing Vite+ Alpha // ANNOUNCEMENTS Announcing Vite+ Alpha" [ref=e76]
    - heading "Announcing Vite+ Alpha" [level=4, ref=e84]
  - link "VoidZero and npmx: Building Better Tools Together // ECOSYSTEM VoidZero and npmx: Building Better Tools Together" [ref=e77]
    - heading "VoidZero and npmx: Building Better Tools Together" [level=4, ref=e85]
  - link "What’s New in ViteLand: February 2026 Recap // UPDATES What’s New in ViteLand: February 2026 Recap" [ref=e78]
    - heading "What’s New in ViteLand: February 2026 Recap" [level=4, ref=e86]
  - link "What’s New in ViteLand: January 2026 Recap // UPDATES What’s New in ViteLand: January 2026 Recap" [ref=e79]
    - heading "What’s New in ViteLand: January 2026 Recap" [level=4, ref=e87]
  - link "Announcing Rolldown 1.0 RC // ANNOUNCEMENTS Announcing Rolldown 1.0 RC" [ref=e80]
    - heading "Announcing Rolldown 1.0 RC" [level=4, ref=e88]
  - link "What’s New in ViteLand: December 2025 Recap // UPDATES What’s New in ViteLand: December 2025 Recap" [ref=e81]
    - heading "What’s New in ViteLand: December 2025 Recap" [level=4, ref=e89]
  - link "Announcing Oxlint Type-Aware Linting Alpha // ANNOUNCEMENTS Announcing Oxlint Type-Aware Linting Alpha" [ref=e82]
    - heading "Announcing Oxlint Type-Aware Linting Alpha" [level=4, ref=e90]
  - button "Navigate to slide 1" [ref=e62]
  - button "Navigate to slide 2" [ref=e63]
  - button "Navigate to slide 3" [ref=e64]
  - button "Navigate to slide 4" [ref=e65]
  - button "Navigate to slide 5" [ref=e66]
  - button "Navigate to slide 6" [ref=e67]
  - button "Navigate to slide 7" [ref=e68]
  - button "Navigate to slide 8" [ref=e69]
- heading "Interested in the future of Javascript tooling?" [level=2, ref=e20]
- heading "Subscribe to our monthly newsletter" [level=3, ref=e21]
- textbox "Your email address" [required, ref=e39]
- button "Subscribe" [ref=e40]
- link "Void" [ref=e41]
- link "Vite+" [ref=e42]
- link "Vite" [ref=e43]
- link "Vitest" [ref=e44]
- link "Rolldown" [ref=e45]
- link "Oxc" [ref=e46]
- link "Blog" [ref=e47]
- link "About" [ref=e48]
- link "Branding" [ref=e49]
- link "Terms of Service" [ref=e50]
- link "Privacy Policy" [ref=e51]
- link "Acceptable Use Policy" [ref=e52]
- link "GitHub" [ref=e53]
- link "X.com" [ref=e54]
- link "Discord" [ref=e55]
- link "YouTube" [ref=e56]
- link "Bluesky" [ref=e57]
```

## Interactive Snapshot: Mobile

```text
- link "VoidZero" [ref=e1]
- button "Toggle navigation menu" [expanded=false, ref=e2]
- heading "The JavaScript Tooling Company" [level=1, ref=e3]
- heading "Open Source" [level=2, ref=e17]
- heading "The unified toolchain for the web" [level=4, ref=e18]
- link "Explore Vite+" [ref=e19]
- link [ref=e20]
- heading "The build tool for the web" [level=4, ref=e21]
- link "Explore Vite" [ref=e22]
- link [ref=e23]
- heading "The next-generation test runner" [level=4, ref=e24]
- link "Explore Vitest" [ref=e25]
- link [ref=e26]
- heading "The blazing fast JavaScript bundler" [level=4, ref=e27]
- link "Explore Rolldown" [ref=e28]
- link [ref=e29]
- heading "The fastest JavaScript language toolchain" [level=4, ref=e30]
- link "Explore Oxc" [ref=e31]
- link [ref=e32]
- heading "Trusted by millions of developers around the world" [level=3, ref=e4]
- heading "Total downloads" [level=6, ref=e5]
- heading "0" [level=1, ref=e6]
- button "Select project: Vite" [expanded=false, ref=e33]
- heading "0+" [level=2, ref=e7]
- heading "0+" [level=2, ref=e8]
- heading "0+" [level=2, ref=e9]
- heading "Our mission is to make the next generation of JavaScript developers more productive than ever before." [level=3, ref=e10]
- link "Learn more" [ref=e11]
- heading "Featured resources & updates" [level=3, ref=e12]
- link "All Resources" [ref=e13]
- region "Gallery" [ref=e14] focusable [tabindex]
  - link "Tales from the Void: March Launch Week Recap // UPDATES Tales from the Void: March Launch Week Recap" [ref=e61]
    - heading "Tales from the Void: March Launch Week Recap" [level=4, ref=e69]
  - link "Announcing Vite+ Alpha // ANNOUNCEMENTS Announcing Vite+ Alpha" [ref=e62]
    - heading "Announcing Vite+ Alpha" [level=4, ref=e70]
  - link "VoidZero and npmx: Building Better Tools Together // ECOSYSTEM VoidZero and npmx: Building Better Tools Together" [ref=e63]
    - heading "VoidZero and npmx: Building Better Tools Together" [level=4, ref=e71]
  - link "What’s New in ViteLand: February 2026 Recap // UPDATES What’s New in ViteLand: February 2026 Recap" [ref=e64]
    - heading "What’s New in ViteLand: February 2026 Recap" [level=4, ref=e72]
  - link "What’s New in ViteLand: January 2026 Recap // UPDATES What’s New in ViteLand: January 2026 Recap" [ref=e65]
    - heading "What’s New in ViteLand: January 2026 Recap" [level=4, ref=e73]
  - link "Announcing Rolldown 1.0 RC // ANNOUNCEMENTS Announcing Rolldown 1.0 RC" [ref=e66]
    - heading "Announcing Rolldown 1.0 RC" [level=4, ref=e74]
  - link "What’s New in ViteLand: December 2025 Recap // UPDATES What’s New in ViteLand: December 2025 Recap" [ref=e67]
    - heading "What’s New in ViteLand: December 2025 Recap" [level=4, ref=e75]
  - link "Announcing Oxlint Type-Aware Linting Alpha // ANNOUNCEMENTS Announcing Oxlint Type-Aware Linting Alpha" [ref=e68]
    - heading "Announcing Oxlint Type-Aware Linting Alpha" [level=4, ref=e76]
  - button "Navigate to slide 1" [ref=e53]
  - button "Navigate to slide 2" [ref=e54]
  - button "Navigate to slide 3" [ref=e55]
  - button "Navigate to slide 4" [ref=e56]
  - button "Navigate to slide 5" [ref=e57]
  - button "Navigate to slide 6" [ref=e58]
  - button "Navigate to slide 7" [ref=e59]
  - button "Navigate to slide 8" [ref=e60]
- heading "Interested in the future of Javascript tooling?" [level=2, ref=e15]
- heading "Subscribe to our monthly newsletter" [level=3, ref=e16]
- textbox "Your email address" [required, ref=e34]
- button "Subscribe" [ref=e35]
- link "Void" [ref=e36]
- link "Vite+" [ref=e37]
- link "Vite" [ref=e38]
- link "Vitest" [ref=e39]
- link "Rolldown" [ref=e40]
- link "Oxc" [ref=e41]
- link "Blog" [ref=e42]
- link "About" [ref=e43]
- link "Branding" [ref=e44]
- link "Terms of Service" [ref=e45]
- link "Privacy Policy" [ref=e46]
- link "Acceptable Use Policy" [ref=e47]
- link "GitHub" [ref=e48]
- link "X.com" [ref=e49]
- link "Discord" [ref=e50]
- link "YouTube" [ref=e51]
- link "Bluesky" [ref=e52]
```

## Required Deliverables

1. Create a full site report matching `docs/templates/per-site-report-template.md`.
2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.
3. Preserve explicit separation between observed, inferred, and uncertain findings.
4. Include a section called `How to apply this without copying`.

## Finish Condition

When complete, save the markdown report to `data/reports/batch-01/voidzero.md` and the JSON summary to `data/json/batch-01/voidzero.json`.
