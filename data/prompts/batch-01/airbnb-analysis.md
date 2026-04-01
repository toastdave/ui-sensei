# Analysis Packet: airbnb

## Goal

Use this packet with the research skill and master prompt to produce one complete site report and one normalized JSON summary.

## Source Instructions

- Skill: `skills/frontend-design-researcher.md`
- Prompt: `prompts/master-research-prompt.md`

## Output Targets

- Report: `data/reports/batch-01/airbnb.md`
- JSON: `data/json/batch-01/airbnb.json`

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
  "site": "airbnb",
  "url": "https://www.airbnb.com",
  "batch": "batch-01",
  "captured_at": "2026-04-01T19:52:19.068Z",
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

- `data/captures/batch-01/airbnb/screenshot-desktop-hero.png`
- `data/captures/batch-01/airbnb/screenshot-desktop-full.png`

### Mobile

- `data/captures/batch-01/airbnb/screenshot-mobile-full.png`

## Visible Text

```text
Skip to content
Airbnb homepage
Homes
Homes
NEW
NEW
Experiences
Experiences, new
NEW
NEW
Services
Services, new
Where
When
Add dates
Who
Add guests
Become a host
Inspiration for future getaways
Popular
Arts & culture
Beach
Mountains
Outdoors
Things to do
Travel tips & inspiration
Airbnb-friendly apartments
Dallas 
Villa rentals
Cleveland 
Villa rentals
Gulf Shores 
Apartment rentals
Barcelona 
Apartment rentals
Galveston 
Monthly Rentals
St. Petersburg 
House rentals
Amsterdam 
Cottage rentals
Philadelphia 
Monthly Rentals
Orange Beach 
Condo rentals
West Palm Beach 
Apartment rentals
North Myrtle Beach 
House rentals
Nice 
Condo rentals
Raleigh 
Apartment rentals
Kauai 
Villa rentals
Maui 
Monthly Rentals
San Juan 
Cabin rentals
Charlotte 
House rentals
Show more
Site Footer
Support
Help Center
Get help with a safety issue
AirCover
Travel insurance
Anti-discrimination
Disability support
Cancellation options
Report neighborhood concern
Hosting
Airbnb your home
Airbnb your experience
Airbnb your service
AirCover for Hosts
Hosting resources
Community forum
Hosting responsibly
Airbnb-friendly apartments
Join a free hosting class
Find a co‑host
Refer a host
Airbnb
2025 Summer Release
Newsroom
Careers
Investors
Gift cards
Airbnb.org emergency stays
Footer section
© 2026 Airbnb, Inc.·Privacy·Terms·Your Privacy Choices
English (US)
$
USD
```

## DOM Notes

