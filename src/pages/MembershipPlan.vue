<script setup>
import { reactive, onMounted } from 'vue'
import { Plus, Minus, Phone } from 'lucide-vue-next'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

const faqs = [
  {
    q: 'Can I use this alongside insurance?',
    a: "No — the membership plan is built for patients who don't have dental insurance. If you're insured, ask us about your plan instead; you likely don't need both.",
  },
  {
    q: 'Is there a waiting period?',
    a: 'No. Sign up at your visit and your included cleaning can be booked right away.',
  },
]

const openSet = reactive(new Set())
function toggle(i) {
  if (openSet.has(i)) openSet.delete(i)
  else openSet.add(i)
}

onMounted(() => {
  document.title = 'No Insurance? Our Membership Plan | Orvia Dental, Austin TX'
})
</script>

<template>
  <article>
    <section class="intro" aria-labelledby="membership-title">
      <div class="container intro__inner">
        <h1 id="membership-title" class="intro__title">
          No insurance? Here's how we keep care affordable.
        </h1>
        <p class="intro__lede">
          About a quarter of adults in the U.S. don't have dental insurance. Our membership plan
          covers routine care and discounts everything else, so you know the cost before you ever
          pick up the phone — and there are no lectures if it's been a while.
        </p>
      </div>
    </section>

    <section class="how" aria-labelledby="how-title">
      <div class="container how__grid">
        <div class="how__main">
          <h2 id="how-title" class="how__title">How it works</h2>
          <ol class="how__list">
            <li class="how__item">
              <span class="how__num figure" aria-hidden="true">1</span>
              <div class="how__text">
                <p class="how__statement">Pay one annual fee</p>
                <p class="how__body">
                  <span class="figure">{{ practice.membership.price }}</span> for adults, billed once
                  a year. No monthly charges, no contracts to sign.
                </p>
              </div>
            </li>
            <li class="how__item">
              <span class="how__num figure" aria-hidden="true">2</span>
              <div class="how__text">
                <p class="how__statement">Routine care is included</p>
                <p class="how__body">
                  Two checkups, cleanings, and a set of X-rays each year, at no extra charge.
                </p>
              </div>
            </li>
            <li class="how__item">
              <span class="how__num figure" aria-hidden="true">3</span>
              <div class="how__text">
                <p class="how__statement">Everything else is discounted</p>
                <p class="how__body">
                  Fillings, crowns, and other treatment cost 15% less than our standard cash price.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <aside class="how__aside">
          <a class="plan-card card card--tap" href="/book/">
            <span class="plan-card__eyebrow">Adult membership plan</span>
            <span class="plan-card__figure figure">{{ practice.membership.price }}</span>
          </a>
          <p v-if="practice.demo" class="how__caption">Sample price for demo.</p>

          <div class="stat-card">
            <p class="stat-card__figure figure">15%</p>
            <p class="stat-card__label">off every other treatment, all year, once you're a member</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="savings" aria-labelledby="savings-title">
      <div class="container savings__inner">
        <h2 id="savings-title" class="savings__eyebrow">What you save</h2>
        <p class="savings__body">
          Here's a typical example: two cleanings and one filling normally run about $450 without
          insurance. On the membership plan, both cleanings are already included, and the filling
          is discounted 15% — bringing the total well below what an uninsured patient would
          otherwise pay.
        </p>
        <p v-if="practice.demo" class="savings__caption">Sample numbers for demo.</p>
      </div>
    </section>

    <section class="not-insurance" aria-labelledby="not-insurance-title">
      <div class="container not-insurance__inner">
        <h2 id="not-insurance-title" class="not-insurance__title">What this is not</h2>
        <p class="not-insurance__body">
          This is a discount and preventive-care membership, not dental insurance. It doesn't pay
          claims, it doesn't cover major work in full, and it isn't regulated as insurance in
          Texas. Think of it as a straightforward way to keep routine care cheap and predictable
          when you don't have a plan.
        </p>
      </div>
    </section>

    <section class="faq" aria-labelledby="faq-title">
      <div class="container faq__layout">
        <h2 id="faq-title" class="faq__heading">A couple of questions</h2>

        <div class="faq__list">
          <div v-for="(item, i) in faqs" :key="item.q" class="faq__item">
            <h3 class="faq__item-heading">
              <button
                :id="`membership-faq-trigger-${i}`"
                type="button"
                class="faq__trigger"
                :aria-expanded="openSet.has(i)"
                :aria-controls="`membership-faq-panel-${i}`"
                @click="toggle(i)"
              >
                <span class="faq__q">{{ item.q }}</span>
                <Plus v-if="!openSet.has(i)" class="faq__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
                <Minus v-else class="faq__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
              </button>
            </h3>
            <div
              :id="`membership-faq-panel-${i}`"
              class="faq__panel"
              :class="{ 'faq__panel--open': openSet.has(i) }"
              role="region"
              :aria-labelledby="`membership-faq-trigger-${i}`"
            >
              <div class="faq__panel-inner">
                <p class="faq__a">{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="faq__signup">
          <p class="faq__signup-lede">Ready to join? Sign up at your first visit — booking is free.</p>
          <div class="faq__signup-actions">
            <a class="btn btn--primary" href="/book/">Book appointment</a>
            <a class="btn btn--secondary" :href="practice.phoneHref">
              <Phone :size="18" :stroke-width="1.75" aria-hidden="true" />
              Call <span class="figure">{{ practice.phoneDisplay }}</span>
            </a>
          </div>
        </div>
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
  max-width: 64ch;
  margin-inline: 0;
}

