# UI Sensei

UI Sensei is a research-first system for turning high-quality website analysis into reusable design intelligence for future AI agents.

The goal is not to clone sites. The goal is to capture what makes strong sites feel clear, polished, and effective, then turn those findings into structured rules that builder agents can use to produce original UI.

## What lives here

- `docs/plan.md` - master setup and milestone plan
- `docs/architecture.md` - agent roles and data flow
- `docs/runbooks/capture-batch.md` - step-by-step guide for running a capture batch
- `docs/runbooks/analyze-batch.md` - step-by-step guide for turning captures into reports
- `docs/runbooks/build-from-spec.md` - step-by-step guide for first builder tests
- `skills/frontend-design-researcher.md` - research skill spec for local models
- `prompts/analysis-agent-prompt.md` - execution prompt for turning one packet into outputs
- `prompts/` - reusable prompts for research, build, and critique agents
- `schemas/` - machine-readable contracts for captures, reports, patterns, archetypes, and build specs
- `docs/prds/` - phased implementation docs so other agents can continue work cleanly
- `docs/templates/` - output templates for reports and synthesis
- `data/` - storage layout for captures, reports, pattern files, syntheses, and evaluations

## System idea

The repository is organized around a repeatable loop:

1. Capture real sites in the browser.
2. Analyze them into structured reports.
3. Extract atomic patterns and anti-patterns.
4. Cluster those patterns into archetypes.
5. Feed archetypes into builder agents.
6. Review generated UI and refine the rules.

## First milestone

Run a first research batch on:

- `railway.com`
- `notion.com/product`
- `posthog.com`
- `voidzero.dev`
- `airbnb.com`

Then produce:

- one site report per site
- one normalized JSON file per site
- one cross-site synthesis
- one `frontend_design_rules_v1.md`

## Start here

- Read `docs/plan.md`
- If preflight fails on this Arch-based setup, run `bun run capture:bootstrap-libs`
- Run `bun run capture:check`
- Run `bun run capture:batch`
- Run `bun run analysis:prepare`
- Run `bun run build:validate --file data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json`
- Run `bun run preview:first-test`
- Use `skills/frontend-design-researcher.md` with `prompts/master-research-prompt.md`
- Save outputs into `data/`
- Use the PRDs in `docs/prds/` to continue the roadmap
