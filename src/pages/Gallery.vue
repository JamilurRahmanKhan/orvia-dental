<script setup>
import { onMounted } from 'vue'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import { practice } from '../config/practice.js'

onMounted(() => {
  document.title = 'Smile Gallery — Before & After | Orvia Dental, Austin TX'
})

function dentistFor(slug) {
  return practice.team.find((t) => t.slug === slug)
}
</script>

<template>
  <section class="page-hero" aria-labelledby="gallery-title">
    <div class="container">
      <h1 id="gallery-title" class="page-hero__title">Smile gallery</h1>
      <p class="page-hero__lede">
        Real results from Orvia patients, shown as an honest before and after — drag the slider,
        or tab to it and use the arrow keys.
      </p>
    </div>
  </section>

  <section class="cases" aria-label="Before and after cases">
    <div class="container">
      <ul class="cases__list">
        <li v-for="c in practice.cases" :key="c.id" class="case card card--tap">
          <div class="case__viewer">
            <BeforeAfterSlider
              :before="c.before"
              :after="c.after"
              :alt-before="c.altBefore"
              :alt-after="c.altAfter"
              :label="c.label"
            />
          </div>

          <div class="case__notes">
            <h2 class="case__title">{{ c.label }}</h2>

            <dl class="chart">
              <div class="chart__row">
                <dt>Visits</dt>
                <dd class="figure">{{ c.visits }}</dd>
              </div>
              <div class="chart__row">
                <dt>Timeframe</dt>
                <dd class="figure">{{ c.timeframe }}</dd>
              </div>
              <div class="chart__row">
                <dt>Dentist</dt>
                <dd>
                  <a class="link-arrow" :href="`/about/team/${c.dentist}/`">
                    {{ dentistFor(c.dentist)?.name }}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </li>
      </ul>

      <p class="cases__consent">
        Our own patients, shown with written permission.
        <template v-if="practice.demo"> Sample cases for demo.</template>
        Individual results vary.
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--section-tight);
}

.page-hero__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.page-hero__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.cases {
  background: var(--color-sunk);
  padding-block: var(--space-4) var(--section-base);
}

.cases__list {
  display: grid;
  gap: var(--space-16);
  margin: 0;
  padding: 0;
  list-style: none;
}

.case {
  display: grid;
  gap: var(--space-6);
  padding: var(--space-6);
}

.case__viewer {
  max-width: 520px;
}

.case__title {
  font-size: var(--text-h3);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.chart {
  margin: var(--space-6) 0 0;
  max-width: 360px;
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

.cases__consent {
  margin-top: var(--space-16);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

@media (min-width: 768px) {
  .case {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .case__viewer {
    grid-column: 1 / span 7;
    max-width: none;
  }

  .case__notes {
    grid-column: 8 / -1;
    padding-top: var(--space-2);
  }
}

@media (min-width: 1024px) {
  .cases__list {
    gap: var(--space-24);
  }

  .case {
    padding: var(--space-8);
  }
}
</style>
