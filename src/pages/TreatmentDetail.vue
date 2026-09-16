<script setup>
import { computed, reactive, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, ArrowRight, Plus, Minus } from 'lucide-vue-next'
import EstimateSlip from '../components/EstimateSlip.vue'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'
import { treatmentContent } from '../config/treatmentContent.js'
import { costContent } from '../config/costContent.js'

const route = useRoute()

const slug = computed(() => route.params.slug)
const treatment = computed(() => practice.treatments.find((t) => t.slug === slug.value))
const content = computed(() => treatmentContent[slug.value])
const found = computed(() => Boolean(treatment.value && content.value))
const hasCostPage = computed(() => Boolean(costContent[slug.value]))

function firstSentence(text) {
  if (!text) return ''
  const match = text.match(/^[^.!?]*[.!?]/)
  return match ? match[0].trim() : text
}

const summary = computed(() => {
  if (!found.value) return ''
  return firstSentence(content.value.whatIsIt) || treatment.value.detail
})

const panelRows = computed(() => {
  if (!found.value) return []
  return [{ name: 'Typical range', detail: treatment.value.detail, price: treatment.value.price }]
})

const related = computed(() => {
  if (!treatment.value) return []
  const others = practice.treatments.filter((t) => t.slug !== slug.value)
  return others.slice(0, 3)
})

// Local accordion state, keyed per-slug so state resets when navigating between treatments.
const openSet = reactive(new Set())
watch(slug, () => openSet.clear())

function toggleFaq(i) {
  if (openSet.has(i)) openSet.delete(i)
  else openSet.add(i)
}

function setMetaDescription(text) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', text)
}

function updateMeta() {
  if (found.value) {
    document.title = `${treatment.value.name} in Austin, TX | Cost & What to Expect | Orvia Dental`
    setMetaDescription(
      `${summary.value} Typical price ${treatment.value.price} at Orvia Dental in Austin, TX.`.slice(0, 160)
    )
  } else {
    document.title = 'Treatment not found | Orvia Dental'
    setMetaDescription("That treatment isn't listed here. See the full price list at Orvia Dental in Austin, TX.")
  }
}

onMounted(updateMeta)
watch([slug, found], updateMeta)
</script>

