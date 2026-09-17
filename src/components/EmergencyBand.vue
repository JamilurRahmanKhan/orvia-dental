<script setup>
import { Phone, CalendarDays } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'

const status = openStatus()
</script>

<template>
  <section class="emergency on-carbon" aria-labelledby="emergency-title">
    <div class="container emergency__grid">
      <div class="emergency__text">
        <p class="emergency__label">In pain right now?</p>
        <a id="emergency-title" class="emergency__phone figure" :href="practice.phoneHref">
          <Phone :size="28" :stroke-width="1.75" aria-hidden="true" />
          {{ practice.phoneDisplay }}
        </a>
        <p class="emergency__status">
          <span class="dot" :class="{ 'dot--closed': !status.open }" aria-hidden="true"></span>
          {{ status.open ? "We're open now" : "We're closed — here's what to do" }}
          <a v-if="!status.open" class="emergency__more" href="/emergency-dentist/">→</a>
        </p>
      </div>

      <span class="emergency__divider" aria-hidden="true"></span>

      <div class="emergency__slip">
        <p class="emergency__slip-label">Emergency visit</p>
        <p class="emergency__slip-row">
          <span class="emergency__slip-name">{{ practice.emergencyVisit.label }}</span>
          <span class="emergency__slip-leader" aria-hidden="true"></span>
          <span class="figure">{{ practice.emergencyVisit.price }}</span>
        </p>
        <a class="btn btn--secondary emergency__book" href="/book/?reason=emergency">
          <CalendarDays :size="18" :stroke-width="1.75" aria-hidden="true" />
          Book an emergency slot
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.emergency {
  padding-block: var(--section-tight);
}

.emergency__grid {
  display: grid;
  gap: var(--space-8);
}

.emergency__label {
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-signal);
}

.emergency__phone {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-2);
  font-size: var(--text-figure-xl);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: none;
  line-height: 1;
}

.emergency__phone:hover {
  color: var(--color-accent);
}

.emergency__status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.emergency__more {
  color: var(--color-accent);
  font-weight: var(--weight-semibold);
}

.emergency__divider {
  display: none;
}

.emergency__slip-label {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-2);
}

.emergency__slip-row {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: var(--border-hair);
  font-size: var(--text-body);
}

.emergency__slip-name {
  min-width: 0;
}

.emergency__slip-leader {
  flex: 1;
  min-width: var(--space-4);
  border-bottom: 1px dotted var(--color-ink-inverse-2);
  transform: translateY(-4px);
}

.emergency__book {
  margin-top: var(--space-5);
  width: 100%;
  background: transparent;
  border-color: var(--color-rule-inverse);
  color: var(--color-ink);
}

.emergency__book:hover {
  border-color: var(--color-ink);
}

@media (min-width: 768px) {
  .emergency__grid {
    grid-template-columns: 1fr auto 280px;
    align-items: center;
  }

  .emergency__divider {
    display: block;
    width: 1px;
    align-self: stretch;
    background: var(--color-rule-inverse);
  }

  .emergency__book {
    width: auto;
  }
}
</style>
