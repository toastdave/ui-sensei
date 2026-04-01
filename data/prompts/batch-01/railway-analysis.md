# Analysis Packet: railway

## Goal

Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.

## Source Instructions

- Skill: `skills/frontend-design-researcher.md`
- Prompt: `prompts/master-research-prompt.md`

## Output Targets

- Report: `data/reports/batch-01/railway.md`
- JSON: `data/json/batch-01/railway.json`

## Research Instructions

You are running the Frontend Design Researcher skill.

Goal:
Analyze the provided website materials and extract reusable design, UX, copy, motion, rendering, accessibility, and implementation patterns. Do not clone the site. Convert findings into transferable frontend standards.

Deliverables:
1. A full research report for each site.
2. A normalized JSON summary for each site.
3. A cross-site synthesis when multiple sites are provided.
4. A list of atomic pattern candidates to add to the pattern library.
5. A final list of reusable frontend design rules.

Requirements:
- Be concrete and implementation-aware.
- Separate direct observation from inference.
- Mark uncertain areas clearly.
- Prefer rendered evidence over assumptions.
- Include accessibility and performance cautions.
- Include a section called `How to apply this without copying`.

When the evidence is incomplete, continue with best-effort analysis and state what is missing.

Output format:
- Follow the skill structure.
- Include the JSON block for each site.
- Keep reusable rules imperative and transferable.

## Site Metadata

```json
{
  "site": "railway",
  "url": "https://railway.com",
  "batch": "batch-01",
  "captured_at": "2026-04-01T19:50:10.785Z",
  "viewports": [
    "1440x900",
    "iPhone 14"
  ],
  "assets": {
    "full_page_screenshots": [
      "screenshot-desktop-full.png",
      "screenshot-mobile-full.png"
    ],
    "above_the_fold_screenshots": [
      "screenshot-desktop-hero.png"
    ],
    "mobile_screenshots": [
      "screenshot-mobile-full.png"
    ],
    "dom_snapshot": "dom-notes.md",
    "visible_text_export": "visible-text.md"
  },
  "notes": {
    "section_notes": [
      "See dom-notes.md for automated heading and section sampling.",
      "See snapshot-desktop-interactive.txt and snapshot-mobile-interactive.txt for baseline structure evidence."
    ],
    "interaction_notes": [
      "See interaction-notes.md for the baseline interaction checklist.",
      "This automated pass did not manually probe hover or click states."
    ],
    "technology_hints": [
      "No clear library signal was detected automatically; confirm animation and rendering stack manually if needed."
    ],
    "missing_evidence": [
      "Exact animation library remains unconfirmed unless obvious script references were detected.",
      "Manual probing is still recommended for hidden navigation, hover states, and motion timing."
    ]
  }
}
```

## Available Screenshots

### Desktop

- `data/captures/batch-01/railway/screenshot-desktop-hero.png`
- `data/captures/batch-01/railway/screenshot-desktop-full.png`

### Mobile

- `data/captures/batch-01/railway/screenshot-mobile-full.png`

## Visible Text

