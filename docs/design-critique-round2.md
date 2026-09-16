# Design critique — round 2 (Orvia Dental homepage)

Reviewed 2026-09-16 against `docs/03-art-direction.md` (Direction B — "The Written Estimate") and `~/.claude/skills/art-direction/references/anti-slop.md`.

**How this was captured.** The working-tree dev server on :5174 was returning HTTP 500 at review time — `src/router.js` (added mid-session) imports ~25 page components that do not exist yet, so Vite's import-analysis fails. All homepage components, `src/config/practice.js` and `src/styles/tokens.css` are byte-identical to commit `4a53369`, so the page was rendered from a detached worktree at that commit on :5199. Nothing in the working tree was edited.

Screenshots: `docs/qa/round-2/` — `home-{375,768,1280,1920}-full.png`, per-section `sec-{w}-NN-*.png`, plus `fold-*.png`, `mobile-nav-open.png`, `cta-hover-1280.png`, `focus-1280.png`, `header-scrolled-1280.png`.

---

## Scores

| # | Criterion | Score | One-line reason |
|---|---|---|---|
| 1 | Distinctiveness | **5** | The concept lives in one component. Strip `EstimateSlip` out and 9 of 13 sections are an unbranded minimal template. |
| 2 | Niche fit | 7 | Copy and information architecture are excellent and genuinely niche-specific; the pictures and the emergency band are not. |
| 3 | Hierarchy | 7 | Hero reads in 2 seconds. Below it every section opens the same way and nothing is weighted louder than anything else. |
| 4 | Typography | **4** | One family, one weight band, two sizes. The mono is decorative, not structural. `--text-figure-xl` is used once on the whole page. |
| 5 | Spacing & grid | 5 | 8 of 12 sections share `--section-base`; four sections have 400–600px of unintentional dead space; `FinalCta` is a layout bug. |
| 6 | Color | 6 | Tokens are correct everywhere except `EmergencyBand.vue`, which is entirely pre-Direction-B hardcoded hex. |
| 7 | Imagery | **3** | Three identical AI headshots, a glamour stock hero, an un-regraded blue-cast still-life, a portrait-ratio before/after, an empty white map box. |
| 8 | Responsiveness | 7 | No overflow, tap targets fine, but the ledger device is dropped at 375 and the hero photo eats the 1920 viewport. |
| 9 | Interaction states | 6 | Focus rings and row hovers are right; `EmergencyBand` uses a banned `scale()` and pill buttons from another design system. |
| 10 | Copy | **9** | The strongest thing on the page. Specific, plain, no slop words, real figures, honest demo labels. |
| 11 | Conversion | 7 | CTA above fold everywhere, but the live "open now" status is a footnote and the slip falls below the fold at 1920. |

Pass bar is 8. Seven of eleven fail.

---

## The core diagnosis

The client is right, and the reason is narrow enough to fix.

**"The Written Estimate" is currently a widget, not a design language.** The paper/ledger idea is carried by exactly two things: `EstimateSlip.vue` (rendered twice) and the ruled index lists in `InsuranceSection` / `FaqSection`. Everything else — hero, promises, team, reviews, hours, final CTA, footer — is a competent, restrained, token-obedient minimal layout that would look identical on a law firm, a physiotherapy clinic or a SaaS marketing page with the copy swapped. That is the definition of the distinctiveness failure.

The second reason is typographic. The art direction promised "prices and hours set with typographic weight". On the built page the $4,800 implant price is rendered at **17px — the same size as the body copy** (`EstimateSlip.vue:214`, `font-size: var(--text-figure)`). `--text-figure-xl` (32→52px) exists in `tokens.css:63` and appears on the entire homepage **once**, on the review score. The type system has three registers available (grotesque display / grotesque body / mono figure) and the page uses roughly one and a half of them. That is why it reads "clean and correct" rather than premium: nothing on the page is set loud.

The third is photography, covered in finding 3.

---

## Findings, ranked by impact on "does this look premium and distinctive"

### 1. BLOCKING — `EmergencyBand.vue` was never rebuilt. It is pre-Direction-B code and it is the third thing on the page.

**Files:** `src/components/EmergencyBand.vue` (whole file)

This component is from the original build. Evidence:

