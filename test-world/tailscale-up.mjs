import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { existsSync, openSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { spawn, spawnSync } from 'node:child_process'

const localPort = 42731
const tailscalePort = 42791
const pidPath = join(tmpdir(), `test-world-${localPort}.pid`)
const logPath = join(tmpdir(), `test-world-${localPort}.log`)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

if (existsSync(pidPath)) {
  const pid = Number.parseInt(readFileSync(pidPath, 'utf8').trim(), 10)

  if (!Number.isNaN(pid)) {
    try {
      process.kill(pid)
    } catch (error) {
      if (!(error && typeof error === 'object' && 'code' in error && error.code === 'ESRCH')) {
        throw error
      }
    }
  }

  unlinkSync(pidPath)
}

spawnSync('pkill', ['-f', `vite preview --host 127.0.0.1 --port ${localPort}`], {
  stdio: 'ignore',
  cwd: process.cwd(),
})

const build = spawnSync('bun', ['run', 'build'], {
  stdio: 'inherit',
  cwd: process.cwd(),
})

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

const logFd = openSync(logPath, 'a')
const child = spawn(
  'bun',
  ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(localPort), '--strictPort'],
  {
  cwd: process.cwd(),
  detached: true,
  stdio: ['ignore', logFd, logFd],
  },
)

child.unref()
writeFileSync(pidPath, `${child.pid}\n`)

const serve = spawnSync('tailscale', ['serve', '--bg', '--https', String(tailscalePort), String(localPort)], {
  stdio: 'inherit',
  cwd: process.cwd(),
})

if (serve.status !== 0) {
  process.kill(child.pid)
  process.exit(serve.status ?? 1)
}

let ready = false

for (let attempt = 0; attempt < 30; attempt += 1) {
  try {
    const response = await fetch(`http://127.0.0.1:${localPort}`)

    if (response.ok) {
      ready = true
      break
    }
  } catch {
    await sleep(250)
  }
}

if (!ready) {
  process.kill(child.pid)
  spawnSync('tailscale', ['serve', `--https=${tailscalePort}`, 'off'], {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
  process.exit(1)
}

console.log(`Test World is up on http://127.0.0.1:${localPort}`)
console.log(`Preview log: ${logPath}`)
console.log(`Tailscale serve is active on HTTPS port ${tailscalePort}.`)