```text
Railway
Product
Developers
Enterprise
Company
Pricing
Sign in
Book a demo
Ship software peacefully

With the all-in-one intelligent cloud provider

Deploy →
Demo
frontend
frontend-prod.up.railway.app
Just now via GitHub
docs
docs-prod.up.railway.app
Just now via GitHub
admin
admin-prod.up.railway.app
Just now via GitHub
datadog-agent
Just now via GitHub
api
api-prod.up.railway.app
Just now via GitHub
Next in 12m
[cron] batch upload
Just ran via GitHub
Next in 1d
[cron] backup
Ran 12 hours ago
Metabase
Metabase
metab-prod.up.railway.app
Just now via GitHub
pg-data
postgres
Just deployed
Temporal
Temporal
metab-prod.up.railway.app
Just now via GitHub
pg-data
Temporal UI
Just deployed via Docker im...
Elasticsearch
Just now via GitHub
pg-data
Postgres
Just deployed via Docker im...
Temporal
Temporal
metab-prod.up.railway.app
Just now via GitHub
pg-data
Temporal UI
Just deployed via Docker im...
pg-data
postgres
Just deployed
redis-volume
redis
Just deployed
backend
Just deployed via GitHub
backend
Just deployed via GitHub
backend
Just deployed via GitHub
Activity
Sync
Create
Architecture
Observability
Logs
Settings
Share
gravy-truck
production

Deploy

Network

Scale

Monitor

Evolve

Build and deploy
Deploy anything
without the complexity

Connect your repo, Railway handles the rest. Auto-config, instant previews, no new tools to learn. Learn more →

Sync
Create
Activity
Architecture
Observability
Logs
Settings
Share
glorious-hippo
production
Sync
Create
Activity
pg-data
postgres
Deployed via Docker Image
Building...
/bitnami
Metabase
mtbase-prod.up.railway.app
Deployed via Docker Image
Building...
Metabase
/bitnami
redis
Deployed via Docker Image
Building...
frontend
frontend-prod.up.railway.app
Deployed just now
Building...
3 Replicas
backend
Deployed just now
Building...
Architecture
Observability
Logs
Settings
Share
project_name
production
Sync
Create
Activity
ackee analytics
ackee-prod.up.railway.app
Deployed via Docker Image
Building...
pg-data
postgres
Deployed via Docker Image
Building...
3 Replicas
backend
Deployed just now
Building...
api gateway
api-prod.up.railway.app
Deployed just now
Building...
frontend
frontend-prod.up.railway.app
Deployed just now
Building...
Architecture
Observability
Logs
Settings
Share
usable-spoon
production
Sync
Create
Activity
Next in 12m
[CRON] Batch upload
Ready to Run
Building...
pg-data
postgres
Deployed via Docker Image
Building...
/bitnami
redis
Deployed via Docker Image
Building...
Backend
Backend (Worker)
Deployed just now
Building...
frontend
frontend-prod.up.railway.app
Deployed just now
Building...
Backend (Server)
Deployed just now
Building...
Architecture
Observability
Logs
Settings
Share
glorious-hippo
production
See your infrastructure
Craft on a visual canvas that makes your entire stack visible at a glance.
Correct config. All the time
Railway reads your code and sets the right settings, automatically.
Edit anything in context
Modify settings directly from the canvas. YAML optional.
Alternative to
Network and connect
Instant networking.
Zero setup.

Private connections, public endpoints, SSL, and load balancing live from the moment you deploy.

Learn more →

Private, fast connections by default
100 Gbps internal networking without VPC configuration.
Protocol detection built-in
HTTP, TCP, gRPC, WebSockets handled automatically.
Alternative to
TCP
:5432
Private
Encrypted
<1ms
ackee analytics
api-prod.up.railway.app
Online
pg-data
postgres
2 days ago via CLI
Scale and grow
Grow big
without the growing pains

Take a single instance to a global deployment. Railway handles the scaling, so you stay focused on the product.

Learn more →

Handle more load and traffic
Scale CPU and RAM or add replicas with load balancing.
Reach users faster globally
Run your application closer to where your users are.
Alternative to
backend
Online
backend
Online
backend
Online
backend
Online
backend
Online
backend
Online
Monitor and observe
Logs, metrics, and alerts in one place. Clarity without the chaos.

Monitor resource usage, set custom alerts, and track logs. Full visibility from the moment you deploy with everything you need to stay ahead of issues. Learn more →

Save
Cancel
New
Edit
10 Days ago
CPU Usage
2.5  vCPU
2.0  vCPU
1.5 vCPU
1.0  vCPU
0.5  vCPU
0 vCPU
Sep 4
Sep 7
Sep 10
Sep 13
25 GB
20 GB
15 GB
10 GB
5 GB
0 B
Sep 4
Sep 7
Sep 10
Sep 13
Memory Usage
Frontend hit/error
25 K
20 K
15 K
10 K
5 K
0 K
Sep 4
Sep 7
Sep 10
Sep 13
50 GB
40 GB
30 GB
20 GB
10 GB
0 B
Sep 4
Sep 7
Sep 10
Sep 13
Disk Usage
5XX Errors
2.5 K
2 K
1.5 K
1 K
0.5 K
0 K
Sep 4
Sep 7
Sep 10
Sep 13
Network Egress
25 GB
20 GB
15 GB
10 GB
5 GB
0 B
Sep 4
Sep 7
Sep 10
Sep 13
Error logs
Error: No route matches URL "/contact/"
frontend
Sep 12 14:56:49
    at getInternalRouterError (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modules/@remix-run/router/router.ts:4843:5) 
frontend
Sep 12 14:56:49
    at Object.query (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modules/@remix-run/router/router.ts:3037:19) 
frontend
Sep 12 14:56:49
    at /app/node_modules/.pnpm/@remix-run+express@2.9.2_express@4.19.2_typescript@5.1.6/node_modules/@remix-run/express/dist/server.js:41:2
frontend
Sep 12 14:56:49
Error: No route matches URL "//test/wp-includes/wlwmanifest.xml"
cms
Sep 13 11:48:32
    at getInternalRouterError (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modules/@remix-run/router/router.ts:4843:5)
cms
Sep 13 11:48:32
    at Object.query (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modules/@remix-run/router/router.ts:3037:19)
cms
Sep 13 11:48:32
    at handleDocumentRequest (/app/node_modules/.pnpm/@remix-run+server-runtime@2.9.2_typescript@5.1.6/node_modules/@remix-run/server-runti
cms
Sep 13 11:48:32
    at requestHandler (/app/node_modules/.pnpm/@remix-run+server-runtime@2.9.2_typescript@5.1.6/node_modules/@remix-run/server-runtime/dist
cms
Sep 13 11:48:32
Date (GMT-6)
Service
Message
Architecture
Observability
Logs
Settings
Share
backyard-rocketship
production
Add Item
Name this item...
+ Add Description
CPU Usage
Error Logs
2.5 vCPU
2.0 vCPU
1.5 vCPU
1.0 vCPU
0.5 vCPU
0  vCPU
Sep 4
Sep 7
Sep 10
Sep 13
upstream image response failed for 
https://prod-files-secure.s3.us-west-2.ama
hugo
Sep 13 11:48:32
upstream image response failed for 
https://prod-files-secure.s3.us-west-2.ama
hugo
Sep 13 11:48:32
https://prod-files-secure.s3.us-west-2.amazo
upstream image response failed for 
docs
Sep 12 13:39:21
https://prod-files-secure.s3.us-west-2.amazo
upstream image response failed for 
docs
Sep 12 13:39:29
Error: No route matches URL "/contact/"
frontend
Sep 12 14:56:49
    at getInternalRouterError (/app/node_modules/.pnpm/@remix-run+router@1.16.1
frontend
Sep 12 14:56:49
    at Object.query (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modu
frontend
Sep 12 14:56:49
    at /app/node_modules/.pnpm/@remix-run+express@2.9.2_express@4.19.2_typescri
frontend
Sep 12 14:56:49
Error: No route matches URL "//test/wp-includes/wlwmanifest.xml"
cms
Sep 13 11:48:32
    at getInternalRouterError (/app/node_modules/.pnpm/@remix-run+router@1.16.1
cms
Sep 13 11:48:32
    at Object.query (/app/node_modules/.pnpm/@remix-run+router@1.16.1/node_modu
cms
Sep 13 11:48:32
    at handleDocumentRequest (/app/node_modules/.pnpm/@remix-run+server-runtime
cms
Sep 13 11:48:32
    at requestHandler (/app/node_modules/.pnpm/@remix-run+server-runtime@2.9.2_
cms
Sep 13 11:48:32
Date (GMT -6)
Service
Message
CPU
Logs
all
@service:
error
@level:
New Item
CPU
Memory
Network
Disk
Logs
Project Stats
All your metrics in one dashboard
Create custom dashboards with metrics from any service.
Alerts that reach you
Slack, Discord, or emails the moment conditions you specify are met.
Contextual debugging
All logs in one place. Spot issues without switching tools.
Alternative to
Evolve and collaborate
Finally, a development workflow that actually flows.

Spin-up unlimited environments. Preview every PR automatically. One-click rollbacks are there just in case.

Learn more →

production
frontend
dev.server.com
3 days ago via CLI
backend
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
backend
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
umami
umami-prod.up.railway.app
3 days ago via CLI
chandrika/cs-changes
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
redis-data
redis
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
jitachi/experiments
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
redis-data
redis
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
pr-115
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
umami
umami-prod.up.railway.app
3 days ago via CLI
umami
umami-prod.up.railway.app
3 days ago via CLI
umami
umami-prod.up.railway.app
3 days ago via CLI
pr-112
api
api-prod.up.railway.app
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
api
api-prod.up.railway.app
1 week ago via GitHub
api
api-prod.up.railway.app
1 week ago via GitHub
development
backend
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
pg-data
postgres
1 week ago via GitHub
pg-data
postgres
1 week ago via GitHub
pg-data
postgres
1 week ago via GitHub
staging
backend
1 week ago via GitHub
frontend
dev.server.com
3 days ago via CLI
backend
1 week ago via GitHub
backend
1 week ago via GitHub
backend
1 week ago via GitHub
pg-data
postgres
1 week ago via GitHub
worker 1
1 week ago via GitHub
worker 2
1 week ago via GitHub
api
api-prod.up.railway.app
1 week ago via GitHub
umami
umami-prod.up.railway.app
3 days ago via CLI
Everyone ships at full speed
Unlimited environments mean everyone can ship simultaneously.
Preview every PR
Every pull request gets its own preview. No surprises after merge.
Undo mistakes in seconds
Rollback to any previous version instantly when something breaks.
Alternative to
Trusted by the best in business

Railway supports great software teams wherever they are. Hear from some of the teams building their products on Railway.

Read customer stories →

"On our previous rent day, we saw traffic of 1,500+ requests per second that were all being fulfilled in under 50 milliseconds, which is really great. Our technical team is really impressed with scale like that."

Kartik Aggarwal
Tech Lead at Bilt

"Services that took 1 week to configure elsewhere take 1 day to spin up in Railway. Messy networking like on other cloud platforms doesn't exist on Railway. If you understand basic TCP, you're all set."

Daniel Lobaton
CTO at G2X

"Railway streamlines and accelerates our entire operation. It gives us instant observability into our services and makes spinning up self-hosted third-party tools almost effortless. This reduces friction in experimentation and shortens our deployment cycles significantly."

Daniel Moretti
Co-Founder & CTO at Mappa
...and loved by developers
Join 2M+ developers building with Railway →
Thales Gelinger
@thalesgelinger_
Real talk, i’m love with @Railway, it took me about 2 minutes to setup my server with a postgres using postgis, a volume, and all env and databases and everything else keeps in the same project, pretty neat way to organize things
Praveen Thirumurugan
@PraveenTcom
Initial impressions on using @Railway is amazing. Zero config deployment if a Dockerfile is ready to use. Will check for a month on how it comes to the pricing and usage billing part.
Brib
@spanish_vanish
I'm super bullish for the @Railway. They just started with their self-owned servers. and their new start-up program is super exciting, let's see how it develops in the future.
Kevin Jin
@itskevinjin
really gotta commend @Railway for allowing hard spending limits, I have never, ever seen this with any cloud provider. It's so refreshing to use a platform that isn't trying to extract maximal dollars from my wallet
Celia Rozalén
@celiarozalenm
I self-hosted @PlausibleHQ in one minute thanks to @juliaalvarez23 recommendation of Railway and I feel I need to tell everyone. I want to try it for a month and If everything works I will record a video.
recursed - oss/acc
@0x0elliot
i love how railway makes it super easy to just pull up your set up in front of someone and the architecture is communicated without saying a word.
Thales Gelinger
@thalesgelinger_
Real talk, i’m love with @Railway, it took me about 2 minutes to setup my server with a postgres using postgis, a volume, and all env and databases and everything else keeps in the same project, pretty neat way to organize things
Praveen Thirumurugan
@PraveenTcom
Initial impressions on using @Railway is amazing. Zero config deployment if a Dockerfile is ready to use. Will check for a month on how it comes to the pricing and usage billing part.
Brib
@spanish_vanish
I'm super bullish for the @Railway. They just started with their self-owned servers. and their new start-up program is super exciting, let's see how it develops in the future.
Kevin Jin
@itskevinjin
really gotta commend @Railway for allowing hard spending limits, I have never, ever seen this with any cloud provider. It's so refreshing to use a platform that isn't trying to extract maximal dollars from my wallet
Celia Rozalén
@celiarozalenm
I self-hosted @PlausibleHQ in one minute thanks to @juliaalvarez23 recommendation of Railway and I feel I need to tell everyone. I want to try it for a month and If everything works I will record a video.
recursed - oss/acc
@0x0elliot
i love how railway makes it super easy to just pull up your set up in front of someone and the architecture is communicated without saying a word.
51.8M+ deploys per month (and counting)

Real-time usage showing totals for users and services, along with 30-day deploys, requests, and logs.

Users 2,688,037, Services 8,435,043, Deployments 51,829,056, Requests 123,096,368,990, Logs 504,052,729,706
S
T
T
U
U
V
9
S
S
8
9
9
E
E
8
9
9
R
R
8
9
9
S
S
8
9
0
1
1
2
2
3
9
,
,
0
8
9
4
5
5
6
6
7
6
7
7
8
8
9
6
7
7
8
8
9
9
,
,
0
8
9
9
0
0
1
8
9
1
2
2
3
3
4
5
6
6
7
7
8
Q
R
R
S
S
T
9
E
E
8
9
9
R
R
8
9
9
V
V
8
9
9
I
I
8
9
9
C
C
8
9
9
E
E
8
9
9
S
S
8
9
6
7
7
8
8
9
9
,
,
0
8
9
2
3
3
4
4
5
1
2
2
3
3
4
3
4
4
5
5
6
9
,
,
0
8
9
9
0
0
1
8
9
2
3
3
4
4
5
1
2
2
3
3
4
B
C
C
D
D
E
9
E
E
8
9
9
P
P
8
9
9
L
L
8
9
9
O
O
8
9
9
Y
Y
8
9
9
M
M
8
9
9
E
E
8
9
9
N
N
8
9
9
T
T
8
9
9
S
S
8
9
3
4
4
5
5
6
9
0
0
1
1
2
9
,
,
0
8
9
6
7
7
8
8
9
0
1
1
2
2
3
9
0
7
8
8
9
9
,
,
0
8
9
9
0
0
1
8
9
3
4
4
5
5
6
4
5
5
6
6
7
P
Q
Q
R
R
S
9
E
E
8
9
9
Q
Q
8
9
9
U
U
8
9
9
E
E
8
9
9
S
S
8
9
9
T
T
8
9
9
S
S
8
9
9
0
0
1
1
2
0
1
1
2
2
3
1
2
2
3
3
4
9
,
,
0
8
9
9
0
0
1
8
9
9
0
7
8
8
9
4
5
5
6
6
7
9
,
,
0
8
9
1
2
2
3
3
4
4
5
5
6
6
7
6
7
7
8
8
9
9
,
,
0
8
9
9
0
7
8
8
9
9
0
7
8
8
9
9
0
0
1
8
9
J
K
K
L
L
M
9
O
O
8
9
9
G
G
8
9
9
S
S
8
9
3
4
4
5
5
6
9
0
0
1
8
9
2
3
3
4
4
5
9
,
,
0
8
9
9
0
0
1
8
9
3
4
4
5
5
6
0
1
1
2
2
3
9
,
,
0
8
9
5
6
6
7
7
8
0
1
1
2
2
3
9
0
7
8
8
9
9
,
,
0
8
9
5
6
6
7
7
8
9
0
0
1
8
9
4
5
5
6
6
7

A better future is

now boarding

Deploy your first project today

All Aboard

Featured

Launch Week 02

Explore everything we launched—new features, updates, and more.

Railway V3: Faster and Cheaper

Learn how we have simultaneously decreased cost and increased performance.

Product

Features

Pricing

Agents

Changelog

Templates

Template kickback

Compare

Heroku

Render

Fly.io

Vercel

Contact

Discord

Twitter

GitHub

Email

Resources

Customers

Enterprise

Docs

Central Station

Blog

Partnerships

Affiliate program

Company

About

Philosophy

Careers

Shop

Trust

Logo

Status

Legal

DPA

Fair Use

Privacy Policy

Terms of Service

Enterprise Agreement

Bug Bounty Program

Cookie preferences
All systems operational
↗
© 2026 Railway Corp. All rights reserved.
```

