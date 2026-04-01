# Data Layout

This directory stores research outputs and downstream artifacts.

- `captures/` - screenshots, text exports, and browser evidence
- `reports/` - markdown site reports
- `json/` - normalized JSON site summaries
- `patterns/` - atomic pattern records
- `syntheses/` - cross-site synthesis reports
- `archetypes/` - reusable archetype files
- `prompts/` - generated build prompt bundles for downstream agents
- `evaluations/` - critique outputs from generated UI reviews

Recommended batch structure:

```text
data/
  captures/batch-01/site-slug/
  reports/batch-01/site-slug.md
  json/batch-01/site-slug.json
  syntheses/batch-01.md
```
