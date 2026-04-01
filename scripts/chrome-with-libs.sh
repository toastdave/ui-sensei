#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LIB_DIR="$ROOT/.local/browser-libs/usr/lib"
CHROME_BIN="${AGENT_BROWSER_CHROME_BINARY:-$HOME/.agent-browser/browsers/chrome-147.0.7727.50/chrome}"

if [ -d "$LIB_DIR" ]; then
  export LD_LIBRARY_PATH="$LIB_DIR${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
fi

exec "$CHROME_BIN" "$@"
