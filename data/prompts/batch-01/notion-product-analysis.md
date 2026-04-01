# Analysis Packet: notion-product

## Goal

Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.

## Source Instructions

- Skill: `skills/frontend-design-researcher.md`
- Prompt: `prompts/master-research-prompt.md`

## Output Targets

- Report: `data/reports/batch-01/notion-product.md`
- JSON: `data/json/batch-01/notion-product.json`

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
  "site": "notion-product",
  "url": "https://www.notion.com/product",
  "batch": "batch-01",
  "captured_at": "2026-04-01T19:50:51.270Z",
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
      "Video elements are present; confirm whether motion relies on video backgrounds or demos."
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

- `data/captures/batch-01/notion-product/screenshot-desktop-hero.png`
- `data/captures/batch-01/notion-product/screenshot-desktop-full.png`

### Mobile

- `data/captures/batch-01/notion-product/screenshot-mobile-full.png`

## Visible Text

```text
Product
AI
Solutions
Resources
Enterprise
Pricing
Request a demo
Log in
Get Notion free
One workspace. Zero busywork.
Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70.
Get Notion free
Request a demo
Play

Trusted by top teams

Introducing Notion 3.0
Notion Agent

You assign the tasks. Your Notion Agent does the work.
→

Hand off your busywork

What used to take days in minutes. Tell it your goal and watch it work.

Collaborates with your team

It's like having a built-in power user that works alongside your team.

Knows everything you know

Searches all your pages, messages, files, and the web to surface exactly what you need.

Personalized to you

Your Agent learns how you work. You control everything from how it behaves to how it looks.

Custom Agents
New
Automate repetitive tasks.
→
Enterprise Search
One search for everything.
→
AI Meeting Notes
Perfect notes, every time.
→
Flexible workflows
Manage any project, big or small.
→
Your AI everything app.
More productivity. Fewer tools.

Bring all your tools and teams under one roof. Calculate savings below.

See pricing plans→
AI Search
AI Chatbot$20/user
AI Meeting Notes
AI Writing Assistant
AI Email App
AI Research
Calendar Scheduling
Team Wiki$10/user
Project Management Tool$24/user
Basic CRM
Site Builder
Forms
Team size
Monthly savings
$340
Annual savings
$4,080
Trusted by teams that ship.
There’s power in a single platform where you can do all your work. Notion is that single place.
Read the full story→
Streamlined workflows to reduce timelines by 3x.→
“With Notion, every person at Ramp has an AI agent.”→
“Notion understands that you can solve a lot of problems with one tool.”→
“Notion has been the most powerful and impactful way to streamline our workflow.”→
“Using the most AI‑native tools like Notion is an important competitive advantage for us.”→
One hub for work and AI keeps everyone informed and work flowing.→

Over 100M users worldwide

#1 knowledge base 3 years running (G2)

#1 AI enterprise search (G2)

#1 rated AI writing (G2)

62% of Fortune 100

Over 50% of YC companies

1.4M+ community members

Over 100M users worldwide

#1 knowledge base 3 years running (G2)

#1 AI enterprise search (G2)

#1 rated AI writing (G2)

62% of Fortune 100

Over 50% of YC companies

1.4M+ community members

Over 100M users worldwide

#1 knowledge base 3 years running (G2)

#1 AI enterprise search (G2)

#1 rated AI writing (G2)

62% of Fortune 100

Over 50% of YC companies

1.4M+ community members

Let Notion AI handle the busywork.

Pick a use case to see how Notion does the work for you.

Explore more→
Go from brainstorm to roadmap→
Turn meetings into social posts→
Organize your workspace→
Onboard a new hire→
Revise a landing page→
Plan an offsite→
Track favorite restaurants→
Transform notes into tasks→
Try for free.
Get started on Notion

Your AI workspace with built-in agents.

Download for Mac
Notion Mail

The AI inbox that thinks like you.

Download
Notion Calendar

Time, scheduling, tasks—all together.

Download

Notion is always at home right in your browser.

English (US)
Do Not Sell or Share My Info
Cookie settings
© 2026 Notion Labs, Inc.

Company

About us
Careers
Security
Status
Terms & privacy
Your privacy rights

Download

iOS & Android
Mac & Windows
Mail
Calendar
Web Clipper

Resources

Help center
Pricing
Blog
Community
Integrations
Templates
Partner programs

Notion for

Enterprise
Small business
Personal
Explore more→
```