- `background: #fdeeec` (L46), `#f9d9d5` (L59), `color: #e0483e` (L73), `#14161c` (L80), `#63677a` (L86), `background: #4a9c2e` (L122) — **not one token is used**. `#4a9c2e` is the old brand green the art direction rejected for failing contrast; it sits 200px below a `--color-accent` `#2E5E3E` button, so the page shows two different greens.
- `border-radius: 20px` (L47), `50%` (L58), `999px` (L109). The radius system is `2px paper / 6px control / 0 photos`. Nothing on the page may be a 20px rounded card or a pill.
- `font-size: 12.5px / 24px / 14.5px / 15px / 21px` — hardcoded, off-scale.
- `transform: scale(0.97)` on `:active` (L118) — the motion map explicitly bans `scale()`.
- A hand-rolled inline SVG icon (L9) inside a **56px pink circle badge** (L51–60) while every other section uses Lucide. Mixed icon libraries + decorative icon badge, two separate anti-slop hits.
- `href="#book"` (L25) — the spec's zero-`href="#"` QA gate.
- `background: #fff` (L36) on the section — pure white is not a ground token, so this band breaks the paper→sunk→carbon ground sequence with a foreign fourth ground.

Visually it is a rounded pink alert card with an icon badge and two pill buttons: the single most generic-looking element on the page, sitting at position 3.

**Fix:** rebuild to §7.3 of the art direction. `.on-carbon` full-bleed band, `padding-block: var(--section-tight)`, no card and no radius. Left: label "In pain right now?" in `var(--color-signal-on-dark)` at `--text-caption`/`--tracking-label`, then **the phone number as the headline** — `font-family: var(--font-figure); font-size: var(--text-figure-xl)` as a `tel:` link. Right: the one-line reassurance plus a single `EstimateSlip` row ("Emergency visit · exam + X-ray ……… from $79") and an outline button routed to `/book/?reason=emergency`, not `#book`. This one change does more for "premium and distinctive" than any other item on this list, because it converts the page's worst section into a second showing of the signature.

### 2. BLOCKING — `FinalCta` is marooned in a 44ch column in the middle of a green field.

**File:** `src/components/FinalCta.vue:35-37`

```css
.final-cta__inner { max-width: 44ch; }
```

`.final-cta__inner` also carries `.container`, which centres with `margin-inline: auto`. Constraining the container itself to 44ch shrinks and **re-centres the whole block**: at 1280 the content sits at x≈466 in a 300px column; at 1920 at x≈790. The H2 wraps to five lines, the two buttons stack vertically, and the band is ~820px of flat green with content floating in the middle of it. See `sec-1280-13-section-final-cta.png` and `sec-1920-13-section-final-cta.png`.

**Fix:** remove the `max-width` from `.final-cta__inner` entirely — keep `.container` at `--container`, content left-aligned at the gutter as §7.12 specifies. Put the measure on the children instead: `.final-cta__title { max-width: 18ch }`, `.final-cta__status { max-width: var(--measure-narrow) }`. Set the actions back to `flex-direction: row` above 640 (they already are; they only stack because of the 300px parent). Also drop the band height: `--section-open` on an 8-word heading is too much air — use `--section-base` with the heading at `--text-h1`.

### 3. HIGH — The photography is the loudest "AI-generated site" signal, and it contradicts the written photo brief.

**Files:** `public/images/v2/hero-cole-*.webp`, `public/images/team/*.png`, `public/images/v2/still-instruments-1200.webp`, `public/images/results/split/*`

The art direction (§8) asks for: documentary, north-window daylight, neutral 5000K, 35mm f/2.8, **mid-gesture, candid rather than posing to camera**, greens −20%, lifted blacks. What shipped:

- **Hero** (`sec-1280-02`, `fold-1920`): a centred, retouched, straight-to-camera smiling headshot in a white coat against a bokeh clinic background. It is a glamour portrait, not a documentary frame. At 1920 the 4:5 crop makes it ~1050px tall — a face occupying 44% of the viewport and pushing the estimate slip **below the fold**, so the signature component is invisible above the fold at the widest breakpoint.
- **Team** (`sec-1280-07`): three portraits with *identical* framing, identical white-coat-over-navy-scrubs wardrobe, identical smile-to-camera, identical blurred clinic backdrop, and a potted plant in each. This is textbook "generic diverse team" from the anti-slop list. `PriyaNandan.png` **still shows the tooth graphic on the monitor** behind her (visible top-right) — §8 specifically said to crop it out. None of the three has been regraded; all carry the cool/blue cast.
- **Still-life** (`sec-1280-05`, left column): the blue paper towel and saturated green plant the art direction said to neutralise are untouched. Against the neutral paper ground it reads as a cool-cast stock photo dropped into a warm-neutral page.
- **Before/after** (`sec-1280-08`): `BeforeAfterSlider.vue:78` sets `aspect-ratio: 698 / 894` — the raw asset's native portrait ratio, not the specced **3:2**. The result is a 1050px-tall extreme close-up of lips and teeth that is the largest object on the page and reads as cosmetic-surgery stock. It also leaves ~600px of dead space beside the four-row case-notes panel.