.intro__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.intro__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

/* ---- How it works ---- */
.how {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.how__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.how__grid {
  display: grid;
  gap: var(--space-10);
}

.how__list {
  margin: var(--space-10) 0 0;
  padding: 0;
  list-style: none;
}

.how__item {
  display: flex;
  gap: var(--space-5);
  padding: var(--space-6) 0;
  border-top: var(--border-hair);
}

.how__list .how__item:last-child {
  border-bottom: var(--border-hair);
}

.how__num {
  flex-shrink: 0;
  font-size: var(--text-h3);
  font-weight: var(--weight-medium);
  color: var(--color-ink-3);
  min-width: 1.5ch;
}

.how__statement {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.how__body {
  margin-top: var(--space-2);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.how__aside {
  display: grid;
  align-content: start;
  gap: var(--space-4);
}

.plan-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-6);
  color: inherit;
  text-decoration: none;
}

.plan-card__eyebrow {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.plan-card__figure {
  margin-top: var(--space-2);
  font-size: var(--text-h2);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  white-space: nowrap;
}

.how__caption {
  margin-top: calc(-1 * var(--space-2));
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.stat-card {
  padding: var(--space-6);
  background: var(--color-accent-tint);
  border-radius: var(--radius-control);
}

.stat-card__figure {
  font-size: var(--text-figure-xl);
  font-weight: var(--weight-bold);
  color: var(--color-accent);
  line-height: 1;
}

.stat-card__label {
  margin-top: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-ink);
}

@media (min-width: 1024px) {
  .how__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .how__main {
    grid-column: 1 / span 7;
  }

  .how__aside {
    grid-column: 9 / -1;
    position: sticky;
    top: calc(var(--space-8) + 64px);
  }
}

/* ---- Savings ---- */
.savings {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.savings__inner {
  max-width: 68ch;
  margin-inline: 0;
}

.savings__eyebrow {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.savings__body {
  margin-top: var(--space-4);
  font-size: var(--text-h4);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.savings__caption {
  margin-top: var(--space-3);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

/* ---- Not insurance ---- */
.not-insurance {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.not-insurance__inner {
  max-width: 60ch;
  margin-inline: 0;
}

.not-insurance__title {
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

.not-insurance__body {
  margin-top: var(--space-4);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- FAQ + sign-up ---- */
.faq {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.faq__layout {
  max-width: 68ch;
  margin-inline: 0;
}

.faq__heading {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.faq__list {
  margin-top: var(--space-8);
}

.faq__item {
  border-bottom: var(--border-hair);
}

.faq__item:first-child {
  border-top: var(--border-hair);
}

.faq__item-heading {
  margin: 0;
}

.faq__trigger {
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

.faq__q {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.faq__trigger:hover .faq__q {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.faq__icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-base) var(--ease-out);
}

.faq__panel--open {
  grid-template-rows: 1fr;
}

.faq__panel-inner {
  overflow: hidden;
  min-height: 0;
}

.faq__a {
  max-width: var(--measure);
  padding-bottom: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.faq__signup {
  margin-top: var(--space-12);
  padding-top: var(--space-8);
  border-top: var(--border-hair);
}

.faq__signup-lede {
  font-size: var(--text-body-lg);
  color: var(--color-ink);
}

.faq__signup-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

@media (max-width: 639px) {
  .faq__signup-actions {
    flex-direction: column;
  }

  .faq__signup-actions .btn {
    width: 100%;
  }
}

/* Plan card: keep name and price wrapping cleanly when space is tight */
@media (max-width: 479px) {
  .plan-card {
    row-gap: var(--space-1);
  }

  .plan-card__figure {
    margin-left: auto;
  }
}
</style>
