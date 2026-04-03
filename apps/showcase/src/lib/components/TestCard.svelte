<script lang="ts">
  import type { ShowcaseTest } from '../tests/registry'

  export let test: ShowcaseTest
  export let onNavigate: (path: string) => void

  function handleClick(event: MouseEvent) {
    event.preventDefault()
    onNavigate(test.route)
  }
</script>

<article class="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.42)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/18 hover:bg-slate-950/84">
  <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"></div>
  <div class="flex items-start justify-between gap-4">
    <div>
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">{test.archetype}</p>
      <h3 class="mt-3 font-display text-2xl text-white">{test.title}</h3>
    </div>
    <span class={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${test.status === 'implemented' ? 'bg-emerald-400/14 text-emerald-200' : 'bg-amber-400/14 text-amber-100'}`}>
      {test.status}
    </span>
  </div>

  <p class="mt-4 max-w-xl text-sm leading-7 text-slate-300">{test.summary}</p>

  <ul class="mt-5 space-y-2 text-sm text-slate-400">
    {#each test.notes as note}
      <li class="flex items-start gap-2">
        <span class="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
        <span>{note}</span>
      </li>
    {/each}
  </ul>

  <div class="mt-6 flex flex-wrap items-center gap-3">
    <a href={test.route} on:click={handleClick} class="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition group-hover:bg-cyan-200">
      Open homepage
    </a>
    <span class="text-xs uppercase tracking-[0.18em] text-slate-500">{test.buildSpec}</span>
  </div>
</article>
