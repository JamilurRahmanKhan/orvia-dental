<script setup>
import { Phone } from 'lucide-vue-next'
import EstimateSlip from '../components/EstimateSlip.vue'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'
</script>

<template>
  <section class="hub-intro" aria-labelledby="hub-title">
    <div class="container hub-intro__inner">
      <h1 id="hub-title" class="hub-intro__title">Every treatment we offer, and what it costs.</h1>
      <p class="hub-intro__lede">
        Ranges, not surprises. Switch to the insured view, or open any row below for what it's
        like, how long it takes, and what changes the price.
      </p>
    </div>
  </section>

  <section class="hub-list" aria-label="Full price list">
    <div class="container hub-list__grid">
      <div class="hub-list__aside">
        <p class="hub-list__note">
          Not sure which one fits? Call and we'll talk it through before you book anything.
        </p>
        <a class="link-arrow hub-list__call" :href="practice.phoneHref">
          <Phone :size="18" :stroke-width="1.75" aria-hidden="true" />
          Call <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
        <a class="link-arrow" href="/insurance-and-financing/">Check your insurance</a>
      </div>

      <div class="hub-list__slip">
        <EstimateSlip variant="full" :rows="practice.treatments" />
      </div>
    </div>
  </section>

  <FinalCta />
</template>

<style scoped>
.hub-intro {
  background: var(--color-paper);
  padding-block: var(--space-16) var(--section-base);
}

.hub-intro__inner {
  max-width: 56ch;
  margin-inline: 0;
}

.hub-intro__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.hub-intro__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.hub-list {
  background: var(--color-sunk);
  padding-block: var(--section-open);
}

.hub-list__grid {
  display: grid;
  gap: var(--space-10);
}

.hub-list__aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.hub-list__note {
  max-width: 32ch;
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.hub-list__call {
  margin-top: var(--space-1);
}

@media (min-width: 1024px) {
  .hub-list__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .hub-list__aside {
    position: sticky;
    top: 96px;
    grid-column: 1 / span 4;
    padding-top: var(--space-2);
  }

  .hub-list__slip {
    grid-column: 5 / -1;
  }
}

/* Elevation for the slip's treatment rows: EstimateSlip owns the markup, so the
   card language (resting shadow-xs, hover/focus lift to shadow-md) is applied
   here via :deep() rather than editing that shared component. */
.hub-list__slip :deep(.row--link) {
  position: relative;
  border-radius: var(--radius-paper);
  box-shadow: var(--shadow-xs);
  transition:
    transform var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}

.hub-list__slip :deep(.row--link:hover),
.hub-list__slip :deep(.row--link:focus-visible) {
  z-index: 1;
  transform: translateY(var(--lift-hover));
  box-shadow: var(--shadow-md);
}
</style>
