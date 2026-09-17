<script setup>
import { onMounted } from 'vue'
import { Star, ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

onMounted(() => {
  document.title = 'Reviews | Orvia Dental, Austin TX'
})
</script>

<template>
  <section class="page-hero" aria-labelledby="reviews-title">
    <div class="container reviews-hero__grid">
      <div class="reviews-hero__score">
        <h1 id="reviews-title" class="page-hero__title">Reviews</h1>
        <p class="reviews-hero__figure figure">{{ practice.rating }}</p>
        <p class="reviews-hero__stars" aria-hidden="true">
          <Star v-for="n in 5" :key="n" :size="18" fill="currentColor" :stroke-width="0" />
        </p>
        <p class="reviews-hero__count">{{ practice.reviewCount }} Google reviews</p>
        <p v-if="practice.demo" class="reviews-hero__demo-note">Sample reviews for demo.</p>
      </div>
      <p class="reviews-hero__lede">
        These reviews are about the experience of coming in, not about clinical skill — Texas
        rules keep it that way. What patients say about their visit is here in full, with nothing
        hidden.
      </p>
    </div>
  </section>

  <section class="reviews-page" aria-label="Patient reviews">
    <div class="container">
      <ul class="reviews-page__list">
        <li v-for="r in practice.reviews" :key="r.name" class="quote">
          <p class="quote__text">“{{ r.text }}”</p>
          <p class="quote__meta">{{ r.name }} · <span class="figure">{{ r.date }}</span> · Google</p>
        </li>
      </ul>

      <p class="reviews-page__closing">
        Read more, or leave your own, on
        <a class="link-arrow" :href="practice.googleReviewsUrl" target="_blank" rel="noopener">
          our Google Business Profile
          <span class="visually-hidden">(opens in a new tab)</span>
          <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
        </a>.
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

.reviews-hero__grid {
  display: grid;
  gap: var(--space-8);
}

.reviews-hero__score {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.reviews-hero__figure {
  margin-top: var(--space-6);
  font-size: var(--text-figure-xl);
  font-weight: var(--weight-medium);
  line-height: 1;
  color: var(--color-ink);
}

.reviews-hero__stars {
  display: flex;
  gap: 2px;
  margin-top: var(--space-2);
  color: var(--color-ink);
}

.reviews-hero__count {
  margin-top: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.reviews-hero__demo-note {
  margin-top: var(--space-3);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.reviews-hero__lede {
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.reviews-page {
  background: var(--color-sunk);
  padding-block: var(--space-4) var(--section-base);
}

.reviews-page__list {
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

.reviews-page__closing {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: var(--border-hair);
  font-size: var(--text-body);
  color: var(--color-ink-2);
}

.reviews-page__closing .link-arrow {
  font-size: var(--text-body);
}

@media (min-width: 768px) {
  .reviews-page__list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gap);
  }
}

@media (min-width: 1024px) {
  .reviews-hero__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: end;
  }

  .reviews-hero__score {
    grid-column: 1 / span 5;
  }

  .reviews-hero__lede {
    grid-column: 6 / -1;
  }
}
</style>
