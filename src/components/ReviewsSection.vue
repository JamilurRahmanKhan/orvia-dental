<script setup>
import { Star } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
</script>

<template>
  <section id="reviews" class="reviews" aria-labelledby="reviews-title">
    <div class="container reviews__grid">
      <div class="reviews__score">
        <h2 id="reviews-title" class="visually-hidden">Patient reviews</h2>
        <p class="reviews__figure figure">{{ practice.rating }}</p>
        <p class="reviews__stars" aria-hidden="true">
          <Star v-for="n in 5" :key="n" :size="16" fill="currentColor" :stroke-width="0" />
        </p>
        <p class="reviews__count">{{ practice.reviewCount }} Google reviews</p>
        <a class="link-arrow reviews__link" :href="practice.googleReviewsUrl" target="_blank" rel="noopener">
          Read them on Google
          <span class="visually-hidden">(opens in a new tab)</span>
          →
        </a>
        <p v-if="practice.demo" class="reviews__caption">Sample reviews for demo.</p>
      </div>

      <ul class="reviews__list">
        <li v-for="r in practice.reviews" :key="r.name" class="quote">
          <p class="quote__text">“{{ r.text }}”</p>
          <p class="quote__meta">{{ r.name }} · <span class="figure">{{ r.date }}</span> · Google</p>
        </li>
      </ul>

      <a class="link-arrow reviews__all" :href="practice.googleReviewsUrl" target="_blank" rel="noopener">
        Read all {{ practice.reviewCount }} on Google
        <span class="visually-hidden">(opens in a new tab)</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.reviews__grid {
  display: grid;
  gap: var(--space-10);
}

.reviews__score {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.reviews__figure {
  font-size: var(--text-figure-xl);
  font-weight: var(--weight-medium);
  line-height: 1;
  color: var(--color-ink);
}

.reviews__stars {
  display: flex;
  gap: 2px;
  margin-top: var(--space-2);
  color: var(--color-ink);
}

.reviews__count {
  margin-top: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.reviews__link {
  margin-top: var(--space-4);
  font-size: var(--text-small);
}

.reviews__caption {
  margin-top: var(--space-4);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

/* ---- Quotes: plain text column, no cards — a spare ledger reads more distinctive
   than a testimonial-card kit, and keeps this section visually different from the
   card-based sections around it. ---- */
.reviews__list {
  display: grid;
  gap: var(--space-10);
  margin: 0;
  padding: 0;
  list-style: none;
}

.quote__text {
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink);
}

.quote__meta {
  margin-top: var(--space-3);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.reviews__all {
  display: none;
}

@media (max-width: 767px) {
  .reviews__list li:nth-child(n + 4) {
    display: none;
  }

  .reviews__all {
    display: inline-flex;
  }
}

@media (min-width: 768px) {
  .reviews__list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gap);
  }
}

@media (min-width: 1024px) {
  .reviews__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
  }

  .reviews__score {
    grid-column: 1 / span 4;
  }

  .reviews__list {
    grid-column: 5 / -1;
  }
}
</style>
