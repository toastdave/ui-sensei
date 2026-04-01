# PRD-003: Builder and Review Loop

## Status

Planned

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

## Success Metrics

- Builder agents produce stronger output with the build spec than without it.
- Review notes can be mapped back to specific missing or weak rules.
- The system supports iteration rather than one-shot generation.

## Dependencies

- archetype files
- pattern library
- review rubric

## Next Tasks

1. Create the first build spec from `saas-clarity`.
2. Use it to generate one homepage.
3. Review the output using `docs/rubrics/build-review-rubric.md`.
4. Update the archetype and rules based on the review.
