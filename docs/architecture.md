# Agent Architecture

## Objective

Convert website research into buildable UI intelligence that other agents can use repeatedly.

## Pipeline

```text
Capture -> Analysis -> Pattern Extraction -> Archetype Synthesis -> Build Spec -> UI Build -> Critique -> Rule Refinement
```

## Stage Details

### Capture

Inputs:

- URL list
- viewport presets
- optional site notes

Outputs:

- screenshots
- visible text export
- DOM snapshot or notes
- interaction notes
- technology hints

Contract:

- validated by `schemas/capture.schema.json`

### Analysis

Inputs:

- capture package
- research skill
- master research prompt

Outputs:

- markdown report
- normalized site JSON summary

Contracts:

- `schemas/site-report.schema.json`

### Pattern Extraction

Inputs:

- multiple site reports
- multiple site JSON summaries

Outputs:

- atomic pattern files
- anti-pattern notes

Contracts:

- `schemas/pattern.schema.json`

### Archetype Synthesis

Inputs:

- pattern library
- repeated findings across batches

Outputs:

- archetype files
- design rule sets
- playbooks for builder agents

Contracts:

- `schemas/archetype.schema.json`

### Build Spec Generation

Inputs:

- product requirements
- chosen archetype
- selected patterns
- anti-pattern constraints

Outputs:

- builder-ready spec for page structure, tokens, components, motion, and constraints

Contracts:

- `schemas/build-spec.schema.json`

### Build

Inputs:

- build spec
- product requirements
- target stack

Outputs:

- implementation plan
- component tree
- code

### Critique

Inputs:

- built UI
- build spec
- original archetype
- rubric

Outputs:

- quality score
- missing pattern notes
- anti-pattern violations
- refinement suggestions

## Agent Contracts

### Research agents

Must distinguish:

- observed
- inferred
- uncertain

Must avoid:

- cloning layouts exactly
- reusing proprietary copy
- over-claiming technical implementations without evidence

### Builder agents

Must prioritize:

- originality within archetype constraints
- clarity and hierarchy
- accessible contrast and semantics
- controlled motion and performance discipline

### Critique agents

Must score:

- archetype fit
- visual polish
- clarity
- hierarchy
- component quality
- motion restraint
- accessibility
- performance risk

## Knowledge Objects

The system depends on five main knowledge objects:

1. `capture` - what the site rendered and how it behaved
2. `site report` - a human-readable analysis of one site
3. `pattern` - one reusable insight with constraints
4. `archetype` - a bundle of compatible patterns and rules
5. `build spec` - the compact package used by builder agents

## Success Criteria

The pipeline is working when:

- different agents can pick up work without hidden context
- research outputs are queryable and consistent
- builder agents produce stronger UI when given archetype guidance
- critique agents can point to rule violations precisely
- the rule library improves after each batch
