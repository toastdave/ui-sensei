#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="43731"
MODE="serve"

if [[ "${1:-}" == "--funnel" ]]; then
  MODE="funnel"
fi

if ! command -v tailscale >/dev/null 2>&1; then
  echo "tailscale is not installed or not on PATH." >&2
  exit 1
fi

if ! pgrep -f "vite --host 0.0.0.0 --port ${PORT}" >/dev/null 2>&1; then
  nohup bun run --cwd "$ROOT/apps/showcase" dev -- --host 0.0.0.0 --port "$PORT" >/tmp/ui-sensei-showcase.log 2>&1 &
  sleep 3
fi

if [[ "$MODE" == "funnel" ]]; then
  tailscale funnel --bg "$PORT"
else
  tailscale serve --bg "$PORT"
fi

tailscale serve status
echo
echo "Showcase app: http://localhost:${PORT}"
echo "Showcase log: /tmp/ui-sensei-showcase.log"
