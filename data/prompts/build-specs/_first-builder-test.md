# First Builder Test

## Goal

Run the first real builder pass from the new research system using one archetype and one build spec.

## Recommended First Test

- Archetype: `data/archetypes/developer-tool-modern.json`
- Build spec: `data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json`

## Inputs

- `prompts/builder-agent-prompt.md`
- `data/archetypes/developer-tool-modern.json`
- `data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json`
- Supporting patterns:
  - `data/patterns/hero-product-proof-shell.json`
  - `data/patterns/developer-ui-canvas-demo.json`
  - `data/patterns/portfolio-selector-detail-pane.json`
  - `data/patterns/trust-metrics-strip.json`
  - `data/patterns/structured-utility-footer.json`

## Expected Builder Output

Create and save:

- `data/evaluations/first-builder-test-plan.md`
- `data/evaluations/first-builder-test-build-notes.md`

The build notes should include:

- page outline
- token suggestions
- section-to-pattern mapping
- motion decisions
- accessibility notes
- implementation approach for a first coded version

## Review Step

After the builder output exists, run the critique pass using:

- `prompts/critique-agent-prompt.md`
- `docs/rubrics/build-review-rubric.md`

Save the critique to:

- `data/evaluations/first-builder-test-review.md`

## Success Condition

The first build test should prove that:

1. An archetype plus build spec is enough to guide a coherent original homepage.
2. The critique can point back to concrete rule strengths and misses.
3. The rule library can improve from the review instead of relying on taste alone.
