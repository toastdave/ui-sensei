<script lang="ts">
  import PageHeader from '../components/PageHeader.svelte'

  const metrics = [
    { label: 'PRs summarized', detail: 'Release context lands before the first approval meeting.' },
    { label: 'Risk checks surfaced', detail: 'Warnings stay visible beside rollout decisions.' },
    { label: 'Rollback steps attached', detail: 'Operators keep one fallback path in the same workspace.' }
  ]

  const tabs = [
    {
      id: 'summaries',
      label: 'Summaries',
      title: 'Turn merged pull requests into one readable release story.',
      body:
        'Pulse Forge groups commits by customer impact, service area, and risk so reviewers start from context instead of detective work.',
      bullets: [
        'Cluster changes by workflow or service ownership',
        'Highlight risky scope growth before approval',
        'Drop plain-language digests into Slack and Jira'
      ],
      panel: 'release: v2.8.0\nservices: billing, auth, notifications\ncustomer impact: medium\nmain risk: billing retry behavior changed\nnext reviewer: platform-oncall'
    },
    {
      id: 'risks',
      label: 'Risk checks',
      title: 'Flag risky deploys before rollout, not after incident review.',
      body:
        'The risk view compares changed services, deploy history, and owner readiness so approvals stay grounded in actual release state.',
      bullets: [
        'Warn when blast radius crosses trusted services',
        'Surface missing test or canary notes inline',
        'Give engineering and product one shared release view'
      ],
      panel: 'Canary healthy\nBilling queue changed\nRollback doc linked\nAlert threshold updated'
    },
    {
      id: 'rollouts',
      label: 'Rollout plans',
      title: 'Keep every deploy window attached to owners, checkpoints, and rollback paths.',
      body:
        'Shift from scattered deploy notes to one release plan that updates as services move from canary to full rollout.',
      bullets: [
        'Assign owners by phase instead of by repo only',
        'Attach rollback commands and on-call contacts',
        'Track progress from preflight to post-release verification'
      ],
      panel: '18:00 UTC  Canary deploy\n18:30 UTC  Full rollout\n19:15 UTC  Rollback branch held open'
    },
    {
      id: 'notes',
      label: 'Release notes',
      title: 'Generate internal and external release notes from the same source.',
      body:
        'Draft customer-facing notes, internal handoff summaries, and support recaps without copying details across multiple tools.',
      bullets: [
        'Separate internal risk context from customer language',
        'Save reusable note templates by product line',
        'Export to docs, email, or changelog workflows'
      ],
      panel: 'Improved billing retries, cleaner Slack notification preferences, and a safer permission audit trail for admin actions.'
    }
  ]

  let activeTab = tabs[0]

  function setTab(id: string) {
    const next = tabs.find((tab) => tab.id === id)
    if (next) activeTab = next
  }

  const releaseModes = [
    {
      name: 'Starter',
      detail: 'For one engineering squad replacing Slack checklists and ad-hoc release docs.',
      cta: 'Start free'
    },
    {
      name: 'Scale',
      detail: 'For teams that need approvals, audit history, and multi-service release visibility.',
      cta: 'See rollout controls'
    },
    {
      name: 'Enterprise',
      detail: 'For regulated orgs that need SSO, role policies, and long-lived release evidence.',
      cta: 'Talk to an engineer'
    }
  ]
</script>

