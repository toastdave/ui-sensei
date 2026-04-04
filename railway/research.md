# Railway Research

This directory holds the raw Railway teardown that informed `ui-sense/SKILL.md`.

## What was captured

- desktop homepage screenshot
- full-page desktop screenshot
- mobile homepage screenshot
- full-page mobile screenshot
- mobile navigation screenshot
- mobile product navigation screenshot
- desktop product menu screenshot
- implementation notes from source inspection and browser inspection

## Framework and implementation clues

- React bundle present: `react-*.js`, `react-dom-*.js`
- Vite-style asset graph: `modulepreload` and `__vite-browser-external-*.js`
- Router/SSR clues: `lazyRouteComponent`, `$_TSR.router`
- GraphQL/data layer clues: `useGraphqlClient-*.js`, `graphql-*.js`
- UI component clues: `BrandNavbar`, `Footer`, `MarketingNavMenu`, `SquareGradientButtonLink`
- Motion clues: `animate-*.js`, `use-transform-*.js`, `use-motion-value-*.js`, `animations-*.css`
- Visual-system clues: `DotGrid`, `AnimationSheet`, `canvas-*.css`, `flip-board-*.css`, `split-board-*.css`

## Font stack

- `Inter Tight` for UI/body emphasis
- `Inter` appears in the broader app shell
- `IBM Plex Serif` for headline/editorial moments
- `JetBrains Mono` for technical fragments and meta surfaces

## Theme and token strategy

Observed semantic tokens:

- `--foreground`
- `--background`
- `--secondaryBg`
- stepped palettes for `blue`, `cyan`, `gray`, `red`, `pink`, `green`, `yellow`
- `--spreadShadow`
- `--heroGradient`
- `--partnerProjectsGradient`
- `--submitPartnerProjectGradient`
- `--kickbackHeroGradient`

Observed theme classes:

- `.light`
- `.dark`
- `.vaporwave`

Practical takeaway: quality comes from a strong token system first, then bespoke component styling on top.

## Computed style notes

- page root class: `dark`
- body background: `rgb(19, 17, 28)`
- body text: `rgb(255, 255, 255)`
- hero heading font family: `IBM Plex Serif`
- hero heading size: `54px`
- hero line height: `60.48px`
- hero weight: `500`
- hero letter spacing: `-1.96px`

## Page anatomy

1. Sticky utility-forward navigation
2. Hero with controlled lighting and two CTAs
3. Interactive feature rail with five states
4. Social proof / trust moment
5. Scale metric statement
6. Launch/news cards
7. Dense footer with product, docs, company, and trust links

## Interaction patterns

### Navigation

- Desktop nav is compact and high-signal.
- Mobile nav opens into a controlled drawer-like menu with expandable groups.
- Mobile product nav exposes a simple structured list instead of a chaotic accordion.

### CTAs

- Primary and secondary CTAs are clearly separated.
- CTA shapes are restrained; they do not depend on loud pill styling.
- The interaction language feels product-oriented rather than ad-like.

### Feature rail

- Uses a tablist with states like `Deploy`, `Network`, `Scale`, `Monitor`, `Evolve`.
- Creates a narrative instead of a static card grid.
- Each state reads like a product capability with a clear visual anchor.

## Reusable design heuristics

### Do

- Use a dark violet base rather than neutral black.
- Combine serif display type with modern sans and mono accents.
- Keep borders subtle and surfaces layered.
- Let one visual system carry the page: grids, terminal panels, dashboards, flow lines, or metrics.
- Make every section feel authored.
- Use motion to imply system activity.

### Do not

- Build a generic dark page with random purple gradients.
- Repeat identical cards with icon + heading + paragraph.
- Use giant fuzzy shadows everywhere.
- Overfill the page with copy.
- Depend on abstract blobs instead of product-shaped visuals.

## Artifacts

- `artifacts/railway-home-desktop.png`
- `artifacts/railway-home-full.png`
- `artifacts/railway-home-mobile.png`
- `artifacts/railway-home-mobile-full.png`
- `artifacts/railway-mobile-nav.png`
- `artifacts/railway-mobile-nav-product.png`
- `artifacts/railway-product-menu.png`
