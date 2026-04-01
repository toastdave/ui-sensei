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

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertStringArray(value: unknown, path: string, errors: string[]): void {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    errors.push(`${path} must be an array of strings.`);
  }
}

function assertScoreObject(value: unknown, path: string, errors: string[]): void {
  const keys = [
    "visual_polish",
    "clarity",
    "hierarchy",
    "copy_quality",
    "motion_quality",
    "component_quality",
    "technical_ambition",
    "pattern_reusability"
  ];

  if (!isObject(value)) {
    errors.push(`${path} must be an object.`);
    return;
  }

  for (const key of keys) {
    const entry = value[key];
    if (typeof entry !== "number" || entry < 1 || entry > 5) {
      errors.push(`${path}.${key} must be a number from 1 to 5.`);
    }
  }
}

function assertFindings(value: unknown, path: string, errors: string[]): void {
  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array.`);
    return;
  }

  for (const [index, item] of value.entries()) {
    if (!isObject(item)) {
      errors.push(`${path}[${index}] must be an object.`);
      continue;
    }

    if (typeof item.category !== "string") {
      errors.push(`${path}[${index}].category must be a string.`);
    }
    if (typeof item.statement !== "string") {
      errors.push(`${path}[${index}].statement must be a string.`);
    }
    if (!["high", "medium", "low"].includes(String(item.confidence))) {
      errors.push(`${path}[${index}].confidence must be high, medium, or low.`);
    }
  }
}

const args = parseArgs(process.argv.slice(2));
const fileArg = args.file;

if (!fileArg) {
  console.error("Usage: bun run scripts/validate-site-summary.ts --file data/json/batch-01/site.json");
  process.exit(1);
}

const filePath = resolve(ROOT, fileArg);
if (!existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const data = JSON.parse(readFileSync(filePath, "utf8")) as Record<string, unknown>;
const errors: string[] = [];
const requiredStringFields = ["site", "url", "summary"];

for (const field of requiredStringFields) {
  if (typeof data[field] !== "string" || data[field].length === 0) {
    errors.push(`${field} must be a non-empty string.`);
  }
}

assertStringArray(data.archetypes, "archetypes", errors);
assertFindings(data.observed, "observed", errors);
assertFindings(data.inferred, "inferred", errors);
assertFindings(data.uncertain, "uncertain", errors);
assertStringArray(data.reusable_rules, "reusable_rules", errors);
assertStringArray(data.implementation_notes, "implementation_notes", errors);
assertStringArray(data.caveats, "caveats", errors);
assertScoreObject(data.scores, "scores", errors);

if (errors.length > 0) {
  console.error(`Validation failed for ${fileArg}:`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validation passed: ${fileArg}`);