**Fix, in order of payoff:**
1. Re-crop/regenerate the hero to an actual documentary frame — subject in three-quarter view, looking at a tablet or at a patient, not at the lens — and cap it: `.hero__photo { aspect-ratio: 4/5; max-height: 72vh }` so the slip stays above the fold at 1920.
2. `BeforeAfterSlider.vue:78` → `aspect-ratio: 3 / 2`, and re-crop the source pair to 3:2 (mouth plus lower face, not a macro of the lips).
3. Regrade all six people/still-life assets in one pass: white balance to neutral, greens −20% saturation, blacks lifted ~6%. Right now each image has its own colour temperature, which is the "inconsistent grade" anti-slop hit.
4. Re-crop `PriyaNandan.png` to remove the tooth monitor; vary the three team crops (one 4:5 tight, one with more environment) so they stop reading as a stamped set.

### 4. HIGH — Typography does almost no design work outside the slip.

**Files:** `src/components/EstimateSlip.vue:211-219`, `WhyChooseUs.vue:58-64`, `TrustStrip.vue`, `ReviewsSection.vue`

The page has one visible weight band (600/700), two body sizes, and mono used as a texture rather than as a hierarchy. Specific instances:

- **Prices are body-sized.** `EstimateSlip.vue:214` — `font-size: var(--text-figure)` = 17px, identical to `--text-body`. A $3,200–$4,800 implant, the most consequential number on the page, is the same size as the sentence describing it. **Fix:** in the `full` variant, set `.row__figure { font-size: clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem); font-weight: var(--weight-medium) }` and drop `.row__name` to `--text-body` weight 600. Invert the emphasis: the number should be the loudest thing in the row, the name the label. This alone makes the signature component look designed rather than tabulated.
- **`WhyChooseUs` is four headings and four links.** `sec-1280-06` — `.why__statement` at `--text-h3` semibold, four times, in a 2×2. No figure, no rule, no mono, no scale contrast, nothing of the estimate world. It is the single most swappable section on the page. **Fix:** set each promise as a two-register pair — the promise at `--text-h3`, and above it a mono marker in `--color-ink-3` at `--text-caption`/`--tracking-label` that names the guarantee like a line item ("ITEM 01 · PRICE", "ITEM 02 · HOURS", "ITEM 03 · COMFORT", "ITEM 04 · INSURANCE"). That is the one place numbered markers are legitimate here, because a written estimate genuinely is an itemised list. Give the block a top hairline so it reads as part of the same document as the slip.
- **`TrustStrip` mixes registers inside one row.** `sec-1280-03` — cells 1 and 2 use mono ("4.9★·287", "18 yrs"), cells 3 and 4 use grotesque at a visibly larger optical size ("Named plans", "ADA"). Four cells, two type genres, two apparent sizes. **Fix:** pick one. Set every cell value in `--font-figure` at a fixed `--text-h3` size with `tabular-nums`, and where a cell has no number, use a short figure-like token ("24 plans", "ADA member"). A ledger line must have a consistent figure column.

### 5. HIGH — Four sections have large unintentional dead space; the grid is not composing, it is just stacking.

Measured at 1280 from the section screenshots:

| Section | Dead space | Cause |
|---|---|---|
| `PriceList` left column | ~700px below "All treatments →" | `sticky` column is ~380px of content beside a ~1100px slip (`PriceList.vue`) |
| `BeforeAfterGallery` right column | ~600px below the case notes | 4-row panel beside a 1050px portrait-ratio slider |
| `InsuranceSection` left column | ~500px below the membership row | 380px search block beside an 800px plan index |
| `ReviewsSection` left column | ~400px below the Google link | score block ends, quote columns run on |
| `HeroSection` left column | ~200px below the rating | `.hero__title { max-width: 15ch }` inside a 7-column span |