```md
# DOM Notes for Airbnb | Vacation rentals, cabins, beach houses, & more

## Element Counts
- button: 26
- canvas: 0
- form: 1
- image: 1
- input: 1
- link: 147
- section: 4
- video: 6

## Heading Outline
- h1: Airbnb homepage
- h2: Inspiration for future getaways
- h2: Site Footer
- h3: Support
- h3: Hosting
- h3: Airbnb

## Section Samples
- se5ui3x atm_67_iod1ro atm_lb_yvrvwa atm_da_cbdd7d atm_67_idpfg4_13mkcot atm_67_i: Support Help Center Get help with a safety issue AirCover Travel insurance Anti-discrimination Disability support Cancellation options Report neighborhood concern
- se5ui3x atm_67_iod1ro atm_lb_yvrvwa atm_da_cbdd7d atm_67_idpfg4_13mkcot atm_67_i: Hosting Airbnb your home Airbnb your experience Airbnb your service AirCover for Hosts Hosting resources Community forum Hosting responsibly Airbnb-friendly apartments Join a free hosting class Find a co‑host Refer a hos
- se5ui3x atm_67_iod1ro atm_lb_yvrvwa atm_da_cbdd7d atm_67_idpfg4_13mkcot atm_67_i: Airbnb 2025 Summer Release Newsroom Careers Investors Gift cards Airbnb.org emergency stays
- section-4: © 2026 Airbnb, Inc.·Privacy·Terms·Your Privacy Choices English (US) $ USD

## Script References
- https://d34r8q7sht0t9k.cloudfront.net/tag.js
- https://js.adsrvr.org/conversionEvents-v1.min.js
- https://www.googletagmanager.com/gtag/js?id=G-2P6Q8PGG16&cx=c&gtm=4e63u1
- https://www.googletagmanager.com/gtm.js?id=GTM-46MK
- https://d0a7e.airbnb.com/tags.js
- https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/metroRequire.9062f15cf4.js
- https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/shims_post_modules.1a6868ebcb.js
- https://a0.muscache.com/airbnb/static/packages/web/en/frontend/airmetro/browser/asyncRequire.39d5ea4b56.js
- https://a0.muscache.com/airbnb/static/packages/web/common/frontend/hyperloop-browser/coreV2.f004afedc4.js
- https://a0.muscache.com/airbnb/static/packages/web/common/cb24.8935e714de.js
- https://a0.muscache.com/airbnb/static/packages/web/common/frontend/core-guest-loop/routeHandler.dc51be1872.js
- https://a0.muscache.com/airbnb/static/packages/web/en/4278.898f31cffd.js
- https://a0.muscache.com/airbnb/static/packages/web/common/4906.9b6ef4499b.js
- https://a0.muscache.com/airbnb/static/packages/web/common/e312.d121089969.js
- https://a0.muscache.com/airbnb/static/packages/web/common/bf5b.a76407d731.js
- https://a0.muscache.com/airbnb/static/packages/web/common/ecdc.545be0a4df.js
- https://a0.muscache.com/airbnb/static/packages/web/common/5381.b41820c2da.js
- https://a0.muscache.com/airbnb/static/packages/web/common/frontend/core-guest-loop/apps/core-guest-spa/initializer.3678dab693.js
- https://a0.muscache.com/airbnb/static/packages/web/en/a56b.ba1422b4a4.js
- https://a0.muscache.com/airbnb/static/packages/web/common/6015.d17f19677d.js
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
- - link "Skip to content" [ref=e1]
- - generic "Airbnb homepageHomesHomesNEWNEWExperiencesExperiences, newNEWNEWServicesServices, newWhereWhenAdd da" [ref=e2] clickable [onclick]
-   - heading "Airbnb homepage" [level=1, ref=e3]
-   - link "Airbnb homepage" [ref=e6]
-   - tab "Homes" [selected, ref=e69]
-   - tab "Experiences, new" [ref=e70]
-   - tab "Services, new" [ref=e71]
-   - generic "Where" [ref=e72] clickable [cursor:pointer, onclick]
-     - searchbox "Where" [ref=e77]
-   - button "When Add dates" [expanded=false, ref=e73]
-   - button "Who Add guests" [expanded=false, ref=e74]
-   - button "Search" [ref=e76]
-   - navigation "Profile" [ref=e7]
-     - button "Become a host" [ref=e13]
-     - button "Choose a language and currency" [expanded=false, ref=e22]
-     - button "Main navigation menu" [expanded=false, ref=e75]
-   - heading "Inspiration for future getaways" [level=2, ref=e4]
-   - tab "Popular" [selected, ref=e14]
-   - tab "Arts & culture" [ref=e15]
-   - tab "Beach" [ref=e16]
```

## Tech Hints

```md
# Tech Hints

- Video elements are present; confirm whether motion relies on video backgrounds or demos.
```

## Interactive Snapshot: Desktop

