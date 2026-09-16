<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

document.title = 'FAQ | Orvia Dental, Austin TX'

// Practice.js's 6 spec questions, each assigned to the theme it fits best,
// plus a few genuinely useful questions per theme so the page isn't sparse.
const groups = [
  {
    id: 'appointments',
    title: 'Appointments',
    items: [
      {
        q: 'What if I need to reschedule?',
        a: 'Call or use the online booking link as soon as you know — there’s no fee for rescheduling with reasonable notice. If it’s a same-day cancellation, we may ask you to rebook within the week so we can offer that slot to someone in pain.',
      },
      {
        q: 'How far in advance should I book a routine cleaning?',
        a: 'Two to four weeks usually gets you your preferred day and time. Same-day emergency slots are held separately, so a routine visit never competes with someone who needs to be seen right away.',
      },
      {
        q: 'Do you send appointment reminders?',
        a: 'Yes, by text and email if you opt in when you book. Reminder texts are only about your appointment, never marketing, and you can opt out at any time.',
      },
    ],
  },
  {
    id: 'insurance-cost',
    title: 'Insurance & Cost',
    items: [
      { q: practice.faqs[0].q, a: practice.faqs[0].a },
      { q: practice.faqs[1].q, a: practice.faqs[1].a },
      { q: practice.faqs[5].q, a: practice.faqs[5].a },
      {
        q: 'What if I don’t have insurance?',
        a: 'We’ll still check what a visit is likely to cost before you arrive. Uninsured patients can also ask about our membership plan, which covers routine visits and discounts treatment for a flat annual fee.',
      },
    ],
  },
  {
    id: 'treatments',
    title: 'Treatments',
    items: [
      {
        q: 'Do you offer sedation for anxious patients?',
        a: 'Yes. Nitrous, oral, and IV sedation are all available and can usually be added to any visit. Tell us when you book, or bring it up during your exam — we’ll walk you through the options and what each one costs.',
      },
      {
        q: 'How long does a dental implant take from start to finish?',
        a: 'Most single-tooth implants take 2–3 visits spread over 3–6 months, since the bone needs time to heal around the implant before the crown goes on top. We’ll map out the full timeline at your consult.',
      },
    ],
  },
  {
    id: 'new-patients',
    title: 'New Patients',
    items: [
      { q: practice.faqs[3].q, a: practice.faqs[3].a },
      {
        q: 'What should I bring to my first appointment?',
        a: 'A photo ID, your insurance card if you have one, and a list of any medications you take. If you have records from a previous dentist, let us know and we’ll request them for you.',
      },
    ],
  },
  {
    id: 'emergencies',
    title: 'Emergencies',
    items: [
      { q: practice.faqs[2].q, a: practice.faqs[2].a },
      {
        q: 'What counts as a dental emergency?',
        a: 'Severe pain, swelling, a knocked-out or broken tooth, or bleeding that won’t stop. If you’re not sure it qualifies, call anyway — we’d rather check than have you wait it out.',
      },
    ],
  },
  {
    id: 'children',
    title: 'Children',
    items: [
      { q: practice.faqs[4].q, a: practice.faqs[4].a },
      {
        q: 'Can I bring my child to my own appointment?',
        a: 'If they’re old enough to sit quietly in the waiting area, that’s no problem. For a longer procedure of your own, it’s best to arrange other care so we can stay focused on your treatment.',
      },
      {
        q: 'At what age should my child’s first dental visit be?',
        a: 'By age one, or within six months of their first tooth coming in, per the American Academy of Pediatric Dentistry. First visits here are short and mostly about getting comfortable in the chair.',
      },
    ],
  },
]

const openSet = reactive(new Set())
function toggle(key) {
  if (openSet.has(key)) {
    openSet.delete(key)
  } else {
    openSet.add(key)
  }
}

let schemaScript = null

onMounted(() => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  }
  schemaScript = document.createElement('script')
  schemaScript.type = 'application/ld+json'
  schemaScript.textContent = JSON.stringify(data)
  document.head.appendChild(schemaScript)
})

onUnmounted(() => {
  schemaScript?.remove()
})
</script>

