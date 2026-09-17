# Decisions

## 2026-09-15 — Keep Vue 3 + Vite stack
The project already runs on Vue 3 + Vite with scoped CSS per component and a working homepage. Global default (Next/Astro + Tailwind v4) is overridden by the existing stack. Design tokens will ship as CSS custom properties; a Tailwind v4 `@theme` equivalent is recorded in `docs/03-art-direction.md` in case the project migrates.

## 2026-09-15 — Research and art direction run in parallel
Four research threads (competitors, customer voice, owner/compliance, SEO) write to `docs/research/`. Art direction starts its inspiration sweep at the same time and reads research as it lands, so neither phase blocks the other. Synthesis goes to `docs/01-research.md`; direction and tokens go to `docs/03-art-direction.md`.

## 2026-09-15 — Deviations from the site spec, based on research
- **No self-served `AggregateRating` schema.** Google makes businesses that control their own reviews ineligible for star rich results. Reviews are shown as plain UI pulled from Google; schema stays `Dentist` / `MedicalProcedure` / `Person`.
- **Keep `FAQPage` schema for AI-search parsing only.** FAQ rich results were removed from Google Search on 2026-05-07, so no layout or content decision should depend on them.
- **Testimonials framed as experience, not skill.** Texas SBDE Rule 108.59 bars dentist-competency testimonials. The current `ReviewsSection` quotes are demo samples and must be labeled as such or replaced with a live Google feed before any client launch (FTC fake-review rule).
- **Add cost sub-pages and a Medicaid page.** `/treatments/dental-implants/cost/`, `/treatments/clear-aligners/cost/`, `/insurance-and-financing/medicaid/`. This matches what ranks in Austin; the rest of the spec's URL tree is unchanged.
- **Research stats stay out of site copy.** Vendor-blog figures (no-show cost, missed calls) are for the sales pitch and planning, not published claims.

## 2026-09-15 — Art direction: recommend Direction B "The Written Estimate" (pending user approval)
Three directions were written in `docs/03-art-direction.md`: A "Front Porch, 78704" (warm hospitality), B "The Written Estimate" (candor, prices, ledger typography), and C "Shade Guide" (tonal, color-blocked, playful).
- B is recommended because research ranks trust and price opacity as the top blockers.
- The boutique-hotel look is already owned by Tend, Arbor and Magnolia.
- B's signature (the EstimateSlip) is structural, so it re-skins per clinic through `--brand-accent`.
- Tokens: Schibsted Grotesk + Geist Mono, Live Oak `#2E5E3E` accent, all text pairs AA-verified.
- Other choices: Lucide icons, Reka UI primitives.
- Legacy accent `#6fcf3d` fails with white text (1.97:1).

**Approved by user 2026-09-15:**
- Direction: B "The Written Estimate".
- Demo shows price ranges labeled "Sample prices for demo".
- Accent: Live Oak `#2E5E3E`.
- Before/after composites get split into separate before and after files; the baked-in labels and handle are cropped out and replaced with a real accessible comparison.

Build order follows the skill: hero + one section first, screenshot at 375 and 1280, critique, then continue.

## 2026-09-15 — First build slice: tokens, header, hero, price list
- **Foundation.** Tokens live in `src/styles/tokens.css` and are imported once in `main.js`. Fonts are self-hosted via Fontsource: `Schibsted Grotesk Variable` and `Geist Mono` 400/500. Inter is removed. The icon library is `lucide-vue-next`.
- **New components.** `SiteHeader` (utility bar, sticky header that compresses after 100px, accessible full-screen mobile menu) and `EstimateSlip` (full and compact variants, insurance toggle built from native radios, fallback mode via `practice.showPrices`). `PriceList` replaces `TreatmentsGrid` on the homepage. `HeroSection` is rewritten. `StickyMobileBar` is restyled.
- **Removed from homepage:** `TechnologiesSection`, `ImplantRangeSection`, `KeyQuestionsSection`, per the spec. The files are kept until cleanup.
- **Data.** Treatment price ranges and first-visit/emergency offers moved into `practice.js`, labeled as demo samples.
- **Images.** Web-sized crops in `public/images/v2/`: the hero and team at 4:5 with the tooth logo cropped out, and the still-life at 3:2, all WebP and under 35KB each. Before/after pairs were split into `public/images/results/split/`.
- **Deviations from the art doc.**
  - The insurance toggle uses native radio inputs instead of Reka `ToggleGroup`: same accessibility, no dependency.
  - The price-list still-life shows only from 1024 up, because at 768 it pushed the slip far down.
  - The live status line is hidden in the hero from 768 up, since the utility bar already shows it (Chanel pass).
  - The tablet utility bar shows only status and phone.