## DOM Notes

```md
# DOM Notes for Railway | The all-in-one intelligent cloud provider

## Element Counts
- button: 15
- canvas: 0
- form: 0
- image: 65
- input: 0
- link: 55
- section: 8
- video: 0

## Heading Outline
- h1: Ship software peacefully
- h3: Deploy anything without the complexity
- h3: Instant networking. Zero setup.
- h3: Grow big without the growing pains
- h3: Logs, metrics, and alerts in one place. Clarity without the chaos.
- h3: Finally, a development workflow that actually flows.
- h2: Trusted by the best in business
- h2: 51.8M+ deploys per month (and counting)

## Section Samples
- px-4 pt-0 pb-4: Ship software peacefully With the all-in-one intelligent cloud provider Deploy → Demo frontend frontend-prod.up.railway.app Just now via GitHub docs docs-prod.up.railway.app Just now via GitHub admin admin-prod.up.railwa
- relative: Build and deploy Deploy anything without the complexity Connect your repo, Railway handles the rest. Auto-config, instant previews, no new tools to learn. Learn more → Sync Create Activity Architecture Observability Logs
- -mx-4 relative: Network and connect Instant networking. Zero setup. Private connections, public endpoints, SSL, and load balancing live from the moment you deploy. Learn more → Private, fast connections by default 100 Gbps internal netw
- -mx-4 relative border-t border-white/15: Scale and grow Grow big without the growing pains Take a single instance to a global deployment. Railway handles the scaling, so you stay focused on the product. Learn more → Handle more load and traffic Scale CPU and RA
- relative: Monitor and observe Logs, metrics, and alerts in one place. Clarity without the chaos. Monitor resource usage, set custom alerts, and track logs. Full visibility from the moment you deploy with everything you need to sta
- relative: Evolve and collaborate Finally, a development workflow that actually flows. Spin-up unlimited environments. Preview every PR automatically. One-click rollbacks are there just in case. Learn more → production frontend dev
- px-4: Trusted by the best in business Railway supports great software teams wherever they are. Hear from some of the teams building their products on Railway. Read customer stories → "On our previous rent day, we saw traffic o
- pt-24 bg-oatmeal: 51.8M+ deploys per month (and counting) Real-time usage showing totals for users and services, along with 30-day deploys, requests, and logs. Users 2,688,037, Services 8,435,043, Deployments 51,829,056, Requests 123,096,

## Script References
- https://cdn.usefathom.com/script.js
- https://app.cal.com/embed/embed.js
- https://luminaire.railway.com/static/surveys.js?v=1.298.0
- https://luminaire.railway.com/static/posthog-recorder.js?v=1.298.0
- https://luminaire.railway.com/array/phc_jmpOAF1fCA4XG8D6zO8AuihY1JHmOkvzqtg5cZoxeJb/config.js
```