## DOM Notes

```md
# DOM Notes for The AI workspace that works for you. | Notion

## Element Counts
- button: 21
- canvas: 0
- form: 1
- image: 32
- input: 13
- link: 124
- section: 6
- video: 7

## Heading Outline
- h2: 
- h2: 
- h2: 
- h2: 
- h2: 
- h2: 
- h2: 
- h2: 
- h1: One workspace. Zero busywork.
- h2: Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70.
- h2: Introducing Notion 3.0
- h3: Notion Agent
- h3: Custom Agents
- h2: Automate repetitive tasks.
- h3: Enterprise Search
- h2: One search for everything.
- h3: AI Meeting Notes
- h2: Perfect notes, every time.
- h3: Flexible workflows
- h2: Manage any project, big or small.
- h2: More productivity. Fewer tools.
- h2: Trusted by teams that ship.
- h2: Let Notion AI handle the busywork.
- h2: Try for free.
- h3: Get started on Notion
- h3: Notion Mail
- h3: Notion Calendar

## Section Samples
- HomepageHeroMWN_hero__F92yv: One workspace. Zero busywork. Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70. Get Notion free Request a demo Play
- homepageBentoCarousel_root__XEVDN: Introducing Notion 3.0 Notion Agent You assign the tasks. Your Notion Agent does the work. → Hand off your busywork What used to take days in minutes. Tell it your goal and watch it work. Collaborates with your team It's
- :R2akkjm:: Notion Agent You assign the tasks. Your Notion Agent does the work. → Hand off your busywork What used to take days in minutes. Tell it your goal and watch it work. Collaborates with your team It's like having a built-in
- :RjmH1:: Custom Agents New Automate repetitive tasks. → Enterprise Search One search for everything. → AI Meeting Notes Perfect notes, every time. → Flexible workflows Manage any project, big or small. →
- section-5: Trusted by teams that ship. There’s power in a single platform where you can do all your work. Notion is that single place. Read the full story→ Streamlined workflows to reduce timelines by 3x.→ “With Notion, every perso
- :RjmH3:: Try for free. Get started on Notion Your AI workspace with built-in agents. Download for Mac Notion Mail The AI inbox that thinks like you. Download Notion Calendar Time, scheduling, tasks—all together. Download Notion i

## Script References
- https://munchkin.marketo.net/165/munchkin.js
- https://connect.facebook.net/signals/config/499229960464487?v=2.9.289&r=stable&domain=www.notion.com&hme=c676e0b4e1b62cc7b9a55179c96fc72f4b50ddb02e06525868e7052c2bcfa5eb&ex_m=102%2C198%2C147%2C22%2C70%2C71%2C139%2C66%2C65%2C11%2C155%2C88%2C16%2C132%2C124%2C37%2C73%2C76%2C130%2C152%2C157%2C8%2C4%2C5%2C7%2C6%2C3%2C89%2C99%2C158%2C163%2C212%2C60%2C179%2C180%2C53%2C267%2C30%2C72%2C224%2C223%2C222%2C23%2C32%2C101%2C59%2C10%2C61%2C95%2C96%2C97%2C103%2C127%2C31%2C29%2C129%2C126%2C125%2C148%2C74%2C151%2C149%2C150%2C48%2C58%2C120%2C15%2C154%2C43%2C254%2C255%2C253%2C26%2C27%2C28%2C46%2C140%2C75%2C110%2C18%2C20%2C42%2C38%2C40%2C39%2C81%2C90%2C94%2C108%2C138%2C141%2C44%2C109%2C24%2C21%2C116%2C67%2C35%2C143%2C142%2C144%2C135%2C133%2C25%2C34%2C57%2C107%2C153%2C68%2C17%2C145%2C112%2C79%2C64%2C19%2C83%2C84%2C113%2C82%2C33%2C283%2C205%2C194%2C195%2C193%2C286%2C278%2C50%2C206%2C105%2C128%2C78%2C118%2C52%2C45%2C47%2C111%2C117%2C123%2C56%2C62%2C51%2C54%2C98%2C156%2C1%2C121%2C14%2C119%2C12%2C2%2C55%2C91%2C63%2C115%2C87%2C86%2C159%2C160%2C92%2C93%2C9%2C122%2C100%2C49%2C136%2C85%2C77%2C69%2C114%2C104%2C41%2C137%2C0%2C80%2C131%2C134%2C146%2C36%2C106%2C13%2C161
- https://connect.facebook.net/en_US/fbevents.js
- https://d34r8q7sht0t9k.cloudfront.net/tag.js
- https://static.ads-twitter.com/uwt.js
- https://snap.licdn.com/li.lms-analytics/insight.min.js
- https://www.googletagmanager.com/gtag/js?id=G-9ZJ8CB186L&cx=c&gtm=4e63u1
- https://www.googletagmanager.com/gtag/js?id=AW-695511889&cx=c&gtm=4e63u1
- https://www.googletagmanager.com/gtag/js?id=AW-10930095205&cx=c&gtm=4e63u1
- https://www.notion.com/_next/static/chunks/polyfills-42372ed130431b0a.js
- https://www.notion.com/_next/static/chunks/69104.c88aab62f86e84a0.js
- https://www.notion.com/_next/static/chunks/427.501cc68324acb5a0.js
- https://www.notion.com/_next/static/chunks/99546.fb03a12ecb9902a6.js
- https://www.notion.com/_next/static/chunks/87396-d031cdbaaf0c9e97.js
- https://www.notion.com/_next/static/chunks/15185.3b6a756fb5983fe4.js
- https://www.notion.com/_next/static/chunks/83804.dcbace5034963713.js
- https://www.notion.com/_next/static/chunks/24320-231bd21ca9b1df53.js
- https://www.notion.com/_next/static/chunks/73454-8e414b0b606b5f25.js
- https://www.notion.com/_next/static/chunks/60894-75df34b700dad3e3.js
- https://www.notion.com/_next/static/chunks/55675.486e78793f376a45.js
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
- - generic "ProductNotionYour AI workspaceNotion CalendarNotion MailNotion AIAI tools for workAgentsAutomate bus" [ref=e1] clickable [onclick]
-   - navigation "Main" [ref=e2]
-     - link "Notion – Home" [ref=e12]
-     - button "Product" [expanded=false, ref=e31]
-     - button "AI" [expanded=false, ref=e32]
-     - button "Solutions" [expanded=false, ref=e33]
-     - button "Resources" [expanded=false, ref=e34]
-     - link "Enterprise" [ref=e13]
-     - link "Pricing" [ref=e14]
-     - link "Request a demo" [ref=e15]
-     - link "Log in" [ref=e16]
-     - link "Get Notion free" [ref=e17]
-   - heading "One workspace. Zero busywork." [level=1, ref=e49]
-   - heading "Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70." [level=2, ref=e50]
-   - link "Get Notion free" [ref=e51]
-   - link "Request a demo" [ref=e52]
-   - button "Play" [ref=e115]
-   - link [ref=e53]
-   - link [ref=e54]
-   - link [ref=e55]
```