- **Verified.**
  - `npm run build` passes.
  - Screenshots at 375/768/1280/1920 show no horizontal overflow and no console errors.
  - Every tap target in the new sections is at least 44px.
## 2026-09-16 — Full site build: routing, all pages, free booking backend, design round 2

**Scope:** the whole spec's page set (treatments hub + 9 detail pages + 2 cost pages, insurance/medicaid/membership, about/team/team-member, gallery, reviews, FAQ, contact, book + confirmation, 5 legal pages, 404, emergency-dentist), a real booking flow, and a fresh design-critic pass against Direction B.

**Routing.** Added vue-router 4 (`src/router.js`, lazy-loaded routes). `App.vue` is now a shell (header/main router-view/footer/sticky bar); the old homepage content moved to `src/pages/Home.vue` unchanged.

**Free booking + leads backend.** `google-apps-script/Code.gs` — a single Apps Script Web App using only Calendar, Sheets, and MailApp (all free, no billing account, no paid API). `GET ?action=availability` computes real open slots from the calendar's busy times; `POST {action:'book'}` re-checks the slot, creates the event, logs to a Bookings sheet; `POST {action:'lead'}` logs to a Leads sheet. `src/config/backend.js` is the frontend client, reading `VITE_BOOKING_API_URL` from `.env` (see `.env.example`). **This requires the user to deploy it themselves** (create the Sheet, paste the script, authorize, deploy as Web App) — that's a Google login/consent flow, so it's the one step nobody but the user can do. Full walkthrough in `google-apps-script/README.md`. Until it's deployed, `/book/` and the contact form run in a clearly-labeled demo mode (no live slots, submissions aren't silently pretended to be sent).

**Book flow** (`/book/`): 6-step wizard (patient type → reason → time → details → insurance, skippable → confirm), real availability when the backend is configured, falls back to "we'll confirm by text within an hour" per the spec when it isn't. Tested end to end programmatically through to `/book/confirmed/`.

**Parallel build.** Five section-builder subagents built the new pages against docs/03-art-direction.md, each owning a disjoint file set, all reading the same (now much larger) `practice.js`/`treatmentContent.js`/`costContent.js`. Two agents independently hit the same bug class and fixed it correctly: combining `.container` (which sets `margin-inline: auto`) with a narrower `max-width` on the same element re-centers content that should stay left-aligned. I swept every new page and component for the same pattern and patched ~20 more instances project-wide (`margin-inline: 0` alongside the local `max-width`).

**Design critique round 2 (fresh design-critic agent, scored against anti-slop.md):** confirmed the client's complaint that the design still read as generic. Findings and fixes:
- `EmergencyBand.vue` had never actually been rebuilt to Direction B — it was still the pre-rebuild version (raw hex colors, the rejected `#6fcf3d`-adjacent green, `transform: scale()`, `href="#book"`). Rebuilt to the `.on-carbon` band with the phone number as the mono headline at `--text-figure-xl`, matching the spec's "phone number as the headline" requirement.
- `FinalCta.vue` had the same container/max-width bug, visibly breaking the layout at wide viewports. Fixed.
- Prices had no typographic weight anywhere except one component. `EstimateSlip.vue` row figures bumped to bold; the hero's single-row compact slip now shows its price at `--text-figure-xl` as the section's signature moment.
- `WhyChooseUs.vue` promises got mono item markers (01/02/03) — legitimate here per anti-slop's own carve-out, since it's a genuinely itemized list.
- `--color-sunk` darkened slightly so alternating section backgrounds are actually visible (was a ~1.08 luminance ratio from paper, now a real step) while re-verifying every text pairing stays comfortably AA.
- `LocationHours.vue` got a visible heading (was `visually-hidden`, so the section had no visible title at all).
- `BeforeAfterGallery.vue`'s slider column was capped — the source photos are portrait (698×894 crops from real before/after pairs), and an 8-column-wide track blew them up to 1050px tall. Capped at 420px.
- Cropped the tooth-graphic-on-monitor out of Priya Nandan's team photo (the earlier crop only fixed Dr. Cole's).
- Removed Inter (6 weights, unused — the site uses Schibsted Grotesk) from `index.html`; deleted the dead, unused `TreatmentsGrid.vue`.
- Regraded the instrument still-life to pull down its blue cast slightly, per the art direction's neutral-white-balance rule.
- **Not fixed, flagged instead:** the hero and team photography is AI-generated and reads as generic/polished in a way real documentary photography wouldn't. Cropping and regrading only go so far — the actual fix is real client photography, which is outside what code can solve. Capped the hero photo's growth on ultra-wide viewports so it stops dominating the fold at least.

