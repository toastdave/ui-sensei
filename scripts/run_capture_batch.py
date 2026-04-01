#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


def run_preflight() -> None:
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "check_capture_env.py")],
        text=True,
        capture_output=True,
        cwd=ROOT,
    )
    if result.returncode != 0:
        if result.stdout:
            print(result.stdout, end="")
        if result.stderr:
            print(result.stderr, end="", file=sys.stderr)
        raise RuntimeError("Capture environment preflight failed.")
    if result.stdout:
        print(result.stdout, end="")


def load_config(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def capture_site(
    batch: str,
    slug: str,
    url: str,
    desktop_width: int,
    desktop_height: int,
    mobile_device: str,
) -> int:
    cmd = [
        sys.executable,
        str(ROOT / "scripts" / "capture_site.py"),
        "--batch",
        batch,
        "--slug",
        slug,
        "--url",
        url,
        "--desktop-width",
        str(desktop_width),
        "--desktop-height",
        str(desktop_height),
        "--mobile-device",
        mobile_device,
    ]
    result = subprocess.run(cmd, text=True, capture_output=True, cwd=ROOT)
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="", file=sys.stderr)
    return result.returncode


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run a capture batch using agent-browser."
    )
    parser.add_argument("--config", required=True, help="Path to batch config JSON")
    parser.add_argument("--desktop-width", type=int, default=1440)
    parser.add_argument("--desktop-height", type=int, default=900)
    parser.add_argument("--mobile-device", default="iPhone 14")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        config_path = (
            (ROOT / args.config).resolve()
            if not Path(args.config).is_absolute()
            else Path(args.config)
        )
        config = load_config(config_path)
        batch = config["batch"]
        sites = config["sites"]
        run_preflight()
    except Exception as error:  # noqa: BLE001
        print(str(error), file=sys.stderr)
        return 1

    failures: list[str] = []
    for site in sites:
        slug = site["slug"]
        url = site["url"]
        print(f"\n==> Capturing {slug} ({url})")
        exit_code = capture_site(
            batch=batch,
            slug=slug,
            url=url,
            desktop_width=args.desktop_width,
            desktop_height=args.desktop_height,
            mobile_device=args.mobile_device,
        )
        if exit_code != 0:
            failures.append(slug)

    if failures:
        print(
            "\nCapture batch completed with failures:",
            ", ".join(failures),
            file=sys.stderr,
        )
        return 1

    print(f"\nCapture batch {batch} completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