## Interaction Notes

```md
# Interaction Notes

This file was generated from the baseline automated capture.
No manual hover, click, or scroll probing was performed beyond loading the page and recording visible interactive elements.

## Follow-Up Probes Recommended
- Hover the primary and secondary CTAs.
- Check whether the header becomes sticky or changes style on scroll.
- Probe tabs, carousels, demos, accordions, or cards with hover states.
- Note any section reveal, parallax, cursor, or 3D behavior.

## Baseline Snapshot Excerpt
- - link "Railway" [ref=e1]
- - navigation "Main" [ref=e2]
-   - button "Product" [expanded=false, ref=e70]
-   - button "Developers" [expanded=false, ref=e71]
-   - button "Enterprise" [expanded=false, ref=e72]
-   - button "Company" [expanded=false, ref=e73]
-   - link "Pricing" [ref=e74]
- - button "Sign in" [ref=e3]
- - link "Book a demo" [ref=e4]
- - heading "Ship software peacefully" [level=1, ref=e51]
- - link "intelligent" [ref=e64]
- - link "Deploy →" [ref=e52]
- - link "Demo" [ref=e53]
- - tabpanel "100% Evolve" [ref=e48] focusable [tabindex]
- - tablist "DeployNetworkScaleMonitorEvolve" [ref=e49] focusable [tabindex]
-   - tab "0% Deploy" [ref=e54]
-   - tab "0% Network" [ref=e55]
-   - tab "0% Scale" [ref=e56]
-   - tab "0% Monitor" [ref=e57]
-   - tab "100% Evolve" [selected, ref=e58]
```

