<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'
import { costContent } from '../config/costContent.js'

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug)
const treatment = computed(() => practice.treatments.find((t) => t.slug === slug.value))
const cost = computed(() => costContent[slug.value])

// A cost page only exists for treatments with a cost breakdown; anything else bounces
// back to the treatment page itself.
function redirectIfMissing() {
  if (!cost.value) {
    router.replace(`/treatments/${slug.value}/`)
  }
}

onMounted(redirectIfMissing)
watch(slug, redirectIfMissing)

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
  if (cost.value) {
    document.title = `${cost.value.title} | Orvia Dental`
    setMetaDescription(cost.value.intro.slice(0, 160))
  }
}

onMounted(updateMeta)
watch(cost, updateMeta)
</script>

<template>
  <template v-if="cost && treatment">
    <section class="tc-hero" aria-labelledby="tc-title">
      <div class="container tc-hero__inner">
        <a class="link-arrow tc-hero__back" :href="`/treatments/${slug}/`">
          <ArrowRight class="tc-hero__back-icon" :size="16" :stroke-width="1.75" aria-hidden="true" />
          Back to {{ treatment.name.toLowerCase() }}
        </a>
        <h1 id="tc-title" class="tc-hero__title">{{ cost.title }}</h1>
        <p class="tc-hero__intro">{{ cost.intro }}</p>
      </div>
    </section>

    <section class="tc-table-section" aria-labelledby="tc-breakdown-title">
      <div class="container">
        <h2 id="tc-breakdown-title" class="tc-section__heading">Full breakdown</h2>
        <div class="tc-table-wrap">
          <table class="tc-table">
            <caption class="visually-hidden">Cost breakdown for {{ treatment.name }}</caption>
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in cost.breakdown" :key="row.item">
                <td data-label="Item" class="tc-table__item">{{ row.item }}</td>
                <td data-label="Price" class="tc-table__price figure">{{ row.price }}</td>
                <td data-label="Note" class="tc-table__note">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="tc-section" aria-labelledby="tc-changes-title">
      <div class="container tc-section__prose">
        <h2 id="tc-changes-title" class="tc-section__heading">What changes the price</h2>
        <ul class="plain-list">
          <li v-for="item in cost.whatChangesPrice" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="tc-section tc-section--sunk tc-section--tight" aria-labelledby="tc-financing-title">
      <div class="container tc-section__prose">
        <h2 id="tc-financing-title" class="tc-section__heading">Financing</h2>
        <p class="tc-section__body">{{ cost.financing }}</p>
      </div>
    </section>

    <section class="tc-section tc-section--tight" aria-labelledby="tc-insurance-title">
      <div class="container tc-section__prose">
        <h2 id="tc-insurance-title" class="tc-section__heading">Insurance</h2>
        <p class="tc-section__body">{{ cost.insurance }}</p>
        <a class="link-arrow" href="/insurance-and-financing/">
          Check your plan
          <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="tc-back">
      <div class="container">
        <a class="link-arrow" :href="`/treatments/${slug}/`">
          <ArrowRight class="tc-hero__back-icon" :size="18" :stroke-width="1.75" aria-hidden="true" />
          Back to {{ treatment.name.toLowerCase() }}
        </a>
      </div>
    </section>

    <FinalCta />
  </template>
</template>

<style scoped>
.tc-hero {
  background: var(--color-paper);
  padding-block: var(--space-16) var(--section-base);
}

.tc-hero__inner {
  max-width: var(--measure);
  margin-inline: 0;
}

.tc-hero__back {
  display: inline-flex;
}

.tc-hero__back-icon {
  transform: scaleX(-1);
}

.tc-hero__title {
  margin-top: var(--space-5);
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.tc-hero__intro {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

/* ---- Breakdown table ---- */
.tc-table-section {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.tc-section__heading {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.tc-table-wrap {
  margin-top: var(--space-6);
  overflow-x: auto;
}

.tc-table {
  width: 100%;
  border-collapse: collapse;
}

.tc-table thead th {
  padding: var(--space-3) var(--space-3) var(--space-3) 0;
  border-bottom: var(--border-control);
  text-align: left;
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.tc-table thead th:nth-child(2) {
  text-align: right;
}

.tc-table tbody tr {
  border-bottom: var(--border-leader);
}

.tc-table tbody tr:last-child {
  border-bottom: var(--border-control);
}

.tc-table td {
  padding: var(--space-4) var(--space-3) var(--space-4) 0;
  vertical-align: top;
}

.tc-table__item {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  white-space: nowrap;
}

.tc-table__price {
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  text-align: right;
  white-space: nowrap;
}

.tc-table__note {
  font-size: var(--text-small);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Generic prose ---- */
.tc-section {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.tc-section--tight {
  padding-block: var(--section-tight);
}

.tc-section--sunk {
  background: var(--color-sunk);
}

.tc-section__prose {
  max-width: var(--measure);
  margin-inline: 0;
}

.tc-section__body {
  margin-top: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

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

.tc-back {
  background: var(--color-paper);
  padding-bottom: var(--section-tight);
}

/* ---- Mobile: table rows become stacked cards ---- */
@media (max-width: 639px) {
  .tc-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }

  .tc-table,
  .tc-table tbody,
  .tc-table tr,
  .tc-table td {
    display: block;
    width: 100%;
  }

  .tc-table tr {
    padding-block: var(--space-4);
  }

  .tc-table td {
    padding: var(--space-1) 0;
  }

  .tc-table__price {
    text-align: left;
  }

  .tc-table td[data-label]::before {
    content: attr(data-label);
    display: block;
    font-size: var(--text-caption);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-3);
    margin-bottom: 2px;
  }
}
</style>