## Tech Hints

```md
# Tech Hints

- Video elements are present; confirm whether motion relies on video backgrounds or demos.
```

## Interactive Snapshot: Desktop

```text
- generic "ProductNotionYour AI workspaceNotion CalendarNotion MailNotion AIAI tools for workAgentsAutomate bus" [ref=e1] clickable [onclick]
  - navigation "Main" [ref=e2]
    - link "Notion – Home" [ref=e12]
    - button "Product" [expanded=false, ref=e31]
    - button "AI" [expanded=false, ref=e32]
    - button "Solutions" [expanded=false, ref=e33]
    - button "Resources" [expanded=false, ref=e34]
    - link "Enterprise" [ref=e13]
    - link "Pricing" [ref=e14]
    - link "Request a demo" [ref=e15]
    - link "Log in" [ref=e16]
    - link "Get Notion free" [ref=e17]
  - heading "One workspace. Zero busywork." [level=1, ref=e49]
  - heading "Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70." [level=2, ref=e50]
  - link "Get Notion free" [ref=e51]
  - link "Request a demo" [ref=e52]
  - button "Play" [ref=e115]
  - link [ref=e53]
  - link [ref=e54]
  - link [ref=e55]
  - link [ref=e56]
  - link [ref=e57]
  - heading "Introducing Notion 3.0" [level=2, ref=e18]
  - region "Notion Agent" [ref=e19]
    - link "Notion Agent You assign the tasks. Your Notion Agent does the work." [ref=e58]
      - heading "Notion Agent" [level=3, ref=e116]
    - button "next" [ref=e153]
    - tablist "Notion Agent" [ref=e35] clickable [onclick]
      - tab "Hand off your busywork What used to take days in minutes. Tell it your goal and watch it work." [selected, ref=e59]
      - tab "Collaborates with your team It's like having a built-in power user that works alongside your team." [ref=e60]
      - tab "Knows everything you know Searches all your pages, messages, files, and the web to surface exactly what you need." [ref=e61]
      - tab "Personalized to you Your Agent learns how you work. You control everything from how it behaves to how it looks." [ref=e62]
  - heading "Custom Agents" [level=3, ref=e63]
  - heading "Automate repetitive tasks." [level=2, ref=e64]
  - link "Automate repetitive tasks." [ref=e36]
  - heading "Enterprise Search" [level=3, ref=e65]
  - heading "One search for everything." [level=2, ref=e66]
  - link "One search for everything." [ref=e37]
  - heading "AI Meeting Notes" [level=3, ref=e67]
  - heading "Perfect notes, every time." [level=2, ref=e68]
  - link "Perfect notes, every time." [ref=e38]
  - heading "Flexible workflows" [level=3, ref=e69]
  - heading "Manage any project, big or small." [level=2, ref=e70]
  - link "Manage any project, big or small." [ref=e39]
  - heading "More productivity. Fewer tools." [level=2, ref=e20]
  - link "See pricing plans" [ref=e21]
  - LabelText "AI Search$35/user" [ref=e71] clickable [cursor:pointer]
    - checkbox "AI Search" [checked=false, ref=e117]
  - LabelText "AI Chatbot$20/user" [ref=e72] clickable [cursor:pointer]
    - checkbox "AI Chatbot $20/user" [checked=true, ref=e118]
  - LabelText "AI Meeting Notes$18/user" [ref=e73] clickable [cursor:pointer]
    - checkbox "AI Meeting Notes" [checked=false, ref=e119]
  - LabelText "AI Writing Assistant$20/user" [ref=e74] clickable [cursor:pointer]
    - checkbox "AI Writing Assistant" [checked=false, ref=e120]
  - LabelText "AI Email App$30/user" [ref=e75] clickable [cursor:pointer]
    - checkbox "AI Email App" [checked=false, ref=e121]
  - LabelText "AI Research$40/user" [ref=e76] clickable [cursor:pointer]
    - checkbox "AI Research" [checked=false, ref=e122]
  - LabelText "Calendar Scheduling$15/user" [ref=e77] clickable [cursor:pointer]
    - checkbox "Calendar Scheduling" [checked=false, ref=e123]
  - LabelText "Team Wiki$10/user" [ref=e78] clickable [cursor:pointer]
    - checkbox "Team Wiki $10/user" [checked=true, ref=e124]
  - LabelText "Project Management Tool$24/user" [ref=e79] clickable [cursor:pointer]
    - checkbox "Project Management Tool $24/user" [checked=true, ref=e125]
  - LabelText "Basic CRM$20/user" [ref=e80] clickable [cursor:pointer]
    - checkbox "Basic CRM" [checked=false, ref=e126]
  - LabelText "Site Builder$20/user" [ref=e81] clickable [cursor:pointer]
    - checkbox "Site Builder" [checked=false, ref=e127]
  - LabelText "Forms$15/user" [ref=e82] clickable [cursor:pointer]
    - checkbox "Forms" [checked=false, ref=e128]
  - spinbutton "Team size" [ref=e83]: 10
  - heading "Trusted by teams that ship." [level=2, ref=e22]
  - generic "There’s power in a single platform where you can do all your work. Notion is that single place.Read" [ref=e23] clickable [onclick]
    - link "Read the full story" [ref=e129]
    - button "View the video" [ref=e40]
    - link "Streamlined workflows to reduce timelines by 3x." [ref=e41]
    - link "“With Notion, every person at Ramp has an AI agent.”" [ref=e42]
    - link "“Notion understands that you can solve a lot of problems with one tool.”" [ref=e43]
    - link "“Notion has been the most powerful and impactful way to streamline our workflow.”" [ref=e44]
    - link "“Using the most AI‑native tools like Notion is an important competitive advantage for us.”" [ref=e45]
    - link "One hub for work and AI keeps everyone informed and work flowing." [ref=e46]
  - heading "Let Notion AI handle the busywork." [level=2, ref=e24]
  - link "Explore more" [ref=e25]
  - link "Go from brainstorm to roadmap" [ref=e3]
  - link "Turn meetings into social posts" [ref=e4]
  - link "Organize your workspace" [ref=e5]
  - link "Onboard a new hire" [ref=e6]
  - link "Revise a landing page" [ref=e7]
  - link "Plan an offsite" [ref=e8]
  - link "Track favorite restaurants" [ref=e9]
  - link "Transform notes into tasks" [ref=e10]
  - heading "Try for free." [level=2, ref=e26]
  - heading "Get started on Notion" [level=3, ref=e84]
  - link "Download for Mac" [ref=e130]
  - heading "Notion Mail" [level=3, ref=e85]
  - link "Learn more about Notion Mail" [ref=e86]
  - heading "Notion Calendar" [level=3, ref=e87]
  - link "Learn more about Notion Calendar" [ref=e88]
  - link "in your browser" [ref=e47]
  - navigation "Footer" [ref=e11]
    - link "Notion – Home" [ref=e27]
    - link "Instagram" [ref=e89]
    - link "X" [ref=e90]
    - link "LinkedIn" [ref=e91]
    - link "Facebook" [ref=e92]
    - link "YouTube" [ref=e93]
    - button "English (US)" [ref=e48]
    - button "Do Not Sell or Share My Info" [ref=e28]
    - button "Cookie settings" [ref=e29]
    - generic "CompanyAbout usCareersSecurityStatusTerms & privacyYour privacy rightsDownloadiOS & AndroidMac & Win" [ref=e30] clickable [onclick]
      - listitem "About us" [level=1, ref=e94] clickable [cursor:pointer]
        - link "About us" [ref=e131]
      - listitem "Careers" [level=1, ref=e95] clickable [cursor:pointer]
        - link "Careers" [ref=e132]
      - listitem "Security" [level=1, ref=e96] clickable [cursor:pointer]
        - link "Security" [ref=e133]
      - listitem "Status" [level=1, ref=e97] clickable [cursor:pointer]
        - link "Status" [ref=e134]
      - listitem "Terms & privacy" [level=1, ref=e98] clickable [cursor:pointer]
        - link "Terms & privacy" [ref=e135]
      - listitem "Your privacy rights" [level=1, ref=e99] clickable [cursor:pointer]
        - link "Your privacy rights" [ref=e136]
      - listitem "iOS & Android" [level=1, ref=e100] clickable [cursor:pointer]
        - link "iOS & Android" [ref=e137]
      - listitem "Mac & Windows" [level=1, ref=e101] clickable [cursor:pointer]
        - link "Mac & Windows" [ref=e138]
      - listitem "Mail" [level=1, ref=e102] clickable [cursor:pointer]
        - link "Mail" [ref=e139]
      - listitem "Calendar" [level=1, ref=e103] clickable [cursor:pointer]
        - link "Calendar" [ref=e140]
      - listitem "Web Clipper" [level=1, ref=e104] clickable [cursor:pointer]
        - link "Web Clipper" [ref=e141]
      - listitem "Help center" [level=1, ref=e105] clickable [cursor:pointer]
        - link "Help center" [ref=e142]
      - listitem "Pricing" [level=1, ref=e106] clickable [cursor:pointer]
        - link "Pricing" [ref=e143]
      - listitem "Blog" [level=1, ref=e107] clickable [cursor:pointer]
        - link "Blog" [ref=e144]
      - listitem "Community" [level=1, ref=e108] clickable [cursor:pointer]
        - link "Community" [ref=e145]
      - listitem "Integrations" [level=1, ref=e109] clickable [cursor:pointer]
        - link "Integrations" [ref=e146]
      - listitem "Templates" [level=1, ref=e110] clickable [cursor:pointer]
        - link "Templates" [ref=e147]
      - listitem "Partner programs" [level=1, ref=e111] clickable [cursor:pointer]
        - link "Partner programs" [ref=e148]
      - listitem "Enterprise" [level=1, ref=e112] clickable [cursor:pointer]
        - link "Enterprise" [ref=e149]
      - listitem "Small business" [level=1, ref=e113] clickable [cursor:pointer]
        - link "Small business" [ref=e150]
      - listitem "Personal" [level=1, ref=e114] clickable [cursor:pointer]
        - link "Personal" [ref=e151]
      - link "Explore more" [ref=e152]
```

