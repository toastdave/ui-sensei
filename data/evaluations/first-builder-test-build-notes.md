# First Builder Test Build Notes

## Project

- Project: `Pulse Forge AI Release Copilot Homepage`
- Archetype: `developer-tool-modern`
- Build spec: `data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json`

## Build Intent

Create a homepage that feels trustworthy to engineering teams by showing release truth immediately: pull-request summaries, deploy risk checks, rollout coordination, and post-release visibility. The page should feel calm and technical, not flashy, and should avoid directly borrowing Railway's purple atmosphere or PostHog's humorous faux-desktop voice.

## Visual Direction

- Mood: calm, high-signal, release-night confidence
- Palette:
  - `bg-0`: `#0B1020`
  - `bg-1`: `#11182B`
  - `surface-0`: `#151E33`
  - `surface-1`: `#1B2640`
  - `line`: `#2A3555`
  - `text-0`: `#F5F7FB`
  - `text-1`: `#B8C3D9`
  - `accent-primary`: `#2DD4BF`
  - `accent-secondary`: `#F59E0B`
  - `danger`: `#FB7185`
  - `success`: `#34D399`
- Typography:
  - Headline: `Space Grotesk`
  - Body/UI: `IBM Plex Sans`
  - Code/meta: `IBM Plex Mono`
- Radius system:
  - cards: `20px`
  - pills/buttons: `999px`
  - dense inner widgets: `14px`
- Shadow style:
  - subtle dark lift only on hero shell and CTA band
  - avoid soft generic glow stacks

## Core Message

- Headline: `Ship every release with context, not guesswork.`
- Supporting copy: `Pulse Forge turns pull requests, risk signals, and rollout checklists into one release workspace so engineering teams can ship faster without losing confidence.`
- Primary CTA: `Start free`
- Secondary CTA: `See a release demo`

## Page Outline

### 1. Header

- Left: wordmark and short product label
- Center/right desktop nav: `Product`, `Integrations`, `Security`, `Pricing`, `Docs`
- Actions: ghost `Book a walkthrough`, primary `Start free`
- Mobile: compact logo, one CTA button, menu trigger

### 2. Hero Product-Proof Shell

- Left column:
  - eyebrow: `AI release copilot`
  - headline and supporting copy
  - CTA row
  - mini trust note: `Works with GitHub, GitLab, Linear, Slack, and Datadog`
- Right column:
  - release dashboard shell showing:
    - release title and branch name
    - AI-generated summary panel
    - risk checklist with 2 warnings and 3 passes
    - rollout owner avatars
    - deploy window status chip
- Small utility strip below shell:
  - `PRs summarized`
  - `Risk checks passed`
  - `Rollback steps attached`

### 3. Trust Metrics Strip

- Four compact metrics in one band:
  - `12 min average release prep time saved`
  - `3 review systems unified`
  - `1 shared source of release truth`
  - `24/7 audit trail access`
- Notes:
  - Use placeholder-safe copy for the first build
  - Replace with real metrics before any production usage

### 4. Selector-Driven Feature Pane

- Section heading: `One release workspace, four critical jobs`
- Selector tabs:
  - `Summaries`
  - `Risk checks`
  - `Rollout plans`
  - `Release notes`
- Active pane content changes without route change
- Each pane includes:
  - one short description
  - one key screenshot/widget
  - one proof bullet list
  - one CTA like `Explore release summaries`

### 5. Workflow Band

- Three-step explanation with release-native objects:
  - `Collect signal`
  - `Approve with context`
  - `Ship with a rollback plan`
- Each step gets a compact panel with one technical object:
  - PR digest
  - risk diff
  - rollout checklist

### 6. Integration and Security Section

- Left: grid of integration pills/logos
- Right: security and compliance bullets
- Purpose: reassure technical buyers without diverting from the product story

### 7. CTA Band

- Dark but slightly brighter than the page background
- Headline: `Give every release a clear owner, checklist, and summary.`
- Primary CTA: `Start free`
- Secondary CTA: `Talk to an engineer`

### 8. Structured Utility Footer

- Columns:
  - Product
  - Integrations
  - Company
  - Resources
  - Legal and trust
- Bottom row:
  - status link
  - privacy
  - terms
  - theme toggle optional

## Section-to-Pattern Mapping

- `hero-product-proof-shell`
  - Used in hero with the release dashboard shell and immediate product truth
- `developer-ui-canvas-demo`
  - Used in the main release dashboard and compact workflow panels
- `portfolio-selector-detail-pane`
  - Used in the four-tab feature section
- `trust-metrics-strip`
  - Used directly below the hero to reinforce confidence quickly
- `structured-utility-footer`
  - Used in the footer with grouped utility and trust navigation

## Component Notes

- Header
  - tight vertical height
  - solid background after scroll only if needed
- Buttons
  - primary: teal filled pill with dark text
  - secondary: transparent or low-contrast dark outline with visible focus ring
- Dashboard shell
  - composed from nested cards, not one flat screenshot
  - must keep key labels readable at desktop and simplified on mobile
- Tabs
  - underline plus surface tint for active state
  - arrow-key navigation supported
- Metrics strip
  - do not animate numbers aggressively
- Footer
  - collapse to accordions on mobile if necessary

## Motion Notes

- Hero shell
  - subtle staggered fade-up on load
  - no looping decorative animation
- Tabs
  - quick 180-220ms fade/slide crossfade between panes
- Metrics strip
  - no count-up animation by default; use instant render or extremely restrained increment
- CTA buttons
  - hover: 2px lift and border/brightness shift
- Reduced motion
  - disable stagger and pane slide distance; keep only simple opacity changes

## Accessibility Notes

- Keep the hero shell semantic by mirroring key proof content in readable HTML, not only inside decorative screenshots.
- Ensure dark surfaces meet contrast on labels, chips, and divider lines.
- Use real tab semantics in the selector-driven section.
- Preserve visible focus on ghost buttons and pill controls.
- Do not use color alone for pass/warn states; pair with icon and text.

## Implementation Approach

- Recommended stack: Next.js + React + Tailwind CSS
- Suggested component tree:
  - `Page`
  - `SiteHeader`
  - `HeroReleaseShell`
  - `MetricsStrip`
  - `FeatureSelectorSection`
  - `WorkflowBand`
  - `IntegrationsSecuritySection`
  - `CtaBand`
  - `SiteFooter`
- Data model suggestions:
  - `featureTabs[]`
  - `metricItems[]`
  - `workflowSteps[]`
  - `footerGroups[]`
- Implementation strategy:
  - build all sections with static data first
  - add tab state second
  - add subtle motion last
  - test mobile before polishing desktop detail density

## Strengths Of This Build Direction

- Strong archetype fit without copying any single source site
- Clear first-screen proof and believable technical framing
- Lightweight enough for a first coded pass
- Uses the pattern library directly instead of freehand design decisions

## Known Risks

- The hero can become too dense if all release widgets stay visible at once.
- Placeholder metrics can feel fake if not worded carefully.
- Dark surfaces need deliberate contrast checks before implementation.
- The workflow band could become repetitive if each panel is visually identical.
