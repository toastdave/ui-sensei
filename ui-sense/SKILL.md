# Skill: ui-sense

Build sites with top-tier product and brand quality: editorial typography, precise spacing, product-shaped visuals, restrained but high-signal motion, and premium composition that feels authored instead of templated.

This skill is inspired by close study of Railway-quality execution, but it is not a cloning guide. Use it to reach that quality bar across any product category.

## When to use

Use this skill when the user asks to:

- design or build a premium landing page
- upgrade an existing website to feel world-class
- improve a hero, nav, footer, feature story, or visual system
- make a page feel closer to Railway, Vercel, Linear, or similarly polished product marketing
- create a dark, premium, technical, editorial, or high-trust brand experience

## Core directive

Do not make generic SaaS marketing.

Do not make a direct clone of any reference site.

Do:

- preserve the host project's stack and conventions
- make the smallest correct set of changes that materially improves quality
- build a strong visual system before decorating components
- make the page feel designed, not assembled

## Quality bar

The output should feel:

- dark-first or tonally intentional, never visually flat
- editorial, with real type contrast and hierarchy
- product-native, using visuals that match the category
- precise in borders, radii, spacing, and alignment
- alive through meaningful motion, not empty decoration
- dense with signal and low on fluff

## Required workflow

1. Inspect the existing code, components, routes, and visual patterns before editing.
2. Decide what the user should understand in 5 seconds, 20 seconds, and 60 seconds.
3. Define or tighten tokens first: color, type, spacing, borders, shadows, gradients, motion.
4. Rebuild the highest-leverage moments first: nav, hero, feature story, CTA hierarchy.
5. Replace generic shapes with product-shaped visuals.
6. Tune responsive behavior so mobile keeps the same mood and polish.
7. Verify visually and run the project's normal checks when feasible.

## Visual system rules

### Typography

Use contrast between roles.

- display voice: serif or high-character display treatment for hero moments
- interface voice: clean sans for body, controls, and layout rhythm
- technical voice: mono for commands, metrics, logs, labels, and system fragments

Good default pairing:

- hero: `IBM Plex Serif` or another sharp editorial serif
- UI/body: `Inter Tight`, `Inter`, or equivalent modern sans
- technical accents: `JetBrains Mono` or equivalent mono

Typography rules:

- hero copy should earn attention through cadence and tracking, not size alone
- avoid bland all-sans monotony if the brand can support richer contrast
- keep supporting copy short, confident, and low-friction

### Color

Prefer semantic tokens over hardcoded colors.

For premium dark work, prefer near-black color with hue in it, not pure black.

Strong starting direction:

- background: deep violet-black or blue-black
- elevated surfaces: slightly lifted, still dark
- accents: controlled purple, magenta, blue, cyan, or category-specific signal colors
- lines: subtle 1px low-contrast borders
- shadows: soft spread or ambient glow, never muddy blur piles

Starter token example:

```css
:root {
  --bg: hsl(250 24% 9%);
  --bg-elevated: hsl(250 21% 11%);
  --fg: hsl(0 0% 100%);
  --muted: hsl(246 6% 78%);
  --line: hsl(246 11% 22%);
  --accent-violet: hsl(270 60% 52%);
  --accent-blue: hsl(220 80% 55%);
  --accent-cyan: hsl(180 50% 44%);
  --accent-rose: hsl(330 72% 52%);
  --shadow-spread: 0 0 30px hsla(0, 0%, 30%, 0.25);
  --hero-gradient:
    linear-gradient(327deg, rgba(33, 0, 75, 0.24) 4%, rgba(60, 0, 136, 0) 40%),
    linear-gradient(246deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 37%),
    linear-gradient(148deg, rgba(58, 19, 255, 0) 30%, rgba(98, 19, 255, 0.01) 86%),
    #13111c;
}
```

### Surfaces and edges

- prefer crisp low-contrast borders
- use small to medium radii, usually `6px` to `16px`
- layer surfaces with subtle translucency, inset highlights, and tonal separation
- avoid fluffy card stacks and giant soft pills

### Spacing and composition

- use a centered max-width container
- keep nav compact and slightly inset when appropriate
- give the hero extra vertical breathing room
- alternate section density so the page does not become a repeated grid
- every section should feel like a distinct moment inside one coherent system

