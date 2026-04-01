# Analysis Packet: posthog

## Goal

Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.

## Source Instructions

- Skill: `skills/frontend-design-researcher.md`
- Prompt: `prompts/master-research-prompt.md`

## Output Targets

- Report: `data/reports/batch-01/posthog.md`
- JSON: `data/json/batch-01/posthog.json`

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
  "site": "posthog",
  "url": "https://posthog.com",
  "batch": "batch-01",
  "captured_at": "2026-04-01T19:51:08.995Z",
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

- `data/captures/batch-01/posthog/screenshot-desktop-hero.png`
- `data/captures/batch-01/posthog/screenshot-desktop-full.png`

### Mobile

- `data/captures/batch-01/posthog/screenshot-mobile-full.png`

## Visible Text

```text
Product OS
Pricing
Docs
Community
Company
More
Get started – free
1
home.mdx
Product OS
Pricing
customers.mdx
demo.mov
Docs
Talk to a human
Ask a question
Sign up ↗
Switch to website mode
Why PostHog?
Changelog
Company handbook
Store
Work here
Trash
home.mdx
Zoom
Font
Get started - free

We make dev tools that help product engineers build successful products.

Get started - free
Install with AI
Install with AI in a single prompt

Paste into your terminal or code editor and make AI do the work.

npx @posthog/wizard
Learn more

Questions? Watch a demo or talk to a human.

Explore apps by company stage
Browse app library (34)
Startup / Side project
Growth
Scale
PostHog AI
Session Replay
Web Analytics
Product Analytics
Error Tracking
Experiments
Feature Flags
Logs
CDP
Workflows
Go to app library (34)
PostHog AI

Ask questions about how people use your product

Explore
Who's using PostHog?

Here are some of our paying customers. (Yes they actually use us, no it's not just some random engineer who tried us out 2+ years ago.)

 Shuffle companies
VCs love them
Product engineers love them
Open customers.mdx
PostHog data stack, built for data teams and loved by product teams

Built-in, Product OS ships with:

A data warehouse 

120+ sources/destinations
SQL editor + BI + data viz
User activity feed (CDP-lite)
API, webhooks

When you're analyzing how customers use your product, you should be operating from the full set of data.

This includes customer information that happens outside your product:

payments from Stripe
exceptions in an error tracking tool
tickets in your support platform

Having all the data in one place means you can make more informed decisions about what to build next.

PostHog's Product OS isn't just analytics – it's the entire suite of tools built to give you a single source of truth about your customers.

README: PostHog data stack.md
Usage-based pricing

Our whole philosophy is that you shouldn't have to worry about pricing.

All our paid products are pay-per-use with generous monthly free tiers. In fact, 98% of our customers use PostHog for free.

We aim to be the cheapest option at scale – PostHog should be a no-brainer. You never have to "jump on a quick call" with sales.

Here are some examples of how we charge for most popular products:

Product
Free tier
Pricing (decreases with volume)
1
Product Analytics
1 million events/mo
$0.00005/event
2
Session Replay
5,000 recordings/mo
$0.005/recording
3
Feature Flags
1 million requests/mo
$0.0001/request
4
Managed warehouse
1 million rows/mo
$0.000015/row
Explore pricing
"How can AI help analyze data and build products faster?"

We have several teams working on AI on a handful of fronts. PostHog AI works across PostHog – and it's way more than just generating insights.

PostHog AI helps you automate monotonous tasks of gathering context and summarizing information – and will soon have the ability to make code changes to fix bugs and improve software.

Learn about PostHog AI
Why PostHog?

We're different from most companies for a bunch of reasons:

Transparency. You can read our company handbook, our sales manual, and company strategy.
We ship fast. See our changelog.
Actually-technical support. Our 
support folks
 all have engineering backgrounds.
Read more about us
Bedtime reading

Still here? We've got some links that may be mildly interesting to you:

demo.mov
Technical docs
API
Ask a question
Small teams at PostHog
Shameless CTA

If nothing else has sold you on PostHog, hopefully these classic marketing tactics will.

NOT
ENDORSED 
BY KIM K

*PostHog is a web product and cannot be installed by CD.
We did once send some customers a floppy disk but it was a Rickroll.

ECO-FRIENDLY

PostHog Cloud

Digital download*

Select your cloud
US (Virginia)
EU (Frankfurt)
Starts at:
$0
FREE
>1 left at this price!!
Get started

Hurry: 1515 companies signed up today. 
Act now and get $0 off your first order.

Thanks for being visitor number




Legally-required cookie banner

PostHog.com doesn't use third-party cookies, only a single in-house cookie.

No data is sent to a third party. (Ursula von der Leyen would be so proud.)

New PostHog Heroes action figures
Order yours today
```

