<script setup>
import { onMounted } from 'vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import TeamPreview from '../components/TeamPreview.vue'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

onMounted(() => {
  document.title = 'About Orvia Dental | Dentist in Austin, TX'
})
</script>

<template>
  <section class="page-hero" aria-labelledby="about-title">
    <div class="container">
      <h1 id="about-title" class="page-hero__title">About {{ practice.name }}</h1>
      <p class="page-hero__lede">
        A general and family dental practice on Barton Springs Road, built around one idea:
        tell patients what things cost and what happens next, before anything starts.
      </p>
    </div>
  </section>

  <section class="story" aria-labelledby="story-title">
    <div class="container story__grid">
      <div class="story__copy">
        <h2 id="story-title" class="story__title">Our story</h2>
        <p class="story__text">
          We started Orvia because too many people we knew put off the dentist — not from fear
          of pain, but fear of the bill. A friend went in for a filling and left with a $1,500
          estimate for work she'd never agreed to. That's the story that's stuck with us since we
          opened here in the 78704: dentistry should come with paperwork you can read before
          anything happens to your teeth, not after.
        </p>
        <p class="story__text">
          So we built the practice around the estimate slip — the paper you sign before we pick
          up a single instrument. Every checkup, filling and root canal starts with a number in
          writing. You know the price and the plan before you agree to either.
        </p>
        <p class="story__text">
          We're a general and family practice in South Austin. The same hygienist remembers your
          kid's name. Your dentist explains the X-ray instead of just pointing at it. We keep
          evening and Saturday hours because most of Austin works during the day, and we hold
          same-day slots for the mornings someone wakes up in pain.
        </p>
        <p class="story__text">
          Insurance is confusing enough without an office making it worse, so we check your plan
          before you arrive and tell you what's covered before you're in the chair. If you
          haven't been in a few years, that's fine too — no lectures, just a look and a
          conversation.
        </p>
        <p v-if="practice.demo" class="story__demo-note">
          Sample founding story written for this demo template.
        </p>
      </div>

      <figure class="story__figure">
        <img
          class="story__photo"
          src="/images/v2/still-instruments-800.webp"
          srcset="/images/v2/still-instruments-480.webp 480w, /images/v2/still-instruments-800.webp 800w, /images/v2/still-instruments-1200.webp 1200w"
          sizes="(min-width: 1024px) 420px, 100vw"
          width="800"
          height="533"
          loading="lazy"
          alt="Dental instruments laid out on a clean tray at Orvia Dental"
        />
        <figcaption class="story__caption card">In writing before we start. Every time.</figcaption>
      </figure>
    </div>
  </section>

  <WhyChooseUs />
  <TeamPreview />
  <FinalCta />
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--section-tight);
}

.page-hero__title {
  max-width: 18ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.page-hero__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.story {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.story__grid {
  display: grid;
  gap: var(--space-10);
}

.story__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.story__text {
  max-width: var(--measure-narrow);
  margin-top: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.story__text:first-of-type {
  margin-top: var(--space-6);
}

.story__demo-note {
  margin-top: var(--space-6);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.story__figure {
  margin: 0;
  position: relative;
}

.story__photo {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

/* Floating promise card: echoes the hero's compact estimate slip, overlapping the
   photo's bottom edge by the same --space-12 (48px) offset used there. */
.story__caption {
  position: relative;
  margin: calc(-1 * var(--space-12)) var(--space-5) 0;
  max-width: calc(100% - 2 * var(--space-5));
  padding: var(--space-4) var(--space-5);
  box-shadow: var(--shadow-sm);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

@media (min-width: 1024px) {
  .story__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .story__copy {
    grid-column: 1 / span 7;
  }

  .story__figure {
    grid-column: 9 / -1;
    padding-top: var(--space-2);
  }
}
</style>
