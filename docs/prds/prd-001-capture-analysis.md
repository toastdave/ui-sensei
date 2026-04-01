# PRD-001: Capture and Analysis Pipeline

## Status

In Progress

## Problem

The system needs a repeatable way to inspect high-quality websites and turn browser evidence into structured research outputs that other agents can trust.

## Goal

Create the first operational pipeline for:

- site capture
- evidence packaging
- per-site analysis
- normalized JSON export

## Users

- research agents
- synthesis agents
- future builder agents

## Scope

### In scope

- capture contract
- directory layout for evidence
- report template
- JSON schema for site summaries
- batch naming conventions

### Out of scope

- automatic builder integration
- automatic UI generation
- evaluation dashboards

## Requirements

1. Capture package must include screenshots, text notes, interaction notes, and tech hints.
2. Analysis must distinguish observed, inferred, and uncertain findings.
3. Each site must produce a markdown report and a JSON summary.
4. The output must support later pattern extraction without re-reading the site manually.

## Deliverables

- browser capture workflow
- populated `data/captures/` for batch one
- analysis packet generator for captured sites
- five markdown site reports
- five JSON summaries

## Execution Notes

- The baseline capture workflow now runs through Bun scripts rather than Python.
- In this environment, `agent-browser` may require locally extracted Chrome runtime libraries before preflight passes.
- The repo includes `bun run capture:bootstrap-libs` plus `scripts/chrome-with-libs.sh` as a non-root fallback for Arch-based setups.
- Batch `batch-01` capture artifacts now exist for Railway, Notion Product, PostHog, VoidZero, and Airbnb.
- The repo now includes `bun run analysis:prepare` to generate one analysis packet per captured site in `data/prompts/<batch>/`.
- The repo now includes `bun run analysis:validate --file <path>` for lightweight JSON summary validation.

## Success Metrics

- Each site can be understood by a new agent from stored materials alone.
- Reports contain enough specificity to extract reusable rules.
- JSON outputs validate against the schema.

## Dependencies

- `skills/frontend-design-researcher.md`
- `prompts/master-research-prompt.md`
- `schemas/capture.schema.json`
- `schemas/site-report.schema.json`

## Next Tasks

1. Generate the five site reports from the prepared analysis packets.
2. Validate the five JSON summaries.
3. Write `data/syntheses/batch-01.md`.
4. Feed the completed reports into PRD-002 pattern extraction.
