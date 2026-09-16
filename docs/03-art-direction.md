# 03 — Art Direction: Orvia Dental

Demo template for US general/family dental practices (demo: Orvia Dental, 2408 Barton Springs Rd, Austin TX 78704). Cloned per prospect, so the identity lives in **structure, typography and one signature component**. Brand color and photos swap per clinic through tokens.

Inputs used:
- Site spec (`orvia-dental-site-spec.md`)
- `docs/01-research.md` (§7 ranked features, §8 design signals)
- `docs/research/competitors.md`, `customer-voice.md`, `owner-compliance.md`, `seo.md` (all four were present)
- `docs/decisions.md`
- The current Vue build and the client-supplied images

Status: **recommendation made (Direction B); the user needs to confirm before build.** No code has been changed.

---

## 0. The "before": an honest critique of the current build

| What's there | Problem (anti-slop / research) |
|---|---|
| Accent `#6fcf3d` with white button text | **1.97:1**. Fails AA outright. Eyebrow `#4a9c2e` on `#fafbf9` is **3.32:1** at 13px, also a fail. |
| Inter everywhere, plus a stray `'Brush Script MT', cursive` | A single default family, and a novelty script font that reads as template filler. |
| Hero: 3D implant render with callout lines | Spec bans it. Research §8 lists it as a competitor cliché. Patients choose a person and a place, not a product. |
| Tooth-outline SVG icons in `TreatmentsGrid` and on the hero feature row | Anti-slop icon cliché. Every competitor does it. |
| Treatment cards: photo + icon badge + title + blurb + "Learn more →", no prices | An icon-card service grid that hides the #1 differentiator (published price ranges). |
| Nearly every section: centered eyebrow + H2 + one-line subtitle + card grid, 88px padding | Identical composition and rhythm. The page reads as one repeated block. |
| `href="#book"` on every card | Spec QA fail (zero `href="#"`). |
| Legacy `TechnologiesSection`, `ImplantRangeSection`, `KeyQuestionsSection` | Manufacturer content. Spec says delete. Technology content moves to `/about/technology/`. |
| Hand-written sample reviews | FTC and SBDE risk. Must be labeled as samples or come from a live feed (decisions.md). |
| Before/after PNGs: one composite with baked-in "BEFORE/AFTER" pills and a fake slider handle | The spec needs **two separate images** per slider. The baked handle fights a real slider. |

What's worth keeping: the section order (it follows the spec), `src/config/practice.js` with live `openStatus()`, and the treatment still-lifes, which suit the recommended direction once regraded.

---

## 1. Grounding (Step 1)

**Arrival state** (research §8; customer-voice.md):
- Anxious. 72.6% of US adults report dental fear.
- Suspicious of upselling: "I don't know what to believe."
- Unsure about price: the $750 → $1,500 mid-procedure story.
- Often on a phone, sometimes in pain, with three clinics and Google reviews open in other tabs.
- Lapsed patients carry embarrassment more than fear of pain.

**Leave feeling:** "These people will tell me the truth and the price before they touch me, and it won't be awful."

**Conversion goal:** book or call within 30 seconds (spec §4.1). Reassure the ones who need longer with prices, named insurers, faces and "what happens next".