## Composition blueprint

This sequence is a strong default for premium product marketing pages:

1. Sticky compact navigation
2. Hero with strong statement, two-tier CTA system, and product visual
3. Interactive feature rail or tabbed story section
4. Trust or social proof moment
5. Scale, metrics, or proof section
6. Secondary launch, content, or ecosystem cards
7. Final CTA transition or dense footer handoff
8. Information-rich footer

## Hero rules

The hero must contain at least one premium detail beyond standard layout:

- split-type emphasis
- highlighted phrase or keyword
- animated product artifact
- layered lighting field
- serif/sans contrast with tight tracking control
- a live-feeling system panel, trace, terminal, chart, or graph

Hero structure:

- left or primary side: headline, short support copy, CTA pair
- opposite side: product-native visual artifact
- backdrop: lighting, depth, grid, noise, or panel system with restraint

CTA rules:

- primary and secondary actions must look meaningfully different
- labels should be concrete and product-relevant
- avoid ad-like button copy

## Feature storytelling rules

Do not default to a dead 3-column features grid.

Prefer:

- tabs
- segmented rails
- staged panels
- timeline-like progressions
- comparison bands
- interactive or stateful content blocks

Each feature state should contain:

- one short claim
- one proof visual or product artifact
- one support sentence
- one follow-up action or link

The active state should feel obviously alive.

## Product visual rules

Build visuals from category-native ingredients:

- dashboards
- code frames
- terminals
- logs
- charts
- node graphs
- status chips
- workflow traces
- ledgers
- inventory panels
- model routing diagrams
- record views

Avoid:

- fake browser windows with lorem ipsum
- random floating blobs doing all the visual work
- illustration filler that says nothing about the product

## Motion rules

Motion should clarify structure and imply system activity.

Prefer:

- reveal-on-scroll
- hover lighting
- tab transitions
- subtle parallax
- background drift
- pulses, ticks, counters, or graph movement tied to product meaning

Avoid:

- decorative motion that explains nothing
- overly bouncy timing
- constant movement everywhere

Use calm, sharp timing.

## Responsive rules

Mobile should preserve the same mood and taste.

- do not collapse into a generic stack of cards
- keep type contrast strong on small screens
- make mobile nav feel intentional and premium
- compress or restack feature rails without losing hierarchy
- ensure the strongest visual moment is still visible above the fold or immediately after

## Footer and trust rules

- footers should feel like an information hub
- include product, docs, company, and trust groupings when appropriate
- trust signals should feel native to the brand: uptime, compliance, metrics, customers, docs, changelog, ecosystem, status

## Adaptation rules by category

Keep the same quality bar, but swap the visual language to fit the product.

Examples:

- fintech: ledgers, transactions, risk surfaces, balances, approval flows
- health: care timeline, monitoring traces, records surfaces, clinical status views
- e-commerce: inventory flows, merchandising panels, logistics and fulfillment signals
- AI: prompt chains, evals, traces, agent routing, model switching, confidence signals
- infra/devtools: deploy logs, graphs, network maps, terminal output, status rails

## Anti-patterns

Do not ship:

- generic SaaS cards repeated in a 3xN grid
- gradient blobs with no structure
- oversized radius on everything
- too many competing accent colors
- long paragraphs doing the job of visuals
- bright white sections that rupture the page mood without a strong reason
- decorative motion without product meaning
- empty polish layered over weak hierarchy

## Definition of done

The page is ready only if these are true:

- the hero feels premium without relying on hype copy alone
- there is at least one strong product-shaped visual
- typography pairing feels intentional
- borders, spacing, and surfaces feel precise
- CTAs are visually distinct and clearly prioritized
- the responsive version keeps the same mood
- motion supports comprehension
- the result would not be mistaken for a starter template

## Operating mode

When using this skill for implementation:

- inspect the codebase first
- make code changes directly
- prefer the smallest change set that materially improves quality
- keep comments sparse and only where needed
- explain the key design choices briefly when done
- mention what you verified

## Research note

Railway-specific screenshots and teardown notes live separately in `../railway/` so this skill stays self-contained and reusable.
