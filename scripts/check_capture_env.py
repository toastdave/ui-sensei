#!/usr/bin/env python3

from __future__ import annotations

import re
import subprocess
import sys


ANSI_RE = re.compile(r"\x1b\[[0-?]*[ -/]*[@-~]")


def clean(text: str) -> str:
    return ANSI_RE.sub("", text).strip()


def run(cmd: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, text=True, capture_output=True)


def main() -> int:
    version = run(["agent-browser", "--version"])
    if version.returncode != 0:
        print(
            "agent-browser is not installed or not available on PATH.", file=sys.stderr
        )
        print(clean(version.stderr or version.stdout), file=sys.stderr)
        return 1

    version_text = clean(version.stdout or version.stderr)

    smoke = run(
        ["agent-browser", "--session", "capture-preflight", "open", "about:blank"]
    )
    if smoke.returncode != 0:
        output = clean((smoke.stderr or "") + "\n" + (smoke.stdout or ""))
        print("Capture preflight failed.", file=sys.stderr)
        print(output, file=sys.stderr)

        if "libnspr4.so" in output:
            print(
                "Missing Chrome runtime dependency detected: libnspr4.so. Install the required system libraries before running capture.",
                file=sys.stderr,
            )
            print(
                "Typical Debian/Ubuntu fix: sudo apt-get install -y libnspr4 libnss3 libatk-bridge2.0-0 libxkbcommon0 libgtk-3-0",
                file=sys.stderr,
            )

        print(
            "If your environment already has a working browser, you can also point agent-browser at it with --executable-path.",
            file=sys.stderr,
        )
        print(version_text, file=sys.stderr)
        return 1

    close_result = run(["agent-browser", "--session", "capture-preflight", "close"])
    if close_result.returncode != 0:
        print(clean(close_result.stderr or close_result.stdout), file=sys.stderr)

    print(version_text)
    print("Capture environment ready.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