<section class="showcase-shell pb-20 pt-10">
  <PageHeader
    eyebrow="Developer-tool-modern test"
    title="Pulse Forge AI Release Copilot"
    summary="A release-night homepage that uses one believable product shell, restrained motion, and calm technical copy to make shipping safer without falling into generic AI SaaS language."
  />

  <div class="mt-8 grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
    <div class="max-w-xl">
      <p class="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-cyan-200/80">AI release copilot</p>
      <h2 class="mt-4 font-display text-4xl text-white sm:text-5xl">Ship every release with context, not guesswork.</h2>
      <p class="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        Pulse Forge turns pull requests, risk signals, and rollout checklists into one release workspace so engineering teams can ship faster without losing confidence.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950">Start free</button>
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white">See a release demo</button>
      </div>
      <p class="mt-4 text-sm leading-7 text-slate-400">Works with GitHub, GitLab, Linear, Slack, and Datadog.</p>
    </div>

    <div class="relative overflow-hidden rounded-[32px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(7,10,23,0.98))] p-5 shadow-[0_28px_90px_rgba(2,6,23,0.55)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_32%)]"></div>
      <div class="relative">
        <div class="flex items-center justify-between gap-3 rounded-[20px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-300">
          <span class="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/12 px-3 py-1 font-medium text-cyan-100">Release workspace</span>
          <span>May 15 deploy window</span>
        </div>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <section class="sm:col-span-2 rounded-[24px] border border-white/8 bg-slate-900/70 p-5">
            <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Release summary</p>
            <h3 class="mt-3 font-display text-2xl text-white">v2.8.0 rollout</h3>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              14 merged pull requests touch permissions, billing, and Slack notifications. Pulse Forge highlights two areas that need extra rollout checks before greenlighting deploy.
            </p>
            <div class="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <span class="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-3 py-2 text-cyan-100">5 checks passed</span>
              <span class="rounded-full border border-amber-300/25 bg-amber-300/12 px-3 py-2 text-amber-100">2 warnings</span>
            </div>
          </section>

          <section class="rounded-[24px] border border-white/8 bg-slate-900/72 p-5">
            <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Risk checklist</p>
            <ul class="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-amber-300"></span><span>Billing webhook retry queue changed</span></li>
              <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-amber-300"></span><span>Slack rate-limit threshold raised</span></li>
              <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-emerald-300"></span><span>Canary environment healthy</span></li>
            </ul>
          </section>

          <section class="rounded-[24px] border border-white/8 bg-slate-900/72 p-5">
            <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Rollout owners</p>
            <div class="mt-4 flex gap-2">
              {#each ['AM', 'JT', 'LK'] as owner}
                <span class="inline-grid h-10 w-10 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/14 text-sm font-semibold text-white">{owner}</span>
              {/each}
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-400">Primary deploy owner: Alicia Mendez</p>
          </section>
        </div>
      </div>
    </div>
  </div>

  <section class="mt-8 grid gap-4 lg:grid-cols-3">
    {#each metrics as metric}
      <article class="rounded-[26px] border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.34)]">
        <p class="font-display text-xl text-white">{metric.label}</p>
        <p class="mt-3 text-sm leading-7 text-slate-400">{metric.detail}</p>
      </article>
    {/each}
  </section>

  <section class="mt-8 rounded-[32px] border border-white/10 bg-slate-950/62 p-6 shadow-[0_26px_90px_rgba(2,6,23,0.4)] sm:p-8">
    <div class="max-w-2xl">
      <p class="font-mono text-[0.74rem] uppercase tracking-[0.24em] text-cyan-200/80">One release workspace</p>
      <h2 class="mt-4 font-display text-3xl text-white sm:text-4xl">Four critical jobs, one calm handoff.</h2>
      <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">Keep release notes, risk checks, rollout plans, and owner coordination inside one flow so nothing gets lost between merge and deploy.</p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <div class="grid gap-3">
        {#each tabs as tab}
          <button
            type="button"
            on:click={() => setTab(tab.id)}
            class={`min-h-13 rounded-[18px] border px-4 py-3 text-left text-sm font-medium transition ${
              activeTab.id === tab.id
                ? 'border-cyan-300/35 bg-cyan-300/12 text-white'
                : 'border-white/10 bg-white/4 text-slate-300 hover:border-white/18 hover:bg-white/7'
            }`}
          >
            {tab.label}
          </button>
        {/each}
      </div>

      <div class="grid gap-4 rounded-[28px] border border-white/10 bg-white/4 p-5 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">{activeTab.label}</p>
          <h3 class="mt-3 font-display text-2xl text-white">{activeTab.title}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-300">{activeTab.body}</p>
          <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {#each activeTab.bullets as bullet}
              <li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-cyan-300"></span><span>{bullet}</span></li>
            {/each}
          </ul>
        </div>
        <div class="rounded-[24px] border border-white/8 bg-slate-950/75 p-5">
          <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Active pane</p>
          <pre class="mt-4 whitespace-pre-wrap font-mono text-sm leading-7 text-slate-200">{activeTab.panel}</pre>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-8 grid gap-4 lg:grid-cols-3">
    {#each [
      ['Collect signal', 'Pull requests, incidents, ownership, and linked tickets collapse into one release digest.'],
      ['Approve with context', 'Risk checks, rollout dependencies, and operator notes live beside the deploy decision.'],
      ['Ship with a rollback plan', 'Every release keeps one owner, one launch window, and one visible fallback path.']
    ] as [title, copy], index}
      <article class="rounded-[26px] border border-white/10 bg-slate-950/68 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.34)]">
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-cyan-200/80">0{index + 1}</p>
        <h3 class="mt-4 font-display text-2xl text-white">{title}</h3>
        <p class="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
      </article>
    {/each}
  </section>

  <section class="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
    <article class="rounded-[28px] border border-white/10 bg-slate-950/66 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.34)]">
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Integrations</p>
      <h3 class="mt-3 font-display text-3xl text-white">Fit the release flow your team already uses.</h3>
      <div class="mt-6 flex flex-wrap gap-3">
        {#each ['GitHub', 'GitLab', 'Linear', 'Slack', 'Datadog', 'PagerDuty'] as item}
          <span class="inline-flex min-h-11 items-center rounded-[18px] border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-200">{item}</span>
        {/each}
      </div>
    </article>

    <article class="rounded-[28px] border border-white/10 bg-slate-950/66 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.34)]">
      <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Security and trust</p>
      <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-300">
        <li>SSO, audit trails, and role-aware release visibility</li>
        <li>Scoped data ingestion for repositories and issue systems</li>
        <li>Exportable approval history for internal compliance reviews</li>
      </ul>
    </article>
  </section>

  <section class="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(9,14,27,0.95),rgba(17,24,39,0.88))] p-6 shadow-[0_22px_70px_rgba(2,6,23,0.44)] sm:p-8">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Release modes</p>
        <h3 class="mt-3 font-display text-3xl text-white">Choose the control surface that matches release complexity.</h3>
        <p class="mt-4 text-sm leading-7 text-slate-300">A stronger alternative to generic pricing cards: frame plan depth around release governance, auditability, and shared ownership.</p>
      </div>
      <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Talk to an engineer</button>
    </div>
    <div class="mt-6 grid gap-4 lg:grid-cols-3">
      {#each releaseModes as mode}
        <article class="rounded-[24px] border border-white/8 bg-slate-950/70 p-5">
          <p class="font-display text-2xl text-white">{mode.name}</p>
          <p class="mt-3 text-sm leading-7 text-slate-300">{mode.detail}</p>
          <button type="button" class="mt-6 inline-flex min-h-10 items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">{mode.cta}</button>
        </article>
      {/each}
    </div>
  </section>

  <section class="mt-8 rounded-[32px] border border-white/10 bg-slate-950/62 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.42)] sm:p-8">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="max-w-2xl">
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">Start shipping calmly</p>
        <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl">Give every release a clear owner, checklist, and summary.</h2>
      </div>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950">Start free</button>
        <button type="button" class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white">Talk to an engineer</button>
      </div>
    </div>
  </section>
</section>
