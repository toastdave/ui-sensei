<script lang="ts">
  export let eyebrow: string
  export let title: string
  export let summary: string
  export let accentClass = 'from-cyan-300/25 via-sky-300/18 to-transparent'
</script>

<div class={`relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.5)] sm:p-10 ${accentClass}`}>
  <div class="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-transparent"></div>
  <div class="relative">
    <p class="font-mono text-[0.74rem] uppercase tracking-[0.26em] text-cyan-200/80">{eyebrow}</p>
    <h1 class="mt-4 max-w-4xl font-display text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
    <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{summary}</p>
  </div>
</div>