## DOM Notes

```md
# DOM Notes for PostHog – We make dev tools for product engineers

## Element Counts
- button: 55
- canvas: 0
- form: 0
- image: 22
- input: 0
- link: 56
- section: 1
- video: 0

## Heading Outline
- h1: 
- h3: Install with AI in a single prompt
- h2: Explore apps by company stage
- h3: PostHog AI
- h2: Who's using PostHog?
- h2: PostHog data stack, built for data teams and loved by product teams
- h2: Usage-based pricing
- h2: "How can AI help analyze data and build products faster?"
- h2: Why PostHog?
- h2: Bedtime reading
- h2: Shameless CTA

## Section Samples
- cta: NOT ENDORSED BY KIM K *PostHog is a web product and cannot be installed by CD. We did once send some customers a floppy disk but it was a Rickroll. ECO-FRIENDLY PostHog Cloud Digital download* Select your cloud US (Virgi

## Script References
- https://internal-c.posthog.com/static/array.js
- https://posthog.com/scripts/posthog-init.js
- https://internal-c.posthog.com/static/exception-autocapture.js?v=1.364.5
- https://internal-c.posthog.com/static/web-vitals.js?v=1.364.5
- https://internal-c.posthog.com/static/dead-clicks-autocapture.js?v=1.364.5
- https://internal-c.posthog.com/static/product-tours.js?v=1.364.5
- https://internal-c.posthog.com/static/conversations.js?v=1.364.5
- https://internal-c.posthog.com/static/logs.js?v=1.364.5
- https://internal-c.posthog.com/static/surveys.js?v=1.364.5
- https://internal-c.posthog.com/static/posthog-recorder.js?v=1.364.5
- https://internal-c.posthog.com/array/sTMFPsFhdP1Ssg/config.js
- https://posthog.com/scripts/theme-init.js
- https://posthog.com/scripts/initial-loader.js
- https://posthog.com/app-7e5a12ae9e42626492bc.js
- https://posthog.com/cdb64564-4b8fec19322715baad8a.js
- https://posthog.com/d24c56cb-7102111ce1f2f190d3cc.js
- https://posthog.com/fcc993b1-4e79354163f6f66229e5.js
- https://posthog.com/507a0916-d6225b717e81e4c3bc38.js
- https://posthog.com/aed920e9-55685e7506166bc4a1f7.js
- https://posthog.com/17c50846-22863923ac672b0930b0.js
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
- - menubar "Product OSPricingDocsCommunityCompanyMore" [ref=e7] focusable [tabindex]
-   - menuitem [expanded=false, ref=e8]
-   - menuitem "Product OS" [expanded=false, ref=e9]
-   - menuitem "Pricing" [expanded=false, ref=e10]
-   - menuitem "Docs" [expanded=false, ref=e11]
-   - menuitem "Community" [expanded=false, ref=e12]
-   - menuitem "Company" [expanded=false, ref=e13]
-   - menuitem "More" [expanded=false, ref=e14]
- - link "Get started – free" [ref=e24]
- - generic [ref=e15] clickable [onclick]
-   - generic [ref=e25] clickable [onclick]
-     - button [ref=e35]
- - generic [ref=e16] clickable [onclick]
-   - button [ref=e30]
- - button "1" [ref=e26]
- - menubar [ref=e17] focusable [tabindex]
-   - menuitem [expanded=false, ref=e27]
- - button "Introducing James Hawkins — The Ultra-Action Figure Only $996" [ref=e18]
- - link "home.mdx" [ref=e54]
- - link "Product OS" [ref=e55]
```

## Tech Hints

```md
# Tech Hints

- No clear library signal was detected automatically; confirm animation and rendering stack manually if needed.
```

## Interactive Snapshot: Desktop

