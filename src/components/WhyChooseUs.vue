<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
</script>

<template>
  <section class="why" aria-labelledby="why-title">
    <div class="container">
      <div class="why__layout">
        <h2 id="why-title" class="why__title">No surprises, on purpose.</h2>

        <div class="why__grid">
          <div v-for="(p, i) in practice.promises" :key="p.text" class="why__item">
            <span class="why__marker figure">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="why__statement">{{ p.text }}</p>
            <a class="link-arrow why__proof" :href="p.href">
              {{ p.proof }}
              <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </div>
        </div>

        <a class="link-arrow why__welcome" :href="practice.welcomeBack.href">
          {{ practice.welcomeBack.text }}
          <ArrowRight :size="20" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.why__title {
  max-width: 20ch;
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.why__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
  margin-top: var(--space-12);
}

.why__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-5);
  border-top: var(--border-hair);
}

.why__marker {
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  color: var(--color-ink-3);
}

.why__statement {
  max-width: var(--measure-narrow);
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.why__proof {
  font-size: var(--text-small);
}

.why__welcome {
  display: inline-flex;
  margin-top: var(--space-12);
  font-size: var(--text-body-lg);
}

@media (min-width: 768px) {
  .why__statement {
    font-size: var(--text-h3);
  }

  .why__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gap);
    row-gap: var(--space-12);
  }
}

@media (min-width: 1024px) {
  .why__layout {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
  }

  .why__title {
    grid-column: 1 / span 5;
    max-width: none;
    align-self: start;
  }

  .why__grid {
    grid-column: 1 / -1;
    margin-top: var(--space-16);
  }

  .why__welcome {
    grid-column: 1 / -1;
  }
}
</style>
