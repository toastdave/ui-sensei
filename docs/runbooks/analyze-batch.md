# Analyze Batch Runbook

## Goal

Turn captured site evidence into research reports and normalized JSON summaries that can feed synthesis, pattern extraction, and builder agents.

## Workflow

### 1. Prepare the analysis packets

Run:

```bash
bun run analysis:prepare
```

That generates one ready-to-use packet per captured site in `data/prompts/<batch>/` plus an overview file for the whole batch.

### 2. Pick a site packet

Open one of these files:

- `data/prompts/batch-01/railway-analysis.md`
- `data/prompts/batch-01/notion-product-analysis.md`
- `data/prompts/batch-01/posthog-analysis.md`
- `data/prompts/batch-01/voidzero-analysis.md`
- `data/prompts/batch-01/airbnb-analysis.md`

Each packet includes:

- the target output paths
- the site manifest
- screenshot paths
- visible text
- DOM notes
- interaction notes
- tech hints
- desktop and mobile interactive snapshots

### 3. Run the research agent

Use:

- `skills/frontend-design-researcher.md`
- `prompts/analysis-agent-prompt.md`
- `prompts/master-research-prompt.md`

Then save outputs to:

- `data/reports/<batch>/<site>.md`
- `data/json/<batch>/<site>.json`

### 4. Validate the JSON summary

Run:

```bash
bun run analysis:validate --file data/json/batch-01/railway.json
```

This is a lightweight validation pass that checks the core required fields and score structure from `schemas/site-report.schema.json`.

### 5. Repeat for the full batch

When all site outputs exist, create the cross-site synthesis in:

- `data/syntheses/batch-01.md`

## Recommended Sequence

1. Prepare analysis packets
2. Generate five site reports
3. Validate five JSON summaries
4. Write the cross-site synthesis
5. Extract patterns and archetypes

## Notes

- The analysis packets are intentionally text-first; they reference screenshot paths rather than embedding binary assets.
- If a site needs deeper motion review, reopen it with `agent-browser` and update the capture notes before finalizing the report.
- Use `data/prompts/batch-01/_analysis-queue.md` as the handoff file for future agents.
