export type ShowcaseTest = {
  slug: string
  route: string
  title: string
  archetype: string
  status: 'implemented' | 'planned'
  summary: string
  buildSpec: string
  notes: string[]
  evaluationLinks: string[]
}

export const showcaseTests: ShowcaseTest[] = [
  {
    slug: 'pulse-forge-release-copilot',
    route: '/tests/pulse-forge-release-copilot',
    title: 'Pulse Forge AI Release Copilot',
    archetype: 'developer-tool-modern',
    status: 'implemented',
    summary:
      'A calm, technical homepage for release intelligence that uses one believable product-proof shell instead of generic AI marketing.',
    buildSpec: 'data/prompts/build-specs/developer-tool-modern-ai-release-copilot.json',
    notes: [
      'Built as the first coded prototype in the new showcase app.',
      'Optimized for product truth, clear CTA hierarchy, and restrained motion.'
    ],
    evaluationLinks: [
      'data/evaluations/first-builder-test-build-notes.md',
      'data/evaluations/first-builder-test-review.md',
      'data/evaluations/first-builder-test-implementation-review.md'
    ]
  },
  {
    slug: 'northstar-team-workspace',
    route: '/tests/northstar-team-workspace',
    title: 'Northstar Team Workspace',
    archetype: 'product-ui-system',
    status: 'implemented',
    summary:
      'A brighter modular workspace homepage that proves the same build-review loop can work outside technical dark-theme products.',
    buildSpec: 'data/prompts/build-specs/product-ui-system-team-workspace.json',
    notes: [
      'Implements the second archetype as a fully navigable showcase page.',
      'Uses modular cards, workflow switching, and a lightweight savings calculator.'
    ],
    evaluationLinks: [
      'data/evaluations/second-builder-test-build-notes.md',
      'data/evaluations/second-builder-test-review.md'
    ]
  }
]

export const testRouteMap = new Map(showcaseTests.map((test) => [test.route, test]))
