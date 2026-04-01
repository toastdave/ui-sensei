# PRD-001: Capture and Analysis Pipeline

## Status

Planned

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
- five markdown site reports
- five JSON summaries

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

1. Choose a browser automation approach.
2. Capture the first five sites.
3. Validate the capture contract against real evidence gaps.
4. Generate reports and JSON summaries.
