# Frontend Design Rules

## Layout

- Start with one dominant task or value proposition and make the first screen revolve around it.
- Use a recognizable page shell or section grammar so the homepage feels intentional, not generic.
- Alternate dense proof sections with calmer reset sections to control pacing.
- Let mobile reprioritize content when the desktop sequence becomes too broad or dense.

## Typography

- Use short decisive headlines and keep supporting copy tightly constrained.
- Let one typographic move carry personality; keep the rest of the system disciplined.
- Control line length aggressively in heroes, product explanations, and proof blocks.

## CTA Strategy

- Expose one obvious primary CTA per page state and subordinate everything else.
- Write CTA labels as literal next steps such as `Get started`, `Explore`, `Deploy`, `Request a demo`, or `Search`.
- Keep secondary actions close to the primary one when they support the same decision.

## Components

- Invest in one or two signature composite components such as a product canvas, segmented search bar, bento story grid, or selector-driven module.
- Reuse shells and primitives across sections so novelty stays coherent.
- Prefer high-signal components that explain product behavior over decorative filler cards.

## Motion

- Use motion to reveal state, compare options, switch views, or confirm interaction.
- Favor tabs, selectors, calculators, search expansion, and gallery controls over ornamental effects.
- Keep motion intensity proportional to the product story and offer reduced-motion-safe behavior.

## Rendering and Performance

- Treat advanced rendering, canvas, or WebGL as optional accents rather than default requirements.
- Optimize the biggest payloads first: screenshots, video, artwork, and complex interactive shells.
- Remove nonessential chrome before sacrificing responsiveness on mobile.

## Accessibility

- Preserve strong contrast in dark product panels, muted metadata, and status colors.
- Ensure complex shells such as faux desktops, dashboards, selectors, and galleries have clear focus order and semantics.
- Do not rely on motion, color, or hover alone to explain state.