```text
- menubar "Product OSPricingDocsCommunityCompanyMore" [ref=e7] focusable [tabindex]
  - menuitem [expanded=false, ref=e8]
  - menuitem "Product OS" [expanded=false, ref=e9]
  - menuitem "Pricing" [expanded=false, ref=e10]
  - menuitem "Docs" [expanded=false, ref=e11]
  - menuitem "Community" [expanded=false, ref=e12]
  - menuitem "Company" [expanded=false, ref=e13]
  - menuitem "More" [expanded=false, ref=e14]
- link "Get started – free" [ref=e24]
- generic [ref=e15] clickable [onclick]
  - generic [ref=e25] clickable [onclick]
    - button [ref=e35]
- generic [ref=e16] clickable [onclick]
  - button [ref=e30]
- button "1" [ref=e26]
- menubar [ref=e17] focusable [tabindex]
  - menuitem [expanded=false, ref=e27]
- button "Introducing James Hawkins — The Ultra-Action Figure Only $996" [ref=e18]
- link "home.mdx" [ref=e54]
- link "Product OS" [ref=e55]
- link "Pricing" [ref=e56]
- link "customers.mdx" [ref=e57]
- link "demo.mov" [ref=e58]
- link "Docs" [ref=e59]
- link "Talk to a human" [ref=e60]
- button "Ask a question" [ref=e61]
- link "Sign up ↗" [ref=e62]
- button "Switch to website mode" [ref=e63]
- link "Why PostHog?" [ref=e64]
- link "Changelog" [ref=e65]
- link "Company handbook" [ref=e66]
- link "Store" [ref=e67]
- link "Work here" [ref=e68]
- link "Trash" [ref=e69]
- menubar [ref=e28] focusable [tabindex]
  - menuitem [expanded=false, ref=e31]
- button "home.mdx" [expanded=false, ref=e32]
- button [ref=e33]
- button [ref=e34]
  - generic [ref=e36] clickable [cursor:pointer, onclick]
- generic [ref=e29] clickable [onclick]
  - button [ref=e37]
- button [disabled, ref=e38]
- button [disabled, ref=e39]
- combobox [expanded=false, disabled, ref=e40]: Zoom
- button [ref=e45]
- button [ref=e46]
- button [ref=e47]
- combobox [expanded=false, disabled, ref=e41]: Font
- button [ref=e48]
- button [ref=e49]
- button [ref=e50]
- button [disabled, ref=e42]
- button [disabled, ref=e43]
- button [ref=e51]
- generic [ref=e44] clickable [onclick]
  - button [ref=e53]
- link "Get started - free" [ref=e52]
- generic "We make dev tools that help product engineers build successful products.Get started - freeInstall wi" [ref=e70] clickable [onclick]
  - textbox "editable markdown" [ref=e71]: We make dev tools that help product engineers build successful products.

Get started - free
Install with AI
Install with AI in a single prompt

Paste into your terminal or code editor and make AI do the work.

npx @posthog/wizard
Learn more

Questions? Watch a demo or talk to a human.

Explore apps by company stage
Browse app library (34)
Startup / Side project
Growth
Scale
PostHog AI
Session Replay
Web Analytics
Product Analytics
Error Tracking
Experiments
Feature Flags
Logs
CDP
Workflows
Go to app library (34)
PostHog AI

Ask questions about how people use your product

Explore
Who's using PostHog?

Here are some of our paying customers. (Yes they actually use us, no it's not just some random engineer who tried us out 2+ years ago.)

 Shuffle companies
VCs love them
Product engineers love them
Open customers.mdx
PostHog data stack, built for data teams and loved by product teams

Built-in, Product OS ships with:

A data warehouse 

120+ sources/destinations
SQL editor + BI + data viz
User activity feed (CDP-lite)
API, webhooks

When you're analyzing how customers use your product, you should be operating from the full set of data.

This includes customer information that happens outside your product:

payments from Stripe
exceptions in an error tracking tool
tickets in your support platform

Having all the data in one place means you can make more informed decisions about what to build next.

PostHog's Product OS isn't just analytics – it's the entire suite of tools built to give you a single source of truth about your customers.

README: PostHog data stack.md
Usage-based pricing

Our whole philosophy is that you shouldn't have to worry about pricing.

All our paid products are pay-per-use with generous monthly free tiers. In fact, 98% of our customers use PostHog for free.

We aim to be the cheapest option at scale – PostHog should be a no-brainer. You never have to "jump on a quick call" with sales.

Here are some examples of how we charge for most popular products:

Product
Free tier
Pricing (decreases with volume)
1
Product Analytics
1 million events/mo
$0.00005/event
2
Session Replay
5,000 recordings/mo
$0.005/recording
3
Feature Flags
1 million requests/mo
$0.0001/request
4
Managed warehouse
1 million rows/mo
$0.000015/row
Explore pricing
"How can AI help analyze data and build products faster?"

We have several teams working on AI on a handful of fronts. PostHog AI works across PostHog – and it's way more than just generating insights.

PostHog AI helps you automate monotonous tasks of gathering context and summarizing information – and will soon have the ability to make code changes to fix bugs and improve software.

Learn about PostHog AI
Why PostHog?

We're different from most companies for a bunch of reasons:

Transparency. You can read our company handbook, our sales manual, and company strategy.
We ship fast. See our changelog.
Actually-technical support. Our 
support folks
 all have engineering backgrounds.
Read more about us
Bedtime reading

Still here? We've got some links that may be mildly interesting to you:

demo.mov
Technical docs
API
Ask a question
Small teams at PostHog
Shameless CTA

If nothing else has sold you on PostHog, hopefully these classic marketing tactics will.

NOT
ENDORSED 
BY KIM K

*PostHog is a web product and cannot be installed by CD.
We did once send some customers a floppy disk but it was a Rickroll.

ECO-FRIENDLY

PostHog Cloud

Digital download*

Select your cloud
US (Virginia)
EU (Frankfurt)
Starts at:
$0
FREE
>1 left at this price!!
Get started

Hurry: 1515 companies signed up today. 
Act now and get $0 off your first order.

Thanks for being visitor number



    - generic [ref=e76] clickable [onclick]
    - generic "We make dev tools that help product engineers build successful products." [ref=e72] clickable [onclick]
    - generic "Get started - freeInstall with AIInstall with AI in a single promptPaste into your terminal or code" [ref=e73] clickable [onclick]
      - link "Get started - free" [ref=e77]
      - button "Install with AI" [ref=e78]
      - heading "Install with AI in a single prompt" [level=3, ref=e97]
      - button "npx @posthog/wizard" [ref=e132]
      - link "Learn more" [ref=e109]
    - link "Watch a demo" [ref=e79]
    - link "talk to a human" [ref=e80]
    - generic "Explore apps by company stageBrowse app library (34)Startup / Side projectGrowthScalePostHog AISessi" [ref=e74] clickable [onclick]
      - heading "Explore apps by company stage" [level=2, ref=e98]
      - link "Browse app library" [ref=e110]
      - group "Company stage" [ref=e81] focusable [tabindex]
        - radio "startup" [checked=false, ref=e99]
        - radio "Growth" [checked=true, ref=e100]
        - radio "Scale" [checked=false, ref=e101]
      - tablist "PostHog AISession ReplayWeb AnalyticsProduct AnalyticsError TrackingExperimentsFeature FlagsLogsCDPW" [ref=e102] focusable [tabindex]
        - tab "PostHog AI" [selected, ref=e111]
        - tab "Session Replay" [ref=e112]
        - tab "Web Analytics" [ref=e113]
        - tab "Product Analytics" [ref=e114]
        - tab "Error Tracking" [ref=e115]
        - tab "Experiments" [ref=e116]
        - tab "Feature Flags" [ref=e117]
        - tab "Logs" [ref=e118]
        - tab "CDP" [ref=e119]
        - tab "Workflows" [ref=e120]
        - link "Go to app library (34)" [ref=e121]
      - tabpanel "PostHog AI" [ref=e103] focusable [tabindex]
        - heading "PostHog AI" [level=3, ref=e133]
        - link "Explore" [ref=e143]
    - heading "Who's using PostHog?" [level=2, ref=e82]
    - generic "Shuffle companies[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-web" [ref=e83] clickable [onclick]
      - button " Shuffle companies" [ref=e134]
      - link [ref=e146]
      - link [ref=e147]
      - link [ref=e148]
      - link [ref=e149]
      - link [ref=e150]
      - link [ref=e151]
      - link [ref=e152]
      - link [ref=e153]
      - link "Open customers.mdx" [ref=e104]
    - heading "PostHog data stack, built for data teams and loved by product teams" [level=2, ref=e84]
    - generic [ref=e135] clickable [onclick]
      - generic [ref=e144] clickable [onclick]
    - generic "README: PostHog data stack.md" [ref=e85] clickable [onclick]
      - link "README: PostHog data stack.md" [ref=e105]
    - heading "Usage-based pricing" [level=2, ref=e86]
    - generic "1.Product AnalyticsFree tier: 1 million events/moPricing: $0.00005/event2.Session ReplayFree tier: 5" [ref=e87] clickable [onclick]
      - link "Product Analytics" [ref=e136]
      - link "Session Replay" [ref=e137]
      - link "Feature Flags" [ref=e138]
      - link "Managed warehouse" [ref=e139]
    - generic "Explore pricing" [ref=e88] clickable [onclick]
      - link "Explore pricing" [ref=e106]
    - heading "\"How can AI help analyze data and build products faster?\"" [level=2, ref=e89]
    - generic "Learn about PostHog AI" [ref=e90] clickable [onclick]
      - link "Learn about PostHog AI" [ref=e107]
    - heading "Why PostHog?" [level=2, ref=e91]
    - link "company handbook" [ref=e122]
    - link "sales manual" [ref=e123]
    - link "company strategy" [ref=e124]
    - link "changelog" [ref=e125]
    - generic "support folks" [ref=e126] clickable [onclick]
      - generic "support folks" [ref=e140] clickable [onclick]
        - link "support folks" [ref=e145]
    - generic "Read more about us" [ref=e92] clickable [onclick]
      - link "Read more about us" [ref=e108]
    - heading "Bedtime reading" [level=2, ref=e93]
    - link "demo.mov" [ref=e127]
    - link "Technical docs" [ref=e128]
    - link "API" [ref=e129]
    - link "Ask a question" [ref=e130]
    - link "Small teams at PostHog" [ref=e131]
    - heading "Shameless CTA" [level=2, ref=e94]
    - generic "If nothing else has sold you on PostHog, hopefully these classic marketing tactics will.Eco-friendly" [ref=e95] clickable [onclick]
      - button "US (Virginia)" [ref=e154]
      - button "EU (Frankfurt)" [ref=e155]
      - link "Get started" [ref=e141]
      - button "today" [ref=e142]
    - generic "Thanks for being visitor number" [ref=e75] clickable [onclick]
      - generic [ref=e96] clickable [onclick]
- region "Notifications (F8)" [ref=e1]
  - generic [ref=e2] focusable [tabindex]
  - list "Legally-required cookie bannerPostHog.com doesn't use third-party cookies, only a single in-house co" [ref=e3] clickable [onclick]
    - listitem "Legally-required cookie bannerPostHog.com doesn't use third-party cookies, only a single in-house co" [level=1, ref=e5] focusable [tabindex]
      - generic "Ursula von der Leyen" [ref=e19] clickable [onclick]
      - button [ref=e20]
    - listitem "New PostHog Heroes action figuresOrder yours today" [level=1, ref=e6] focusable [tabindex]
      - button "Watch the action figure reveal" [ref=e21]
      - link "Order yours today" [ref=e22]
      - button [ref=e23]
  - generic [ref=e4] focusable [tabindex]
```

