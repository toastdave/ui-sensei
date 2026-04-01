# Cross-Site Synthesis

## Batch Overview

- Batch: `batch-01`
- Sites analyzed: Railway, Notion Product, PostHog, VoidZero, Airbnb
- Common categories represented: Developer tools, product systems, productivity software, and marketplace utility
- Confidence level of synthesis: Medium-high overall; strongest for layout, copy, component patterns, and visual systems, lower for exact animation stacks and accessibility details that were not manually probed

## Shared Patterns

- Product-first proof beats abstract marketing. Every strong site shows the product surface, workflow, or marketplace UI very early.
- CTA hierarchy is disciplined. Each site has one obvious primary action and a small set of secondary paths.
- Distinctive chrome matters. The strongest pages use a recognizable shell: Railway's dark canvas, Notion's bright modular cards, PostHog's faux desktop, VoidZero's sparse-to-dark contrast, Airbnb's rounded search shell.
- Section pacing is intentional. High-density areas are balanced with visual reset zones, not piled together uniformly.
- Copy stays concrete. Even the most branded examples still explain what the user can do next.
- Interaction is usually functional, not ornamental. Tabs, selectors, calculators, search controls, and gallery navigation do more work than decorative animation.

## Archetype Clusters

- `developer-tool-modern`: Railway, PostHog, and VoidZero all market technical products with strong product evidence, low-jargon competence, and a bias toward UI truth over lifestyle imagery.
- `product-system-ui`: Notion Product and Airbnb both rely on mature reusable interface primitives, modular cards, and stable shells that can support many content variants.
- `minimal-saas-clarity`: Notion Product and VoidZero show that high clarity can still feel premium when spacing, hierarchy, and contrast are deliberate.
- `brand-storytelling`: PostHog and Railway both use strong atmosphere or voice, but one leans humorous and interface-weird while the other leans cinematic and calm.
- `marketplace-utility`: Airbnb is the clearest representative; its homepage behaves like a search and browse product first, a marketing page second.

## Design Standards

- `layout`
  - Lead with a dominant task or value frame, then support it with modular proof sections.
  - Use one recognizable page shell or section grammar so the homepage feels designed, not assembled.
  - Alternate density with reset spaces to preserve pacing.
- `typography`
  - Keep headline systems short and decisive.
  - Let one typographic move carry personality; keep the rest of the system disciplined.
  - Constrain line length aggressively in hero and explanation copy.
- `copy`
  - Use plain-language benefits before technical details.
  - Keep CTA labels literal and action-led.
  - Let proof copy cite concrete outcomes, workflows, or numbers.
- `CTA strategy`
  - Expose one dominant conversion path per page state.
  - Keep secondary actions nearby but clearly subordinate.
  - Match CTA wording to the true next step: deploy, explore, get free, search, subscribe.
- `component design`
  - Invest in one or two signature composite components such as a search shell, product canvas, faux desktop, or bento module grid.
  - Reuse shells and primitives across sections so novelty stays coherent.
  - Prefer high-signal components over decorative cards.
- `motion`
  - Use motion to reveal state, compare options, or switch product views.
  - Favor tabs, selectors, calculators, and galleries over gratuitous parallax.
  - Keep motion intensity proportional to the product story.
- `rendering and 3D`
  - Treat advanced rendering as a small supporting accent, not a default requirement.
  - Only use canvas/WebGL when it adds meaning or atmosphere without stealing clarity.
- `responsiveness`
  - Mobile should reprioritize, not only stack.
  - Preserve the primary task and top proof moment even when reducing chrome.
  - Remove nonessential interface theater first when space gets tight.
- `accessibility cautions`
  - Dense faux-OS or product-canvas shells need careful focus order and semantics.
  - Dark product panels require extra attention to borders, muted metadata, and status color contrast.
  - Motion-heavy selectors, galleries, and videos need reduced-motion-safe behavior.
- `performance cautions`
  - Product screenshots, videos, and large hero artwork are usually the dominant payloads.
  - Do not add advanced rendering just to signal sophistication.
  - Make interactive homepages feel responsive before adding more visual chrome.

## Implementation Playbook

- Pick the homepage archetype first: technical proof shell, modular product system, or task-first marketplace surface.
- Define one signature shell component that expresses the brand immediately.
- Show the real product, workflow, or inventory within the first viewport or just below it.
- Build the rest of the page from a small set of reusable primitives: tabs, selectors, cards, proof blocks, CTA rows, and utility footers.
- Keep copy short and concrete, then route deeper detail into secondary actions.
- Treat mobile as a narrative redesign pass, not a collapse pass.

## Anti-Patterns

- Copying a brand palette without the underlying concept.
- Adding dense chrome or fake desktop metaphors without strong interaction semantics.
- Using bento grids when content hierarchy does not justify the visual complexity.
- Relying on large screenshots that are unreadable on smaller screens.
- Shipping decorative canvas/WebGL effects without a clear narrative role.
- Using playful illustration, jokes, or promos that are disconnected from the product story.

## Candidate Archetype Updates

- Create `data/archetypes/developer-tool-modern.json` around Railway, PostHog, and VoidZero.
- Create `data/archetypes/product-ui-system.json` around Notion Product and Airbnb.
- Add a lighter sub-variant or notes for `marketplace-system` using Airbnb's task-first shell.
- Add a contrast note inside `expressive-brand` so strong personality can come from voice and shell behavior, not just color or art direction.

## Recommended New Patterns

- `hero-product-proof-shell`
- `segmented-search-bar`
- `bento-product-story-grid`
- `developer-ui-canvas-demo`
- `faux-desktop-marketing-shell`
- `portfolio-selector-detail-pane`
- `savings-calculator-module`
- `trust-metrics-strip`
- `gallery-with-explicit-slide-controls`
- `structured-utility-footer`

## Final Design Rules

This batch produced `frontend_design_rules_v1.md`, focused on the shared standards above and intended as the first cross-site baseline for downstream builders.
