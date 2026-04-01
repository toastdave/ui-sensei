# PRD-002: Pattern Library and Archetype System

## Status

In Progress

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

1. Extract the first pattern pass from the completed batch-01 reports and synthesis.
2. Create at least two archetype files from batch-01, starting with `developer-tool-modern` and `product-ui-system`.
3. Convert the shared rules in `frontend_design_rules_v1.md` into smaller atomic records.
4. Record anti-pattern entries for overly brand-specific shells, weak faux-desktop accessibility, and unnecessary rendering effects.
