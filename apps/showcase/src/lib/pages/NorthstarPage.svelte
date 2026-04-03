<script lang="ts">
  import PageHeader from '../components/PageHeader.svelte'

  const modules = [
    { title: 'Roadmaps', body: 'Keep strategic bets, milestones, and launch timing visible in one modular view.' },
    { title: 'Specs and docs', body: 'Write product briefs, decisions, and implementation notes without context leaving the workspace.' },
    { title: 'Team rituals', body: 'Turn recurring reviews, standups, and retros into lightweight reusable flows.' },
    { title: 'Launch checklists', body: 'Coordinate QA, marketing, ops, and release owners inside one launch-ready surface.' }
  ]

  const workflows = [
    {
      id: 'planning',
      label: 'Planning',
      title: 'Move from roadmap intent to scoped work without losing the original decision trail.',
      body:
        'Northstar keeps specs, milestone dates, and task handoffs anchored to one planning object instead of a chain of disconnected tools.'
    },
    {
      id: 'reviews',
      label: 'Reviews',
      title: 'Run weekly reviews from one shared operating rhythm.',
      body:
        'Agenda blocks, owner updates, and follow-ups stay linked to the same workspace the team uses the rest of the week.'
    },
    {
      id: 'launches',
      label: 'Launches',
      title: 'Coordinate launches without rebuilding the same checklist in four places.',
      body:
        'Northstar keeps launch prep, deliverables, and final sign-off in one modular plan the whole team can scan.'
    },
    {
      id: 'handoff',
      label: 'Ops handoff',
      title: 'Turn cross-team handoffs into reusable templates instead of one-off rituals.',
      body:
        'Handoff packets can preserve owners, deadlines, and open questions without dumping everyone into a generic task list.'
    }
  ]

  let activeWorkflow = workflows[0]
  let teamSize = 25
  let selectedTools = ['docs', 'tasks', 'calendar']

  const toolOptions = [
    { key: 'docs', label: 'Separate docs' },
    { key: 'tasks', label: 'Task tracker' },
    { key: 'calendar', label: 'Meeting agenda app' },
    { key: 'launch', label: 'Launch checklist board' }
  ]

  $: monthlyEstimate = Math.max(1, selectedTools.length) * teamSize * 3
  $: consolidationRange = monthlyEstimate < 240 ? 'light' : monthlyEstimate < 420 ? 'moderate' : 'high'

  function toggleTool(key: string) {
    selectedTools = selectedTools.includes(key)
      ? selectedTools.filter((item) => item !== key)
      : [...selectedTools, key]
  }
</script>

