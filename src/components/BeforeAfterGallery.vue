<script setup>
import { ref, computed } from 'vue'
import BeforeAfterSlider from './BeforeAfterSlider.vue'
import { practice } from '../config/practice.js'

const activeId = ref(practice.cases[0].id)
const active = computed(() => practice.cases.find((c) => c.id === activeId.value))

function dentistFor(slug) {
  return practice.team.find((t) => t.slug === slug)
}

function onTabKeydown(e, index) {
  const count = practice.cases.length
  let next = null
  if (e.key === 'ArrowRight') next = (index + 1) % count
  else if (e.key === 'ArrowLeft') next = (index - 1 + count) % count
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = count - 1
  if (next !== null) {
    e.preventDefault()
    activeId.value = practice.cases[next].id
    e.currentTarget.parentElement.children[next]?.focus()
  }
}
</script>

<template>
  <section id="results" class="results" aria-labelledby="results-title">
    <div class="container results__grid">
      <div class="results__viewer">
        <BeforeAfterSlider
          :key="active.id"
          :before="active.before"
          :after="active.after"
          :alt-before="active.altBefore"
          :alt-after="active.altAfter"
          :label="active.label"
        />

        <div role="tablist" aria-label="Cases" class="tabs">
          <button
            v-for="(c, i) in practice.cases"
            :key="c.id"
            role="tab"
            type="button"
            class="tabs__tab"
            :aria-selected="c.id === activeId"
            :tabindex="c.id === activeId ? 0 : -1"
            @click="activeId = c.id"
            @keydown="onTabKeydown($event, i)"
          >
            {{ c.label }} · {{ c.visits }}
          </button>
        </div>
      </div>

      <div class="results__notes" role="tabpanel">
        <h2 id="results-title" class="results__title">See what's possible</h2>

        <dl class="chart">
          <div class="chart__row">
            <dt>Treatment</dt>
            <dd>{{ active.label }}</dd>
          </div>
          <div class="chart__row">
            <dt>Visits</dt>
            <dd class="figure">{{ active.visits }}</dd>
          </div>
          <div class="chart__row">
            <dt>Timeframe</dt>
            <dd class="figure">{{ active.timeframe }}</dd>
          </div>
          <div class="chart__row">
            <dt>Dentist</dt>
            <dd>
              <a class="link-arrow" :href="`/about/team/${active.dentist}/`">
                {{ dentistFor(active.dentist)?.name }}
              </a>
            </dd>
          </div>
        </dl>

        <p class="results__consent">
          Our own patients, shared with written permission.
          <template v-if="practice.demo"> Sample cases for demo.</template>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.results {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.results__grid {
  display: grid;
  gap: var(--space-8);
}

.results__viewer {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.tabs {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
}

.tabs__tab {
  flex-shrink: 0;
  min-height: var(--tap-min);
  padding: 0 var(--space-4);
  border: var(--border-hair);
  background: var(--color-slip);
  color: var(--color-ink-2);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  cursor: pointer;
}

.tabs__tab[aria-selected='true'] {
  border-color: var(--color-ink);
  color: var(--color-ink);
  font-weight: var(--weight-semibold);
}

.tabs__tab:focus-visible {
  outline: var(--focus-ring);
  outline-offset: -2px;
}

.results__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.chart {
  margin: var(--space-8) 0 0;
}

.chart__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-bottom: var(--border-hair);
}

.chart__row:first-child {
  border-top: var(--border-hair);
}

.chart__row dt {
  font-size: var(--text-small);
  color: var(--color-ink-3);
}

.chart__row dd {
  margin: 0;
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-align: right;
}

.results__consent {
  margin-top: var(--space-6);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

@media (min-width: 1024px) {
  .results__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .results__viewer {
    grid-column: 1 / span 5;
    /* The source photos are portrait (698×894) — cap width so a tall crop never
       dominates the section the way a landscape image would at this column width. */
    max-width: 420px;
  }

  .results__notes {
    grid-column: 6 / -1;
    padding-top: var(--space-2);
  }
}
</style>
