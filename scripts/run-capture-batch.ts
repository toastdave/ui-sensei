#!/usr/bin/env bun

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");

type BatchConfig = {
  batch: string;
  sites: Array<{ slug: string; url: string }>;
};

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

function run(cmd: string[]): ReturnType<typeof spawnSync> {
  return spawnSync(cmd[0], cmd.slice(1), {
    cwd: ROOT,
    encoding: "utf8"
  });
}

const args = parseArgs(process.argv.slice(2));
const configArg = args.config;
const desktopWidth = args["desktop-width"] || "1440";
const desktopHeight = args["desktop-height"] || "900";
const mobileDevice = args["mobile-device"] || "iPhone 14";

if (!configArg) {
  console.error("Usage: bun run scripts/run-capture-batch.ts --config <config-path>");
  process.exit(1);
}

const configPath = isAbsolute(configArg) ? configArg : resolve(ROOT, configArg);
const config = JSON.parse(readFileSync(configPath, "utf8")) as BatchConfig;

const preflight = run(["bun", "run", "scripts/check-capture-env.ts"]);
if (preflight.stdout) process.stdout.write(preflight.stdout);
if (preflight.stderr) process.stderr.write(preflight.stderr);
if (preflight.status !== 0) {
  console.error("Capture environment preflight failed.");
  process.exit(1);
}

const failures: string[] = [];

for (const site of config.sites) {
  console.log(`\n==> Capturing ${site.slug} (${site.url})`);
  const result = run([
    "bun",
    "run",
    "scripts/capture-site.ts",
    "--batch",
    config.batch,
    "--slug",
    site.slug,
    "--url",
    site.url,
    "--desktop-width",
    desktopWidth,
    "--desktop-height",
    desktopHeight,
    "--mobile-device",
    mobileDevice
  ]);

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) failures.push(site.slug);
}

if (failures.length > 0) {
  console.error(`\nCapture batch completed with failures: ${failures.join(", ")}`);
  process.exit(1);
}

console.log(`\nCapture batch ${config.batch} completed successfully.`);