```text
- link "Skip to content" [ref=e1]
- generic "Airbnb homepageHomesHomesNEWNEWExperiencesExperiences, newNEWNEWServicesServices, newWhereWhenAdd da" [ref=e2] clickable [onclick]
  - heading "Airbnb homepage" [level=1, ref=e3]
  - link "Airbnb homepage" [ref=e6]
  - tab "Homes" [selected, ref=e69]
  - tab "Experiences, new" [ref=e70]
  - tab "Services, new" [ref=e71]
  - generic "Where" [ref=e72] clickable [cursor:pointer, onclick]
    - searchbox "Where" [ref=e77]
  - button "When Add dates" [expanded=false, ref=e73]
  - button "Who Add guests" [expanded=false, ref=e74]
  - button "Search" [ref=e76]
  - navigation "Profile" [ref=e7]
    - button "Become a host" [ref=e13]
    - button "Choose a language and currency" [expanded=false, ref=e22]
    - button "Main navigation menu" [expanded=false, ref=e75]
  - heading "Inspiration for future getaways" [level=2, ref=e4]
  - tab "Popular" [selected, ref=e14]
  - tab "Arts & culture" [ref=e15]
  - tab "Beach" [ref=e16]
  - tab "Mountains" [ref=e17]
  - tab "Outdoors" [ref=e18]
  - tab "Things to do" [ref=e19]
  - tab "Travel tips & inspiration" [ref=e20]
  - tab "Airbnb-friendly apartments" [ref=e21]
  - link "Dallas Villa rentals" [ref=e23]
  - link "Cleveland Villa rentals" [ref=e24]
  - link "Gulf Shores Apartment rentals" [ref=e25]
  - link "Barcelona Apartment rentals" [ref=e26]
  - link "Galveston Monthly Rentals" [ref=e27]
  - link "St. Petersburg House rentals" [ref=e28]
  - link "Amsterdam Cottage rentals" [ref=e29]
  - link "Philadelphia Monthly Rentals" [ref=e30]
  - link "Orange Beach Condo rentals" [ref=e31]
  - link "West Palm Beach Apartment rentals" [ref=e32]
  - link "North Myrtle Beach House rentals" [ref=e33]
  - link "Nice Condo rentals" [ref=e34]
  - link "Raleigh Apartment rentals" [ref=e35]
  - link "Kauai Villa rentals" [ref=e36]
  - link "Maui Monthly Rentals" [ref=e37]
  - link "San Juan Cabin rentals" [ref=e38]
  - link "Charlotte House rentals" [ref=e39]
  - button "Show more Popular" [ref=e40]
  - heading "Site Footer" [level=2, ref=e5]
  - heading "Support" [level=3, ref=e8]
  - link "Help Center" [ref=e41]
  - link "Get help with a safety issue" [ref=e42]
  - link "AirCover" [ref=e43]
  - link "Travel insurance" [ref=e44]
  - link "Anti-discrimination" [ref=e45]
  - link "Disability support" [ref=e46]
  - link "Cancellation options" [ref=e47]
  - link "Report neighborhood concern" [ref=e48]
  - heading "Hosting" [level=3, ref=e9]
  - link "Airbnb your home" [ref=e49]
  - link "Airbnb your experience" [ref=e50]
  - link "Airbnb your service" [ref=e51]
  - link "AirCover for Hosts" [ref=e52]
  - link "Hosting resources" [ref=e53]
  - link "Community forum" [ref=e54]
  - link "Hosting responsibly" [ref=e55]
  - link "Airbnb-friendly apartments" [ref=e56]
  - link "Join a free hosting class" [ref=e57]
  - link "Find a co‑host" [ref=e58]
  - link "Refer a host" [ref=e59]
  - heading "Airbnb" [level=3, ref=e10]
  - link "2025 Summer Release" [ref=e60]
  - link "Newsroom" [ref=e61]
  - link "Careers" [ref=e62]
  - link "Investors" [ref=e63]
  - link "Gift cards" [ref=e64]
  - link "Airbnb.org emergency stays" [ref=e65]
  - link "Privacy" [ref=e78]
  - link "Terms" [ref=e79]
  - link "Your Privacy Choices" [ref=e80]
  - button "Choose a language" [ref=e11]
  - button "Choose a currency" [ref=e12]
  - link "Navigate to Facebook" [ref=e66]
  - link "Navigate to Twitter" [ref=e67]
  - link "Navigate to Instagram" [ref=e68]
```

## Interactive Snapshot: Mobile

```text
- generic "Now you’ll see one price for your trip, all fees included.Now you’ll see one price for your trip, al" [ref=e1] clickable [onclick]
  - button "Close" [ref=e2]
  - button "Got it" [ref=e3]
```

## Required Deliverables

1. Create a full site report matching `docs/templates/per-site-report-template.md`.
2. Create a normalized JSON summary matching `schemas/site-report.schema.json`.
3. Preserve explicit separation between observed, inferred, and uncertain findings.
4. Include a section called `How to apply this without copying`.

## Finish Condition

When complete, save the markdown report to `data/reports/batch-01/airbnb.md` and the JSON summary to `data/json/batch-01/airbnb.json`.
