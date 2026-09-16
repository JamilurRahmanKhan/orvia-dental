<script setup>
import { Phone } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'

const status = openStatus()
</script>

<template>
  <section class="final-cta on-accent" aria-labelledby="final-cta-title">
    <div class="container final-cta__inner">
      <h2 id="final-cta-title" class="final-cta__title">
        Book in about a minute. No account, no phone tag.
      </h2>

      <p class="final-cta__status">
        <span class="figure">{{ status.label }}</span>
      </p>

      <div class="final-cta__actions">
        <a class="btn btn--lg final-cta__book" href="/book/">Book appointment</a>
        <a class="btn btn--lg final-cta__call" :href="practice.phoneHref">
          <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
          Call <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  padding-block: var(--section-open);
}

.final-cta__inner {
  max-width: 44ch;
}

.final-cta__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.final-cta__status {
  margin-top: var(--space-4);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

/* "Book appointment": slip-white ground, accent text (7.54:1) */
.final-cta__book {
  background: var(--color-slip);
  color: var(--color-accent);
}

.final-cta__book:hover {
  color: var(--color-accent-hover);
}

.final-cta__book:active {
  color: var(--color-accent-active);
}

/* "Call ...": outline in the on-accent scope's ink token (#F5F6F3) */
.final-cta__call {
  background: transparent;
  color: var(--color-ink);
  border-color: var(--color-ink);
}

.final-cta__call:hover {
  background: color-mix(in srgb, var(--color-ink) 12%, transparent);
}

@media (max-width: 639px) {
  .final-cta__actions {
    flex-direction: column;
  }

  .final-cta__actions .btn {
    width: 100%;
  }
}
</style>
