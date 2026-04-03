<script lang="ts">
  import TestCard from '../components/TestCard.svelte'
  import type { ShowcaseTest } from '../tests/registry'

  export let tests: ShowcaseTest[]
  export let onNavigate: (path: string) => void

  const stats = [
    { value: '5', label: 'researched source sites' },
    { value: '10', label: 'starter reusable patterns' },
    { value: '3', label: 'archetypes in the current library' },
    { value: '2', label: 'implemented builder tests' }
  ]
</script>

<section class="showcase-shell pb-20 pt-12 sm:pt-16">
  <div class="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_32px_120px_rgba(2,6,23,0.55)] backdrop-blur sm:p-10 lg:p-14">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_24%)]"></div>
    <div class="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
      <div>
        <p class="font-mono text-[0.76rem] uppercase tracking-[0.26em] text-cyan-200/80">UI Sensei showcase</p>
        <h1 class="mt-4 max-w-4xl font-display text-4xl text-white sm:text-5xl lg:text-6xl">View every builder test as a real homepage, not a disconnected prototype.</h1>
        <p class="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          This app is the new implementation surface for research-driven builder tests. Each route is tied back to an archetype, a build spec, and its evaluation artifacts so the design system can improve from real pages instead of markdown alone.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
          <span class="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">Vite + Svelte</span>
          <span class="rounded-full border border-white/10 bg-white/6 px-4 py-2">Tailwind</span>
          <span class="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2">Research-guided builds</span>
        </div>
      </div>

      <div class="grid gap-4 rounded-[28px] border border-white/10 bg-white/4 p-5 sm:grid-cols-2">
        {#each stats as stat}
          <div class="rounded-[22px] border border-white/8 bg-slate-950/70 p-5">
            <p class="font-display text-4xl text-white">{stat.value}</p>
            <p class="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <section class="mt-10">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-slate-400">Implemented tests</p>
        <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl">Browse the current comparison set.</h2>
      </div>
      <p class="max-w-xl text-sm leading-7 text-slate-400">
        Each card maps directly to one archetype and build spec. Future tests can be added to the registry and will appear here automatically.
      </p>
    </div>

    <div class="mt-8 grid gap-5 xl:grid-cols-2">
      {#each tests as test}
        <TestCard {test} {onNavigate} />
      {/each}
    </div>
  </section>
</section>
