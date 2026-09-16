<script setup>
import { ArrowRight } from 'lucide-vue-next'
import EstimateSlip from './EstimateSlip.vue'
import { practice } from '../config/practice.js'
</script>

<template>
  <section id="treatments" class="prices" aria-labelledby="prices-title">
    <div class="container prices__grid">
      <div class="prices__intro">
        <h2 id="prices-title" class="prices__title">What things cost here</h2>
        <p class="prices__lede">
          Ranges, not surprises. You get a written estimate before any treatment starts.
        </p>
        <img
          class="prices__still"
          src="/images/v2/still-instruments-800.webp"
          srcset="/images/v2/still-instruments-480.webp 480w, /images/v2/still-instruments-800.webp 800w, /images/v2/still-instruments-1200.webp 1200w"
          sizes="(min-width: 1280px) 380px, 30vw"
          width="800"
          height="533"
          alt=""
          loading="lazy"
        />
        <a class="link-arrow prices__all" href="/treatments/">
          All treatments
          <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>

      <div class="prices__slip">
        <EstimateSlip variant="full" :rows="practice.treatments" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.prices {
  background: var(--color-sunk);
  padding-block: var(--section-open);
}

.prices__grid {
  display: grid;
  gap: var(--space-10);
}

.prices__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.prices__lede {
  margin-top: var(--space-4);
  max-width: 34ch;
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.prices__still {
  display: none;
  width: 100%;
  aspect-ratio: 3 / 2;
  margin-top: var(--space-8);
  object-fit: cover;
}

.prices__all {
  margin-top: var(--space-4);
}

@media (min-width: 1024px) {
  .prices__still {
    display: block;
  }

  .prices__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .prices__intro {
    position: sticky;
    top: 96px;
    grid-column: 1 / span 4;
  }

  .prices__slip {
    grid-column: 5 / -1;
  }
}
</style>