**Verified:** `npm run build` passes; every new route loads with no console errors (confirmed in a fresh tab — some errors seen mid-build were stale console-buffer entries from before all page files existed, not live issues); no horizontal overflow at 375/768/1280/1920 on the pages spot-checked; booking flow, FAQ accordion, insurance combobox, and before/after slider all tested interactively.

## 2026-09-16 — Homepage rebuild to Direction B complete
Five section-builder subagents ran in parallel (TrustStrip+EmergencyBand, WhyChooseUs+TeamPreview, BeforeAfterGallery+ReviewsSection, InsuranceSection+LocationHours, FaqSection+FinalCta+FooterSection), each on its own file set against a shared `practice.js` (extended first with promises, team, cases, reviews, plans, directions, faqs, footer links — all labeled sample/demo data). All five hit the account-wide session rate limit before finishing; three had written both their files, two had written one of two/three. Rather than re-spawn (same limit), I read each file directly to check completion, then wrote the four missing pieces myself in the same session: `LocationHours.vue`, `BeforeAfterGallery.vue` + new `BeforeAfterSlider.vue`, `ReviewsSection.vue`, and `FooterSection.vue` (replacing the old fake-newsletter/555-number version — no client asked for a newsletter).
- Deleted the three legacy manufacturer sections (`TechnologiesSection`, `ImplantRangeSection`, `KeyQuestionsSection`) now that nothing imports them.
- Before/after slider built natively (clip-path + visually-hidden range input, pointer drag, keyboard arrows) — no new dependency.
- Insurance combobox and FAQ accordion (from the subagents) are also native, no Reka UI dependency added anywhere.
- Verified: `npm run build` passes; full-page screenshots at 375/768/1280/1920 show every section matching the art-direction doc; footer disclosure and before/after slider tested interactively; no console errors; no horizontal overflow. The only sub-44px tap targets are inline text links (footer legal links, phone numbers inside a sentence) — exempt under WCAG 2.5.8's inline-text exception.
- Homepage rebuild to Direction B is done end to end, hero through footer.

## 2026-09-15 — Current homepage treated as the "before"
The existing sections match the spec's content order but repeat one composition (centered eyebrow + H2 + subtitle + card grid) and use a 3D implant render in the hero, both on the anti-slop list. Art direction will propose a redesign; no code changes until a direction is chosen.

## 2026-09-17 — Depth pass, then a correction back toward the documented system

**Trigger.** Client feedback on the live build: the design still read as "dull," several inner routes appeared broken, and copy was hard to follow. Diagnosed the "broken pages" report first rather than assuming: a concurrent process had killed the dev server (`pkill -f vite`) mid-session, so every lazy-loaded route 404'd on its JS chunk while the already-loaded homepage kept working. Restarted the server — not a code bug. Also removed two dead footer links (`/new-patients/forms/`, `/blog/`) that pointed at pages that were never built.

**Depth pass.** Added a layered-shadow elevation scale to `tokens.css` (`--shadow-xs/-sm/-md`, `--lift-hover`) and a `.card`/`.card--tap` utility to `style.css`, then applied it broadly across the site (treatment rows, team cards, testimonials, FAQ rows, insurance panels, booking tiles) via five parallel section-builder agents plus direct edits (testimonial cards with avatar-initial chips, a scroll-elevated sticky header, a graph-paper map panel).

**Correction.** A fresh design-critic pass (fresh eyes, screenshots at all four breakpoints) found the blanket card treatment had backfired: `docs/03-art-direction.md` §7.5/7.6/7.8/7.11 deliberately specifies **no cards** for WhyChooseUs ("no cards, no icons"), TeamPreview ("0 radius, no shadow"), the homepage/(/reviews/) quote columns ("no cards"), and FaqSection ("hairline rows, not cards") — specifically so each section reads as visually distinct rather than one repeated block. Applying `.card` everywhere re-created exactly the "everything in a rounded card" anti-slop pattern the doc was written to avoid, and reintroduced `01/02/03` numbering on WhyChooseUs's four promises, which the art doc's own slop-check explicitly rules out (not a sequence). Reverted those four sections (plus the homemade testimonial-card/avatar-chip treatment, which read as a generic UI-kit pattern) back to their documented compositions. Kept `.card`/`.card--tap` where it's genuinely earned: treatment rows, gallery cases, booking wizard tiles, the membership CTA row, team-member detail panels — real tappable or genuinely-elevated objects, not decoration.

