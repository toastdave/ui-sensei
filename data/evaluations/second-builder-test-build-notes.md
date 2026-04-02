# Second Builder Test Build Notes

## Project

- Project: `Northstar Team Workspace Homepage`
- Archetype: `product-ui-system`
- Build spec: `data/prompts/build-specs/product-ui-system-team-workspace.json`

## Build Intent

Create a modular workspace homepage that feels organized, collaborative, and dependable without leaning on decorative mood alone. The page should show how docs, roadmaps, rituals, and task handoffs live in one system, while keeping the interaction model simple enough to build in a standard React stack.

## Visual Direction

- Mood: bright, composed, operationally calm
- Palette:
  - `canvas`: `#F6F2EA`
  - `surface`: `#FFFDF8`
  - `surface-muted`: `#EFE8DB`
  - `line`: `#D8D0C2`
  - `text-0`: `#1D212B`
  - `text-1`: `#4D5566`
  - `accent-primary`: `#1463FF`
  - `accent-secondary`: `#FFB84D`
  - `accent-soft`: `#DDE9FF`
- Typography:
  - Headline: `Sora`
  - Body/UI: `Manrope`
  - Meta: `IBM Plex Mono`
- Shape language:
  - large rounded modules with restrained borders
  - flat, bright surfaces with one or two tinted blocks for emphasis

## Core Message

- Headline: `Plan work, decisions, and rituals in one shared workspace.`
- Supporting copy: `Northstar helps product, design, and operations teams keep roadmaps, meeting notes, launch tasks, and weekly reviews in sync without managing four separate tools.`
- Primary CTA: `Try Northstar free`
- Secondary CTA: `Explore workflows`

## Page Outline

### 1. Header

- Simple product nav: `Workflows`, `Templates`, `Pricing`, `Customers`, `Resources`
- Primary action: `Try Northstar free`
- Secondary action: `Request a demo`

### 2. Hero Product-Proof Shell

- Left:
  - eyebrow: `Team workspace`
  - headline and support copy
  - CTA row
  - mini proof: `Docs, roadmaps, tasks, and review rituals in one system`
- Right:
  - bright workspace shell showing:
    - roadmap timeline card
    - weekly review agenda card
    - task handoff list
    - decision log summary

### 3. Bento Workflow Grid

- Four modular cards:
  - `Roadmaps`
  - `Specs and docs`
  - `Team rituals`
  - `Launch checklists`
- Each card has a short headline, one proof line, and a single CTA

### 4. Selector-Driven Workflow Pane

- Section heading: `Switch between the workflows teams return to every week`
- Selector options:
  - `Planning`
  - `Reviews`
  - `Launches`
  - `Ops handoff`
- Each pane includes one compact screenshot and one workflow explanation

### 5. Savings Calculator Module

- Inputs:
  - team size range
  - checkbox list for replaced tools
- Output:
  - simplified monthly tool consolidation view
  - one narrative proof line about fewer context switches

### 6. Trust Section

- Customer proof strip with three compact logos or company names
- One quote card about clearer weekly alignment
- One metric row focused on fewer meetings, faster handoffs, or shorter launch prep

### 7. Resource Gallery

- Small carousel or scrollable set of workflow templates
- Explicit next and previous controls
- Each item is a reusable template or team playbook

### 8. CTA Band

- Headline: `Replace scattered planning rituals with one system your team can actually maintain.`
- Primary CTA: `Try Northstar free`
- Secondary CTA: `See templates`

### 9. Structured Utility Footer

- Product, templates, company, trust, and legal groups

## Section-to-Pattern Mapping

- `hero-product-proof-shell`
  - Used in the hero with one modular workspace view
- `bento-product-story-grid`
  - Used in the four-card workflow grid
- `portfolio-selector-detail-pane`
  - Used in the workflow switching section
- `savings-calculator-module`
  - Used in the consolidation-value section
- `gallery-with-explicit-slide-controls`
  - Used in the template gallery
- `structured-utility-footer`
  - Used in the footer

## Component Notes

- Hero shell should feel lighter and more modular than the developer-tool prototype.
- Bento cards should vary span and content density slightly so the section feels designed, not templated.
- Calculator should avoid fake precision; ranges and rounded savings language are safer than exact claims.
- Template gallery should stay secondary and never become the main proof device.

## Motion Notes

- Use light fade and translate motion for module entry.
- Selector panes can crossfade quickly with a short horizontal shift.
- Calculator updates should feel immediate with no showy number animation.
- Gallery controls should have clear pressed and focus states.

## Accessibility Notes

- Keep bright-surface contrast high enough on muted cards and metadata.
- Treat the selector pane as a true tablist.
- Use visible labels and helper text in the calculator.
- Ensure gallery controls are keyboard-safe and not gesture-only.

## Implementation Approach

- Recommended stack: Next.js + React + Tailwind CSS
- Suggested components:
  - `WorkspaceHero`
  - `WorkflowBentoGrid`
  - `WorkflowSelector`
  - `SavingsCalculator`
  - `TemplateGallery`
  - `TrustStrip`
  - `SiteFooter`
- Build order:
  - hero
  - bento grid
  - selector pane
  - calculator
  - trust and gallery
  - footer

## Strengths Of This Build Direction

- Strong contrast with the developer-tool-modern build test
- Makes the archetype difference visible through lighter surfaces and modular cards
- Keeps the system practical and original

## Known Risks

- The page could become card-heavy if every section uses the same module shell.
- The calculator can weaken trust if the assumptions feel too convenient.
- Gallery and bento sections may overlap in purpose if they are not visually distinct.
