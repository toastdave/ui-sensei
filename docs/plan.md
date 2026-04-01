# UI Sensei Setup Plan

## Mission

Build a repository that helps AI agents study top-tier websites and convert the findings into reusable frontend standards, archetypes, build specs, and critique rules.

The end state is a system where future agents can build original, high-quality UI by loading the right research-derived guidance instead of guessing or copying.

## Principles

- Study, do not clone.
- Prefer rendered truth over source assumptions.
- Separate direct observation from inference.
- Translate observations into reusable rules.
- Store results in machine-readable formats.
- Treat research as input to future building, not as an archive.

## Core Outputs

Every research batch should eventually produce:

1. Raw captures
2. Per-site reports
3. Per-site normalized JSON summaries
4. Atomic pattern records
5. Anti-pattern records
6. Cross-site synthesis
7. Archetype playbooks
8. Build specs for downstream builder agents
9. Evaluation notes from generated UI reviews

## Repository Layout

```text
data/
  captures/
  reports/
  json/
  patterns/
  syntheses/
  archetypes/
  prompts/
  evaluations/
docs/
  architecture.md
  plan.md
  prds/
  rubrics/
  templates/
prompts/
schemas/
skills/
```

## Agent Roles

### 1. Capture Agent

Collects:

- full-page screenshots
- above-the-fold screenshots
- mobile screenshots when possible
- visible text
- DOM notes
- interaction notes
- technology hints

Writes to:

- `data/captures/<batch>/<site>/`

### 2. Analysis Agent

Uses the research skill to create:

- `data/reports/<batch>/<site>.md`
- `data/json/<batch>/<site>.json`

### 3. Pattern Agent

Extracts reusable rules into atomic records:

- `data/patterns/<batch>/<pattern>.json`

### 4. Archetype Agent

Clusters patterns into style families such as:

- `saas-clarity`
- `developer-tool-modern`
- `expressive-brand`
- `marketplace-system`
- `product-ui-system`

Writes:

- `data/archetypes/<archetype>.json`

### 5. Builder Agent

Consumes archetype files and build specs to generate original UI.

### 6. Critique Agent

Reviews generated UI for:

- fidelity to the selected archetype
- originality
- clarity and hierarchy
- accessibility
- performance discipline

Writes:

- `data/evaluations/<project>.md`

## Milestone Plan

### Milestone 1 - Repository foundation

Deliver:

- plan
- architecture docs
- skill spec
- prompt set
- schemas
- PRDs
- templates
- storage layout

### Milestone 2 - First capture batch

Target sites:

- Railway
- Notion Product
- PostHog
- VoidZero
- Airbnb

Deliver:

- one capture package per site
- one report per site
- one JSON summary per site

Status:

- Complete for `batch-01`

### Milestone 3 - Synthesis and rule extraction

Deliver:

- `synthesis_batch_01.md`
- `frontend_design_rules_v1.md`
- initial pattern library
- anti-pattern library
- initial archetype files

Status:

- In progress: `data/syntheses/batch-01.md` and `frontend_design_rules_v1.md` are complete
- Remaining: initial pattern library, anti-pattern library, and first archetype files

### Milestone 4 - Builder integration

Deliver:

- builder consumption format
- build spec format
- first generated homepage using archetype guidance

### Milestone 5 - Evaluation loop

Deliver:

- critique rubric in active use
- build evaluation examples
- refinement rules based on observed build failures

## Naming Conventions

- site slug: lowercase with hyphens, for example `notion-product`
- batch slug: `batch-01`, `batch-02`
- report file: `data/reports/batch-01/notion-product.md`
- JSON file: `data/json/batch-01/notion-product.json`
- synthesis file: `data/syntheses/batch-01.md`
- pattern file: `data/patterns/hero-narrow-copy-column.json`
- archetype file: `data/archetypes/saas-clarity.json`

## Research Standard

Each site report must include:

- site profile
- section map
- design findings
- reusable rules
- implementation notes
- risks and caveats
- rating table
- structured JSON summary
- explicit distinction between observed, inferred, and uncertain findings
- a section called `How to apply this without copying`

## Pattern Standard

Every extracted pattern must include:

- category
- description
- evidence sites
- transferability
- implementation cost
- accessibility risk
- performance risk
- when to use it
- when to avoid it
- implementation notes

## Builder Consumption Standard

Builder agents should read small, distilled artifacts rather than long research reports.

The minimum downstream input should include:

- target archetype
- product context
- approved patterns
- forbidden anti-patterns
- layout rules
- typography rules
- component rules
- motion rules
- accessibility rules
- performance limits

## Open Questions

- Which browser automation stack will serve as the capture default?
- How much motion evidence is enough before claiming a specific library?
- Should pattern extraction be manual-first or agent-first for batch one?
- What evaluation threshold counts as good enough for builder output?

## Recommended Next Agent Tasks

1. Extract the first 20 to 40 atomic patterns from completed batch-01 outputs.
2. Create `data/archetypes/developer-tool-modern.json` and `data/archetypes/product-ui-system.json`.
3. Build the first downstream build spec from one of those archetypes.
4. Generate and review one original homepage using the new build spec.