Each is individually defensible; together they are the page's rhythm, and the rhythm is "content top-left, emptiness bottom-right", five times. **Fix:** give the short column something to end on in at least three of them — in `PriceList`, move the still-life *below* "All treatments →" and let it run to the section's bottom edge; in `BeforeAfterGallery`, move the case tabs into the right column under the notes (they are currently a row of bordered boxes at the bottom that read as mini-cards); in `InsuranceSection`, move the "No insurance? Membership plan … from $300/yr" row to the bottom of the left column as a full-width one-row slip. In `HeroSection`, widen `.hero__title` to `max-width: 12ch` and raise the top of `--text-display`'s clamp so the H1 fills its 7 columns instead of floating in them.

### 6. HIGH — The live "open now" status, one of the two ideas the concept is built on, is set as a footnote and disappears on desktop hero.

**Files:** `src/components/SiteHeader.vue:72-81, 164-200`, `HeroSection.vue:180-183`

§2 borrows CapMetro's "next departure" and says the status should be "written like a stop sign". Built: `--text-caption` mono, `--color-ink-2`, in a 36px utility bar, sharing a line with the address, phone and "New patients welcome" — the smallest text on the page (`fold-1280.png`). And `HeroSection.vue:181` hides the hero's own status line at ≥768 on the grounds that the utility bar carries it, so above 768 the most reassuring fact on the site appears only in the page's quietest slot.

**Fix:** keep the utility bar, but restore a status line in the hero copy column above the H1 at `--text-body` with the dot at 10px and the time in `--font-figure` weight 500 in `--color-ink` — and give the *closed* state its real value: "Closed — opens today 8am" should be as prominent as "Open until 7pm", because an anxious visitor at 11pm needs it more. In the utility bar, set the status segment in `--color-ink` weight 500 while the address/phone stay `--color-ink-2`, so the bar has a hierarchy instead of four equal greys.

### 7. MEDIUM — The section rhythm the art direction promised is not in the code.

`grep` of the built components: `--section-tight` × 1 (TrustStrip), `--section-open` × 2 (PriceList, FinalCta), `--section-base` × 8 (Hero, Why, Team, BeforeAfter, Reviews, Insurance, Hours, Faq). Eight consecutive sections at the same vertical padding is the anti-slop item "identical vertical padding on every section, no rhythm" — the art direction's own §7 table assigns it that way, so the plan is at fault as much as the build.

The ground alternation meant to carry separation is also too faint to do the job: `--color-paper` `#F5F6F3` against `--color-sunk` `#ECEEEA` is a ~3% luminance step. On screen the paper/sunk/paper/sunk sequence from Price list to FAQ is barely perceptible, so the middle of the page reads as one undifferentiated field.

**Fix:** two changes. (a) Move `Team`, `Reviews` and `Faq` to `--section-tight` and `BeforeAfterGallery` to `--section-open`, so the page breathes in a 3-2-1 pattern instead of flat. (b) Deepen `--color-sunk` to about `#E4E7E2` (ink contrast stays ~13:1, well inside AA) so a ground change actually registers as a new page of the document.

### 8. MEDIUM — The ledger device is dropped at 375, the breakpoint most patients will use.

**File:** `src/components/EstimateSlip.vue:354-361`

```css
@media (max-width: 639px) { .row__leader, .row__arrow { display: none; } }
```

The dotted leader is the thing that makes a row read as an estimate line rather than a list item. Removing it on mobile leaves a plain name/price stack. Worse, `.row__line { flex-wrap: wrap }` (L348) means the price sits inline when the name is short ("Clear aligners $3,500–$5,800") and drops to its own line when it is long ("Dental implant (one tooth)" → price below, right-aligned), so the figure column zig-zags down the slip (`sec-375-05`).

**Fix:** keep the leader on mobile — force the two-line form for every row (`.row__line { display: grid; grid-template-columns: 1fr; }` with the name on row 1 and a `leader + figure` flex on row 2) so the figure column is straight and the dotted rule survives. Also drop `.row__name` to `--text-body` on mobile so the name/figure pair fits one line more often.

### 9. MEDIUM — `LocationHours` renders a blank white rectangle where the map should be, and the section has no visible heading.

**Files:** `src/components/LocationHours.vue:22` (`<h2 class="visually-hidden">`), `LocationHours.vue:57+`, `src/config/practice.js:103` (`staticMap: null`)

`sec-1280-11` shows a ~590×400 pure-white box containing a small pin icon and the address. Next to the carefully-set departure-board hours table, it reads as a broken image, not a placeholder. And because the H2 is `visually-hidden`, this is the only section on the page with no visible title — it starts abruptly on a table row.

Two smaller things in the same section: the today row shows "**Closed now** · 8am – 7pm" on an `--color-accent-tint` green highlight, which signals "open" with the word "closed" in it; and "Get directions" is a small outline button orphaned under the empty box.

