# PRD-002: Pattern Library and Archetype System

## Status

In Progress - first batch-one pattern and archetype pass created

## Problem

Per-site reports are useful for humans, but builder agents need small, queryable knowledge objects rather than long narrative documents.

## Goal

Turn site-level observations into a reusable pattern library and a set of archetype files that future agents can load directly.

## Scope

### In scope

- atomic pattern schema
- anti-pattern guidance
- archetype schema
- cross-site synthesis workflow
- initial archetype taxonomy

### Out of scope

- generated UI code
- live pattern ranking dashboards

## Requirements

1. Each pattern must record evidence, transferability, cost, and risk.
2. Archetypes must bundle compatible patterns into actionable rules.
3. The system must distinguish universal patterns from brand-specific moves.
4. Synthesis must generate both positive rules and anti-pattern warnings.

## Deliverables

- first 20 to 40 atomic patterns
- initial anti-pattern list
- first synthesis report
- first archetype files

## Current Progress

- Batch-one synthesis is complete in `data/syntheses/batch-01.md`.
- First rule baseline is complete in `frontend_design_rules_v1.md`.
- Initial pattern records now exist in `data/patterns/`.
- Initial anti-pattern guidance now exists in `data/patterns/anti-patterns-batch-01.md`.
- Initial archetype files now exist in `data/archetypes/developer-tool-modern.json`, `data/archetypes/product-ui-system.json`, and `data/archetypes/marketplace-system.json`.

## Candidate Archetypes

- `saas-clarity`
- `developer-tool-modern`
- `expressive-brand`
- `motion-showcase`
- `marketplace-system`
- `product-ui-system`

## Success Metrics

- Builder agents can select patterns without re-reading full reports.
- Multiple sites contribute to each archetype.
- Patterns contain enough implementation detail to guide code decisions.

## Dependencies

- batch one reports
- `data/prompts/batch-01/_analysis-queue.md`
- `schemas/pattern.schema.json`
- `schemas/archetype.schema.json`
- `data/syntheses/batch-01.md`
- `frontend_design_rules_v1.md`

## Next Tasks

1. Expand the first pattern pass from 10 starter records toward the 20-40 target.
2. Add validation or linting for pattern and archetype JSON files.
3. Refine archetypes with batch-02 evidence, especially `marketplace-system` and `minimal-saas-clarity`.
4. Feed the current archetypes into PRD-003 to generate the first build spec and homepage test.
