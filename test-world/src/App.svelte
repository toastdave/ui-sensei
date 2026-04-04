<script lang="ts">
  type Feature = {
    name: string
    eyebrow: string
    headline: string
    description: string
    points: string[]
    command: string
    metricLabel: string
    metricValue: string
  }

  const features: Feature[] = [
    {
      name: 'Release intelligence',
      eyebrow: 'Before code hits production',
      headline: 'Catch unstable test behavior before it burns a release window.',
      description:
        'Test World correlates flaky suites, diff risk, and ownership so teams can see which merges are safe, noisy, or likely to regress.',
      points: ['Flake score per suite', 'Diff-aware risk snapshots', 'Owner routing with audit trail'],
      command: 'tw inspect checkout.spec.ts --last 30 runs',
      metricLabel: 'Risk delta',
      metricValue: '+18% confidence',
    },
    {
      name: 'Traceable failures',
      eyebrow: 'When failures do happen',
      headline: 'Turn a red build into a clean story with traces, logs, and replay context.',
      description:
        'Every failed run is grouped into a readable incident surface with browser traces, network drift, and the exact change that tipped the suite over.',
      points: ['Replay-ready trace bundles', 'Grouped incidents by signature', 'Network and console drift capture'],
      command: 'tw replay run_8H2X9 --browser chromium',
      metricLabel: 'Time to root cause',
      metricValue: '11 min median',
    },
    {
      name: 'Confidence routing',
      eyebrow: 'Across the whole org',
      headline: 'Route test outcomes to the people who can fix them while the context is still fresh.',
      description:
        'From feature teams to platform ops, Test World sends the right signal to the right channel with ownership, severity, and release impact already attached.',
      points: ['Slack and incident routing', 'Severity-aware policies', 'Weekly confidence reports'],
      command: 'tw report --team growth --window 7d',
      metricLabel: 'Signal delivered',
      metricValue: '98.2% routed cleanly',
    },
  ]

  const logos = ['Northstar', 'Helio', 'PulseGrid', 'Foundry OS', 'Circuit Labs']

  const sectionEyebrow = 'mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-400'
  const panelSurface =
    'rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,hsla(243,22%,16%,0.75),hsla(244,26%,11%,0.86))] shadow-[0_16px_56px_hsla(240,40%,4%,0.28)]'
  const subtlePanel = 'rounded-[18px] border border-white/10 bg-white/[0.04]'
  const buttonBase =
    'inline-flex min-h-11 items-center justify-center rounded-xl border px-4 text-sm font-medium transition duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
  const secondaryButton = `${buttonBase} border-white/10 bg-white/5 text-slate-100 hover:border-white/20`
  const tertiaryButton = `${buttonBase} border-transparent px-0 text-slate-300 hover:border-transparent`
  const primaryButton = `${buttonBase} border-transparent bg-[linear-gradient(135deg,hsl(267,78%,64%),hsl(309,79%,71%))] text-[hsl(250,35%,7%)] shadow-[0_18px_48px_hsla(267,78%,64%,0.28)]`

  let activeFeature = 0
</script>

<svelte:head>
  <title>Test World | Release confidence for serious teams</title>
  <meta
    name="description"
    content="Test World is a premium QA intelligence platform that helps teams ship faster with flake detection, replayable traces, and release confidence signals."
  />
</svelte:head>