**Real bugs found by the critic + QA-auditor passes and fixed:**
- No `:disabled` button styling existed anywhere (`--color-disabled-bg/-ink` were defined in tokens and never consumed) — a user could hit a full-green "Continue" on `/book/` that silently did nothing. Added `.btn:disabled` styles, guarded hover/active states, and added an inline `aria-describedby` hint explaining what's missing.
- `/book/` and `/emergency-dentist/` had no `<h1>` at all. Added one to each (visually-hidden on Book, visible on the emergency page).
- Dotted-leader ledger rows (`EmergencyBand`, `InsuranceSection`) could wrap awkwardly at mid-width viewports because the name span had no `min-width: 0`. Fixed both.
- `Contact.vue` declared its own scoped `.card`/`.card:hover` that could collide with the new global `.card` utility — renamed to `.contact-card`.
- Contact form let a visitor submit with neither email nor phone filled in, then claimed "we'll be in touch by phone" regardless — added a same-page validation gate and fixed the confirmation message to match what was actually provided.
- Booking dates rendered as raw ISO strings (`2026-09-25`) in the summary and confirmation screens — added a shared formatter.
- Copy fixes: "toggle"/"tap" wording on `/treatments/` (wrong on desktop), a stale "once it's focused" aside on `/smile-gallery/`, a parenthetical treatment name leaking into an FAQ heading, a duplicated reassurance paragraph and a promise of online forms that don't exist on `/new-patients/`, "tonight" wording on the emergency band that didn't match actual open status, and the emergency booking fallback's dev-facing "This demo isn't connected..." string reworded to sound like the practice, not the codebase. Also fixed today's-row-when-closed on `LocationHours` showing on the same accent-tint green used for "open."

**Not fixed, flagged instead (real but larger investments than a copy/CSS pass):** several interior pages (`EmergencyDentist`, `TreatmentDetail`, `MembershipPlan`, `TeamMember`, `Gallery`) run a narrow content column against a mostly-empty right half at 1280/1920 — needs a real second-column content decision per page, not a global fix. Hero/team photography still reads as generic AI-headshot stock, and before/after crops are tighter macro shots than the spec's 3:2 pairs — both need real photography, not more cropping/regrading. `docs/qa/round-3/` (screenshots) and `docs/qa/round-4-tech.md` (technical audit) hold the full evidence; `docs/qa/` is gitignored (44MB of screenshots, not project docs).

**Lesson for next time:** when a design system already specifies deliberate compositional variety per section, a global utility-class sweep across many files in parallel is the wrong tool — it optimizes for "does every section look elevated" instead of "does every section look distinct," which is the actual anti-slop goal. Apply new tokens section-by-section against what each section's spec actually says, not as a blanket pass.

## 2026-09-17 — Real photography stands in for the AI-generated hero/team photos

**These are real, freely-licensed stock photos (Unsplash), not the client's actual staff or office — they stand in until the client supplies their own photography.** None of the people pictured are named Amara Cole, Marcus Reyes, or Priya Nandan; they're demo placeholders the same way the prices and reviews are.

- **Hero** (`public/images/v2/hero-cole-4x3-*.webp`, `hero-cole-4x5-*.webp`): "Dentist talking to patient in a modern dental office" by Harold Hisona (Unsplash, free license — [unsplash.com/photos/Bg81yWKZlMg](https://unsplash.com/photos/Bg81yWKZlMg)), cropped to the site's existing 4:3 and 4:5 frames. This is exactly the "mid-conversation, candid" moment §8 of the art direction asks for and the AI hero never achieved. Updated the `alt` text off "Dr. Amara Cole" (the pictured dentist isn't her) to a generic description, matching the demo-data honesty pattern used everywhere else.
- **Team** (`public/images/v2/team-*.webp`): three individual portraits, each cropped from a different free Unsplash photo to a 4:5 headshot: a smiling man in a real clinic (source photo had a visible name badge for a different real dentist — cropped tight to exclude it), a woman in navy scrubs, and a candid outdoor portrait. None share a studio backdrop or lighting setup, which is honest (they're stand-ins, not one photoshoot) rather than a flaw.
- Sourced by browsing Unsplash search results directly (`unsplash.com/s/photos/...`) and downloading via each photo's own `/download?force=true` link — free tier, no API key, no attribution legally required (Unsplash License) though the source links are kept here for traceability. Rejected several candidates along the way: patient-in-chair shots, a face fully covered by a surgical mask, and a stock "pointing at empty space with a stethoscope" cliché that would have made the flatness worse, not better.
- **Follow-up for the client:** replace all of these with real photos of the actual practice and staff before launch. Swapping them back out is a pure asset replacement — filenames and aspect ratios are unchanged, so no component code needs to change.