<template>
  <template v-if="found">
    <section class="td-hero" aria-labelledby="td-title">
      <div class="container td-hero__grid">
        <div class="td-hero__copy">
          <a class="link-arrow td-hero__back" href="/treatments/">
            <ArrowRight class="td-hero__back-icon" :size="16" :stroke-width="1.75" aria-hidden="true" />
            All treatments
          </a>

          <h1 id="td-title" class="td-hero__title">{{ treatment.name }} in {{ practice.city }}</h1>
          <p class="td-hero__lede">{{ summary }}</p>

          <div class="td-hero__actions">
            <a class="btn btn--primary btn--lg" href="/book/">Book appointment</a>
            <a class="btn btn--secondary btn--lg" :href="practice.phoneHref">
              <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
              Call <span class="figure">{{ practice.phoneDisplay }}</span>
            </a>
          </div>
        </div>

        <div class="td-hero__panel">
          <EstimateSlip variant="compact" :title="treatment.name" :rows="panelRows" />
        </div>
      </div>
    </section>

    <section class="td-facts" aria-label="Quick facts">
      <div class="container">
        <ul class="td-facts__ledger">
          <li class="fact">
            <p class="fact__label">Visits</p>
            <p class="fact__value figure">{{ content.quickFacts.visits }}</p>
          </li>
          <li class="fact">
            <p class="fact__label">Recovery</p>
            <p class="fact__value">{{ content.quickFacts.recovery }}</p>
          </li>
          <li class="fact">
            <p class="fact__label">Insurance</p>
            <p class="fact__value">{{ content.quickFacts.covers }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="td-section" aria-labelledby="td-what-title">
      <div class="container td-section__prose">
        <h2 id="td-what-title" class="td-section__heading">What it is</h2>
        <p class="td-section__body">{{ content.whatIsIt }}</p>
      </div>
    </section>

    <section class="td-section td-section--tight" aria-labelledby="td-who-title">
      <div class="container td-section__prose">
        <h2 id="td-who-title" class="td-section__heading">Who it's for</h2>
        <ul class="plain-list">
          <li v-for="item in content.whoItsFor" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="td-section td-section--sunk" aria-labelledby="td-like-title">
      <div class="container td-section__prose">
        <h2 id="td-like-title" class="td-section__heading">What it's like</h2>
        <ol class="steps">
          <li v-for="(step, i) in content.whatItsLike" :key="step" class="steps__item">
            <span class="steps__num figure">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="steps__text">{{ step }}</span>
          </li>
        </ol>
      </div>
    </section>

    <section class="td-section td-section--tight" aria-labelledby="td-cost-title">
      <div class="container td-section__prose">
        <h2 id="td-cost-title" class="td-section__heading">Cost</h2>
        <div class="cost-card">
          <div class="cost-card__row">
            <span class="cost-card__name">{{ treatment.name }}</span>
            <span class="cost-card__leader" aria-hidden="true"></span>
            <span class="cost-card__figure figure">{{ treatment.price }}</span>
          </div>
          <p class="cost-card__detail">{{ treatment.detail }}</p>
          <p class="cost-card__factors">{{ content.costFactors }}</p>
          <a v-if="hasCostPage" class="link-arrow" :href="`/treatments/${slug}/cost/`">
            See the full cost breakdown
            <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section class="td-section" aria-labelledby="td-insurance-title">
      <div class="container td-section__prose">
        <h2 id="td-insurance-title" class="td-section__heading">Insurance</h2>
        <p class="td-section__body">{{ treatment.insured }}.</p>
        <a class="link-arrow" href="/insurance-and-financing/">
          Check your plan
          <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="td-section td-section--sunk td-section--tight" aria-labelledby="td-alt-title">
      <div class="container td-section__prose">
        <h2 id="td-alt-title" class="td-section__heading">Alternatives</h2>
        <p class="td-section__body">{{ content.alternatives }}</p>
      </div>
    </section>

    <section class="td-section td-section--tight" aria-labelledby="td-aftercare-title">
      <div class="container td-section__prose">
        <h2 id="td-aftercare-title" class="td-section__heading">Aftercare</h2>
        <p class="td-section__body">{{ content.aftercare }}</p>
      </div>
    </section>

    <section class="td-section" aria-labelledby="td-faq-title">
      <div class="container td-section__prose">
        <h2 id="td-faq-title" class="td-section__heading">Questions about {{ treatment.name.toLowerCase() }}</h2>
        <div class="faq-list">
          <div v-for="(item, i) in content.faqs" :key="item.q" class="faq-item">
            <h3 class="faq-item__heading">
              <button
                :id="`td-faq-trigger-${i}`"
                type="button"
                class="faq-item__trigger"
                :aria-expanded="openSet.has(i)"
                :aria-controls="`td-faq-panel-${i}`"
                @click="toggleFaq(i)"
              >
                <span class="faq-item__q">{{ item.q }}</span>
                <Plus v-if="!openSet.has(i)" :size="20" :stroke-width="1.75" class="faq-item__icon" aria-hidden="true" />
                <Minus v-else :size="20" :stroke-width="1.75" class="faq-item__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              :id="`td-faq-panel-${i}`"
              class="faq-item__panel"
              :class="{ 'faq-item__panel--open': openSet.has(i) }"
              role="region"
              :aria-labelledby="`td-faq-trigger-${i}`"
            >
              <div class="faq-item__panel-inner">
                <p class="faq-item__a">{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="td-related" aria-labelledby="td-related-title">
      <div class="container">
        <h2 id="td-related-title" class="td-section__heading">Other treatments</h2>
        <ul class="related-list">
          <li v-for="item in related" :key="item.slug">
            <a class="related-row" :href="`/treatments/${item.slug}/`">
              <span class="related-row__name">{{ item.name }}</span>
              <span class="related-row__leader" aria-hidden="true"></span>
              <span class="related-row__figure figure">{{ item.price }}</span>
              <ArrowRight class="related-row__arrow" :size="18" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <FinalCta />
  </template>

  <template v-else>
    <section class="td-notfound">
      <div class="container td-notfound__inner">
        <h1 class="td-notfound__title">That treatment isn't listed here.</h1>
        <p class="td-notfound__body">
          It may have moved, or the link might be off. See the full price list for everything
          {{ practice.name }} offers.
        </p>
        <a class="link-arrow" href="/treatments/">
          All treatments
          <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </section>
  </template>
</template>

<style scoped>
/* ---- Hero ---- */
.td-hero {
  padding-block: var(--space-16) var(--section-base);
}

.td-hero__grid {
  display: grid;
  gap: var(--space-8);
}

.td-hero__back {
  display: inline-flex;
}

.td-hero__back-icon {
  transform: scaleX(-1);
}

.td-hero__title {
  margin-top: var(--space-5);
  max-width: 20ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.td-hero__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.td-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.td-hero__panel {
  max-width: 380px;
}

/* Long price ranges ("$3,200–$4,800") can outrun the compact slip's big-figure
   treatment; let the figure shrink and wrap instead of overflowing the card. */
.td-hero__panel :deep(.row__figure) {
  font-size: clamp(1.5rem, 4vw + 0.5rem, var(--text-figure-xl));
  white-space: normal;
  overflow-wrap: break-word;
}

@media (max-width: 639px) {
  .td-hero__actions {
    flex-direction: column;
  }

  .td-hero__actions .btn {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .td-hero__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .td-hero__copy {
    grid-column: 1 / span 7;
  }

  .td-hero__panel {
    grid-column: 8 / -1;
    max-width: none;
    padding-top: var(--space-4);
  }
}

/* ---- Quick facts ledger ---- */
.td-facts {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.td-facts__ledger {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
  border-block: var(--border-hair);
}

.fact {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) 0;
  border-bottom: var(--border-hair);
}

.fact:last-child {
  border-bottom: 0;
}

.fact__label {
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.fact__value {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

@media (min-width: 768px) {
  .td-facts__ledger {
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 0;
  }

  .fact {
    padding: 0 var(--space-6);
    border-bottom: 0;
  }

  .fact:not(:first-child) {
    border-left: var(--border-hair);
  }
}

/* ---- Generic prose sections ---- */
.td-section {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.td-section--tight {
  padding-block: var(--section-tight);
}

.td-section--sunk {
  background: var(--color-sunk);
}

.td-section__prose {
  max-width: var(--measure);
  margin-inline: 0;
}

.td-section__heading {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.td-section__body {
  margin-top: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Who it's for ---- */
.plain-list {
  margin: var(--space-5) 0 0;
  padding-left: 1.25em;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.plain-list li {
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink);
}

.plain-list li::marker {
  color: var(--color-accent);
}

/* ---- What it's like: numbered sequence ---- */
.steps {
  margin: var(--space-6) 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.steps__item {
  display: flex;
  gap: var(--space-4);
}

.steps__num {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink-3);
  padding-top: 2px;
}

.steps__text {
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink);
}

/* ---- Cost card ---- */
.cost-card {
  margin-top: var(--space-5);
  padding: var(--space-6);
  background: var(--color-slip);
  border: var(--border-hair);
  border-radius: var(--radius-paper);
}

.cost-card__row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.cost-card__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
}

.cost-card__leader {
  flex: 1;
  min-width: var(--space-6);
  border-bottom: var(--border-leader);
  transform: translateY(-4px);
}

.cost-card__figure {
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  white-space: nowrap;
}

.cost-card__detail {
  margin-top: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.cost-card__factors {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: var(--border-hair);
  font-size: var(--text-small);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.cost-card > .link-arrow {
  margin-top: var(--space-4);
}

/* ---- FAQ accordion ---- */
.faq-list {
  margin-top: var(--space-6);
}

.faq-item {
  border-bottom: var(--border-hair);
}

.faq-item:first-child {
  border-top: var(--border-hair);
}

.faq-item__heading {
  margin: 0;
}

.faq-item__trigger {
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

.faq-item__q {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.faq-item__trigger:hover .faq-item__q {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.faq-item__icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

.faq-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-base) var(--ease-out);
}

.faq-item__panel--open {
  grid-template-rows: 1fr;
}

.faq-item__panel-inner {
  overflow: hidden;
  min-height: 0;
}

.faq-item__a {
  max-width: var(--measure);
  padding-bottom: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Related treatments ---- */
.td-related {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.related-list {
  margin: var(--space-6) 0 0;
  padding: 0;
  list-style: none;
}

.related-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  padding: var(--space-5) var(--space-3);
  margin-inline: calc(-1 * var(--space-3));
  border-top: var(--border-hair);
  color: inherit;
  text-decoration: none;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.related-list li:last-child .related-row {
  border-bottom: var(--border-hair);
}

.related-row:hover,
.related-row:focus-visible {
  background: var(--color-paper);
}

.related-row__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
}

.related-row__leader {
  flex: 1;
  min-width: var(--space-6);
  border-bottom: var(--border-leader);
  transform: translateY(-4px);
}

.related-row__figure {
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  white-space: nowrap;
}

.related-row__arrow {
  flex-shrink: 0;
  color: var(--color-accent);
  opacity: 0;
  transition: opacity var(--dur-fast) var(--ease-out);
}

.related-row:hover .related-row__arrow,
.related-row:focus-visible .related-row__arrow {
  opacity: 1;
}

/* ---- Not found ---- */
.td-notfound {
  background: var(--color-paper);
  padding-block: var(--section-open);
}

.td-notfound__inner {
  max-width: 48ch;
  margin-inline: 0;
}

.td-notfound__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.td-notfound__body {
  margin-top: var(--space-4);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.td-notfound__inner > .link-arrow {
  margin-top: var(--space-6);
}
</style>
