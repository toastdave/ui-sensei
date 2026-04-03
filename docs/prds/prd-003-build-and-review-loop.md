# PRD-003: Builder and Review Loop

## Status

In Progress - the builder loop now lands in a Vite + Svelte + Tailwind showcase app and has been proven on two archetypes

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
- The first builder output now exists in `data/evaluations/first-builder-test-build-notes.md`.
- The first critique example now exists in `data/evaluations/first-builder-test-review.md`.
- Implemented builder tests now live in `apps/showcase/`.
- An implementation-backed critique now exists in `data/evaluations/first-builder-test-implementation-review.md`.
- A second archetype comparison pass now exists in `data/evaluations/second-builder-test-build-notes.md` and `data/evaluations/second-builder-test-review.md`.
- The showcase app can now be previewed locally or exposed on Tailscale through one command.

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

1. Turn the build-spec and critique loop into reusable automation or slash-command style workflows.
2. Record which patterns were strong enough to reuse and which archetype rules need refinement after two implemented builder cycles.
3. Promote the strongest showcase patterns into a more implementation-ready starter kit if future repos need code seeds.
4. Add third and fourth showcase routes from future archetypes so the library keeps proving transferability.
