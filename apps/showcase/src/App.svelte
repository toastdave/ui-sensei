<script lang="ts">
  import { onMount } from 'svelte'
  import HomePage from './lib/pages/HomePage.svelte'
  import NavLink from './lib/components/NavLink.svelte'
  import NorthstarPage from './lib/pages/NorthstarPage.svelte'
  import PulseForgePage from './lib/pages/PulseForgePage.svelte'
  import { showcaseTests, testRouteMap } from './lib/tests/registry'

  const HOME_ROUTE = '/'
  let currentPath = HOME_ROUTE

  function normalize(path: string) {
    if (!path || path === '') return HOME_ROUTE
    if (path.endsWith('/') && path !== '/') return path.slice(0, -1)
    return path
  }

  function navigate(path: string) {
    const next = normalize(path)
    history.pushState({}, '', next)
    currentPath = next
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function syncRoute() {
    const next = normalize(window.location.pathname)
    currentPath = next === HOME_ROUTE || testRouteMap.has(next) ? next : HOME_ROUTE
  }

  $: activeTitle = currentPath === HOME_ROUTE ? 'UI Sensei Showcase' : testRouteMap.get(currentPath)?.title ?? 'UI Sensei Showcase'

  onMount(() => {
    syncRoute()
    const handler = () => syncRoute()
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  })
</script>

<svelte:head>
  <title>{activeTitle}</title>
</svelte:head>

<div class="relative min-h-screen">
  <header class="sticky top-0 z-40 border-b border-white/8 bg-slate-950/72 backdrop-blur-xl">
    <div class="showcase-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
      <button type="button" class="flex items-center gap-3 text-left" on:click={() => navigate(HOME_ROUTE)}>
        <span class="inline-grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 font-display text-sm font-bold tracking-[0.18em] text-cyan-100">UI</span>
        <span>
          <span class="block font-display text-lg text-white">UI Sensei Showcase</span>
          <span class="block text-sm text-slate-400">Builder tests rendered as real pages</span>
        </span>
      </button>

      <nav class="flex flex-wrap items-center gap-2 rounded-full border border-white/8 bg-white/4 p-1.5">
        <NavLink href="/" label="Home" active={currentPath === '/'} onNavigate={navigate} />
        {#each showcaseTests as test}
          <NavLink href={test.route} label={test.title} active={currentPath === test.route} onNavigate={navigate} />
        {/each}
      </nav>
    </div>
  </header>

  {#if currentPath === '/'}
    <HomePage tests={showcaseTests} onNavigate={navigate} />
  {:else if currentPath === '/tests/pulse-forge-release-copilot'}
    <PulseForgePage />
  {:else if currentPath === '/tests/northstar-team-workspace'}
    <NorthstarPage />
  {/if}

  <footer class="border-t border-white/8 bg-slate-950/72 py-6 backdrop-blur-xl">
    <div class="showcase-shell flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>Research outputs live in `data/`; the showcase app is the canonical place to compare implemented tests.</p>
      <button type="button" class="text-left font-medium text-cyan-200 transition hover:text-white" on:click={() => navigate('/')}>Back to showcase home</button>
    </div>
  </footer>
</div>