<section class="showcase-shell pb-20 pt-10">
  <PageHeader
    eyebrow="Product-ui-system test"
    title="Northstar Team Workspace"
    summary="A brighter, modular homepage that proves the builder loop can work for product-system UI too: reusable cards, selector-driven workflows, and quantified proof without falling into card soup."
    accentClass="from-blue-200/25 via-amber-200/18 to-transparent"
  />

  <div class="mt-8 grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
    <div class="max-w-xl text-slate-900">
      <p class="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-blue-700/80">Team workspace</p>
      <h2 class="mt-4 font-sora text-4xl text-slate-950 sm:text-5xl">Plan work, decisions, and rituals in one shared workspace.</h2>
      <p class="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
        Northstar helps product, design, and operations teams keep roadmaps, meeting notes, launch tasks, and weekly reviews in sync without juggling four separate systems.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Try Northstar free</button>
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">Explore workflows</button>
      </div>
    </div>

    <div class="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#fffdf9,#f3ede2)] p-5 shadow-[0_28px_90px_rgba(15,23,42,0.14)]">
      <div class="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
        <section class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Roadmap snapshot</p>
          <h3 class="mt-3 font-sora text-2xl text-slate-950">Q3 launch pulse</h3>
          <div class="mt-4 space-y-3">
            <div class="rounded-[18px] bg-blue-50 p-3 text-sm text-slate-700">Messaging refresh - in review</div>
            <div class="rounded-[18px] bg-amber-50 p-3 text-sm text-slate-700">Mobile handoff checklist - due Friday</div>
            <div class="rounded-[18px] bg-emerald-50 p-3 text-sm text-slate-700">Ops readiness sync - scheduled</div>
          </div>
        </section>
        <div class="grid gap-4">
          <section class="rounded-[24px] border border-slate-200 bg-white p-5">
            <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Weekly review</p>
            <p class="mt-3 text-sm leading-7 text-slate-700">Agenda, owners, and blockers stay linked to the same work context.</p>
          </section>
          <section class="rounded-[24px] border border-slate-200 bg-white p-5">
            <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Decision log</p>
            <p class="mt-3 text-sm leading-7 text-slate-700">Keep one visible record of what changed, why, and who signed off.</p>
          </section>
        </div>
      </div>
    </div>
  </div>

  <section class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {#each modules as module, index}
      <article class={`rounded-[28px] border p-5 shadow-[0_18px_60px_rgba(15,23,42,0.09)] ${index === 0 ? 'border-blue-200 bg-blue-50/80' : index === 1 ? 'border-amber-200 bg-amber-50/80' : 'border-slate-200 bg-white/92'}`}>
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">Module {index + 1}</p>
        <h3 class="mt-3 font-sora text-2xl text-slate-950">{module.title}</h3>
        <p class="mt-4 text-sm leading-7 text-slate-700">{module.body}</p>
        <button type="button" class="mt-5 inline-flex text-sm font-semibold text-blue-700">Explore module</button>
      </article>
    {/each}
  </section>

  <section class="mt-8 rounded-[32px] border border-slate-200 bg-white/94 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.1)] sm:p-8">
    <div class="max-w-2xl">
      <p class="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-blue-700/80">Workflow switcher</p>
      <h2 class="mt-4 font-sora text-3xl text-slate-950 sm:text-4xl">Switch between the workflows teams return to every week.</h2>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <div class="grid gap-3">
        {#each workflows as workflow}
          <button
            type="button"
            on:click={() => (activeWorkflow = workflow)}
            class={`min-h-13 rounded-[18px] border px-4 py-3 text-left text-sm font-semibold transition ${
              activeWorkflow.id === workflow.id
                ? 'border-blue-200 bg-blue-50 text-slate-950'
                : 'border-slate-200 bg-stone-50 text-slate-600 hover:border-slate-300 hover:bg-white'
            }`}
          >
            {workflow.label}
          </button>
        {/each}
      </div>

      <div class="grid gap-4 rounded-[28px] border border-slate-200 bg-stone-50 p-5 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">{activeWorkflow.label}</p>
          <h3 class="mt-3 font-sora text-2xl text-slate-950">{activeWorkflow.title}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-700">{activeWorkflow.body}</p>
        </div>
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Focused workspace</p>
          <div class="mt-4 space-y-3 text-sm text-slate-700">
            <div class="rounded-[18px] bg-slate-50 p-3">Shared agenda with assigned follow-ups</div>
            <div class="rounded-[18px] bg-slate-50 p-3">Decision context linked to roadmap items</div>
            <div class="rounded-[18px] bg-slate-50 p-3">One CTA to move from meeting to execution</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
    <article class="rounded-[32px] border border-slate-200 bg-white/94 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.1)] sm:p-8">
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Consolidation calculator</p>
      <h3 class="mt-3 font-sora text-3xl text-slate-950">Estimate whether one workspace can replace your current stack.</h3>
      <label class="mt-6 block text-sm font-semibold text-slate-700" for="team-size">Team size</label>
      <input id="team-size" class="mt-3 w-full accent-blue-600" type="range" min="5" max="80" step="5" bind:value={teamSize} />
      <p class="mt-2 text-sm text-slate-600">{teamSize} teammates currently touched by weekly planning and launch rituals</p>

      <div class="mt-6 space-y-3">
        {#each toolOptions as option}
          <label class="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={selectedTools.includes(option.key)}
              on:change={() => toggleTool(option.key)}
              class="h-4 w-4 accent-blue-600"
            />
            <span>{option.label}</span>
          </label>
        {/each}
      </div>
    </article>

    <article class="rounded-[32px] border border-blue-200 bg-blue-50/70 p-6 shadow-[0_22px_80px_rgba(20,99,255,0.08)] sm:p-8">
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Estimated consolidation level</p>
      <h3 class="mt-3 font-sora text-5xl text-slate-950">${monthlyEstimate}</h3>
      <p class="mt-3 max-w-xl text-sm leading-7 text-slate-700">
        Approximate monthly overlap value based on current team size and the number of tools Northstar could simplify. Use this as a directional planning signal, not a promise.
      </p>
      <div class="mt-6 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
        {consolidationRange} consolidation opportunity
      </div>
      <div class="mt-8 grid gap-3 sm:grid-cols-2">
        <div class="rounded-[20px] border border-white bg-white/90 p-4">
          <p class="font-semibold text-slate-950">Fewer context switches</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">Keep meeting prep, docs, and launch tasks attached to the same operating surface.</p>
        </div>
        <div class="rounded-[20px] border border-white bg-white/90 p-4">
          <p class="font-semibold text-slate-950">Cleaner team rituals</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">Replace one-off agenda docs with repeatable review templates and ownership lanes.</p>
        </div>
      </div>
    </article>
  </section>

  <section class="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
    <article class="rounded-[32px] border border-slate-200 bg-white/94 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.1)] sm:p-8">
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Trust signal</p>
      <h3 class="mt-3 font-sora text-3xl text-slate-950">Built for teams that run on recurring decisions, not one-off bursts of work.</h3>
      <div class="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
        <span class="rounded-full border border-slate-200 bg-stone-50 px-4 py-2">Product ops</span>
        <span class="rounded-full border border-slate-200 bg-stone-50 px-4 py-2">Design systems</span>
        <span class="rounded-full border border-slate-200 bg-stone-50 px-4 py-2">Launch planning</span>
      </div>
      <blockquote class="mt-6 rounded-[24px] border border-slate-200 bg-stone-50 p-5 text-sm leading-7 text-slate-700">
        “Northstar gave our weekly review one source of truth. We spend less time reconstructing context and more time actually deciding.”
      </blockquote>
    </article>

    <article class="rounded-[32px] border border-slate-200 bg-white/94 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.1)] sm:p-8">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Template gallery</p>
          <h3 class="mt-3 font-sora text-3xl text-slate-950">Browse reusable team playbooks.</h3>
        </div>
        <div class="flex gap-2">
          <button class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-stone-50 text-slate-700">&larr;</button>
          <button class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-stone-50 text-slate-700">&rarr;</button>
        </div>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-3">
        {#each ['Weekly review', 'Launch prep', 'Ops handoff'] as card}
          <div class="rounded-[24px] border border-slate-200 bg-stone-50 p-5">
            <p class="font-semibold text-slate-950">{card}</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">A reusable starting point with owners, checkpoints, and next actions built in.</p>
          </div>
        {/each}
      </div>
    </article>
  </section>

  <section class="mt-8 rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#fffef9,#efe8db)] p-6 shadow-[0_22px_80px_rgba(15,23,42,0.1)] sm:p-8">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="max-w-2xl">
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-blue-700/80">Start with one shared system</p>
        <h2 class="mt-3 font-sora text-3xl text-slate-950 sm:text-4xl">Replace scattered planning rituals with one system your team can actually maintain.</h2>
      </div>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Try Northstar free</button>
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">See templates</button>
      </div>
    </div>
  </section>
</section>
