# Build From Spec Runbook

## Goal

Turn a completed archetype plus build spec into a concrete homepage build and review cycle.

## Workflow

### 1. Pick a build spec

Starter build specs now exist in:

- `data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json`
- `data/prompts/build-specs/product-ui-system-team-workspace.json`

### 2. Validate the spec

Run:

```bash
bun run build:validate --file data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json
```

### 3. Open the builder packet

Use:

- `data/prompts/build-specs/_first-builder-test.md`
- `prompts/builder-agent-prompt.md`

The packet tells the next agent:

- which archetype file to load
- which build spec to use
- which patterns to preserve
- where to save the generated output

### 4. Generate the first build

Expected builder outputs for the first pass:

- one implementation plan markdown file
- one page outline
- one component mapping
- one token and motion proposal
- optionally one code artifact if the target repo/framework exists

For the current first test, the coded prototype now exists in:

- `apps/showcase/src/lib/pages/PulseForgePage.svelte`
- `apps/showcase/src/lib/pages/NorthstarPage.svelte`
- `apps/showcase/src/lib/tests/registry.ts`

Preview it with:

```bash
bun run showcase:dev
```

This serves the showcase app on `http://localhost:43731` by default.

Open:

- `http://localhost:43731/`
- `http://localhost:43731/tests/pulse-forge-release-copilot`
- `http://localhost:43731/tests/northstar-team-workspace`

To start the preview and expose it on your tailnet in one step, run:

```bash
bun run showcase:tailscale
```

For a public Funnel URL instead, run:

```bash
bun run showcase:funnel
```

### 5. Review the result

Use:

- `prompts/critique-agent-prompt.md`
- `docs/rubrics/build-review-rubric.md`

Save the critique to `data/evaluations/`.

Current review artifacts include:

- `data/evaluations/first-builder-test-review.md`
- `data/evaluations/first-builder-test-implementation-review.md`
- `data/evaluations/second-builder-test-review.md`

## Notes

- The current repo is a research system, but `apps/showcase/` is now the canonical implementation surface for builder tests.
- The runbook now supports both spec-only review and implementation-backed review through the same Svelte showcase app.
- If the target implementation repo is different, copy the chosen build spec and archetype packet into that workspace before coding.
- Feed review misses back into `data/patterns/` or `data/archetypes/` rather than only editing the one-off build.
