#!/usr/bin/env bun

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

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

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

const args = parseArgs(process.argv.slice(2));
const fileArg = args.file;

if (!fileArg) {
  console.error("Usage: bun run scripts/validate-build-spec.ts --file data/prompts/build-specs/example.json");
  process.exit(1);
}

const filePath = resolve(ROOT, fileArg);

if (!existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const data = JSON.parse(readFileSync(filePath, "utf8")) as Record<string, unknown>;
const errors: string[] = [];

for (const key of ["project", "archetype", "product_context"]) {
  if (typeof data[key] !== "string" || data[key]?.toString().trim().length === 0) {
    errors.push(`${key} must be a non-empty string.`);
  }
}

for (const key of [
  "design_goals",
  "constraints",
  "layout_rules",
  "typography_rules",
  "component_rules",
  "motion_rules",
  "copy_rules",
  "accessibility_rules",
  "performance_rules",
  "approved_patterns",
  "anti_patterns"
]) {
  if (!isStringArray(data[key])) {
    errors.push(`${key} must be an array of strings.`);
  }
}

if (errors.length > 0) {
  console.error(`Validation failed for ${fileArg}:`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validation passed: ${fileArg}`);
