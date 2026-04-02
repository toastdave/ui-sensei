# PRD-003: Builder and Review Loop

## Status

In Progress - first build specs and builder test plan created

## Problem

Research has no lasting value unless it measurably improves generated UI.

## Goal

Create the loop that lets builder agents consume archetype guidance and lets critique agents measure whether the results are good enough.

## Scope

### In scope

- build-spec schema
- builder prompt format
- critique prompt format
- evaluation rubric
- feedback loop from reviews into rules

### Out of scope

- production deployment pipeline
- visual regression tooling

## Requirements

1. Builder agents must receive compact, structured guidance.
2. Generated UI must be reviewed against both quality and originality.
3. Critique output must identify missing patterns and anti-pattern violations.
4. Reviews must result in concrete rule updates.

## Deliverables

- `schemas/build-spec.schema.json`
- builder prompt
- critique prompt
- first build review example

## Current Progress

- `schemas/build-spec.schema.json` already exists.
- Build-spec validation now exists via `scripts/validate-build-spec.ts` and `bun run build:validate --file <path>`.
- Starter build specs now exist in `data/prompts/build-specs/`.
- A first builder test handoff now exists in `data/prompts/build-specs/_first-builder-test.md`.
- The first builder test plan now exists in `data/evaluations/first-builder-test-plan.md`.

## Success Metrics

- Builder agents produce stronger output with the build spec than without it.
- Review notes can be mapped back to specific missing or weak rules.
- The system supports iteration rather than one-shot generation.

## Dependencies

- archetype files
- pattern library
- review rubric
- `frontend_design_rules_v1.md`
- completed batch syntheses
- initial archetype files in `data/archetypes/`
- starter pattern library in `data/patterns/`

## Next Tasks

1. Use `data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json` to generate the first homepage plan or coded page.
2. Save the builder output to `data/evaluations/first-builder-test-build-notes.md` or a target implementation repo.
3. Review the output using `docs/rubrics/build-review-rubric.md` and save the result to `data/evaluations/first-builder-test-review.md`.
4. Record which patterns were strong enough to reuse and which archetype rules need refinement.
