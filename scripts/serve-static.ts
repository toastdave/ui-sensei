#!/usr/bin/env bun

import { existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");

const MIME_TYPES: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2"
};

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith("--")) continue;
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${key}`);
    args[key.slice(2)] = value;
    i += 1;
  }

  return args;
}

const args = parseArgs(process.argv.slice(2));
const dirArg = args.dir;
const port = Number(args.port || "4173");

if (!dirArg) {
  console.error("Usage: bun run scripts/serve-static.ts --dir <directory> --port <port>");
  process.exit(1);
}

const baseDir = resolve(ROOT, dirArg);

if (!existsSync(baseDir) || !statSync(baseDir).isDirectory()) {
  console.error(`Directory not found: ${baseDir}`);
  process.exit(1);
}

function filePathFor(urlPath: string): string {
  const cleanPath = normalize(urlPath).replace(/^\/+/, "");
  const target = cleanPath === "" ? "index.html" : cleanPath;
  return join(baseDir, target);
}

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);
    let filePath = filePathFor(url.pathname);

    if (!filePath.startsWith(baseDir)) {
      return new Response("Forbidden", { status: 403 });
    }

    if (!existsSync(filePath)) {
      filePath = join(baseDir, "index.html");
    }

    if (!existsSync(filePath)) {
      return new Response("Not found", { status: 404 });
    }

    const file = Bun.file(filePath);
    const type = MIME_TYPES[extname(filePath)] || "application/octet-stream";
    return new Response(file, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "no-store"
      }
    });
  }
});

console.log(`Serving ${baseDir} at http://localhost:${server.port}`);
