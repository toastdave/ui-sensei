# Analysis Queue: batch-01

## Purpose

This directory contains ready-to-run research packets for the captured sites in batch-01.

## Site Packets

- data/prompts/batch-01/airbnb-analysis.md
- data/prompts/batch-01/notion-product-analysis.md
- data/prompts/batch-01/posthog-analysis.md
- data/prompts/batch-01/railway-analysis.md
- data/prompts/batch-01/voidzero-analysis.md

## Suggested Agent Workflow

1. Open one site packet at a time.
2. Use skills/frontend-design-researcher.md
and prompts/master-research-prompt.md
to produce the report and JSON outputs.
3. Save each report to data/reports/batch-01/<site>.md
4. Save each JSON summary to data/json/batch-01/<site>.json
5. After all site reports are complete, write a cross-site synthesis to data/syntheses/batch-01.md
6. Then move on to pattern extraction and archetype synthesis.

## Expected Outputs

- data/reports/batch-01/airbnb.md
- data/json/batch-01/airbnb.json
- data/reports/batch-01/notion-product.md
- data/json/batch-01/notion-product.json
- data/reports/batch-01/posthog.md
- data/json/batch-01/posthog.json
- data/reports/batch-01/railway.md
- data/json/batch-01/railway.json
- data/reports/batch-01/voidzero.md
- data/json/batch-01/voidzero.json

## Next Stage

After the site reports exist, the next agent should create:

- data/syntheses/batch-01.md
- data/archetypes/*.json updates
- frontend_design_rules_v1.md