## Tech Hints

```md
# Tech Hints

- No clear library signal was detected automatically; confirm animation and rendering stack manually if needed.
```

## Interactive Snapshot: Desktop

```text
- link "Railway" [ref=e1]
- navigation "Main" [ref=e2]
  - button "Product" [expanded=false, ref=e70]
  - button "Developers" [expanded=false, ref=e71]
  - button "Enterprise" [expanded=false, ref=e72]
  - button "Company" [expanded=false, ref=e73]
  - link "Pricing" [ref=e74]
- button "Sign in" [ref=e3]
- link "Book a demo" [ref=e4]
- heading "Ship software peacefully" [level=1, ref=e51]
- link "intelligent" [ref=e64]
- link "Deploy →" [ref=e52]
- link "Demo" [ref=e53]
- tabpanel "100% Evolve" [ref=e48] focusable [tabindex]
- tablist "DeployNetworkScaleMonitorEvolve" [ref=e49] focusable [tabindex]
  - tab "0% Deploy" [ref=e54]
  - tab "0% Network" [ref=e55]
  - tab "0% Scale" [ref=e56]
  - tab "0% Monitor" [ref=e57]
  - tab "100% Evolve" [selected, ref=e58]
- heading "Deploy anything without the complexity" [level=3, ref=e59]
- link "Learn more →" [ref=e65]
- heading "Instant networking. Zero setup." [level=3, ref=e60]
- link "Learn more →" [ref=e66]
- heading "Grow big without the growing pains" [level=3, ref=e61]
- link "Learn more →" [ref=e67]
- heading "Logs, metrics, and alerts in one place. Clarity without the chaos." [level=3, ref=e62]
- link "Learn more →" [ref=e68]
- heading "Finally, a development workflow that actually flows." [level=3, ref=e63]
- link "Learn more →" [ref=e69]
- heading "Trusted by the best in business" [level=2, ref=e5]
- link "Read customer stories →" [ref=e6]
- link "Join 2M+ developers building with Railway →" [ref=e7]
- heading "51.8M+ deploys per month (and counting)" [level=2, ref=e50]
- link "All Aboard" [ref=e75]
- link "Launch Week 02 Explore everything we launched—new features, updates, and more." [ref=e8]
- link "Railway V3: Faster and Cheaper Learn how we have simultaneously decreased cost and increased performance." [ref=e9]
- link "Railway Compliance" [ref=e10]
- link "Features" [ref=e11]
- link "Pricing" [ref=e12]
- link "Agents" [ref=e13]
- link "Changelog" [ref=e14]
- link "Templates" [ref=e15]
- link "Template kickback" [ref=e16]
- link "Heroku" [ref=e17]
- link "Render" [ref=e18]
- link "Fly.io" [ref=e19]
- link "Vercel" [ref=e20]
- link "Discord" [ref=e21]
- link "Twitter" [ref=e22]
- link "GitHub" [ref=e23]
- link "Email" [ref=e24]
- link "Customers" [ref=e25]
- link "Enterprise" [ref=e26]
- link "Docs" [ref=e27]
- link "Central Station" [ref=e28]
- link "Blog" [ref=e29]
- link "Partnerships" [ref=e30]
- link "Affiliate program" [ref=e31]
- link "About" [ref=e32]
- link "Philosophy" [ref=e33]
- link "Careers" [ref=e34]
- link "Shop" [ref=e35]
- link "Trust" [ref=e36]
- link "Logo" [ref=e37]
- link "Status" [ref=e38]
- link "DPA" [ref=e39]
- link "Fair Use" [ref=e40]
- link "Privacy Policy" [ref=e41]
- link "Terms of Service" [ref=e42]
- link "Enterprise Agreement" [ref=e43]
- link "Bug Bounty Program" [ref=e44]
- button "Cookie preferences" [ref=e45]
- link "Railway Logo" [ref=e46]
- link "All systems operational" [ref=e47]
```

