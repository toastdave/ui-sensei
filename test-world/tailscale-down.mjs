import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { existsSync, readFileSync, unlinkSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const localPort = 42731
const tailscalePort = 42791
const pidPath = join(tmpdir(), `test-world-${localPort}.pid`)

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

const reset = spawnSync('tailscale', ['serve', `--https=${tailscalePort}`, 'off'], {
  encoding: 'utf8',
  stdio: 'pipe',
  cwd: process.cwd(),
})

const output = `${reset.stdout ?? ''}${reset.stderr ?? ''}`

if (reset.status !== 0 && !output.includes('handler does not exist')) {
  process.stdout.write(output)
  process.exit(reset.status ?? 1)
}

console.log(`Test World and Tailscale serve are down for port ${localPort}.`)
