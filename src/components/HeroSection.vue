<script setup>
import { Phone, Star } from 'lucide-vue-next'
import EstimateSlip from './EstimateSlip.vue'
import { practice, openStatus } from '../config/practice.js'

const status = openStatus()
const fmt = (h) => `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`
const weekdayClose = practice.hours[1]?.[1]
const support = `Open until ${fmt(weekdayClose)} on weekdays, same-day emergency slots, and no account needed to book.`

const firstVisitRows = [
  { name: practice.firstVisit.label, detail: practice.firstVisit.duration, price: practice.firstVisit.price },
]
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="hero__status">
          <span class="dot" :class="{ 'dot--closed': !status.open }" aria-hidden="true"></span>
          <span class="figure">{{ status.label }}</span>
        </p>

        <h1 id="hero-title" class="hero__title">
          A dentist in {{ practice.city }} who tells you the price before we start.
        </h1>

        <p class="hero__lede">{{ support }}</p>

        <div class="hero__actions">
          <a class="btn btn--primary btn--lg" href="/book/">Book appointment</a>
          <a class="btn btn--secondary btn--lg" :href="practice.phoneHref">
            <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
            Call <span class="figure">{{ practice.phoneDisplay }}</span>
          </a>
        </div>

        <div class="hero__trust">
          <span class="hero__avatars" aria-hidden="true">
            <span class="hero__avatar">JM</span>
            <span class="hero__avatar">DR</span>
            <span class="hero__avatar">PS</span>
          </span>
          <a
            class="hero__rating"
            href="/reviews/"
            :aria-label="`Rated ${practice.rating} out of 5 from ${practice.reviewCount} Google reviews`"
          >
            <span class="hero__stars" aria-hidden="true">
              <Star v-for="n in 5" :key="n" :size="16" fill="currentColor" :stroke-width="0" />
            </span>
            <span class="figure hero__score">{{ practice.rating }}</span>
            <span class="hero__count">· {{ practice.reviewCount }} Google reviews</span>
          </a>
        </div>
      </div>

      <div class="hero__media">
        <span class="hero__glow" aria-hidden="true"></span>
        <picture>
          <source
            media="(min-width: 1024px)"
            type="image/webp"
            srcset="/images/v2/hero-cole-4x5-480.webp 480w, /images/v2/hero-cole-4x5-800.webp 800w"
            sizes="(min-width: 1280px) 520px, 42vw"
          />
          <img
            class="hero__photo"
            src="/images/v2/hero-cole-4x3-800.webp"
            srcset="/images/v2/hero-cole-4x3-480.webp 480w, /images/v2/hero-cole-4x3-800.webp 800w, /images/v2/hero-cole-4x3-1200.webp 1200w"
            sizes="100vw"
            width="800"
            height="600"
            alt="A dentist talking through a treatment plan with a patient"
            fetchpriority="high"
          />
        </picture>

        <span class="hero__badge">
          <span class="dot" aria-hidden="true"></span>
          Same-day emergency slots
        </span>

        <div class="hero__slip">
          <EstimateSlip variant="compact" title="Your first visit" :rows="firstVisitRows" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow-x: clip;
  padding-block: var(--space-8) var(--section-base);
  background: radial-gradient(60% 55% at 18% 8%, var(--color-accent-tint) 0%, transparent 70%);
}

.hero__grid {
  display: grid;
  gap: var(--space-10);
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.hero__title {
  margin-top: var(--space-5);
  max-width: 15ch;
  font-size: var(--text-display);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.035em;
  text-wrap: balance;
  animation: hero-rise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
}

.hero__status,
.hero__lede,
.hero__actions,
.hero__trust {
  animation: hero-rise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.hero__status { animation-delay: 0ms; }
.hero__lede { animation-delay: 60ms; }
.hero__actions { animation-delay: 120ms; }
.hero__trust { animation-delay: 180ms; }

.hero__media {
  animation: hero-rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 80ms both;
}

.hero__lede {
  margin-top: var(--space-6);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.hero__trust {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.hero__avatars {
  display: flex;
}

.hero__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: -8px;
  border-radius: var(--radius-round);
  border: 2px solid var(--color-paper);
  background: var(--color-accent-tint);
  color: var(--color-accent);
  font-family: var(--font-figure);
  font-size: 11px;
  font-weight: var(--weight-semibold);
}

.hero__avatar:first-child {
  margin-left: 0;
}

.hero__rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--tap-min);
  font-size: var(--text-small);
  color: var(--color-ink-2);
  text-decoration: none;
}

.hero__rating:hover .hero__count {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hero__stars {
  display: inline-flex;
  gap: 1px;
  color: var(--color-ink);
}

.hero__score {
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

.hero__media {
  position: relative;
}

.hero__glow {
  position: absolute;
  inset: -10%;
  z-index: -1;
  background: radial-gradient(60% 60% at 70% 20%, var(--color-accent-tint) 0%, transparent 70%);
}

.hero__photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: 50% 20%;
  box-shadow: var(--shadow-slip);
}

.hero__badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgb(255 255 255 / 0.72);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgb(255 255 255 / 0.6);
  border-radius: var(--radius-round);
  box-shadow: var(--shadow-md);
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.01em;
  color: var(--color-ink);
}

@media (prefers-reduced-transparency: reduce) {
  .hero__badge {
    background: var(--color-slip);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

.hero__slip {
  position: relative;
  width: min(320px, 86%);
  margin: calc(-1 * var(--space-12)) var(--space-4) 0 auto;
  animation: hero-rise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 220ms both;
}

.hero__slip :deep(.slip) {
  background: rgb(255 255 255 / 0.78);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-color: rgb(255 255 255 / 0.6);
}

@media (prefers-reduced-transparency: reduce) {
  .hero__slip :deep(.slip) {
    background: var(--color-slip);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

/* Mobile: CTAs full width */
@media (max-width: 639px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
  }
}

/* Utility bar carries the live status from 768 up; don't repeat it in the hero */
@media (min-width: 768px) {
  .hero__status {
    display: none;
  }

  .hero__title {
    margin-top: 0;
  }
}

/* Tablet: text above a wide photo */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero__photo {
    aspect-ratio: 16 / 10;
  }
}

/* Desktop: 7 / 5 split, photo bleeds to the viewport edge, slip overlaps its corner */
@media (min-width: 1024px) {
  .hero {
    padding-top: var(--space-16);
  }

  .hero__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .hero__copy {
    grid-column: 1 / span 7;
    padding-top: var(--space-8);
  }

  .hero__media {
    grid-column: 8 / -1;
    margin-inline-end: calc(-1 * (var(--gutter) + max(0px, (100vw - var(--container) - 2 * var(--gutter)) / 2)));
    /* Ultra-wide viewports: cap it so a 4:5 portrait doesn't grow into a wall of face —
       the bleed keeps reaching the viewport edge, it just stops getting wider past this. */
    max-width: 640px;
    margin-left: auto;
  }

  .hero__photo {
    aspect-ratio: 4 / 5;
  }

  .hero__slip {
    position: absolute;
    left: calc(-1 * var(--space-12));
    bottom: calc(-1 * var(--space-12));
    width: 340px;
    margin: 0;
  }
}
</style>
