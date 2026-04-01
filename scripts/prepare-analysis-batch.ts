#!/usr/bin/env bun

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = resolve(import.meta.dir, "..");

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith("--")) continue;
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for ${key}`);
    }
    args[key.slice(2)] = value;
    i += 1;
  }

  return args;
}

function run(cmd: string[]): void {
  const result = spawnSync(cmd[0], cmd.slice(1), {
    cwd: ROOT,
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `Command failed: ${cmd.join(" ")}`).trim());
  }

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
}

const args = parseArgs(process.argv.slice(2));
const batch = args.batch;

if (!batch) {
  console.error("Usage: bun run scripts/prepare-analysis-batch.ts --batch <batch>");
  process.exit(1);
}

const captureBatchDir = join(ROOT, "data", "captures", batch);
const promptBatchDir = join(ROOT, "data", "prompts", batch);

if (!existsSync(captureBatchDir)) {
  console.error(`Capture batch not found: ${captureBatchDir}`);
  process.exit(1);
}

mkdirSync(promptBatchDir, { recursive: true });

const sites = readdirSync(captureBatchDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const site of sites) {
  run(["bun", "run", "scripts/prepare-analysis-site.ts", "--batch", batch, "--site", site]);
}

const overview = `# Analysis Queue: ${batch}

## Purpose

This directory contains ready-to-run research packets for the captured sites in ${batch}.

## Site Packets

${sites.map((site) => `- data/prompts/${batch}/${site}-analysis.md`).join("\n")}

## Suggested Agent Workflow

1. Open one site packet at a time.
2. Use \
skills/frontend-design-researcher.md
and \
prompts/master-research-prompt.md
to produce the report and JSON outputs.
3. Save each report to \
data/reports/${batch}/<site>.md
4. Save each JSON summary to \
data/json/${batch}/<site>.json
5. After all site reports are complete, write a cross-site synthesis to \
data/syntheses/${batch}.md
6. Then move on to pattern extraction and archetype synthesis.

## Expected Outputs

${sites
  .map(
    (site) =>
      `- data/reports/${batch}/${site}.md\n- data/json/${batch}/${site}.json`
  )
  .join("\n")}

## Next Stage

After the site reports exist, the next agent should create:

- data/syntheses/${batch}.md
- data/archetypes/*.json updates
- frontend_design_rules_v1.md
`;

const synthesisPrompt = `# Synthesis Packet: ${batch}

## Use This After

All per-site reports and JSON summaries for ${batch} exist.

## Required Inputs

${sites
  .map(
    (site) =>
      `- Report: \`data/reports/${batch}/${site}.md\`\n- JSON: \`data/json/${batch}/${site}.json\``
  )
  .join("\n")}

## Required Output

- \`data/syntheses/${batch}.md\`

## Tasks

1. Produce the cross-site synthesis.
2. Identify shared patterns and archetype clusters.
3. Propose the first pattern extraction list.
4. Draft or update \`frontend_design_rules_v1.md\`.
5. Note which archetype files should be created first.

## Guidance

Use \`docs/templates/cross-site-synthesis-template.md\` and the synthesis instructions embedded in \`skills/frontend-design-researcher.md\`.
`;

writeFileSync(join(promptBatchDir, "_analysis-queue.md"), `${overview.trim()}\n`, "utf8");
writeFileSync(join(promptBatchDir, "_synthesis-prompt.md"), `${synthesisPrompt.trim()}\n`, "utf8");

console.log(join(promptBatchDir, "_analysis-queue.md"));
