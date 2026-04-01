#!/usr/bin/env bun

import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = resolve(import.meta.dir, "..");
const PACKAGE_CACHE = "/var/cache/pacman/pkg";
const OUTPUT_DIR = resolve(ROOT, ".local", "browser-libs");
const REQUIRED_PACKAGES = ["nspr", "nss", "alsa-lib", "libxcomposite"];

function versionWeight(name: string): string {
  return name.replace(/\.pkg\.tar\.zst$/, "");
}

function latestPackageFile(prefix: string): string {
  const candidates = readdirSync(PACKAGE_CACHE)
    .filter((file) => file.startsWith(`${prefix}-`) && file.endsWith(".pkg.tar.zst"))
    .sort((a, b) => versionWeight(a).localeCompare(versionWeight(b)));

  const candidate = candidates.at(-1);
  if (!candidate) {
    throw new Error(`Could not find ${prefix} package in ${PACKAGE_CACHE}`);
  }

  return join(PACKAGE_CACHE, candidate);
}

function extractPackage(archive: string): void {
  const result = spawnSync("bsdtar", ["-xf", archive, "-C", OUTPUT_DIR], {
    cwd: ROOT,
    encoding: "utf8",
    env: { ...process.env, LANG: "C", LC_ALL: "C" }
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `Failed extracting ${archive}`).trim());
  }
}

if (!existsSync(PACKAGE_CACHE)) {
  console.error(`Pacman package cache not found at ${PACKAGE_CACHE}.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

for (const pkg of REQUIRED_PACKAGES) {
  const archive = latestPackageFile(pkg);
  console.log(`Extracting ${archive}`);
  extractPackage(archive);
}

console.log(`Local browser libraries extracted to ${OUTPUT_DIR}`);