## Interactive Snapshot: Mobile

```text
- link "Railway" [ref=e1]
- button "Open mobile navigation" [ref=e2]
- heading "Ship software peacefully" [level=1, ref=e44]
- link "intelligent" [ref=e52]
- link "Deploy →" [ref=e45]
- link "Demo" [ref=e46]
- heading "Deploy anything without the complexity" [level=3, ref=e47]
- link "Learn more →" [ref=e53]
- heading "Instant networking. Zero setup." [level=3, ref=e48]
- link "Learn more →" [ref=e54]
- heading "Grow big without the growing pains" [level=3, ref=e49]
- link "Learn more →" [ref=e55]
- heading "Logs, metrics, and alerts in one place. Clarity without the chaos." [level=3, ref=e50]
- link "Learn more →" [ref=e56]
- heading "Finally, a development workflow that actually flows." [level=3, ref=e51]
- link "Learn more →" [ref=e57]
- heading "Trusted by the best in business" [level=2, ref=e3]
- link "Read customer stories →" [ref=e4]
- link "Join 2M+ developers building with Railway →" [ref=e5]
- heading "51.8M+ deploys per month (and counting)" [level=2, ref=e43]
- link "All Aboard" [ref=e58]
- link "Features" [ref=e6]
- link "Pricing" [ref=e7]
- link "Agents" [ref=e8]
- link "Changelog" [ref=e9]
- link "Templates" [ref=e10]
- link "Template kickback" [ref=e11]
- link "Heroku" [ref=e12]
- link "Render" [ref=e13]
- link "Fly.io" [ref=e14]
- link "Vercel" [ref=e15]
- link "Discord" [ref=e16]
- link "Twitter" [ref=e17]
- link "GitHub" [ref=e18]
- link "Email" [ref=e19]
- link "Customers" [ref=e20]
- link "Enterprise" [ref=e21]
- link "Docs" [ref=e22]
- link "Central Station" [ref=e23]
- link "Blog" [ref=e24]
- link "Partnerships" [ref=e25]
- link "Affiliate program" [ref=e26]
- link "About" [ref=e27]
- link "Philosophy" [ref=e28]
- link "Careers" [ref=e29]
- link "Shop" [ref=e30]
- link "Trust" [ref=e31]
- link "Logo" [ref=e32]
- link "Status" [ref=e33]
- link "DPA" [ref=e34]
- link "Fair Use" [ref=e35]
- link "Privacy Policy" [ref=e36]
- link "Terms of Service" [ref=e37]
- link "Enterprise Agreement" [ref=e38]
- link "Bug Bounty Program" [ref=e39]
- button "Cookie preferences" [ref=e40]
- link "Railway Logo" [ref=e41]
- link "All systems operational" [ref=e42]
```

## Required Deliverables

1. Create a full site report matching `docs/templates/per-site-report-template.md`.
2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.
3. Preserve explicit separation between observed, inferred, and uncertain findings.
4. Include a section called `How to apply this without copying`.

## Finish Condition

When complete, save the markdown report to `data/reports/batch-01/railway.md` and the JSON summary to `data/json/batch-01/railway.json`.