<template>
  <section class="page-hero" aria-labelledby="faq-page-title">
    <div class="container">
      <h1 id="faq-page-title" class="page-hero__title">Frequently asked questions</h1>
      <p class="page-hero__lede">
        Grouped by what you're actually trying to figure out. Don't see your question?
        Call <a class="link-arrow" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>.
      </p>
    </div>
  </section>

  <section class="faqpage" aria-label="All questions">
    <div class="container faqpage__grid">
      <nav class="faqpage__nav" aria-label="Jump to a topic">
        <p class="faqpage__nav-label">Jump to</p>
        <ul class="faqpage__nav-list">
          <li v-for="g in groups" :key="g.id">
            <a class="faqpage__nav-link" :href="`#${g.id}`">{{ g.title }}</a>
          </li>
        </ul>
        <p class="faqpage__nav-call">
          Still unsure?
          <a class="link-arrow" :href="practice.phoneHref">
            Call <span class="figure">{{ practice.phoneDisplay }}</span>
          </a>
        </p>
      </nav>

      <div class="faqpage__content">
        <section
          v-for="g in groups"
          :key="g.id"
          :id="g.id"
          class="faqpage__theme"
          :aria-labelledby="`${g.id}-title`"
        >
          <h2 :id="`${g.id}-title`" class="faqpage__theme-title">{{ g.title }}</h2>
          <div class="faqpage__list">
            <div v-for="(item, i) in g.items" :key="item.q" class="faqpage__item">
              <h3 class="faqpage__item-heading">
                <button
                  :id="`faq-trigger-${g.id}-${i}`"
                  type="button"
                  class="faqpage__trigger"
                  :aria-expanded="openSet.has(`${g.id}-${i}`)"
                  :aria-controls="`faq-panel-${g.id}-${i}`"
                  @click="toggle(`${g.id}-${i}`)"
                >
                  <span class="faqpage__q">{{ item.q }}</span>
                  <Plus v-if="!openSet.has(`${g.id}-${i}`)" class="faqpage__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
                  <Minus v-else class="faqpage__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
                </button>
              </h3>
              <div
                :id="`faq-panel-${g.id}-${i}`"
                class="faqpage__panel"
                :class="{ 'faqpage__panel--open': openSet.has(`${g.id}-${i}`) }"
                role="region"
                :aria-labelledby="`faq-trigger-${g.id}-${i}`"
              >
                <div class="faqpage__panel-inner">
                  <p class="faqpage__a">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--section-tight);
}

.page-hero__title {
  max-width: 20ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.page-hero__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.faqpage {
  background: var(--color-paper);
  padding-bottom: var(--section-open);
}

.faqpage__grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

/* ---- Jump nav ---- */
.faqpage__nav-label {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  color: var(--color-ink-3);
}

.faqpage__nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.faqpage__nav-link {
  display: inline-flex;
  align-items: center;
  min-height: var(--tap-min);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: underline;
  text-decoration-color: var(--color-rule-strong);
  text-underline-offset: 3px;
}

.faqpage__nav-link:hover {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}

.faqpage__nav-call {
  margin-top: var(--space-5);
  font-size: var(--text-body);
  color: var(--color-ink-2);
}

/* ---- Theme sections ---- */
.faqpage__theme {
  padding-top: var(--space-10);
  scroll-margin-top: var(--space-10);
}

.faqpage__theme:first-child {
  padding-top: 0;
}

.faqpage__theme + .faqpage__theme {
  border-top: var(--border-hair);
}

.faqpage__theme-title {
  font-size: var(--text-h3);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.faqpage__list {
  margin-top: var(--space-3);
}

/* ---- Accordion rows (same technique as the homepage FaqSection) ---- */
.faqpage__item {
  border-bottom: var(--border-hair);
}

.faqpage__item-heading {
  margin: 0;
}

.faqpage__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  min-height: 56px;
  padding: var(--space-4) 0;
  background: transparent;
  border: 0;
  text-align: left;
  font-family: var(--font-body);
  cursor: pointer;
}

.faqpage__q {
  font-size: var(--text-body-lg);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.faqpage__trigger:hover .faqpage__q {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.faqpage__icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

.faqpage__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-base) var(--ease-out);
}

.faqpage__panel--open {
  grid-template-rows: 1fr;
}

.faqpage__panel-inner {
  overflow: hidden;
  min-height: 0;
}

.faqpage__a {
  max-width: var(--measure);
  padding-bottom: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

@media (min-width: 1024px) {
  .faqpage__grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .faqpage__nav {
    grid-column: 1 / span 3;
    position: sticky;
    top: calc(64px + var(--space-8));
  }

  .faqpage__nav-list {
    flex-direction: column;
  }

  .faqpage__content {
    grid-column: 5 / -1;
  }
}
</style>
