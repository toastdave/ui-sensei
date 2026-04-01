#!/usr/bin/env bun

import { spawnSync } from "node:child_process";

const ANSI_RE = /\x1b\[[0-?]*[ -/]*[@-~]/g;

function clean(text: string): string {
  return text.replace(ANSI_RE, "").trim();
}

function run(cmd: string[]): ReturnType<typeof spawnSync> {
  return spawnSync(cmd[0], cmd.slice(1), { encoding: "utf8" });
}

const version = run(["agent-browser", "--version"]);

if (version.status !== 0) {
  console.error("agent-browser is not installed or not available on PATH.");
  console.error(clean(version.stderr || version.stdout || ""));
  process.exit(1);
}

const versionText = clean(version.stdout || version.stderr || "");
const smoke = run(["agent-browser", "--session", "capture-preflight", "open", "about:blank"]);

if (smoke.status !== 0) {
  const output = clean(`${smoke.stderr || ""}\n${smoke.stdout || ""}`);
  console.error("Capture preflight failed.");
  console.error(output);

  if (output.includes("libnspr4.so")) {
    console.error(
      "Missing Chrome runtime dependency detected: libnspr4.so. Install the required system libraries before running capture."
    );
    console.error(
      "Typical Debian/Ubuntu fix: sudo apt-get install -y libnspr4 libnss3 libatk-bridge2.0-0 libxkbcommon0 libgtk-3-0"
    );
  }

  console.error(
    "If your environment already has a working browser, you can also point agent-browser at it with --executable-path."
  );
  console.error(versionText);
  process.exit(1);
}

const closeResult = run(["agent-browser", "--session", "capture-preflight", "close"]);
if (closeResult.status !== 0) {
  console.error(clean(closeResult.stderr || closeResult.stdout || ""));
}

console.log(versionText);
console.log("Capture environment ready.");