## Interactive Snapshot: Mobile

```text
- generic "ProductNotionYour AI workspaceNotion CalendarNotion MailNotion AIAI tools for workAgentsNewAutomate" [ref=e1] clickable [onclick]
  - navigation "Main" [ref=e2]
    - link "Notion – Home" [ref=e4]
    - link "Get Notion free" [ref=e5]
    - button "Toggle main menu" [ref=e6]
  - heading "Meet the night shift." [level=1, ref=e27]
  - link "Get Notion free" [ref=e28]
  - link "Request a demo" [ref=e29]
  - heading "Keep work moving 24/7." [level=2, ref=e7]
  - region "Custom Agents" [ref=e8]
    - link "Custom Agents New Automate repetitive work for your team." [ref=e47]
      - heading "Custom Agents New" [level=3, ref=e107]
    - button "next" [ref=e150]
    - button "Pause" [ref=e152]
    - tablist "Custom Agents" [ref=e30] clickable [onclick]
      - tab "Q&A agents Answers questions instantly using knowledge you already have." [selected, ref=e48]
      - tab "Task routing agents Assigns, prioritizes, and routes tasks on its own." [ref=e49]
      - tab "Reporting agents Summarizes, writes, and sends reports for you." [ref=e50]
      - tab "Create your own Make a Custom Agent for any work that repeats." [ref=e51]
    - tablist "Current slide indicator" [ref=e31] clickable [onclick]
      - tab "Go to slide 1" [selected, ref=e52]
      - tab "Go to slide 2" [ref=e53]
      - tab "Go to slide 3" [ref=e54]
      - tab "Go to slide 4" [ref=e55]
  - heading "See what Custom Agents can do" [level=3, ref=e9]
  - link "Triage product feedback" [ref=e32]
  - heading "Triage product feedback" [level=3, ref=e33]
  - link "Resolve support tickets in Slack" [ref=e34]
  - heading "Resolve support tickets in Slack" [level=3, ref=e35]
  - link "Respond to security alerts faster" [ref=e36]
  - heading "Respond to security alerts faster" [level=3, ref=e37]
  - link "Automate weekly reporting" [ref=e38]
  - heading "Automate weekly reporting" [level=3, ref=e39]
  - link "Create your own Custom Agent" [ref=e40]
  - heading "Create your own Custom Agent" [level=3, ref=e41]
  - heading "Ask your on-demand assistants." [level=2, ref=e10]
  - article "Notion AgentYou assign the tasks. Notion Agent does the work.→" [ref=e11] clickable [onclick]
    - link "Try it" [ref=e56]
    - heading "You assign the tasks. Notion Agent does the work." [level=2, ref=e108]
  - article "Enterprise SearchOne search for everything.→" [ref=e12] clickable [onclick]
    - link "Try it" [ref=e57]
    - heading "One search for everything." [level=2, ref=e109]
  - article "AI Meeting NotesPerfect notes, every time.→" [ref=e13] clickable [onclick]
    - link "Try it" [ref=e58]
    - heading "Perfect notes, every time." [level=2, ref=e110]
  - heading "Bring all your work together." [level=2, ref=e14]
  - article "DocsSimple and powerful.→" [ref=e15] clickable [onclick]
    - link "Try it" [ref=e59]
    - heading "Simple and powerful." [level=2, ref=e111]
  - article "Knowledge BaseOne source of truth for teams and agents.→" [ref=e16] clickable [onclick]
    - link "Try it" [ref=e60]
    - heading "One source of truth for teams and agents." [level=2, ref=e112]
  - article "ProjectsLess tracking. More progress.→" [ref=e17] clickable [onclick]
    - link "Try it" [ref=e61]
    - heading "Less tracking. More progress." [level=2, ref=e113]
  - heading "More productivity. Fewer tools." [level=2, ref=e18]
  - link "See pricing plans" [ref=e19]
  - LabelText "AI Search$35/user" [ref=e62] clickable [cursor:pointer]
    - checkbox "AI Search" [checked=false, ref=e114]
  - LabelText "AI Chatbot$20/user" [ref=e63] clickable [cursor:pointer]
    - checkbox "AI Chatbot $20/user" [checked=true, ref=e115]
  - LabelText "AI Meeting Notes$18/user" [ref=e64] clickable [cursor:pointer]
    - checkbox "AI Meeting Notes" [checked=false, ref=e116]
  - LabelText "AI Writing Assistant$20/user" [ref=e65] clickable [cursor:pointer]
    - checkbox "AI Writing Assistant" [checked=false, ref=e117]
  - LabelText "AI Email App$30/user" [ref=e66] clickable [cursor:pointer]
    - checkbox "AI Email App" [checked=false, ref=e118]
  - LabelText "AI Research$40/user" [ref=e67] clickable [cursor:pointer]
    - checkbox "AI Research" [checked=false, ref=e119]
  - LabelText "Calendar Scheduling$15/user" [ref=e68] clickable [cursor:pointer]
    - checkbox "Calendar Scheduling" [checked=false, ref=e120]
  - LabelText "Team Wiki$10/user" [ref=e69] clickable [cursor:pointer]
    - checkbox "Team Wiki $10/user" [checked=true, ref=e121]
  - LabelText "Project Management Tool$24/user" [ref=e70] clickable [cursor:pointer]
    - checkbox "Project Management Tool $24/user" [checked=true, ref=e122]
  - LabelText "Basic CRM$20/user" [ref=e71] clickable [cursor:pointer]
    - checkbox "Basic CRM" [checked=false, ref=e123]
  - LabelText "Site Builder$20/user" [ref=e72] clickable [cursor:pointer]
    - checkbox "Site Builder" [checked=false, ref=e124]
  - LabelText "Forms$15/user" [ref=e73] clickable [cursor:pointer]
    - checkbox "Forms" [checked=false, ref=e125]
  - spinbutton "Team size" [ref=e74]: 10
  - heading "Trusted by teams that ship." [level=2, ref=e20]
  - generic "There’s power in a single platform where you can do all your work. Notion is that single place.Read" [ref=e21] clickable [onclick]
    - link "Read the full story" [ref=e126]
    - Iframe "OpenAI turns shared knowledge into faster workflows" [ref=e151]
      - button "Play video" [ref=e154]
      - button "Hide player controls" [ref=e153]
      - link "OpenAI turns shared knowledge into faster workflows" [ref=e155]
      - link "Notion" [ref=e156]
      - button [ref=e157]
    - button "Play" [ref=e127]
    - link "Streamlined workflows to reduce timelines by 3x." [ref=e42]
    - link "“With Notion, every person at Ramp has an AI agent.”" [ref=e43]
    - link "“Notion understands that you can solve a lot of problems with one tool.”" [ref=e44]
  - heading "Try for free." [level=2, ref=e22]
  - heading "Get started on Notion" [level=3, ref=e75]
  - link "Download for iOS" [ref=e76]
  - heading "Notion Mail" [level=3, ref=e77]
  - link "Learn more about Notion Mail" [ref=e78]
  - heading "Notion Calendar" [level=3, ref=e79]
  - link "Learn more about Notion Calendar" [ref=e80]
  - link "in your browser" [ref=e45]
  - navigation "Footer" [ref=e3]
    - link "Notion – Home" [ref=e23]
    - link "Instagram" [ref=e81]
    - link "X" [ref=e82]
    - link "LinkedIn" [ref=e83]
    - link "Facebook" [ref=e84]
    - link "YouTube" [ref=e85]
    - button "English (US)" [ref=e46]
    - button "Do Not Sell or Share My Info" [ref=e24]
    - button "Cookie settings" [ref=e25]
    - generic "CompanyAbout usCareersSecurityStatusTerms & privacyYour privacy rightsDownloadiOS & AndroidMac & Win" [ref=e26] clickable [onclick]
      - listitem "About us" [level=1, ref=e86] clickable [cursor:pointer]
        - link "About us" [ref=e128]
      - listitem "Careers" [level=1, ref=e87] clickable [cursor:pointer]
        - link "Careers" [ref=e129]
      - listitem "Security" [level=1, ref=e88] clickable [cursor:pointer]
        - link "Security" [ref=e130]
      - listitem "Status" [level=1, ref=e89] clickable [cursor:pointer]
        - link "Status" [ref=e131]
      - listitem "Terms & privacy" [level=1, ref=e90] clickable [cursor:pointer]
        - link "Terms & privacy" [ref=e132]
      - listitem "Your privacy rights" [level=1, ref=e91] clickable [cursor:pointer]
        - link "Your privacy rights" [ref=e133]
      - listitem "iOS & Android" [level=1, ref=e92] clickable [cursor:pointer]
        - link "iOS & Android" [ref=e134]
      - listitem "Mac & Windows" [level=1, ref=e93] clickable [cursor:pointer]
        - link "Mac & Windows" [ref=e135]
      - listitem "Mail" [level=1, ref=e94] clickable [cursor:pointer]
        - link "Mail" [ref=e136]
      - listitem "Calendar" [level=1, ref=e95] clickable [cursor:pointer]
        - link "Calendar" [ref=e137]
      - listitem "Web Clipper" [level=1, ref=e96] clickable [cursor:pointer]
        - link "Web Clipper" [ref=e138]
      - listitem "Help center" [level=1, ref=e97] clickable [cursor:pointer]
        - link "Help center" [ref=e139]
      - listitem "Pricing" [level=1, ref=e98] clickable [cursor:pointer]
        - link "Pricing" [ref=e140]
      - listitem "Blog" [level=1, ref=e99] clickable [cursor:pointer]
        - link "Blog" [ref=e141]
      - listitem "Community" [level=1, ref=e100] clickable [cursor:pointer]
        - link "Community" [ref=e142]
      - listitem "Integrations" [level=1, ref=e101] clickable [cursor:pointer]
        - link "Integrations" [ref=e143]
      - listitem "Templates" [level=1, ref=e102] clickable [cursor:pointer]
        - link "Templates" [ref=e144]
      - listitem "Partner programs" [level=1, ref=e103] clickable [cursor:pointer]
        - link "Partner programs" [ref=e145]
      - listitem "Enterprise" [level=1, ref=e104] clickable [cursor:pointer]
        - link "Enterprise" [ref=e146]
      - listitem "Small business" [level=1, ref=e105] clickable [cursor:pointer]
        - link "Small business" [ref=e147]
      - listitem "Personal" [level=1, ref=e106] clickable [cursor:pointer]
        - link "Personal" [ref=e148]
      - link "Explore more" [ref=e149]
```

## Required Deliverables

1. Create a full site report matching `docs/templates/per-site-report-template.md`.
2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.
3. Preserve explicit separation between observed, inferred, and uncertain findings.
4. Include a section called `How to apply this without copying`.

## Finish Condition

When complete, save the markdown report to `data/reports/batch-01/notion-product.md` and the JSON summary to `data/json/batch-01/notion-product.json`.