**Fix:** (a) ship a real static map tile into `practice.staticMap` for the demo. (b) Until then, make the placeholder a designed object rather than an absence: `--color-sunk` ground, a hairline border, and the NAP set as a chart entry — name at `--text-h4`, address and cross-street in `--font-figure`, plus the three `specifics` lines moved into it. (c) Give the today row a state-aware tint: `--color-accent-tint` when open, `--color-sunk` with a `--color-signal` dot when closed. (d) Show the H2 ("Hours and location", left column above the board) so the section stops being the one anonymous block on the page.

### 10. MEDIUM — Dead legacy component still in the tree, and `index.html` still downloads Inter.

- `src/components/TreatmentsGrid.vue` is no longer imported by `App.vue` but still exists, still full of `#4a9c2e` / `#14161c`, tooth-path SVG icons, `border-radius: 18px` cards and two `href="#"` links. It is the exact thing the art direction's "before" table condemns. Delete it, or it will be copied forward into the next clone.
- `index.html:7-10` still has `<link rel="preconnect" href="https://fonts.googleapis.com">` and a stylesheet pulling **Inter at six weights** from Google Fonts. The build self-hosts Schibsted Grotesk and Geist Mono via `@fontsource`, so this is a render-blocking third-party request for a family the design does not use — and the art direction's §6.2 font notes say to remove Inter and preload the Schibsted variable woff2 instead. Replace the three lines with a `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the Schibsted variable file.

### 11. LOW — Detail inconsistencies

- `EstimateSlip.vue:145` — `.toggle__opt span { border-radius: 4px }` is off-scale; should be `var(--radius-paper)` inside a `--radius-control` frame, or 4px promoted to a token.
- The slip has a perforated top edge but a flat cut bottom (`EstimateSlip.vue:94-95` masks `repeat-x` at `0 0` only). A torn bottom edge on the full variant would finish the object; right now it reads half-committed.
- Row tags appear on only 3 of 8 rows, so the row heights alternate irregularly down the slip. Either tag every row or none.
- `BeforeAfterGallery` case tabs are bordered rectangles — small cards in a page whose rule is "no cards". Set them as underlined text tabs with a 2px accent underline on the selected one.
- Footer: three link columns where four were planned leaves a wide empty right-hand column above the hours block; the hours block itself is the smallest type in the footer despite being the most-used footer content.

---

## Anti-slop patterns found, by name

| Pattern | Where |
|---|---|
| Everything in a rounded card with an icon badge | `EmergencyBand.vue` — 20px card, 56px circular icon badge, pill buttons |
| Mixed icon libraries | Lucide everywhere, hand-rolled inline SVG in `EmergencyBand.vue:9,22,26` and `TreatmentsGrid.vue:27` |
| Generic hover/active `scale()` | `EmergencyBand.vue:118` — explicitly banned by the motion map |
| Identical vertical padding on every section | 8 of 12 sections at `--section-base` |
| Hierarchy made only through size, never weight/case/spacing | `WhyChooseUs`, `TrustStrip`, slip rows |
| Random stock photos with inconsistent grades | hero / team / still-life / before-after all carry different colour temperatures |
| Generic "diverse team" set | three identically framed, identically dressed, straight-to-camera portraits |
| `href="#"` links | `EmergencyBand.vue:25`, `TreatmentsGrid.vue:22,39` |
| Unused font family loaded anyway | Inter, six weights, `index.html:10` |
| Decoration for its own sake | the pink circular icon badge; the un-regraded potted plants in every photo |

Correctly avoided: no gradients, no blobs, no tooth icons in shipped sections, no 3-card grid, no fade-up-on-scroll, no carousels, no fake stats, no fake logo wall, no lorem. Copy is genuinely good.

---

## If only five things get done

1. Rebuild `EmergencyBand.vue` to the dark-band spec with the phone number set at `--text-figure-xl` in mono. (Finding 1)
2. Delete `max-width: 44ch` from `.final-cta__inner`. (Finding 2)
3. Make prices the loudest thing in the slip and add the mono item markers to `WhyChooseUs`. (Finding 4)
4. Regrade and re-crop the six images; fix `BeforeAfterSlider` to 3:2; cap the hero photo height. (Finding 3)
5. Give the four hollow columns something to end on and deepen `--color-sunk`. (Findings 5 and 7)

Items 1, 3 and 5 are what convert the page from "has a receipt widget" to "is built out of paperwork" — that is the distinctiveness gap the client is reacting to.
