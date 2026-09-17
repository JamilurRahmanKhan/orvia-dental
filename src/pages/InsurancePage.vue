<script setup>
import { onMounted } from 'vue'
import { ArrowRight, Phone } from 'lucide-vue-next'
import InsuranceSection from '../components/InsuranceSection.vue'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

onMounted(() => {
  document.title = 'Dental Insurance & Payment Options | Orvia Dental, Austin TX'
})
</script>

<template>
  <article>
    <section class="intro" aria-labelledby="insurance-page-title">
      <div class="container intro__inner">
        <h1 id="insurance-page-title" class="intro__title">Insurance &amp; financing</h1>
        <p class="intro__lede">
          Search your plan below, see what payment options we take, and read how we price
          treatment before you ever sit in the chair.
        </p>
      </div>
    </section>

    <InsuranceSection />

    <section class="methods" aria-labelledby="methods-title">
      <div class="container">
        <h2 id="methods-title" class="visually-hidden">Payment methods and financing</h2>
        <div class="methods__grid">
          <div class="methods__col card">
            <h3 class="methods__heading">How you can pay</h3>
            <dl class="method-list">
              <div class="method-row">
                <dt class="method-row__term">Cards</dt>
                <dd class="method-row__desc">Visa, Mastercard, American Express, and Discover.</dd>
              </div>
              <div class="method-row">
                <dt class="method-row__term">HSA &amp; FSA</dt>
                <dd class="method-row__desc">Swipe your HSA or FSA card the same way as any debit card.</dd>
              </div>
              <div class="method-row">
                <dt class="method-row__term">Cash &amp; check</dt>
                <dd class="method-row__desc">Also fine at the front desk, no surcharge either way.</dd>
              </div>
            </dl>
          </div>

          <div class="methods__col card">
            <h3 class="methods__heading">Financing, if you need it</h3>
            <dl class="method-list">
              <div class="method-row">
                <dt class="method-row__term">CareCredit</dt>
                <dd class="method-row__desc">
                  A healthcare credit card that spreads larger treatment plans into fixed monthly payments.
                </dd>
              </div>
              <div class="method-row">
                <dt class="method-row__term">Cherry &amp; Sunbit</dt>
                <dd class="method-row__desc">
                  A quick approval that won't affect your credit score, done at the front desk in about
                  a minute — a good option if you don't qualify for CareCredit, or just want to compare.
                </dd>
              </div>
            </dl>
            <p class="methods__note">We'll show you real numbers before you commit to anything.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="philosophy" aria-labelledby="philosophy-title">
      <div class="container philosophy__inner">
        <h2 id="philosophy-title" class="philosophy__eyebrow">Our pricing philosophy</h2>
        <p class="philosophy__statement">
          You get a written estimate before treatment starts. Always.
        </p>
        <p class="philosophy__body">
          The ranges on our price list are a starting point, not a quote. Your exam sets the real
          number, and nothing begins until you've seen the cost in writing and agreed to it.
          Second opinions are welcome, always.
        </p>

        <div class="philosophy__links">
          <a class="ledger-row" href="/insurance-and-financing/medicaid/">
            <span class="ledger-row__name">Medicaid or CHIP? See what's covered</span>
            <span class="ledger-row__leader" aria-hidden="true"></span>
            <ArrowRight class="ledger-row__arrow" :size="18" :stroke-width="1.75" aria-hidden="true" />
          </a>
          <a class="ledger-row" href="/membership-plan/">
            <span class="ledger-row__name">No insurance? Our membership plan</span>
            <span class="ledger-row__leader" aria-hidden="true"></span>
            <span class="ledger-row__figure figure">{{ practice.membership.price }}</span>
            <ArrowRight class="ledger-row__arrow" :size="18" :stroke-width="1.75" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section id="verify" class="verify" aria-labelledby="verify-title">
      <div class="container verify__inner">
        <h2 id="verify-title" class="verify__title">Not sure if we take your plan?</h2>
        <p class="verify__body">
          Search your plan above, or call us and read us your card — we'll verify your benefits
          before your visit and tell you exactly what to expect, so there are no surprises at
          checkout.
        </p>
        <div class="verify__actions">
          <a class="btn btn--primary" :href="practice.phoneHref">
            <Phone :size="18" :stroke-width="1.75" aria-hidden="true" />
            Call <span class="figure">{{ practice.phoneDisplay }}</span>
          </a>
          <a class="link-arrow" href="/contact/">
            Send us your details
            <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
          </a>
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

/* ---- Payment / financing ---- */
.methods {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.methods__grid {
  display: grid;
  gap: var(--space-8);
}

.methods__col {
  padding: var(--space-6);
}

.methods__heading {
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

.method-list {
  margin: var(--space-6) 0 0;
}

.method-row {
  padding: var(--space-4) 0;
  border-bottom: var(--border-hair);
}

.method-row:first-child {
  border-top: var(--border-hair);
}

.method-row__term {
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.method-row__desc {
  margin: var(--space-1) 0 0;
  max-width: var(--measure-narrow);
  font-size: var(--text-small);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.methods__note {
  margin-top: var(--space-5);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

/* ---- Pricing philosophy ---- */
.philosophy {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.philosophy__inner {
  max-width: 72ch;
  margin-inline: 0;
}

.philosophy__eyebrow {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.philosophy__statement {
  margin-top: var(--space-4);
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.philosophy__body {
  margin-top: var(--space-5);
  max-width: var(--measure);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.philosophy__links {
  margin-top: var(--space-10);
}

.ledger-row {
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

.philosophy__links .ledger-row:last-child {
  border-bottom: var(--border-hair);
}

.ledger-row:hover,
.ledger-row:focus-visible {
  background: var(--color-sunk);
}

.ledger-row__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
}

.ledger-row__leader {
  flex: 1;
  min-width: var(--space-6);
  border-bottom: var(--border-leader);
  transform: translateY(-4px);
}

.ledger-row__figure {
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  white-space: nowrap;
}

.ledger-row__arrow {
  flex-shrink: 0;
  color: var(--color-accent);
  opacity: 0;
  transition: opacity var(--dur-fast) var(--ease-out);
}

.ledger-row:hover .ledger-row__arrow,
.ledger-row:focus-visible .ledger-row__arrow {
  opacity: 1;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5);
  margin-top: var(--space-6);
}

@media (min-width: 768px) {
  .methods__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gap);
  }
}

/* Ledger rows: drop the leader and stack name/figure when space is tight */
@media (max-width: 479px) {
  .ledger-row {
    flex-wrap: wrap;
    row-gap: var(--space-1);
  }

  .ledger-row__leader {
    display: none;
  }

  .ledger-row__figure {
    margin-left: auto;
  }
}
</style>