<div class="mx-auto my-2.5 w-[min(100%-18px,1200px)] overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,hsla(245,24%,12%,0.74),hsla(243,28%,9%,0.96))] shadow-[0_24px_90px_hsla(240,40%,4%,0.45)] md:my-5 md:w-[min(100%-32px,1200px)] md:rounded-[24px]">
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsla(0,0%,100%,0.06),transparent_14%)]"></div>

  <header class="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[hsla(244,23%,10%,0.64)] px-[22px] py-4 backdrop-blur-[22px] xl:flex-nowrap xl:gap-6 xl:px-7 xl:py-[18px]">
    <a class="flex min-w-0 items-center gap-3" href="#hero" aria-label="Test World home">
      <span class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[linear-gradient(135deg,hsla(267,78%,64%,0.5),hsla(196,92%,61%,0.28))] text-[13px] font-extrabold tracking-[0.12em] text-white shadow-[inset_0_1px_0_hsla(0,0%,100%,0.16)]">
        TW
      </span>
      <span class="flex flex-col gap-0.5">
        <strong class="text-[15px] font-bold text-white">Test World</strong>
        <span class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Release confidence platform
        </span>
      </span>
    </a>

    <nav class="flex w-full items-center justify-between gap-3 xl:w-auto xl:justify-start" aria-label="Primary">
      <div class="flex items-center gap-3 md:gap-4">
        <a class="text-sm text-slate-400 transition hover:text-white focus-visible:text-white" href="#platform">
          Platform
        </a>
        <a class="text-sm text-slate-400 transition hover:text-white focus-visible:text-white" href="#proof">
          Proof
        </a>
        <a class="text-sm text-slate-400 transition hover:text-white focus-visible:text-white" href="#launch">
          Launch
        </a>
      </div>

      <div class="hidden items-center gap-3 lg:flex xl:hidden">
        <span class="rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
          99.982% run capture
        </span>
      </div>
    </nav>

    <div class="flex w-full flex-col items-stretch gap-3 md:flex-row md:justify-between xl:w-auto xl:flex-row xl:items-center xl:justify-start">
      <span class="rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
        99.982% run capture
      </span>
      <a class={secondaryButton} href="#platform">See the system</a>
    </div>
  </header>

  <main class="relative z-[1]">
    <section
      id="hero"
      class="grid gap-8 px-[22px] pb-12 pt-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-7 xl:pb-12 xl:pt-[72px]"
      style="background: radial-gradient(circle at top left, hsla(267, 78%, 64%, 0.2), transparent 28%), radial-gradient(circle at 80% 10%, hsla(196, 92%, 61%, 0.16), transparent 24%), linear-gradient(180deg, hsl(245 30% 10%), hsl(245 32% 7%));"
    >
      <div class="py-0 xl:py-5">
        <p class={sectionEyebrow}>Testing that feels operational, not ornamental</p>
        <h1 class="max-w-[12ch] font-serif text-[clamp(2.9rem,14vw,4.3rem)] leading-[0.94] tracking-[-0.05em] text-white xl:max-w-[10ch] xl:text-[clamp(3.5rem,7vw,5.8rem)]">
          Ship with a
          <span class="block text-[hsl(312,94%,88%)]">confidence signal</span>
          your whole team can trust.
        </h1>
        <p class="mt-6 max-w-[38rem] text-lg text-slate-400">
          Test World turns flaky suites, failed runs, and release anxiety into one clear operating
          surface for engineering teams that need to move fast without guessing.
        </p>

        <div class="mt-7 flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center">
          <a class={primaryButton} href="#launch">Start a release room</a>
          <a class={tertiaryButton} href="#proof">View reliability proof</a>
        </div>

        <div class="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div class={`${panelSurface} rounded-2xl p-4`}>
            <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">5 sec</span>
            <p class="mt-2 text-sm text-slate-400">Know whether the branch is safe.</p>
          </div>
          <div class={`${panelSurface} rounded-2xl p-4`}>
            <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">20 sec</span>
            <p class="mt-2 text-sm text-slate-400">
              See what changed, who owns it, and why it failed.
            </p>
          </div>
          <div class={`${panelSurface} rounded-2xl p-4`}>
            <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">60 sec</span>
            <p class="mt-2 text-sm text-slate-400">
              Leave the incident with a clean replay trail and next action.
            </p>
          </div>
        </div>
      </div>

      <div class="relative min-h-[auto] pt-10 xl:min-h-[620px] xl:pt-[42px]" aria-label="Test World product preview">
        <div class="pointer-events-none absolute left-[18px] top-8 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,hsla(267,78%,64%,0.28),transparent_68%)] blur-[10px]"></div>
        <div class="pointer-events-none absolute bottom-[42px] right-3 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,hsla(196,92%,61%,0.18),transparent_72%)] blur-[10px]"></div>

        <div class="relative z-[1] ml-auto flex w-full max-w-[460px] items-center gap-3 rounded-2xl border border-white/10 bg-[hsla(243,23%,12%,0.92)] px-3.5 py-3">
          <span class="inline-flex gap-1.5">
            <i class="h-2 w-2 rounded-full bg-white/20"></i>
            <i class="h-2 w-2 rounded-full bg-white/20"></i>
            <i class="h-2 w-2 rounded-full bg-white/20"></i>
          </span>
          <code class="font-mono text-xs text-slate-300">
            tw releases inspect --env production --window 24h
          </code>
        </div>

        <div class={`${panelSurface} relative mt-[18px] overflow-hidden rounded-[26px] p-6`}>
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,hsla(267,78%,64%,0.08),transparent_26%),linear-gradient(315deg,hsla(196,92%,61%,0.08),transparent_20%)]"></div>

          <div class="relative z-[1] flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p class="mb-1.5 text-sm text-slate-400">Release room</p>
              <strong class="text-[clamp(1.9rem,3vw,3rem)] leading-[1.04] tracking-[-0.04em] text-white">
                Checkout flow / `prod-eu-4`
              </strong>
            </div>
            <span class="text-[15px] text-emerald-400">91.4 confidence</span>
          </div>

          <div class="relative z-[1] mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <article class={subtlePanel}>
              <div class="p-4">
                <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Runs analyzed</span>
                <strong class="mt-2 block text-[1.75rem] leading-none text-white">4,892</strong>
                <p class="mt-1.5 text-sm text-slate-400">Across web, api, and mobile smoke lanes</p>
              </div>
            </article>
            <article class={subtlePanel}>
              <div class="p-4">
                <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Flake drift</span>
                <strong class="mt-2 block text-[1.75rem] leading-none text-white">-37%</strong>
                <p class="mt-1.5 text-sm text-slate-400">
                  Stabilized after quarantining 2 noisy suites
                </p>
              </div>
            </article>
            <article class={subtlePanel}>
              <div class="p-4">
                <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Blocked merges</span>
                <strong class="mt-2 block text-[1.75rem] leading-none text-white">03</strong>
                <p class="mt-1.5 text-sm text-slate-400">All assigned with replay bundles attached</p>
              </div>
            </article>
          </div>

          <div class="relative z-[1] mt-5 rounded-[20px] border border-white/10 bg-white/[0.03] p-[18px]">
            <div class="mb-4 flex flex-col items-start justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:flex-row md:items-center">
              <span>Failure timeline</span>
              <span>live grouping</span>
            </div>

            <div class="grid gap-2.5" aria-hidden="true">
              <span class="relative block h-2.5 overflow-hidden rounded-full bg-[linear-gradient(90deg,hsla(245,20%,100%,0.08),hsla(245,20%,100%,0.02))] before:absolute before:inset-y-0 before:left-0 before:w-[64%] before:rounded-full before:bg-[linear-gradient(90deg,hsl(267,78%,64%),hsl(309,79%,71%))]"></span>
              <span class="relative block h-2.5 overflow-hidden rounded-full bg-[linear-gradient(90deg,hsla(245,20%,100%,0.08),hsla(245,20%,100%,0.02))] before:absolute before:inset-y-0 before:left-0 before:w-[82%] before:rounded-full before:bg-[linear-gradient(90deg,hsl(196,92%,61%),hsl(211,95%,71%))]"></span>
              <span class="relative block h-2.5 overflow-hidden rounded-full bg-[linear-gradient(90deg,hsla(245,20%,100%,0.08),hsla(245,20%,100%,0.02))] before:absolute before:inset-y-0 before:left-0 before:w-[41%] before:rounded-full before:bg-[linear-gradient(90deg,hsl(335,73%,60%),hsl(312,76%,69%))]"></span>
            </div>

            <div class="mt-[18px] grid gap-2.5">
              <div class="grid gap-1 border-l border-white/20 bg-white/[0.03] px-[14px] py-3">
                <strong class="text-sm text-white">auth/session.spec.ts</strong>
                <span class="text-sm text-slate-400">Console drift detected after token refresh</span>
              </div>
              <div class="grid gap-1 border-l border-white/20 bg-white/[0.03] px-[14px] py-3">
                <strong class="text-sm text-white">cart/reprice.spec.ts</strong>
                <span class="text-sm text-slate-400">
                  API mismatch introduced by regional discount flag
                </span>
              </div>
              <div class="grid gap-1 border-l border-white/20 bg-white/[0.03] px-[14px] py-3">
                <strong class="text-sm text-white">payments/3ds.spec.ts</strong>
                <span class="text-sm text-slate-400">Replay available from mobile safari lane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-[18px] border-y border-white/10 px-[22px] py-8 xl:px-7" aria-label="Customer signals">
      <p class="m-0 text-[13px] uppercase tracking-[0.08em] text-slate-400">
        Trusted by teams that treat QA as production infrastructure
      </p>
      <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {#each logos as logo}
          <span class="rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-4 text-center font-semibold text-slate-300">
            {logo}
          </span>
        {/each}
      </div>
    </section>

    <section id="platform" class="px-[22px] py-8 xl:px-7">
      <div class="mb-[26px] grid max-w-[760px] gap-3">
        <p class={sectionEyebrow}>Product story</p>
        <h2 class="font-serif text-[clamp(1.9rem,3vw,3rem)] leading-[1.04] tracking-[-0.04em] text-white">
          One platform for the moments that usually live across six tools.
        </h2>
        <p class="text-slate-400">
          The active lane below mirrors how high-performing release teams work: inspect risk,
          isolate failures, then route the next action without losing trace context.
        </p>
      </div>

      <div class="grid gap-[18px] xl:grid-cols-[minmax(250px,290px)_minmax(0,1fr)]">
        <div class="grid gap-2.5" role="tablist" aria-label="Platform capabilities">
          {#each features as feature, index}
            <button
              type="button"
              role="tab"
              aria-selected={index === activeFeature}
              aria-controls="feature-panel"
              class={`${index === activeFeature ? 'border-[hsla(267,78%,64%,0.32)] bg-[linear-gradient(180deg,hsla(267,78%,64%,0.16),hsla(243,16%,100%,0.04))]' : 'border-white/10 bg-white/[0.03]'} rounded-[18px] border px-[18px] py-[18px] text-left text-slate-300 transition duration-200 hover:-translate-y-px hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400`}
              onclick={() => (activeFeature = index)}
            >
              <span class="block text-[15px] font-bold text-white">{feature.name}</span>
              <small class="mt-1.5 block text-sm text-slate-400">{feature.eyebrow}</small>
            </button>
          {/each}
        </div>

        <div id="feature-panel" class={`${panelSurface} grid gap-6 rounded-[24px] p-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)]`} role="tabpanel" aria-label={features[activeFeature].name}>
          <div>
            <p class={sectionEyebrow}>{features[activeFeature].eyebrow}</p>
            <h3 class="text-[clamp(1.9rem,3vw,3rem)] leading-[1.04] tracking-[-0.04em] text-white">
              {features[activeFeature].headline}
            </h3>
            <p class="mt-4 text-slate-400">{features[activeFeature].description}</p>

            <ul class="mt-5 grid gap-2.5">
              {#each features[activeFeature].points as point}
                <li class="rounded-[14px] border border-white/10 bg-white/[0.03] px-[14px] py-3 text-sm text-white">
                  {point}
                </li>
              {/each}
            </ul>
          </div>

          <div class="grid gap-3">
            <div class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[hsla(243,23%,12%,0.92)] px-3.5 py-3">
              <span class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                terminal
              </span>
              <code class="font-mono text-xs text-slate-300">{features[activeFeature].command}</code>
            </div>

            <div class="grid gap-3">
              <div class={subtlePanel}>
                <div class="p-4">
                  <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">
                    {features[activeFeature].metricLabel}
                  </span>
                  <strong class="mt-2 block text-[clamp(1.9rem,4vw,2.7rem)] leading-none text-white">
                    {features[activeFeature].metricValue}
                  </strong>
                </div>
              </div>
              <div class={subtlePanel}>
                <div class="p-4">
                  <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">
                    Replay readiness
                  </span>
                  <strong class="mt-2 block text-lg text-white">Attached to every failed run</strong>
                </div>
              </div>
              <div class={subtlePanel}>
                <div class="p-4">
                  <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">
                    Release policy
                  </span>
                  <strong class="mt-2 block text-lg text-white">
                    Block only when confidence falls under 86
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="proof" class="grid gap-[18px] px-[22px] pb-8 xl:grid-cols-[1.3fr_repeat(3,1fr)] xl:px-7">
      <article class={`${panelSurface} rounded-[22px] p-[22px]`}>
        <p class={sectionEyebrow}>Operational proof</p>
        <blockquote class="my-5 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.03em] text-white">
          “We stopped arguing about whether the build was flaky or genuinely broken. Test World
          made the answer visible in one screen.”
        </blockquote>
        <p class="text-slate-400">Mara Ivers, VP Engineering at Northstar</p>
      </article>

      <article class={`${panelSurface} rounded-[22px] p-[22px]`}>
        <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Release rollback rate</span>
        <strong class="mt-2 block text-[clamp(1.9rem,4vw,2.7rem)] leading-none text-white">Down 42%</strong>
        <p class="mt-3 text-slate-400">
          Teams that adopted confidence routing cut late-stage rollback events within 30 days.
        </p>
      </article>

      <article class={`${panelSurface} rounded-[22px] p-[22px]`}>
        <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Flake triage time</span>
        <strong class="mt-2 block text-[clamp(1.9rem,4vw,2.7rem)] leading-none text-white">2.6x faster</strong>
        <p class="mt-3 text-slate-400">
          Replay traces and grouped failures remove the first half hour of detective work.
        </p>
      </article>

      <article class={`${panelSurface} rounded-[22px] p-[22px]`}>
        <span class="block text-xs uppercase tracking-[0.08em] text-slate-300">Signal density</span>
        <strong class="mt-2 block text-[clamp(1.9rem,4vw,2.7rem)] leading-none text-white">
          Only 1 in 14 alerts escalated
        </strong>
        <p class="mt-3 text-slate-400">
          Less noise, better routing, and cleaner ownership for busy engineering organizations.
        </p>
      </article>
    </section>

    <section id="launch" class={`${panelSurface} mx-[22px] mb-7 grid gap-6 rounded-[24px] p-6 xl:mx-7 xl:grid-cols-[minmax(0,1.2fr)_auto]`}>
      <div>
        <p class={sectionEyebrow}>Launch with intent</p>
        <h2 class="font-serif text-[clamp(1.9rem,3vw,3rem)] leading-[1.04] tracking-[-0.04em] text-white">
          Build a release room that feels calmer than your current incident channel.
        </h2>
        <p class="mt-4 text-slate-400">
          Bring in traces, owners, and environment-aware policies in one week. Keep your team in
          Slack, GitHub, and CI. Let Test World hold the reliability layer together.
        </p>
      </div>

      <div class="flex flex-col items-stretch gap-3 md:flex-row xl:flex-col">
        <a class={primaryButton} href="mailto:hello@testworld.app">Book a live walkthrough</a>
        <a class={secondaryButton} href="mailto:hello@testworld.app?subject=Test%20World%20sandbox">
          Request a sandbox
        </a>
      </div>
    </section>
  </main>

  <footer class="grid gap-[18px] border-t border-white/10 bg-[hsla(244,25%,9%,0.78)] px-[22px] py-6 pb-7 xl:grid-cols-[1.3fr_repeat(3,1fr)] xl:px-7">
    <div class="grid content-start gap-2.5">
      <strong class="text-sm text-white">Test World</strong>
      <p class="text-sm text-slate-400">Confidence infrastructure for teams that ship under pressure.</p>
    </div>

    <div class="grid content-start gap-2.5">
      <span class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Product</span>
      <a class="text-sm text-slate-400 transition hover:text-white" href="#platform">Platform</a>
      <a class="text-sm text-slate-400 transition hover:text-white" href="#proof">Proof</a>
      <a class="text-sm text-slate-400 transition hover:text-white" href="#launch">Launch</a>
    </div>

    <div class="grid content-start gap-2.5">
      <span class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Trust</span>
      <p class="text-sm text-slate-400">SOC 2 in progress</p>
      <p class="text-sm text-slate-400">Status page ready</p>
      <p class="text-sm text-slate-400">Weekly changelog</p>
    </div>

    <div class="grid content-start gap-2.5">
      <span class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Contact</span>
      <a class="text-sm text-slate-400 transition hover:text-white" href="mailto:hello@testworld.app">
        hello@testworld.app
      </a>
      <p class="text-sm text-slate-400">Remote-first across London and New York</p>
    </div>
  </footer>
</div>