**Ten words from the physical world of a family practice:**
1. **Written estimate.** The printed treatment-plan slip you sign.
2. **Shade guide.** VITA tabs graded from bright to ivory.
3. **Instrument steel.** Knurled mirror handles.
4. **Bib clip.** A beaded chain and paper bib.
5. **Appointment card.** Pocket-sized, date and time handwritten.
6. **Chart.** Teeth numbered 1–32, a clinical ledger.
7. **Operatory light.** Cool, even, shadowless.
8. **Nitrile blue.** Gloves.
9. **Mint.** Prophy paste, rinse cups.
10. **Barton Springs limestone.** The 78704 neighborhood: live oaks, spring-fed pool, stucco and slatted wood (Lake Flato's Hotel San José is down the road).

**What "expensive" means in this niche:** not gloss, marble or concierge language. It is **candor set with confidence**:
- Prices in large type instead of fine print.
- Named insurers instead of "most insurance accepted".
- A clock that is right ("Open today until 7pm").
- Real faces in daylight.
- An interface with nothing hidden and nothing jumping around.

Tend's boutique-hotel tone wins on feel. The gap nobody fills is the **feel of honesty**. Only 2 of 8 competitors show prices, and none name insurers.

---

## 2. Inspiration sweep (Step 2)

Browsed on 2026-09-15 with WebFetch/WebSearch. Several sites block fetch (Tend, Aesop, One Medical, Nomos all returned 403). Where detail came through text extraction only, the borrowed idea is structural or verbal, not a pixel claim.

| # | Reference | In/out of niche | The ONE thing to borrow |
|---|---|---|---|
| 1 | [magnoliadentistryatx.com](https://www.magnoliadentistryatx.com/) (South Austin competitor) | In | **Price as the headline of an offer**: "$119 first visit", "$79 emergency". Set the number big and the description small. Proof that local practices can publish prices. |
| 2 | [hellotend.com](https://www.hellotend.com/) (via competitors.md; direct fetch 403) | In | **Hospitality voice and non-stock photography**: "boutique hotel, not a dental office". Borrow the tone of address only. Their look is already owned. |
| 3 | [arbordentalnyc.com](https://arbordentalnyc.com/) | In | **Alternating image/text rhythm** so sections breathe differently. Also a warning: "concierge luxury" overshoots for an Austin family practice. |
| 4 | [santarosadentalsuite.com](https://santarosadentalsuite.com/) | In | **Warmth through material texture in photos** (wood, leather) instead of applied color. Anti-borrow: their scrolling tagline marquee. |
| 5 | [halodental.com](https://halodental.com/) (Awwwards SOTD, via [awwwards.com/sites/halo-dental](https://www.awwwards.com/sites/halo-dental)) | In (dental tech) | **Two-color discipline.** The accent carries every action and nothing else. |
| 6 | [bunkhousehotels.com/hotel-san-jose](https://www.bunkhousehotels.com/hotel-san-jose) | Out (Austin hotel) | **One local botanical cue** (their agave) instead of a generic potted plant. Used as a photo-art-direction rule: native plants in frame. |
| 7 | [lakeflato.com/project/hotel-san-jose](https://www.lakeflato.com/project/hotel-san-jose/) | Out (architecture) | **Material palette**: stucco, slatted wood, native planting. Source for Direction A's colors and the photo set-dressing brief. |
| 8 | [acehotel.com](https://www.acehotel.com/) | Out (hotel) | **Persistent booking access**: a sticky reservation control that follows you. Maps to the header Book button and the mobile bar. |
| 9 | [muji.us](https://www.muji.us/) | Out (retail) | **Labeling convention**: plain noun + price, no adjectives ("Soft Cushions $49.90"). The model for treatment rows ("Checkup and cleaning — from $119"). |
| 10 | [sweetgreen.com](https://www.sweetgreen.com/) | Out (food) | **Compact dietary tags** (V, GF) that scan in a list. Becomes row tags: "Same day", "Insurance often helps", "Sedation available". |
| 11 | [teenage.engineering/products](https://teenage.engineering/products) | Out (hardware) | **Spec labeling**: terse labels and figures in a utility face. Mono is used **only for numbers** (prices, times, phone). |
| 12 | [capmetro.org](https://www.capmetro.org/) (Austin transit) | Out (civic) | **"Next departure" real-time status.** "Open now · until 7pm" is written like a stop sign and sits first in the utility bar, hero and hours. |

Cliché scan sources: [s8e8 "20 best dental websites 2025"](https://s8e8.com/articles/best-dental-websites) and the [Awwwards dental listing](https://www.awwwards.com/inspiration_search/dental/). Recurring clichés:
- Pastels plus teal
- Mascots and superhero themes
- Scrolling tagline marquees
- Numbered 01/06 service cards ([aventuradentalarts.com](https://aventuradentalarts.com/))
- Hero videos of smiling models
- "Curved header" video

---

## 3. Three directions (Step 3)

The three directions differ on:
- Palette temperature
- Type genre
- Layout structure
- Imagery
- Motion
- Density

### Direction A — "Front Porch, 78704"

**Concept:** a neighborhood practice that feels like walking into a South Austin courtyard: limestone, live oak shade, bluebonnet blue. Hospitality first.

**Axes:** warm palette · friendly slab-serif display · photo-led, low density · subtle motion.

**Palette (revised after slop check):**

| Name | Hex | Role |
|---|---|---|
| Limestone | `#ECE8E0` | ground |
| Porch white | `#FAF8F4` | surface |
| Pecan bark | `#2B2420` | ink (12.49:1 on ground) |
| Cedar dust | `#5E534B` | muted (6.11:1) |
| Bluebonnet | `#34488F` | accent: buttons, links (white on it 8.50:1; on ground 6.96:1) |
| Prickly pear | `#9E2451` | signal: emergency (white on it 7.43:1) |
| Live oak | `#23302A` | dark band ground (limestone text 11.25:1) |

**Type:**
- Display: **Young Serif** (Google Fonts, OFL), sturdy and low-contrast.
- Body: **Instrument Sans** (Google Fonts, OFL).

**Desktop hero**
```
┌──────────────────────────────────────────────────────────────────────────┐
│ Open today until 7pm · 2408 Barton Springs Rd · (512) 648-2210           │
├──────────────────────────────────────────────────────────────────────────┤
│ ORVIA DENTAL    Treatments▾ New patients About Gallery Reviews   [Book]  │
├───────────────────────────────┬──────────────────────────────────────────┤
│                               │                                          │
│  A dentist in Austin          │   [ FULL-HEIGHT PHOTO: front desk,       │
│  you won't dread              │     window light, Dr. Cole greeting a    │
│  visiting.                    │     patient, agave in the courtyard ]    │
│                               │                                          │
│  Open until 7pm weekdays,     │                                          │
│  same-day emergency slots.    │   ┌─ TODAY AT ORVIA ──────────────────┐  │
│  [Book appointment] [Call]    │   │ 8a ■■■■■■■■■■■▮░░░ 7p  open now   │  │
│  ★ 4.9 · 287 Google reviews   │   └───────────────────────────────────┘  │
└───────────────────────────────┴──────────────────────────────────────────┘
```

**Content section (Team)**
```
┌──────────────────────────────────────────────────────────────────────────┐
│  The people you'll meet                                                  │
│  ┌──────────────┐   ┌──────────────┐                                     │
│  │  portrait    │   │  portrait    │   Dr. Marcus Reyes, DDS             │
│  │  4:5 (big)   │   │  4:5         │   Speaks Spanish. Ask him about      │
│  │              │   │              │   Barton Creek trail runs.           │
│  └──────────────┘   └──────────────┘   [Book with Dr. Reyes]             │
│  Dr. Amara Cole     Priya Nandan, RDH                                    │
└──────────────────────────────────────────────────────────────────────────┘
```

**Mobile hero (375)**
```
┌─────────────────────────┐
│ ORVIA          ☰        │
│ ● Open until 7pm        │
│ A dentist in Austin     │
│ you won't dread         │
│ visiting.               │
│ Same-day emergency slots│
│ [ Book appointment    ] │
│ ★ 4.9 · 287 reviews     │
│ ┌─────────────────────┐ │
│ │ photo 4:3           │ │
│ └─────────────────────┘ │
├────────────┬────────────┤
│  Call      │  Book      │  ← sticky 56px
└────────────┴────────────┘
```

**Imagery:**
- Documentary photos of the actual office.
- Warm late-morning window light, 35mm lens.
- People mid-conversation.
- Native plants and material textures (stucco, oak).
- Grade: warm whites, soft contrast.
- The existing cold-white treatment stills do **not** fit and would need a reshoot or regeneration.

**Signature:** the **"Today at Orvia" day strip**. A thin horizontal bar of today's hours with a live "now" marker and a note like "emergency slots held until 3pm". It is driven by `openStatus()`.

**Motion (subtle):**
- The day-strip marker eases in on load (400ms).
- Photo crossfade between hero images: none, a single image only.
- Nothing else moves.

### Direction B — "The Written Estimate" (recommended)

**Concept:** the whole site behaves like the honest paperwork of a good practice (an itemized estimate, an appointment card, a chart). Prices, times, insurers and next steps are the design, set with typographic weight on clean chart paper.

**Axes:** neutral-cool paper · grotesque + mono figures · asymmetric, document-like, medium-high density · near-static motion.

**Palette:**

| Name | Hex | Role | Verified contrast |
|---|---|---|---|
| Chart paper | `#F5F6F3` | ground | — |
| Slip | `#FFFFFF` | surface (estimate slips, inputs) | — |
| Carbon | `#1B1F1D` | ink; also dark band ground | 15.36:1 on paper |
| Graphite | `#4C5450` | muted text | 7.19:1 on paper |
| Live Oak | `#2E5E3E` | brand accent: primary button, links, open-now dot | white on it 7.54:1; on paper 6.95:1 |
| Vermilion signal | `#B3361F` | emergency only | white on it 6.06:1; on paper 5.59:1 |

Live Oak is the clinic slot. It keeps continuity with Orvia's green and the green plant in the supplied stills, but is dark enough to pass.

**Type:**
- Display + body: **Schibsted Grotesk** (Google Fonts, OFL, variable 400–900). A sturdy Scandinavian news grotesque: plain-spoken, not techy.
- Figures: **Geist Mono** (Google Fonts, OFL). Used only for prices, times, phone numbers and counts.

**Desktop hero (1280)**
```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ● Open today until 7pm   2408 Barton Springs Rd   (512) 648-2210   New patients welcome │
├──────────────────────────────────────────────────────────────────────────────┤
│ Orvia Dental   Treatments▾  New patients  About  Smile gallery  Reviews  Contact   (512) 648-2210  [Book appointment] │
├─────────────────────────────────────────────┬────────────────────────────────┤
│ cols 1–7                                    │ cols 8–12 (photo bleeds right) │
│                                             │                                │
│  A dentist in Austin who                    │  [ PHOTO 4:5 — Dr. Cole        │
│  tells you the price                        │    chairside, daylight,        │
│  before we start.                           │    talking, not posing ]       │
│                                             │                                │
│  Open until 7pm on weekdays, same-day       │                                │
│  emergency slots, no account needed         │                                │
│  to book.                                   │                                │
│                                             │   ┌─ YOUR FIRST VISIT ─────────┐
│  [ Book appointment ]  [ Call (512) 648-2210 ]  │ Exam + X-rays + cleaning   │
│                                             │   │ ~60 min ........ from $119 │
│  ★★★★★ 4.9 · 287 Google reviews             │   │ Insured? We check first.   │
│                                             │   └────────────────────────────┘
└─────────────────────────────────────────────┴───────── slip overlaps photo ──┘
```

**Content section (Treatments becomes "The price list")**
```
┌──────────────────────────────────────────────────────────────────────────────┐
│ cols 1–4 (sticky on desktop)       │ cols 5–12                               │
│                                    │ ┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┐    │ ← perforated edge
│ What things cost here              │ │ ESTIMATE · ORVIA DENTAL · AUSTIN   │    │
│                                    │ │ ( No insurance ) ( I have insurance)│   │
│ Ranges, not surprises. You get     │ ├────────────────────────────────────┤    │
│ a written estimate before any      │ │ Checkup & cleaning          $119–$240│  │
│ treatment starts.                  │ │ Exam, X-rays, polish · 60 min       │   │
│                                    │ │ [Insurance often helps]             │   │
│ [ still-life 3:2, instruments ]    │ ├────────────────────────────────────┤    │
│                                    │ │ Dental implant (one tooth) $3,200–$4,800│
│ All treatments →                   │ │ 2–3 visits over 3–6 months          │   │
│                                    │ ├────────────────────────────────────┤    │
│                                    │ │ ... Clear aligners · Whitening ·    │   │
│                                    │ │ Emergency visit · Children · Root   │   │
│                                    │ │ canal · Veneers                     │   │
│                                    │ ├────────────────────────────────────┤    │
│                                    │ │ In writing before we start.         │   │
│                                    │ │ Second opinions welcome.            │   │
│                                    │ └────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
```
All prices are **demo values from `practice.js`**, labeled "Sample prices for demo" until a client supplies theirs.

**Mobile hero (375)**
```
┌───────────────────────────┐
│ Orvia Dental   (📞)  Menu │  ← phone is a Lucide icon button, 44px
├───────────────────────────┤
│ ● Open today until 7pm    │  mono status line
│                           │
│ A dentist in Austin       │  h1 ~40px, left-aligned
│ who tells you the price   │
│ before we start.          │
│                           │
│ Same-day emergency slots. │
│ No account needed.        │
│                           │
│ [ Book appointment      ] │  full width, 52px
│ [ Call (512) 648-2210   ] │  full width, outline
│ ★ 4.9 · 287 Google reviews│
│ ┌───────────────────────┐ │
│ │ photo 4:3             │ │
│ │     ┌───────────────┐ │ │
│ └─────│First visit    │─┘ │  slip overlaps bottom edge,
│       │from $119 · 60m│   │  2 rows only
│       └───────────────┘   │
├─────────────┬─────────────┤
│   Call      │ Book online │  sticky bar, 56px + safe-area
└─────────────┴─────────────┘
```

**Imagery ("daylight chairside"):**
- People and place:
  - Real team and office.
  - North-window daylight, neutral 5000K (no blue cast).
  - 35mm at f/2.8, eye level, mid-gesture.
- Crops:
  - Portraits 4:5.
  - Environments 3:2.
  - Still-lifes 3:2.
  - Before/after 3:2 pairs.
- Grade:
  - Neutral whites.
  - Greens desaturated about 20%.
  - Lifted blacks, low saturation.
- The supplied treatment still-lifes **fit this direction** (instruments on white). Regrade them (neutralize the blue paper, calm the plant green) and use them sparingly.

**Signature:** the **Estimate Slip** (full spec in §6). A white paper slip with a perforated top edge, mono figures on dotted leaders, compact tags, and a "No insurance / I have insurance" toggle. It closes with the promise line "In writing before we start. Second opinions welcome." It appears in exactly three places: the hero (compact), the price list (full), and the emergency band (a single row, on dark).

**Motion (near-static):**
- No scroll reveals and no parallax.
- Moves only on intent:
  - Insurance toggle crossfades the figure column (160ms).
  - Accordions (240ms).
  - Header compresses after 100px (240ms).
  - Before/after handle follows input.
- Reduced motion: all of these become instant.

### Direction C — "Shade Guide"

**Concept:** borrow the dentist's shade guide, tabs graded from bright porcelain to warm ivory to ink. Each section takes a tab of the scale, and treatments fan out like a held shade guide. Tactile, graphic, calm.

**Axes:** tonal warm-neutral scale with a deep ink block · expressive variable grotesque · color-blocked bands with rounded "tab" shapes · object cut-out imagery · orchestrated motion in one place.

**Palette:**

| Name | Hex | Role |
|---|---|---|
| B1 porcelain | `#FBFAF7` | ground |
| A2 enamel | `#F1E9DA` | band 2 |
| A3.5 ivory | `#E2D2B6` | band 3 (ink 10.61:1) |
| Night chair | `#1E2233` | ink, dark bands (15.11:1 on porcelain) |
| Slate | `#4F5363` | muted (6.33:1 on enamel) |
| Floss mint | `#9BE3C1` | accent **fill only**, ink text on it (10.63:1) |
| Nitrile | `#C9D5FF` | secondary fill (ink 10.85:1) |
| Signal | `#C23A22` | emergency (white 5.35:1) |

**Type:**
- Display: **Bricolage Grotesque** (Google Fonts, OFL, optical-size axis).
- Body: **Onest** (Google Fonts, OFL).

**Desktop hero**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Orvia Dental                       Treatments  New patients ... [Book] │
├────────────────────────────────────────────────────────────────────────┤
│  GENTLE DENTISTRY                                                      │
│  FOR AUSTIN                 ╭──╮╭──╮╭──╮╭──╮╭──╮                        │
│  FAMILIES.                  │B1││A2││A3││C2││D3│  ← five tall tab cards  │
│                             │  ││  ││  ││  ││  │    fanned, each a       │
│  Open until 7pm. Same-day   │ch││im││al││wh││em│    patient type:        │
│  emergency slots.           │ec││pl││ig││it││er│    checkup / implants / │
│  [Book appointment] [Call]  ╰──╯╰──╯╰──╯╰──╯╰──╯    aligners / whitening │
│  ★ 4.9 · 287 Google reviews                         / emergency         │
└────────────────────────────────────────────────────────────────────────┘
```

**Content section (Why patients choose us)**
```
┌────────────── A2 enamel band, 24px top-left radius only ───────────────┐
│  We publish our prices.        │ Evenings and Saturdays.               │
│  See the list →                │ Open until 7pm Mon–Thu, Sat 9–2.      │
├────────────────────────────────┼───────────────────────────────────────┤
│  Sedation if you want it.      │ We check your insurance first.        │
└────────────────────────────────┴───────────────────────────────────────┘
```

**Mobile hero**
```
┌─────────────────────────┐
│ Orvia          Menu     │
│ GENTLE DENTISTRY        │
│ FOR AUSTIN FAMILIES.    │
│ Same-day emergency slots│
│ [ Book appointment    ] │
│ ★ 4.9 · 287 reviews     │
│ ◀ tabs scroll-snap ▶    │  horizontal row of 5 tabs, 140px tall
├────────────┬────────────┤
│  Call      │  Book      │
└────────────┴────────────┘
```

**Imagery:**
- Cut-out objects (floss, aligner tray, mirror) shot overhead on seamless tonal paper matching each band.
- Portraits on colored seamless backdrops.
- The existing images would all need replacing.

**Signature:** the **Shade Tab fan**. Treatments as tall rounded tab cards that fan open on hover and focus, and snap-scroll on mobile.

**Motion (orchestrated, in one place):** the fan open (420ms spring-like ease) when the treatments section enters, played once. Everything else is static.

---

## 4. Slop check (Step 4)

Test question: "If this were a different dental practice, or a similar business, would I produce the same thing?"

### Direction A — revised
- **Hit:** limestone ground + serif display is one step from the banned "warm cream + high-contrast serif + terracotta" default.
  - **Changed:** ground moved from `#F4EFE6` to a greyer limestone `#ECE8E0`.
  - Accent is bluebonnet, not terracotta.
  - Display changed from a high-contrast serif (I started with DM Serif Display) to low-contrast **Young Serif**.
- **Hit:** "boutique hotel" is exactly what Tend, Arbor and Magnolia already claim. A clone of the category's design-forward tier.
  - **Changed:** the first signature, a courtyard photo carousel (also on the carousel slop list), became the functional day strip.
  - The direction is still **derivative in positioning**, which is why it isn't recommended.
- Checked: no gradients, no blobs, no tooth icons, and team photos are not stock smiles.

### Direction B — revised
- **Hit:** hairline rules everywhere risk the "broadsheet hairline newspaper layout by default".
  - **Changed:** rules only on things that really are ledgers (the estimate slip, trust line, hours timetable, FAQ list).
  - Every other section separates with space and ground changes, never rules.
- **Hit:** mono type drifts toward "dev-tool startup".
  - **Changed:** mono only for numerals (prices, times, phone, counts, review score). Never for headings, labels of prose, or buttons.
- **Hit:** I first gave the slip a rotated rubber stamp ("ESTIMATE ✓"). Gimmick, and the Chanel rule applies.
  - **Removed.** The promise line does the job in words.
- **Hit:** "Would another practice get this?" Only if it publishes prices. Many won't.
  - **Changed:** added a documented **fallback mode**. The slip shows duration, visits and "Insurance often helps" instead of figures, keeps the "written estimate before we start" promise, and the structure survives.
- **Hit:** the treatments grid in the spec says "icon + name". Icons here would be tooth clichés.
  - **Changed:** no treatment icons at all. Rows are named plainly (the MUJI convention), with one still-life image beside the list.
- Checked:
  - No centered-eyebrow pattern.
  - No 3-card grid.
  - No 01/02/03 numbering, except the first-visit timeline on `/new-patients/`, which really is a sequence.
  - No fade-up on scroll.

### Direction C — revised
- **Hit:** the fanned tab cards are a showpiece that risks "parallax / everything animates" and a heavier JS budget against the 600KB page limit.
  - **Changed:** motion plays once and only in the treatments section. Reduced motion shows a static row.
  - The hero fan became static, fanned by CSS transforms, with no animation.
- **Hit:** color-blocked rounded bands drift toward a bento grid and "everything in a rounded card".
  - **Changed:** one radius rule (a single 24px top-left corner on bands, 12px on tabs, 0 on photos). Blocks follow content length, not a bento mosaic.
- **Hit:** mint accent plus pastels is the "pastels and teal" cliché from the s8e8 roundup.
  - **Changed:** mint is fill-only and appears in two places. Nitrile blue is never used alongside it in one band.
- **Remaining risk:** an all-caps hero and a playful fan feel less serious for an implant-researcher spending $4,000. Tone is right for families and kids, weaker for high-value treatment.

---

## 5. Recommendation: Direction B, "The Written Estimate"

1. **It designs the visitor's actual fear.**
   - Research §1 and customer-voice: trust and upselling fear is the top blocker, and price opacity is structural.
   - B makes the price, the written-estimate promise and "second opinions welcome" the most visually prominent things on the page.
   - A says "we're nice". B *shows* "we're straight with you".
2. **It owns the empty position.**
   - Competitor clichés are clinical blue or teal, stock smiles, tooth-icon card grids and 3D renders.
   - The design-forward tier (Tend, Arbor, Magnolia) already owns "boutique hotel", so A would be the fourth.
   - Nobody owns "honest paperwork". Only 2 of 8 show prices and none name insurers.
3. **It serves the conversion goal fastest.**
   - Mobile: status line, H1, a full-width Book button, Call, then the rating, all inside 375×667 before any photo.
   - Near-static motion keeps LCP and weight inside the spec (hero < 700KB, page < 600KB).
4. **It re-skins cleanly per clinic.**
   - The signature is structural (slip, ledger, timetable), not hue-dependent.
   - A clone swaps `--brand-accent`, the logo and photos, and optionally one of three approved display faces.
   - A (local botanical cues) and C (a full re-shoot on colored seamless) need new art direction per clinic.
5. **It works with the client's assets.**
   - The instrument still-lifes are on-concept after a regrade.
   - Portraits work with a 4:5 crop, which also removes the tooth logo on the monitor behind Dr. Cole.

**What B borrows from the others:**
- The live "Open now" status from A's day strip, as a mono status line: the CapMetro "next departure" idea.
- A's daylight documentary photo brief for people shots, so the paper world stays human.

---

## 6. Token system (Step 5), Direction B

### 6.1 Contrast verification (WCAG 2.x relative luminance; computed, not eyeballed)

| Foreground | Background | Ratio | Use | Pass |
|---|---|---|---|---|
| `#1B1F1D` ink | `#F5F6F3` paper | 15.36 | body, headings | AA/AAA |
| `#1B1F1D` ink | `#FFFFFF` slip | 16.66 | slip text | AA/AAA |
| `#1B1F1D` ink | `#ECEEEA` sunk | 14.27 | alt sections | AA/AAA |
| `#4C5450` ink-2 | `#F5F6F3` | 7.19 | secondary text | AA/AAA |
| `#4C5450` ink-2 | `#FFFFFF` | 7.80 | slip descriptions | AA/AAA |
| `#4C5450` ink-2 | `#ECEEEA` | 6.68 | secondary on sunk | AA |
| `#636B67` ink-3 | `#F5F6F3` | 5.06 | captions | AA |
| `#636B67` ink-3 | `#FFFFFF` | 5.48 | captions on slip | AA |
| `#636B67` ink-3 | `#ECEEEA` | 4.70 | captions on sunk | AA |
| `#636B67` ink-3 | `#DDEBDD` accent tint | **4.44** | — | **FAIL → never use ink-3 on tint** |
| `#2E5E3E` accent | `#F5F6F3` | 6.95 | links, open dot label | AA |
| `#2E5E3E` accent | `#FFFFFF` | 7.54 | links on slip | AA/AAA |
| `#2E5E3E` accent | `#ECEEEA` | 6.45 | links on sunk | AA |
| `#FFFFFF` | `#2E5E3E` accent | 7.54 | primary button | AA/AAA |
| `#FFFFFF` | `#244C32` accent-hover | 9.75 | hover | AAA |
| `#FFFFFF` | `#1B3A26` accent-active | 12.50 | active | AAA |
| `#F5F6F3` | `#2E5E3E` | 6.95 | Final CTA band text | AA |
| `#DDEBDD` | `#2E5E3E` | 6.10 | Final CTA secondary text | AA |
| `#1B1F1D` ink | `#DDEBDD` tint | 13.49 | tags | AAA |
| `#2E5E3E` accent | `#DDEBDD` tint | 6.10 | tag text alt | AA |
| `#B3361F` signal | `#F5F6F3` | 5.59 | emergency text | AA |
| `#B3361F` signal | `#FFFFFF` | 6.06 | emergency on slip | AA |
| `#B3361F` signal | `#ECEEEA` | 5.19 | emergency on sunk | AA |
| `#FFFFFF` | `#B3361F` signal | 6.06 | emergency button | AA |
| `#F5F6F3` | `#962D1A` signal-hover | 7.20 | hover | AAA |
| `#1B1F1D` / `#B3361F` | `#FFF1EC` signal-tint | 15.11 / 5.50 | error field bg | AA |
| `#F5F6F3` | `#1B1F1D` carbon | 15.36 | dark band text | AAA |
| `#B9C0BB` | `#1B1F1D` | 8.98 | dark band muted | AAA |
| `#B9C0BB` | `#2A302D` carbon-raised | 7.26 | footer muted | AAA |
| `#FF8466` signal-on-dark | `#1B1F1D` | 6.94 | emergency label on dark | AA |
| `#9FD3AE` accent-on-dark | `#1B1F1D` | 9.84 | links/open dot on dark | AAA |
| `#9FD3AE` | `#2E5E3E` | **4.45** | — | **FAIL → never text on accent** |
| `#7A827D` rule-strong | `#F5F6F3` / `#FFFFFF` | 3.64 / 3.95 | input borders, checkbox (non-text, needs 3:1) | AA (1.4.11) |
| `#D3D8D2` rule | `#F5F6F3` | 1.33 | decorative hairlines only, never a control boundary | n/a |
| `#7A827D` disabled text | `#ECEEEA` | 3.38 | disabled controls (exempt; always paired with `aria-disabled` + non-color cue) | exempt |
| Before: `#FFFFFF` | `#6fcf3d` | 1.97 | current button | **FAIL** |

**Re-skin guard for clones:** a clinic's `--brand-accent` must reach **≥ 4.5:1 with `#FFFFFF`** and **≥ 4.5:1 on `#F5F6F3`**. Re-run the contrast script (`node contrast.js` pattern) per clone.
- If their brand color is light (like Orvia's old `#6fcf3d`), it may be used only as `--brand-tint` (fills behind ink text).
- A darker sibling is hand-picked for `--brand-accent` and verified.
- Never ship an unverified `color-mix()` result.

### 6.2 CSS custom properties (primary; put in `src/styles/tokens.css`, import once in `main.js`)

```css
/* Orvia Dental — Direction B "The Written Estimate". All UI values derive from here. */
:root {
  /* ---- Brand slot (swap per clinic; re-verify contrast) ---- */
  --brand-accent: #2E5E3E;          /* Live Oak */
  --brand-accent-hover: #244C32;
  --brand-accent-active: #1B3A26;
  --brand-tint: #DDEBDD;
  --brand-on-accent: #FFFFFF;
  --brand-accent-on-dark: #9FD3AE;

  /* ---- Grounds & surfaces ---- */
  --color-paper: #F5F6F3;           /* page ground */
  --color-slip: #FFFFFF;            /* estimate slips, inputs, menus */
  --color-sunk: #ECEEEA;            /* alternate section ground */
  --color-carbon: #1B1F1D;          /* dark bands: emergency, footer */
  --color-carbon-raised: #2A302D;

  /* ---- Ink ---- */
  --color-ink: #1B1F1D;
  --color-ink-2: #4C5450;
  --color-ink-3: #636B67;           /* captions; NOT on --brand-tint */
  --color-ink-inverse: #F5F6F3;
  --color-ink-inverse-2: #B9C0BB;

  /* ---- Lines ---- */
  --color-rule: #D3D8D2;            /* decorative hairlines */
  --color-rule-strong: #7A827D;     /* control borders (3.64:1) */
  --color-rule-inverse: #3A413D;

  /* ---- Roles ---- */
  --color-accent: var(--brand-accent);
  --color-accent-hover: var(--brand-accent-hover);
  --color-accent-active: var(--brand-accent-active);
  --color-accent-tint: var(--brand-tint);
  --color-on-accent: var(--brand-on-accent);
  --color-signal: #B3361F;          /* emergency + errors */
  --color-signal-hover: #962D1A;
  --color-signal-tint: #FFF1EC;
  --color-signal-on-dark: #FF8466;
  --color-success: var(--brand-accent);
  --color-focus: #1B1F1D;
  --color-focus-inverse: #F5F6F3;
  --color-disabled-bg: #ECEEEA;
  --color-disabled-ink: #7A827D;
  --color-scrim: rgb(27 31 29 / 0.55);

  /* ---- Type families ---- */
  --font-display: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-figure: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

  /* ---- Type scale (fluid 375 → 1440) ---- */
  --text-display: clamp(2.5rem, 1.66rem + 3.58vw, 4.5rem);      /* 40 → 72 hero h1 */
  --text-h1: clamp(2.25rem, 1.72rem + 2.25vw, 3.5rem);          /* 36 → 56 page h1 */
  --text-h2: clamp(1.75rem, 1.43rem + 1.36vw, 2.625rem);        /* 28 → 42 */
  --text-h3: clamp(1.25rem, 1.12rem + 0.56vw, 1.625rem);        /* 20 → 26 */
  --text-h4: 1.125rem;                                           /* 18 */
  --text-body-lg: clamp(1.125rem, 1.06rem + 0.28vw, 1.3125rem); /* 18 → 21 */
  --text-body: 1.0625rem;                                        /* 17: anxious/older readers */
  --text-small: 0.9375rem;                                       /* 15 */
  --text-caption: 0.8125rem;                                     /* 13, minimum size */
  --text-figure-xl: clamp(2rem, 1.53rem + 2vw, 3.25rem);        /* big prices, 4.9 score */
  --text-figure: 1.0625rem;                                      /* row prices, times */

  --leading-tight: 1.04;   /* display */
  --leading-heading: 1.12;
  --leading-snug: 1.3;
  --leading-body: 1.6;

  --tracking-display: -0.025em;
  --tracking-heading: -0.015em;
  --tracking-body: 0;
  --tracking-label: 0.06em;   /* small uppercase slip header only */
  --tracking-figure: -0.01em;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  --measure: 64ch;           /* body max line length */
  --measure-narrow: 44ch;

  /* ---- Spacing (4px base) ---- */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem; --space-4: 1rem;
  --space-5: 1.25rem;  --space-6: 1.5rem;  --space-8: 2rem;    --space-10: 2.5rem;
  --space-12: 3rem;    --space-16: 4rem;   --space-20: 5rem;   --space-24: 6rem;
  --space-32: 8rem;

  /* Section rhythm: intentionally varied (see §7 per-section assignment) */
  --section-tight: clamp(2.5rem, 1.8rem + 3vw, 4rem);     /* 40 → 64: trust, emergency */
  --section-base: clamp(4rem, 2.9rem + 4.7vw, 7rem);      /* 64 → 112: most sections */
  --section-open: clamp(5.5rem, 3.9rem + 6.8vw, 10rem);   /* 88 → 160: price list, final CTA */

  /* ---- Grid ---- */
  --container: 77.5rem;        /* 1240 */
  --container-wide: 90rem;     /* 1440: hero, bands */
  --gutter: clamp(1.25rem, 0.9rem + 1.5vw, 2.5rem);  /* page side padding 20 → 40 */
  --grid-gap: clamp(1rem, 0.7rem + 1.2vw, 2rem);
  --grid-cols: 4;              /* 8 at ≥768, 12 at ≥1024 (see media rules) */

  /* ---- Radii: paper = 2px, touchable = 6px, photos = 0 ---- */
  --radius-none: 0;
  --radius-paper: 2px;
  --radius-control: 6px;
  --radius-round: 999px;       /* status dot + slider handle only */

  /* ---- Borders ---- */
  --border-hair: 1px solid var(--color-rule);
  --border-control: 1px solid var(--color-rule-strong);
  --border-leader: 1px dotted var(--color-ink-3);

  /* ---- Shadows (only two) ---- */
  --shadow-slip: 0 1px 0 rgb(27 31 29 / 0.06), 0 18px 40px -20px rgb(27 31 29 / 0.28);
  --shadow-pop: 0 24px 60px -24px rgb(27 31 29 / 0.35);

  /* ---- Focus ---- */
  --focus-ring: 2px solid var(--color-focus);
  --focus-offset: 3px;

  /* ---- Motion ---- */
  --dur-instant: 90ms;   /* button press */
  --dur-fast: 160ms;     /* hover color, toggle crossfade */
  --dur-base: 240ms;     /* accordion, header compress */
  --dur-slow: 420ms;     /* dialog / mobile menu */
  --ease-out: cubic-bezier(0.2, 0, 0, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* ---- Layers ---- */
  --z-header: 50; --z-mobilebar: 60; --z-menu: 70; --z-dialog: 80;

  /* ---- Tap ---- */
  --tap-min: 44px;
  --tap-comfort: 52px;   /* primary buttons on mobile */
  --mobilebar-h: 56px;
}

@media (min-width: 768px)  { :root { --grid-cols: 8; } }
@media (min-width: 1024px) { :root { --grid-cols: 12; } }

/* Dark band scope: apply .on-carbon to emergency band + footer */
.on-carbon {
  --color-ink: var(--color-ink-inverse);
  --color-ink-2: var(--color-ink-inverse-2);
  --color-rule: var(--color-rule-inverse);
  --color-accent: var(--brand-accent-on-dark);
  --color-signal: var(--color-signal-on-dark);
  --color-focus: var(--color-focus-inverse);
  background: var(--color-carbon);
  color: var(--color-ink);
}

/* Accent band scope: Final CTA only */
.on-accent {
  --color-ink: #F5F6F3;
  --color-ink-2: #DDEBDD;
  --color-focus: #F5F6F3;
  background: var(--color-accent);
  color: var(--color-ink);
}

:focus-visible { outline: var(--focus-ring); outline-offset: var(--focus-offset); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Motion map (the only things that animate):**

| Element | Trigger | Property | Token |
|---|---|---|---|
| Buttons | hover / press | background-color; press `translateY(1px)` | `--dur-fast` / `--dur-instant` |
| Links | hover | underline offset 2px → 4px | `--dur-fast` |
| Header | scroll > 100px | height 88px → 64px, utility bar collapses | `--dur-base` |
| Estimate toggle | click | figure column opacity crossfade | `--dur-fast` |
| Accordion (FAQ, mega-menu mobile) | toggle | grid-template-rows 0fr ↔ 1fr + chevron rotate | `--dur-base` |
| Mobile menu / booking dialog | open | opacity + translateY(8px) | `--dur-slow` |
| Before/after handle | drag / arrow keys | clip-path follows input (no easing) | none |

**Explicitly none:** scroll-triggered fade-ups, parallax, marquees, counters, hover `scale()`.

**Fonts:**
- Self-host via `@fontsource-variable/schibsted-grotesk` and `@fontsource/geist-mono` (OFL). Subsets: latin + latin-ext (Spanish).
- `font-display: swap`.
- Preload only the Schibsted variable woff2.
- Use `font-variant-numeric: tabular-nums` on Geist Mono figures.

### 6.3 Tailwind v4 `@theme` equivalent (for a future migration)

```css
@import "tailwindcss";

@theme {
  --color-*: initial;
  --color-paper: #F5F6F3;
  --color-slip: #FFFFFF;
  --color-sunk: #ECEEEA;
  --color-carbon: #1B1F1D;
  --color-carbon-raised: #2A302D;
  --color-ink: #1B1F1D;
  --color-ink-2: #4C5450;
  --color-ink-3: #636B67;
  --color-ink-inverse: #F5F6F3;
  --color-ink-inverse-2: #B9C0BB;
  --color-rule: #D3D8D2;
  --color-rule-strong: #7A827D;
  --color-rule-inverse: #3A413D;
  --color-accent: #2E5E3E;
  --color-accent-hover: #244C32;
  --color-accent-active: #1B3A26;
  --color-accent-tint: #DDEBDD;
  --color-accent-on-dark: #9FD3AE;
  --color-on-accent: #FFFFFF;
  --color-signal: #B3361F;
  --color-signal-hover: #962D1A;
  --color-signal-tint: #FFF1EC;
  --color-signal-on-dark: #FF8466;
  --color-focus: #1B1F1D;

  --font-display: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-figure: "Geist Mono", ui-monospace, Menlo, monospace;

  --text-display: clamp(2.5rem, 1.66rem + 3.58vw, 4.5rem);
  --text-display--line-height: 1.04;
  --text-display--letter-spacing: -0.025em;
  --text-display--font-weight: 700;
  --text-h1: clamp(2.25rem, 1.72rem + 2.25vw, 3.5rem);
  --text-h1--line-height: 1.12;
  --text-h1--letter-spacing: -0.015em;
  --text-h1--font-weight: 700;
  --text-h2: clamp(1.75rem, 1.43rem + 1.36vw, 2.625rem);
  --text-h2--line-height: 1.12;
  --text-h2--letter-spacing: -0.015em;
  --text-h2--font-weight: 650;
  --text-h3: clamp(1.25rem, 1.12rem + 0.56vw, 1.625rem);
  --text-h3--line-height: 1.3;
  --text-h3--font-weight: 600;
  --text-h4: 1.125rem;
  --text-h4--line-height: 1.3;
  --text-h4--font-weight: 600;
  --text-body-lg: clamp(1.125rem, 1.06rem + 0.28vw, 1.3125rem);
  --text-body-lg--line-height: 1.5;
  --text-body: 1.0625rem;
  --text-body--line-height: 1.6;
  --text-small: 0.9375rem;
  --text-small--line-height: 1.5;
  --text-caption: 0.8125rem;
  --text-caption--line-height: 1.4;
  --text-figure-xl: clamp(2rem, 1.53rem + 2vw, 3.25rem);
  --text-figure-xl--line-height: 1;
  --text-figure-xl--letter-spacing: -0.01em;

  --spacing: 0.25rem;

  --radius-paper: 2px;
  --radius-control: 6px;

  --shadow-slip: 0 1px 0 rgb(27 31 29 / 0.06), 0 18px 40px -20px rgb(27 31 29 / 0.28);
  --shadow-pop: 0 24px 60px -24px rgb(27 31 29 / 0.35);

  --ease-out: cubic-bezier(0.2, 0, 0, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --breakpoint-md: 48rem;   /* 768 */
  --breakpoint-lg: 64rem;   /* 1024 */
  --breakpoint-xl: 80rem;   /* 1280 */
  --breakpoint-2xl: 100rem; /* 1600 */

  --container-page: 77.5rem;
  --container-wide: 90rem;
}
```

### 6.4 Grid and breakpoints

| Range | Columns | Side padding | Container | Notes |
|---|---|---|---|---|
| < 768 | 4 | 20px | fluid | Sticky mobile bar on; utility bar off; body 17px |
| 768–1023 | 8 | 28–32px | fluid | Sticky bar off; hero stacks text above a 16:10 photo |
| 1024–1279 | 12 | 32–36px | 1240 | Split hero 7/5 |
| 1280–1599 | 12 | 40px | 1240 | Reference layout |
| ≥ 1600 (check 1920) | 12 | 40px | 1240 text / 1440 bands | The hero photo bleeds to the viewport edge. Text never exceeds `--measure`. |

---

## 7. Component plan + per-section composition (Step 6)

**Stack reality:** Vue 3 + Vite with scoped CSS. shadcn/ui is React, so behavior primitives come from:
- **Reka UI** (MIT; the headless Vue library under shadcn-vue): accessible behavior only, all styling from tokens.
- **Icons: Lucide** (`lucide-vue-next`, ISC). One library, stroke width 1.75 to match Schibsted at body weight, 20px in UI and 24px in the mobile bar.

**Icons used, and nothing else:**
- `Phone`, `CalendarDays`, `MapPin`, `Clock`, `Star`
- `ChevronDown`, `ArrowRight`, `Plus`, `Minus`, `Search`, `Menu`, `X`
- `Accessibility`, `Car`, `Bus`

No tooth icons, no sparkles, no emoji (the spec's 📞/📅 become Lucide `Phone` / `CalendarDays`).

**Composition archetypes.** No two adjacent sections share one:

| Code | Archetype |
|---|---|
| S | Split-asymmetric |
| L | Ledger line |
| D | Dark band |
| E | Estimate document |
| P | Statement pairs |
| R | Portrait row |
| V | Viewer + notes |
| Q | Quote column |
| T | Tool (search) |
| H | Timetable |
| I | Index (FAQ) |
| C | Closing statement |

### Global: Utility bar + Header
- **Pattern:** Reka UI `NavigationMenu` for the Treatments mega-menu (keyboard, `aria-expanded`, Esc to close are built in). Header layout is custom.
- **Restyle:**
  - Utility bar: 36px, `--color-sunk` ground, `--text-caption`, status dot `--radius-round` in accent, times in `--font-figure`.
  - Header: `--color-paper`, bottom `--border-hair`, 88px compressing to 64px after 100px.
  - Nav links are ink `--text-small` weight 500; hover underline in accent.
  - Book is a primary button with `--radius-control`, 44px tall, 20px padding.
  - Phone is plain mono text with a `Phone` icon.
- **Mega-menu:**
  - `--color-slip` with `--shadow-pop`.
  - Three columns of plain links, each with its "from $" in ink-3 mono.
  - A fourth column "In pain now?" on `--color-signal-tint` with signal text and a Call link.
  - Remove any default arrow/indicator animation.
- **Mobile:**
  - Utility bar hidden; the header keeps a logo, a 44px phone icon button and a Menu button.
  - Reka `Dialog` full-screen panel in this order: two 56px buttons (Call, Book) at the top, then the accordion list of nav, then hours and address.
  - Body scroll lock, and focus returns to the trigger on close.
- **States:** hover, `:focus-visible` ring, `aria-current="page"` shown with a 2px accent underline, compressed header.

### Global: StickyMobileBar
- **Pattern:** custom and fixed. Two `<a>` elements (`tel:` and `/book/`), 50/50.
- **Restyle:**
  - Height `--mobilebar-h` plus `env(safe-area-inset-bottom)`.
  - Call: `--color-slip` ground, ink text, top `--border-control`.
  - Book online: accent ground with white text.
  - Lucide icons at 24px; label `--text-small` weight 600.
  - No radius (full-bleed), no shadow except a top hairline.
- **Behavior:**
  - Shows below 768px only.
  - Adds `padding-bottom` to `body` so the footer isn't covered.
  - Hides while the booking dialog is open.
- **States:** active, darker ground (`--color-accent-active` / `--color-sunk`), and a focus ring inset.

### 1. Hero (S): Split-asymmetric
- **Before:** centered-ish copy, feature row with tooth icons, 3D implant render with callouts, green 1.97:1 buttons.
- **After:**
  - Left 7 columns, top-aligned: status line → H1 (`--text-display`, left-aligned, max 14ch per line) → one sentence (`--text-body-lg`, ink-2, max 44ch) → button pair → rating line.
  - Right 5 columns: a 4:5 photo bleeding to the viewport edge, with the **compact estimate slip** overlapping its bottom-left corner by 48px.
  - Section padding: top `--space-16`, bottom `--section-base`.
- **Rating line:** stars as Lucide `Star` filled in **ink**, not gold. "4.9" in figure. "287 Google reviews" links to `/reviews/`. It is plain UI, not `AggregateRating` schema (decisions.md).
- **Mobile:** see the B mobile wireframe. Photo 4:3 below the CTAs, with the slip reduced to 2 rows.
- **Performance:** the photo is AVIF/WebP with `srcset` 480/800/1200, `fetchpriority="high"`, target ≤ 140KB, and explicit width/height (no CLS).

### 2. TrustStrip (L): Ledger line
- **Before:** row of icon cards.
- **After:**
  - One full-width ruled line: 4 cells separated by vertical `--border-hair`, no cards and no icons.
  - Each cell has a figure or short fact on top (`--font-figure` 1.25rem) and a caption below (ink-3).
  - Cells:
    1. "4.9 ★ · 287" / Google reviews
    2. "18 yrs" / on Barton Springs Rd
    3. "Named plans" / See if we take yours →
    4. "ADA" / member practice
  - Padding `--section-tight`.
- **Mobile:** a 2×2 grid with a hairline cross, not a carousel.
- **Data:** every value comes from `practice.js`. Years and credential are client-supplied, never invented.

### 3. EmergencyBand (D): Dark band
- **Before:** a light band shaped like the others.
- **After:**
  - `.on-carbon`, full-bleed, `--section-tight`.
  - Left: label "In pain right now?" in `--color-signal-on-dark`, then **the phone number as the headline** (`--font-figure`, `--text-figure-xl`, a `tel:` link).
  - Right: one line "We hold same-day emergency slots every day" + a one-row estimate ("Emergency visit · exam + X-ray ........ from $79") + an outline button "Book an emergency slot".
- **Mobile:** the phone number becomes a full-width 56px signal button, with the one-row estimate beneath.
- **States:** "We're open now" / "Closed — here's what to do tonight →" comes from `openStatus()`.

### 4. TreatmentsGrid → "Price list" (E): Estimate document, the signature
- **Before:** 8 photo cards with tooth icon badges, no prices, centered header, `href="#book"`.
- **After:** described in the B content wireframe.
  - Left 4 columns sticky (`position: sticky; top: 96px`): H2, a two-sentence promise, one 3:2 still-life, "All treatments →".
  - Right 8 columns: the **EstimateSlip**, with rows in the spec order (search volume).
  - Padding `--section-open`, on `--color-sunk`, so the white slip lifts.
- **EstimateSlip anatomy:**
  - **Top edge:** perforation via a `mask` of `radial-gradient(circle at 6px 0, transparent 4px, #000 4.5px)` repeated at 12px.
  - **Surface:** `--color-slip`, `--radius-paper`, `--shadow-slip`.
  - **Header row:**
    - `--text-caption` uppercase with `--tracking-label`, ink-3: "Estimate · Orvia Dental · Austin".
    - A Reka `ToggleGroup` (single) "No insurance / I have insurance": 44px segments, `--radius-control`, selected state accent-tint ground with ink text.
  - **Row (a `<li>` inside `<ol>`; the whole row is an `<a>` to the treatment page):**
    - Name (`--text-h4`)
    - A dotted leader (`flex: 1; border-bottom: --border-leader`)
    - Figure (`--font-figure`, tabular, right-aligned)
    - Second line: plain description + duration (`--text-small` ink-2)
    - Optional tags: `--radius-paper`, accent-tint ground, ink text, `--text-caption`. Max 2 per row: "Same day", "Insurance often helps", "Sedation available".
    - Row padding `--space-5` block, rows separated by `--border-hair`.
  - **Insured mode:** the figure column crossfades to "We check your plan first" for the first row and "Often partly covered" / "Usually not covered" for the rest. These are category statements, no percentages. Each row links to the cost page.
  - **Footer:** `--text-body` weight 600: "You get this in writing before any treatment starts. Second opinions welcome." Also a caption "Ranges for a typical case. Your exam sets the real number." and, in demo, "Sample prices for demo."
- **Hover and focus:** row ground `--color-paper`, the arrow appears (opacity), no scale. Focus ring inset 2px.
- **Fallback mode** (`practice.showPrices === false`): the figure column shows duration/visits and the footer promise stays.
- **Empty/loading:** static data, so none. If a row lacks a price, show "Ask for a quote" in ink-2, never "$0".
- **Mobile:**
  - Left column un-sticks and stacks above the slip; the still-life hides below 768px.
  - Rows go to two lines, with the leader dropped and the figure on its own line right-aligned.
  - The toggle spans full width.

### 5. WhyChooseUs (P): Statement pairs
- **Before:** centered header + icon cards with generic virtues.
- **After:**
  - No cards, no icons.
  - A 2×2 of **checkable promises** set large (`--text-h3`, ink), each followed by its proof link in accent (`--text-small`):
    1. "We publish our prices." → the price list
    2. "Open until 7pm, and Saturdays 9–2." → hours
    3. "Numbing first. Sedation if you want it. You can stop anytime." → sedation page
    4. "We check your insurance before you arrive." → verify form
  - H2 sits above, left-aligned, spanning 5 columns: "No surprises, on purpose."
  - Padding `--section-base` on `--color-paper`.
  - Pairs separated by `--space-12` gap, **no rules** (rules are reserved for ledgers).
- **Rule:** if a clinic can't honestly fill four, render two or three and the grid collapses. Never pad.
- **Mobile:** single column, statements `--text-h4`-sized.
- **Welcome-back cue (research differentiator #6):** a fifth full-width line beneath: "Haven't been in years? No lectures. Come see the office first →" in `--text-body-lg`.

### 6. TeamPreview (R): Portrait row
- **Before:** centered header + card grid.
- **After:**
  - Heading row: H2 left "The people you'll see" + "Meet the whole team →" right, baseline-aligned.
  - Below, 3 portraits at 4:5, **0 radius**, no shadow, in a 12-column grid (4/4/4 at ≥1024).
  - Caption under each, styled like an ID badge:
    - Name `--text-h4`
    - Role and credential `--text-small` ink-2 ("DDS · Texas sedation permit" only if true)
    - Human line `--text-small` ("Speaks Spanish. Coaches U10 soccer.")
    - "Book with Dr. Reyes →"
  - Padding `--section-base`.
- **Mobile:** not a carousel. Compact rows: 96×120 photo left, text right, 3 stacked.
- **Images:**
  - Crop DrAmaraCole to 4:5 centered at x≈770 (removes the tooth logo on the right-hand monitor).
  - Regrade all three to neutral whites.
  - Alt text: "Dr. Amara Cole, dentist at Orvia Dental".

### 7. BeforeAfterGallery (V): Viewer + notes
- **Before:** a grid of composites comparing one image against itself, with baked labels.
- **After:**
  - Left 8 columns: one large 3:2 **BeforeAfterSlider**.
  - Right 4 columns: a case-notes panel styled as a chart entry. Rows with hairlines:
    - Treatment
    - Visits
    - Timeframe (figure)
    - Dentist (linked)
  - Below: a Reka `Tabs` list of 3 cases as text tabs ("Veneers · 2 visits", "Aligners · 11 months", "Implant · 4 months").
  - Caption: "Our own patients, shared with written permission." In demo: "Sample cases for demo."
  - Padding `--section-base` on `--color-sunk`.
- **Slider pattern:** two `<img>` stacked, the top one clipped with `clip-path: inset(0 calc(100% - var(--pos)) 0 0)`, driven by a visually-hidden native `<input type="range">`. Keyboard arrows work, `aria-valuetext="Showing 50% after"`. The handle is a 44px `--radius-round` slip-white circle with ink `ChevronLeft/Right` icons. Behavior reference: `img-comparison-slider` (MIT); build natively (~40 lines) instead of adding the dependency.
- **"BEFORE"/"AFTER" labels:** live HTML labels in the corners, `--text-caption` on `rgb(27 31 29 / .7)` with paper text (≥ 12:1).
- **Mobile:** slider full width, tabs as a horizontally scrollable segmented list (44px), notes below.
- **Asset fix:** each composite in `public/images/results/` must be split into `*-before` and `*-after` files with the baked pills and fake handle cropped out, or regenerated as separate frames.

### 8. ReviewsSection (Q): Quote column
- **Before:** centered carousel-like hand-written cards.
- **After:**
  - Left 4 columns: `--text-figure-xl` "4.9", then "287 Google reviews" and a "Read them on Google →" link.
  - Right 8 columns: a two-column list of 4–6 quotes, **no cards**. Each quote:
    - `--text-body-lg` ink, max `--measure-narrow`
    - Then name, date (figure) and "Google" in `--text-caption` ink-3
    - Separated by `--space-10`
  - Padding `--section-base`.
- **Compliance:**
  - Quotes speak to experience, not skill (SBDE 108.59).
  - The live feed uses the Google Places API. It returns at most 5 reviews per request, so design for 5.
  - Demo state is labeled "Sample reviews for demo".
  - No `AggregateRating` schema.
- **States:**
  - Loading: skeleton lines in `--color-sunk`, no shimmer.
  - Error or empty: hide the quote list and keep the score block with the Google link.
- **Mobile:** score block on top, 3 quotes, then "Read all 287 on Google".

### 9. InsuranceSection (T): Tool
- **Before:** logo-style grid.
- **After:**
  - A working **"Do you take my plan?"** type-ahead: Reka `Combobox`.
  - Input 52px, `--border-control`, `--radius-control`, `Search` icon, visible `<label>`.
  - Results: plain carrier names with a status in figure/ink ("In network" accent, "Out of network — we'll file for you" ink-2).
  - Beside it, the full named list in a two-column ruled index (text, not logos: avoids trademark and logo-wall issues, and loads nothing).
  - Beneath: the uninsured line as a one-row estimate: "No insurance? Membership plan ........ from $300/yr" → `/membership-plan/`.
  - Padding `--section-base` on `--color-paper`.
- **States:**
  - No match: "We don't see that plan. We'll check for you →" (verify form).
  - Focus ring on the input; the results listbox is `--color-slip` with `--shadow-pop`.
- **Mobile:** input full width, the index list collapses into a Reka `Accordion` "See all 24 plans".

### 10. LocationHours (H): Timetable
- **Before:** centered header + two cards.
- **After:**
  - Left 5 columns: the **HoursTable** styled as a departure board.
    - 7 rows, day name + times in figure.
    - **Today's row** on `--color-accent-tint`, with ink text and a "● Open now" label.
    - Closed days in ink-2 "Closed".
    - Then written specifics: "Free lot behind the building, enter from [street]", nearest CapMetro stop, step-free entrance (Lucide `Car`, `Bus`, `Accessibility`).
  - Right 7 columns: a **static map image** (0 radius, 3:2) linking to Google Maps + a "Get directions" button. No iframe on load (privacy and weight); an optional "Load interactive map" click swaps in the iframe.
  - Padding `--section-base` on `--color-sunk`.
- **Mobile:** hours first (it answers "are you open?"), the directions button full width, map below.
- **Note:** the NAP string comes from `practice.js` only, matching GBP exactly.

### 11. FaqSection (I): Index
- **Before:** centered header + accordion.
- **After:**
  - Left 4 columns: H2 "Questions people ask us" + "Still unsure? Call (512) 648-2210" (figure).
  - Right 8 columns: Reka `Accordion` (type multiple) with the 6 spec questions.
  - Each trigger is a full-width 56px min-height row: `--text-h4`, `Plus`/`Minus` icon on the right, rows separated by `--border-hair`.
  - Panel text `--text-body` ink-2, max `--measure`.
  - Padding `--section-base`.
- **States:** trigger hover underline, focus ring, `aria-expanded`/`aria-controls` from Reka. `FAQPage` JSON-LD is kept for AI parsing only (decisions.md).
- **Mobile:** single column; the "still unsure" line moves below the list.

### 12. FinalCta (C): Closing statement
- **Before:** centered band.
- **After:**
  - `.on-accent`, full-bleed, padding `--section-open`, the only accent-filled band on the page.
  - Left-aligned `--text-h1`: "Book in about a minute. No account, no phone tag."
  - One line in ink-2 (tint `#DDEBDD`, 6.10:1) with today's status.
  - Buttons:
    - "Book appointment": slip-white ground with accent text (7.54:1).
    - "Call (512) 648-2210": outline in `#F5F6F3`.
- **Mobile:** buttons full width, 52px.

### 13. Footer: Dark band
- **Pattern:** custom, `.on-carbon`.
- **Layout:**
  - Top row: the NAP block large (`--text-h3` name, address and phone in figure) + the HoursTable compact.
  - Then 4 link columns (Treatments, Patients, Practice, Legal) with **only real routes**.
  - Bottom bar with the dynamic year and the five legal links.
  - Links in `--color-ink-inverse-2` (8.98:1), hover to paper.
- **Mobile:** columns become Reka `Accordion` groups; the NAP stays open.

### Supporting components (other pages)

**BookingWidget:**
- Reka `Dialog` on desktop, a full page `/book/` on mobile.
- Progress line of 6 mono step counters (a genuine sequence).
- Tiles 64px min, `--radius-control`, `--border-control`; selected state accent-tint + 2px accent border.
- Inputs 52px with visible labels.
- Errors in signal text + `--color-signal-tint` field ground + an icon-free text message linked via `aria-describedby`.
- The SMS consent checkbox is separate and unchecked (TCPA).

**CostRangeTable:** the EstimateSlip in "full" variant with columns (what changes the price).

**EmergencyBanner (global, dismissible):** 44px `.on-carbon` strip; the dismiss `X` button is 44px.

**404:** paper ground, H1 "That page moved or never existed.", a search input, 6 links as a ledger list, the phone in figure.

**Licenses:**
- Reka UI: MIT
- lucide-vue-next: ISC
- Schibsted Grotesk and Geist Mono: SIL OFL
- img-comparison-slider (reference only): MIT

**Remove from the homepage:** `TechnologiesSection`, `ImplantRangeSection`, `KeyQuestionsSection` (manufacturer content per spec).

**Section rhythm summary (top to bottom):**

| Section | Ground | Padding |
|---|---|---|
| Hero | paper | base |
| Trust | paper, ruled | tight |
| Emergency | carbon | tight |
| Price list | sunk | open |
| Why | paper | base |
| Team | paper | base |
| Before/after | sunk | base |
| Reviews | paper | base |
| Insurance | paper | base |
| Hours | sunk | base |
| FAQ | paper | base |
| Final CTA | accent | open |
| Footer | carbon | — |

Ground changes carry separation, so no two adjacent sections share both ground and archetype.

---

## 8. Imagery rules and generation prompt (Direction B)

**Priority:**
1. Client photography.
2. Generated images using the single prompt below.
3. Stock is not allowed for people or before/afters: spec, HIPAA and FTC reasons.

**Ratios:**
- Portraits 4:5
- Environments and hero 4:5 (desktop) / 4:3 (mobile crop via `<picture>`)
- Still-lifes 3:2
- Before/after 3:2 pairs

**Grade:**
- Neutral white balance (no blue/teal cast).
- Greens −20% saturation.
- Blacks lifted to about 6%.
- Gentle contrast, no vignette, no glow.

**Existing assets:**
- `treatments/*.png`: **keep.**
  - Regrade (neutralize the blue paper towel toward grey, calm the plant).
  - Crop 3:2.
  - Use in the price-list side panel and treatment page heroes only.
  - Convert to AVIF/WebP (the PNGs are ~1–2MB each).
- `team/*.png`: **keep for demo.**
  - Crop 4:5 and regrade.
  - Remove or crop out the tooth graphic on the monitor (DrAmaraCole).
  - They are generated faces, so label the demo accordingly. Clients supply real portraits.
- `results/*.png`: **not usable as-is.** Split into separate before and after files, strip the baked labels and handle, and label them "Sample cases for demo".
- `hero-bg-*.png`, `teeth-*.png`: retire (3D render / compare set).

**Reusable generation prompt (people and place):**
> Documentary photograph inside a small independent family dental practice in Austin, Texas. Soft north-window daylight, neutral 5000K white balance, no blue or teal cast. 35mm lens, f/2.8, eye level. [SUBJECT: e.g. "a dentist in navy scrubs explaining an X-ray on a tablet to a seated middle-aged patient, both mid-conversation"]. Real skin texture, natural (not bleached) teeth, relaxed expressions, candid gesture rather than posing to camera. Warm grey plaster walls, pale white-oak cabinetry, one out-of-focus native Texas plant (agave or sage). No logos, no tooth graphics on walls or screens, no text. Low saturation, gently lifted blacks, soft contrast. Vertical 4:5.

**Still-life variant:**
> Same lighting and grade. Overhead three-quarter view of [OBJECT] on a matte pale-grey surface, a single steel instrument tray edge in frame, shallow depth of field, no plant, no text, 3:2.

---

## 9. Build discipline (Step 7)

1. Add `src/styles/tokens.css` and the fonts. Remove Inter and Brush Script. Delete the three legacy sections from `App.vue`.
2. Build **Hero + Price list (EstimateSlip)** first. Screenshot at 375 and 1280. Compare to §3 B and §7.
3. Chanel pass: remove one accessory. The top candidates are the slip tags on the hero slip, or the still-life beside the price list.
4. Then the remaining sections in page order, screenshotting each at 375/768/1280/1920.
5. Content: all figures come from `practice.js` (prices, hours, plans, years, credential). Demo-only values carry visible "Sample … for demo" captions.

---

## 10. Decisions needed from the user

1. **Approve Direction B** (or pick A/C). The recommendation is recorded in `docs/decisions.md` as pending.
2. **Demo prices:** OK to show sample price ranges labeled "Sample prices for demo" in the Orvia demo? The signature is strongest with figures, and the fallback mode exists for clinics that refuse.
3. **Brand accent for the demo:** keep Live Oak `#2E5E3E` (continuity with the current green), or choose another. Orvia's legacy `#6fcf3d` cannot carry white text (1.97:1) and can only be a tint.
4. **Before/after assets:** split the supplied composites into separate before/after files, or regenerate pairs with the prompt above.
