# 01 — Niche Research: US general/family dental practice (Orvia Dental demo, Austin TX)

Compiled 2026-09-15 from four parallel research threads. Raw notes with every source: `docs/research/competitors.md`, `customer-voice.md`, `owner-compliance.md`, `seo.md`.

**Source quality note.** Hard numbers from ADA/JADA, CareQuest, Consumer Reports, FTC, Google Search Central, BrightLocal and Whitespark are primary. No-show, missed-call and cost-per-patient figures mostly come from vendor blogs (Curogram, ainora, Resonate, dentx) that sell the fix; treat those as directional ranges, not facts to print on the site. Reddit blocked fetching, so patient quotes come from Teamblind, Consumer Reports and CBS News instead.

---

## 1. Summary

1. **Trust is the main blocker, and upselling fear drives it.** Patients say "I don't know what to believe." Only 27% ever get a second opinion. ([Consumer Reports](https://www.consumerreports.org/dental-oral-care/read-this-before-your-next-trip-to-the-dentist-a5054427914))
2. **Prices are hidden across the market.** Only 2 of 8 competitor sites show any price. No US law makes dentists quote before treating.
3. **72M US adults (27%) have no dental insurance.** Insured adults get preventive care at 67% vs 28% uninsured. ([CareQuest](https://www.businesswire.com/news/home/20250521166187/en/New-Report-72-Million-Adults-in-the-US-Lack-Dental-Insurance-Nearly-Three-Times-the-Number-Without-Health-Insurance), [Delta Dental AZ](https://www.deltadentalaz.com/about/press-releases/2024-press-releases/delta-dental-of-arizona-unveils-results-of-2024-statewide-oral-health-and-wellness-report/))
4. **Fear is the majority experience.** 72.6% of adults report dental fear; 26.8% severe. Embarrassment after years away is a separate blocker. ([JADA via ADA News](https://adanews.ada.org/ada-news/2025/september/september-jada-finds-dental-fear-still-prevalent-in-us/))
5. **Patients want online booking but most Austin sites don't offer it.** 67–80% prefer online, yet only 2 of 8 sites have real-time slots. The rest use request forms or the phone.
6. **Practices lose revenue through the phone.** An estimated 28–38% of calls go unanswered, and staffing is dentists' #1 named 2025 challenge ([ADA News](https://adanews.ada.org/new-dentist/2025/march/staffing-shortages-top-expected-challenges-this-year)). The site has to absorb front-desk load.
7. **No competitor names the insurers it takes.** They all say "50+ PPO plans" or "we file all plans."
8. **Google Business Profile and fresh reviews drive local rankings more than the site.** GBP is 17–32% of local ranking weight, and 74% of searchers look for reviews from the last 3 months ([Whitespark](https://whitespark.ca/local-search-ranking-factors/)).
9. **Two spec items won't work as written.** Self-served `AggregateRating` stars are ineligible for rich results ([Google](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)), and FAQ rich results were removed May 7, 2026 ([SEJ](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)).
10. **Texas adds a testimonial rule on top of the FTC one.** SBDE Rule 108.59 bars dentists from using testimonials about their own skill ([Phan Law](https://phanlawaustin.com/texas-dentists-and-advertising/)), and the FTC rule (effective Oct 2024) bans curated or fake reviews. The current demo's hand-written reviews must be labeled as sample content.

---

## 2. Competitor table

| Site | Primary CTA | Booking | Prices | Insurance | Emergency | Membership | Standout | Weakness |
|---|---|---|---|---|---|---|---|---|
| [Forest Family](https://www.forestfamily.com/) | Schedule Now | Real-time (Flexbook), 2–3 steps | Exam only | "Most PPO" | — | Yes | Multi-location slot picker, Cherry + CareCredit | Partial pricing |
| [Mi Casa Family](https://www.micasafamilydentistry.com/) | Schedule Appointment | Request form | No | "50+ PPO" + Medicaid | Yes, same-day | Savings plan | Bilingual EN/ES, Saturday hours | No live slots |
| [McLane Family](https://mclanefamilydental.com/) | Make Appointment / Call | Phone or form | No | Not on home | No page | No | Sedation offered | Thin on every conversion item |
| [Magnolia Family](https://www.magnoliadentistryatx.com/) | Request Appointment + emergency CTA | Request form | **$119 exam, $79 emergency, monthly figures** | "File all plans" | Dedicated page | $300/yr | Most transparent in Austin | No real-time booking |
| [Austin Family DDS](https://austinfamilydds.com/) | Book Online | 3 competing booking URLs | No | — | — | — | Comfort amenities marketed | Fragmented flow |
| [Tend](https://www.hellotend.com/) | Book now | Real-time, **account/app required** | — | Insurance pop-up | Same-day slots | — | Boutique-hotel tone, real photography | Account gate |
| [Aspen Dental](https://www.aspendental.com/) | Schedule | Multi-step scheduler | Financing messaging | — | "Same/next-day for pain" | — | National scale | Generic corporate tone |
| [Dentologie](https://www.dentologie.com/) | Not verified | Not verified | — | — | — | — | Distinct brand, location pages | Couldn't verify depth |
| Vendors: [ProSites](https://www.prosites.com/website-design/dental-websites/), [PBHS](https://www.pbhs.com/dental-website-design/) | — | Sell request forms, not real-time | — | — | — | — | Accessibility mode, review widgets, galleries | Template-driven |
| Infra: [NexHealth](https://www.nexhealth.com/features/nexhealth-scheduling), [Weave](https://www.getweave.com/industry/dentistry/) | — | Real-time PMS sync, waitlist auto-fill | — | — | — | — | The tech exists | Local practices haven't adopted it |

**Counts (8 storefront sites):**

| Item | Sites |
|---|---|
| Show real prices | 2 |
| Real-time booking | 2 |
| Named insurer list | 0 |
| Distinct emergency path | 3 |
| Membership plan | 2 |

---

## 3. Customer pain points

### Before choosing
- "I feel like I'm being scammed by the first one and feeling that perhaps the 2nd one wasn't thorough enough… I don't know what to believe." ([Teamblind](https://www.teamblind.com/post/random-rant-dentist-scammer-fyxqscwg))
- "Some dentists are very aggressive with cavities while others are more relaxed. I am not sure who to trust anymore." ([Teamblind](https://www.teamblind.com/post/random-rant-dentist-scammer-fyxqscwg))
- Parent: first visit, "he said my son needed multiple fillings… his last checkup [was] 6 months prior. This didn't sit right with me." ([Teamblind](https://www.teamblind.com/post/random-rant-dentist-scammer-fyxqscwg))
- "As soon as they realize you have a good insurance policy they will leech every penny out of it." ([Teamblind](https://www.teamblind.com/post/too-much-dentistry-8clvu4gt))
- 11% of adults (28M) delayed care over cost or insurance. ([CareQuest](https://carequest.org/resource/a-coming-surge-in-oral-health-treatment-needs/))

### During booking
- "Quoted her $750. Then halfway through… when she was numb… he told her… it was going to be $1,500." ([CBS News](https://www.cbsnews.com/news/why-your-dentist-costs-so-much/))
- 67% prefer booking online vs 22% by phone ([Doctible](https://www.facebook.com/doctible/posts/67-of-patients-prefer-to-book-appointments-online-rather-than-by-phoneonline-sch/1479878090813002/)). Over half of millennials and Gen X would switch providers for online booking ([Phreesia/Zippia](https://www.zippia.com/advice/appointment-scheduling-statistics/)).
- Recurring review theme: no one answers, voicemail, "never-ending phone tag." ([Chatmeter](https://www.chatmeter.com/resource/blog/reviews-for-dentists-directories/))
- New-patient paperwork is 4+ pages, often on paper at check-in. ([ADA](https://www.ada.org/resources/practice/practice-management/patient-registration-and-forms))

### After the visit
- 79.5% prefer text or email reminders over calls ([DialogHealth](https://www.dialoghealth.com/post/patient-appointment-reminder-statistics)). 36% of no-shows are simple forgetting ([Clerri](https://clerri.com/blog/dental-patient-no-show-statistics)).
- Nearly 1 in 3 privately insured people got a surprise bill; most don't know they can appeal. ([Consumer Reports](https://advocacy.consumerreports.org/press_release/consumer-reports-survey-finds-nearly-one-third-of-privately-insured-americans-hit-with-surprise-medical-bills))

### Emotional
- 21% of adults avoided care specifically because of anxiety. ([Powers Health](https://www.powershealth.org/about-us/newsroom/health-library/2025/09/09/most-americans-fear-the-dentist))
- 21% are embarrassed about their smile; 20% lost sleep over oral health. ([Delta Dental AZ](https://www.deltadentalaz.com/about/press-releases/2024-press-releases/delta-dental-of-arizona-unveils-results-of-2024-statewide-oral-health-and-wellness-report/))
- A dentist of 42 years: fear of being judged is the #1 reason patients stay away; their "self-esteem has been shattered." ([Denver Post](https://www.pressreader.com/usa/the-denver-post/20231019/281633899909436))
- 71.2% of fearful patients would try a short online program about their anxiety. ([JADA](https://adanews.ada.org/ada-news/2025/september/september-jada-finds-dental-fear-still-prevalent-in-us/))

---

## 4. Owner pain points (vendor-sourced figures are directional)

| Pain | Evidence | What the site can do |
|---|---|---|
| No-shows | 81.3% of dentists name it the top capacity killer (ADA survey via [Curogram](https://curogram.com/blog/average-patient-no-show-rate)); estimated $105K–$240K/yr | SMS reminders, self-reschedule link, clear cancellation policy |
| Missed calls | 28–38% unanswered; new-patient calls convert 30% live vs 4% to voicemail ([ainora](https://ainora.lt/blog/dental-practice-phone-call-statistics-2026)) | Online booking, prices and insurance answered on-page, missed-call text-back |
| Staffing | ~60% worried about staff; 91% say hiring a hygienist is very hard ([ADA HPI](https://www.ada.org/resources/research/health-policy-institute/dentist-workforce/dental-hygienist-shortage)) | Self-serve booking, digital intake, strong FAQ |
| Insurance verification | 10–20 hrs/week of front-desk time ([PatientXpress](https://www.patientxpress.us/blog/automated-dental-insurance-verification-software)) | Named insurer list + "verify my coverage" request |
| Acquisition cost | $200–$400+ per new patient in large metros ([dentx](https://dentx.ca/blog/dental-new-patient-cost/)); Zocdoc $50–$110 per booking | Own site + GBP booking as the cheapest channel |
| Reviews | 81% use Google reviews to choose ([Oral Health Group](https://www.oralhealthgroup.com/features/three-stats-every-dentist-needs-to-know-about-google-reviews/)) | Post-visit review request, live Google feed |
| Uninsured revenue | Members complete 5.9 procedures/yr vs 2.4 uninsured ([Clerri](https://clerri.com/blog/subscribili-vs-clerri)) | Membership plan page |
| Case acceptance | CareCredit declines a large share of applicants; Cherry/Sunbit approve ~87–90% ([Cherry](https://withcherry.com/blog/sunbit-vs-carecredit), vendor source) | Financing options with more than one provider |
| Owner workarounds | "Try putting a charge of $100 for a No Show… Works like a charm." ([Dentaltown](https://www.dentaltown.com/magazine/article/196/how-do-you-handle-no-shows)) | Cancellation policy shown at booking confirm |

---

## 5. Compliance & integrations

### Compliance

| Rule | What it means for the build | Source |
|---|---|---|
| ADA Title III / WCAG 2.1 AA | 3,117 federal web suits in 2025 (+27%); they target booking widgets and intake forms. Needs real labels, alt text, captions, contrast, keyboard access. | [Level Access](https://www.levelaccess.com/blog/2024-u-s-web-accessibility-litigation-key-trends-and-strategies-for-mitigating-risk/), [wcagsafe](https://wcagsafe.com/ada-compliance/dental-offices) |
| Section 1557 (practices taking Medicaid) | WCAG 2.1 AA plus a Notice of Nondiscrimination and a language-access notice | [ADA](https://www.ada.org/resources/practice/legal-and-regulatory/section-1557-the-basics-on-what-you-must-do) |
| HIPAA tracking | June 2024 ruling vacated HHS guidance for public pages, but it's still a gray area and the FTC can still act. No ad pixels on booking, intake or symptom pages; analytics behind consent. | [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/06/alerts-practices-hltc-federal-judge-vacates-health-human-services-pixel), [Ropes & Gray](https://www.ropesgray.com/en/insights/alerts/2024/06/federal-judge-vacates-key-points-of-hhs-ocr-hipaa-online-tracking-technology-guidance) |
| TCPA | Reminders need prior express consent; anything promotional needs written consent. Separate unchecked SMS box with a stored timestamp; honor opt-outs instantly. $500–$1,500 per message. | [Solum](https://getsolum.com/glossary/tcpa-healthcare-texting-rules), [Apptoto](https://www.apptoto.com/best-practices/fcc-tcpa-consent-appointment-reminders) |
| FTC fake-review rule (Oct 21, 2024) | Real, unedited reviews only; no paying for sentiment; disclose staff reviews. Up to $50,120 per violation. | [FTC](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials) |
| Texas SBDE Rule 108.59 | Dentists can't use testimonials about their own skill. Frame quotes as experience ("they explained every step"), not skill ("best dentist"). Get legal review. | [Phan Law](https://phanlawaustin.com/texas-dentists-and-advertising/) |
| Texas "specialist" claims | Allowed with a recognized board certification since the 2021 rule change | [Dentistry Today](https://www.dentistrytoday.com/texas-adopts-regulations-related-to-dental-specialty-advertising/) |
| "Painless" / outcome claims | No explicit ban found. Describe the technique ("numbing and sedation options"), never promise an outcome. | [Avvo](https://www.avvo.com/legal-guides/ugc/texas-dental-practice-business-laws) |

### Integrations

| Layer | Options | Notes |
|---|---|---|
| Practice management | Dentrix (~18–22%), Eaglesoft (~15–20%), Open Dental (~14–18%, fastest growing), Curve, Denticon | [Clerri](https://clerri.com/blog/dental-practice-management-software-statistics); directional |
| Booking API | NexHealth: one API across 15+ practice systems, true slots, Reserve with Google | [NexHealth](https://www.nexhealth.com/api) |
| Booking on Google | Reserve with Google / GBP "Book" button | [PlanetDDS](https://support.planetdds.com/hc/en-us/articles/39633094180635--Reserve-with-Google-Feature-Guide) |
| Communications | Weave (phone, text, payments, reminders, reviews) | [Weave](https://www.getweave.com/industry/dentistry/) |
| Financing | CareCredit (most recognized), Cherry, Sunbit | [Cherry](https://withcherry.com/blog/cherry-vs-sunbit) |
| Membership plans | Clerri (formerly Kleer), BoomCloud | [BoomCloud](https://boomcloudapps.com/kleer-pricing-vs-boomcloud-pricing/) |

---

## 6. SEO plan

- **Keyword pattern:** service + Austin + urgency, price or insurance ([Growth Saloon](https://www.growthsaloon.com/industries/seo-for-dentists/keyword-research/)). Priority queries:
  - "emergency dentist austin"
  - "dental implants cost austin"
  - "invisalign cost austin"
  - "dentist that takes medicaid austin"
  - "sedation dentist austin"
  - "family dentist austin tx"
  - "how much do dental implants cost" (non-local, low difficulty)
- **What ranks in Austin:**
  - Standalone emergency pages
  - Cost pages nested under the treatment, with real dollar ranges ([38th Street Dental](https://www.myaustindds.com/services/dental-implants/cost/))
  - Separate Medicaid/insurance pages ([Meadows Dental](https://themeadowsdentalcare.com/insurance/medicaid))
  - Sedation pages that lead with the Texas sedation permit
- **Local ranking:** the site must match GBP exactly (name/address/phone, categories, hours, services). Build a post-visit review request flow, because review recency is a top factor.
- **Schema:**
  - `Dentist` on home and location pages
  - `MedicalProcedure` on treatment pages
  - `Person`/`Physician` per dentist
  - `FAQPage`: keep for AI parsing only, no rich result
  - **Drop self-served `AggregateRating`**
- **AI search:** AI Overviews show on ~51% of health searches ([WebFX via DentalScapes](https://www.dentalscapes.com/seo-for-dentists-adapting-to-ai-search/)). Write treatment pages as complete answers: candidacy, steps, real cost, recovery, insurance.
- **Core Web Vitals:** a tie-breaker, weighted to mobile. Optimize hero and treatment images; the current PNGs are 1.2–2MB each.
- **Neighborhood pages:** 2–3 with genuinely local content, not template swaps.

**URL structure.** The spec's `/treatments/` tree is equivalent to the SEO thread's `/services/` suggestion. Keep the spec's structure and add:
- `/treatments/dental-implants/cost/`
- `/treatments/clear-aligners/cost/`
- `/insurance-and-financing/medicaid/`
- `/locations/austin/` (optional)

---

## 7. Ranked features

Evidence numbers refer to the Summary (§1) and sections above.

| # | Feature | Problem solved | Who benefits | Priority | Effort |
|---|---|---|---|---|---|
| 1 | Sticky mobile Call/Book bar + standalone emergency page with same-day promise and exam price | Pain searchers won't scroll; emergency is a top converting query (§6) | Patient in pain, owner | Must | S |
| 2 | Online booking without an account, ≤6 fields, real slots via NexHealth or an honest "we'll confirm by text within 1 hour" fallback | 67–80% prefer online; 2 of 8 competitors offer it; missed calls (§1.5–6) | Patient, front desk | **Differentiator** | L |
| 3 | Published price ranges on every treatment + dedicated cost pages | Price opacity, bait-and-switch fear; cost pages rank (§3, §6) | Price-shopper, SEO | **Differentiator** | M |
| 4 | Named insurer list with search + "verify my coverage" request + Medicaid page | No competitor names insurers; verification eats staff hours (§2, §4) | Insured patient, front desk | **Differentiator** | M |
| 5 | Membership plan page for the uninsured | 27% uninsured; members spend ~3x (§1.3, §4) | Uninsured patient, owner | Must | S |
| 6 | "Welcome back, no judgment" anxiety path: sedation options, what the first visit feels like, visit-without-treatment offer | 72.6% fear; embarrassment is the #1 avoidance reason (§3) | Anxious or lapsed patient | **Differentiator** | M |
| 7 | "Why we recommend this" treatment transparency: written estimate before work, second opinions welcome, plain-language plan | Upselling fear is the top trust blocker (§1.1) | Skeptical patient, parents | **Differentiator** | S–M |
| 8 | Live Google reviews (unedited, via API) + post-visit review request by SMS | Reviews vet practices; FTC rule; review recency ranks (§4, §5, §6) | Patient, SEO, owner | Must | M |
| 9 | Digital new-patient intake (HIPAA vendor with BAA) + separate TCPA SMS consent | Paper forms, verification load, TCPA (§3, §5) | Front desk, patient | Must | M |
| 10 | SMS/email reminders with self-reschedule + missed-call text-back | No-shows, missed calls (§4) | Owner | Must (system, not site) | M |
| 11 | Financing with more than one provider (CareCredit + Cherry/Sunbit) on treatment and cost pages | High-dollar drop-off (§4) | Patient, owner | Should | S |
| 12 | Team pages with credentials, languages, Texas permits; experience-framed quotes | Trust, faces; SBDE 108.59 (§5) | Patient | Must | S |
| 13 | Before/after gallery with consent note and treatment + timeframe labels | Proof | Cosmetic shopper | Should | S |
| 14 | Hours with live open/closed state, map, parking, accessibility | Local intent, GBP match | Everyone | Must | S |
| 15 | Bilingual EN/ES (at least key pages) | Only Mi Casa does it; Austin demographics (§2) | Spanish-speaking families | **Differentiator** (market-dependent) | L |
| 16 | WCAG 2.1 AA build, consent-gated analytics, no pixels on booking or intake | Title III suits, HIPAA gray zone (§5) | Owner (legal risk) | Must | M |
| 17 | Long-form treatment guides / blog for AI search | AI Overviews (§6) | SEO | Should | L |

**Differentiators for the pitch:** #2 book online without an account, #3 real prices, #4 named insurers, #6 anxiety path, #7 recommendation transparency. Add #15 bilingual for Austin-area prospects.

---

## 8. Design signals

- **Arrival state:** anxious, suspicious of being upsold, price-uncertain; often on a phone and sometimes in pain. They are comparing 3 clinics and reading reviews in another tab.
- **Leave feeling:** "These people will tell me the truth and the price before they touch me, and it won't be awful."
- **What premium means here:** calm precision and candor. Hospitality, not hospital: bright natural light, real people, specific numbers set with confidence. Tend's boutique-hotel tone wins on feel, not features. Premium here reads as *transparent*, not glossy.
- **Clichés every competitor uses (avoid):**
  - Clinical blue or teal on white
  - Stock smiling models with unnaturally white teeth
  - Tooth icons for every service
  - 3D implant renders
  - "State-of-the-art" copy
  - Icon-card service grids
  - "Request appointment" forms dressed up as booking
- **Directly relevant to the current build:** the hero uses a 3D implant render. Most sections repeat centered eyebrow + H2 + subtitle + card grid. Reviews are hand-written sample quotes. Tooth outline icons appear in several places.
- **Content has to carry the design:** prices, named insurers, real hours and what-happens-next copy are the trust signals. Give them typographic weight instead of hiding them in small print.
- **Copy tone:** plain, specific, second person, and willing to explain "why."
  - Avoid "painless" and superlatives about the dentist's skill (SBDE).
  - Do say: "Numbing first. Sedation if you want it. You can stop anytime."

---

## 9. Sources
Full source lists live in each thread file:
- `docs/research/competitors.md`: 19 sources
- `docs/research/customer-voice.md`: ~25 sources
- `docs/research/owner-compliance.md`: 49 sources
- `docs/research/seo.md`: 29 sources
