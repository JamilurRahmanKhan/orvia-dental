<script setup>
import { computed, onMounted } from 'vue'
import { ArrowRight, Phone } from 'lucide-vue-next'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

const medicaidPlans = computed(() =>
  practice.plans.filter((p) => /medicaid|chip/i.test(p.name))
)

onMounted(() => {
  document.title = 'Texas Medicaid & CHIP Dentist in Austin | Orvia Dental'
})
</script>

<template>
  <article>
    <section class="intro" aria-labelledby="medicaid-title">
      <div class="container intro__inner">
        <h1 id="medicaid-title" class="intro__title">Medicaid &amp; CHIP dental coverage</h1>
        <p class="intro__lede">
          We're in network with Texas Medicaid and CHIP dental plans. Here's what's typically
          covered, and how to check your specific benefits before you come in.
        </p>
      </div>
    </section>

    <section class="plans" aria-labelledby="plans-title">
      <div class="container plans__layout">
        <h2 id="plans-title" class="plans__title">Plans we accept</h2>
        <ul class="plans__list">
          <li v-for="plan in medicaidPlans" :key="plan.name" class="plans__row">
            <span class="plans__name">{{ plan.name }}</span>
            <span class="plans__status">In network</span>
          </li>
        </ul>
        <p v-if="practice.demo" class="plans__caption">Sample plan list for demo.</p>
      </div>
    </section>

    <section class="coverage" aria-labelledby="coverage-title">
      <div class="container">
        <h2 id="coverage-title" class="coverage__title">What's typically covered</h2>
        <div class="coverage__grid">
          <div class="coverage__item card">
            <p class="coverage__statement">Children under 21</p>
            <p class="coverage__body">
              Texas Medicaid covers dental care for children under 21, including checkups,
              cleanings, X-rays, fillings, and other basic treatment. CHIP dental works the same
              way for families whose income is a little above the Medicaid line.
            </p>
          </div>
          <div class="coverage__item card">
            <p class="coverage__statement">Adults</p>
            <p class="coverage__body">
              Adult coverage under Texas Medicaid is limited — mainly emergency care and some
              other services. We'll check your specific plan and tell you exactly what's covered,
              and what isn't, before we start anything.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="verify" aria-labelledby="verify-title">
      <div class="container verify__inner">
        <h2 id="verify-title" class="verify__title">How to check your coverage</h2>
        <p class="verify__body">
          Search your plan on our
          <a class="link-arrow" href="/insurance-and-financing/#verify">insurance &amp; financing page</a>,
          or just call us with your Medicaid or CHIP ID and we'll verify your benefits before your
          visit.
        </p>
        <div class="verify__actions">
          <a class="btn btn--primary" :href="practice.phoneHref">
            <Phone :size="18" :stroke-width="1.75" aria-hidden="true" />
            Call <span class="figure">{{ practice.phoneDisplay }}</span>
          </a>
        </div>
        <p class="verify__note">
          Se habla español. Our front desk can walk you and your family through Medicaid or CHIP
          paperwork in Spanish or English.
        </p>
      </div>
    </section>

    <FinalCta />
  </article>
</template>

<style scoped>
.intro {
  background: var(--color-paper);
  padding-block: var(--space-16) var(--section-tight);
}

.intro__inner {
  max-width: 60ch;
  margin-inline: 0;
}

.intro__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.intro__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

/* ---- Accepted plans ---- */
.plans {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.plans__title {
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

.plans__list {
  margin: var(--space-6) 0 0;
  padding: 0;
  list-style: none;
  max-width: 60ch;
}

.plans__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-bottom: var(--border-hair);
}

.plans__row:first-child {
  border-top: var(--border-hair);
}

.plans__name {
  font-size: var(--text-body);
  color: var(--color-ink);
}

.plans__status {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-accent);
}

.plans__caption {
  margin-top: var(--space-4);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

/* ---- Coverage ---- */
.coverage {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.coverage__title {
  max-width: 20ch;
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.coverage__grid {
  display: grid;
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.coverage__item {
  padding: var(--space-6);
}

.coverage__statement {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.coverage__body {
  margin-top: var(--space-3);
  max-width: var(--measure-narrow);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Verify ---- */
.verify {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.verify__inner {
  max-width: 60ch;
  margin-inline: 0;
}

.verify__title {
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

.verify__body {
  margin-top: var(--space-4);
  max-width: var(--measure-narrow);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.verify__actions {
  margin-top: var(--space-6);
}

.verify__note {
  margin-top: var(--space-6);
  padding-top: var(--space-5);
  border-top: var(--border-hair);
  max-width: var(--measure-narrow);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

@media (min-width: 768px) {
  .coverage__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gap);
  }
}
</style>