## Interactive Snapshot: Mobile

```text
- generic "Get started – free[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-we" [ref=e1] clickable [onclick]
  - menubar [ref=e8] focusable [tabindex]
    - menuitem [expanded=false, ref=e10]
  - link "Get started – free" [ref=e25]
  - generic [ref=e11] clickable [onclick]
    - generic [ref=e26] clickable [onclick]
      - button [ref=e29]
  - generic [ref=e12] clickable [onclick]
    - button [ref=e28]
  - menubar [ref=e13] focusable [tabindex]
    - menuitem [expanded=false, ref=e27]
  - button "Introducing James Hawkins — The Ultra-Action Figure Only $996" [ref=e14]
  - generic "We make dev tools that help product engineers build successful products.Get started - freeInstall wi" [ref=e30] clickable [onclick]
    - link "Get started - free" [ref=e31]
    - button "Install with AI" [ref=e32]
    - heading "Install with AI in a single prompt" [level=3, ref=e35]
    - button "npx @posthog/wizard" [ref=e72]
    - link "Learn more" [ref=e55]
    - link "Watch a demo" [ref=e36]
    - link "talk to a human" [ref=e37]
    - heading "Explore apps by company stage" [level=2, ref=e38]
    - group "Company stage" [ref=e33] focusable [tabindex]
      - radio "startup" [checked=false, ref=e39]
      - radio "Growth" [checked=true, ref=e40]
      - radio "Scale" [checked=false, ref=e41]
    - tablist "Feature FlagsLogsCDPWorkflowsPostHog AISession ReplayWeb AnalyticsProduct AnalyticsError TrackingExp" [ref=e42] focusable [tabindex]
      - tab "Feature Flags" [ref=e56]
      - tab "Logs" [ref=e57]
      - tab "CDP" [ref=e58]
      - tab "Workflows" [ref=e59]
      - tab "PostHog AI" [selected, ref=e60]
      - tab "Session Replay" [ref=e61]
      - tab "Web Analytics" [ref=e62]
      - tab "Product Analytics" [ref=e63]
      - tab "Error Tracking" [ref=e64]
      - tab "Experiments" [ref=e65]
      - link "Go to app library (34)" [ref=e66]
    - tabpanel "PostHog AI" [ref=e43] focusable [tabindex]
      - heading "PostHog AI" [level=3, ref=e73]
      - link "Explore" [ref=e86]
    - heading "Who's using PostHog?" [level=2, ref=e44]
    - button "Shuffle companies" [ref=e87]
    - link [ref=e90]
    - link [ref=e91]
    - link [ref=e92]
    - link [ref=e93]
    - link [ref=e94]
    - link [ref=e95]
    - link [ref=e96]
    - link [ref=e97]
    - link "Open customers.mdx" [ref=e67]
    - heading "PostHog data stack, built for data teams and loved by product teams" [level=2, ref=e45]
    - generic [ref=e88] clickable [onclick]
    - link "README: PostHog data stack.md" [ref=e68]
    - heading "Usage-based pricing" [level=2, ref=e46]
    - link "1. Product Analytics" [ref=e47]
    - link "2. Session Replay" [ref=e48]
    - link "3. Feature Flags" [ref=e49]
    - link "4. Managed warehouse" [ref=e50]
    - link "Explore pricing" [ref=e69]
    - heading "\"How can AI help analyze data and build products faster?\"" [level=2, ref=e51]
    - link "Learn about PostHog AI" [ref=e70]
    - heading "Why PostHog?" [level=2, ref=e52]
    - link "company handbook" [ref=e74]
    - link "sales manual" [ref=e75]
    - link "company strategy" [ref=e76]
    - link "changelog" [ref=e77]
    - generic "support folks" [ref=e78] clickable [onclick]
      - link "support folks" [ref=e89]
    - link "Read more about us" [ref=e71]
    - heading "Bedtime reading" [level=2, ref=e53]
    - link "demo.mov" [ref=e79]
    - link "Technical docs" [ref=e80]
    - link "API" [ref=e81]
    - link "Ask a question" [ref=e82]
    - link "Small teams at PostHog" [ref=e83]
    - heading "Shameless CTA" [level=2, ref=e54]
    - button "US (Virginia)" [ref=e98]
    - button "EU (Frankfurt)" [ref=e99]
    - link "Get started" [ref=e84]
    - button "today" [ref=e85]
    - generic [ref=e34] clickable [onclick]
  - link "• All systems operational" [ref=e9]
  - link "Terms" [ref=e15]
  - link "Privacy" [ref=e16]
  - link "DPA" [ref=e17]
  - link "SOC 2" [ref=e18]
  - link "HIPAA" [ref=e19]
  - region "Notifications (F8)" [ref=e2]
    - generic [ref=e3] focusable [tabindex]
    - list "Legally-required cookie bannerPostHog.com doesn't use third-party cookies, only a single in-house co" [ref=e4] clickable [onclick]
      - listitem "Legally-required cookie bannerPostHog.com doesn't use third-party cookies, only a single in-house co" [level=1, ref=e6] focusable [tabindex]
        - generic "Ursula von der Leyen" [ref=e20] clickable [onclick]
        - button [ref=e21]
      - listitem "New PostHog Heroes action figuresOrder yours today" [level=1, ref=e7] focusable [tabindex]
        - button "Watch the action figure reveal" [ref=e22]
        - link "Order yours today" [ref=e23]
        - button [ref=e24]
    - generic [ref=e5] focusable [tabindex]
```

## Required Deliverables

1. Create a full site report matching `docs/templates/per-site-report-template.md`.
2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.
3. Preserve explicit separation between observed, inferred, and uncertain findings.
4. Include a section called `How to apply this without copying`.

## Finish Condition

When complete, save the markdown report to `data/reports/batch-01/posthog.md` and the JSON summary to `data/json/batch-01/posthog.json`.
