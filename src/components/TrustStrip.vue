<script setup>
import { Star } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

// Derived, never invented: strip the house number off the street address ("2408 Barton
// Springs Rd, Austin, TX 78704" -> "Barton Springs Rd").
const street = practice.address.split(',')[0].replace(/^\d+\s*/, '')

// practice.credential is a short client-supplied phrase ("ADA member practice").
// First word is the figure, the rest is the caption.
const [credentialFigure, ...credentialRest] = practice.credential.split(' ')
const credentialCaption = credentialRest.join(' ') || practice.credential
</script>

<template>
  <section class="trust" aria-label="Quick facts about the practice">
    <div class="container">
      <ul class="trust__ledger">
        <li class="cell">
          <p class="cell__figure figure">
            {{ practice.rating }}
            <Star class="cell__star" :size="15" fill="currentColor" :stroke-width="0" aria-hidden="true" />
            · {{ practice.reviewCount }}
          </p>
          <p class="cell__caption">Google reviews</p>
        </li>

        <li class="cell">
          <p class="cell__figure figure">{{ practice.yearsInPractice }} yrs</p>
          <p class="cell__caption">on {{ street }}</p>
        </li>

        <li class="cell">
          <a class="cell__link" href="/insurance-and-financing/">
            <p class="cell__figure">Named plans</p>
            <p class="cell__caption cell__caption--link">See if we take yours →</p>
          </a>
        </li>

        <li class="cell">
          <p class="cell__figure figure">{{ credentialFigure }}</p>
          <p class="cell__caption">{{ credentialCaption }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.trust {
  background: var(--color-paper);
  padding-block: var(--section-tight);
}

/* This stays one continuous ruled line, not a card grid — the whole strip lifts
   off the paper ground as a single slip instead of four separate boxes. */
.trust__ledger {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
  background: var(--color-slip);
  border-block: var(--border-hair);
  box-shadow: var(--shadow-xs);
}

.cell {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-5) var(--space-2);
}

/* Mobile: 2x2 with a hairline cross */
.cell:nth-child(1),
.cell:nth-child(2) {
  border-bottom: var(--border-hair);
}

.cell:nth-child(odd) {
  border-right: var(--border-hair);
}

.cell__figure {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-heading);
  color: var(--color-ink);
}

.cell__star {
  color: var(--color-ink);
}

.cell__caption {
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.cell__link {
  display: block;
  min-height: var(--tap-min);
  margin: calc(-1 * var(--space-2));
  padding: var(--space-2);
  color: inherit;
  text-decoration: none;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.cell__link:hover,
.cell__link:focus-visible {
  background: var(--color-sunk);
}

.cell__caption--link {
  color: var(--color-accent);
  font-weight: var(--weight-medium);
}

.cell__link:hover .cell__caption--link,
.cell__link:focus-visible .cell__caption--link {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (min-width: 768px) {
  .trust__ledger {
    grid-template-columns: repeat(4, 1fr);
  }

  .cell {
    padding-inline: var(--space-6);
  }

  .cell:nth-child(1),
  .cell:nth-child(2) {
    border-bottom: 0;
  }

  .cell:nth-child(odd) {
    border-right: 0;
  }

  .cell:not(:first-child) {
    border-left: var(--border-hair);
  }
}
</style>
