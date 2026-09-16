<script setup>
import { Phone, CalendarDays } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
</script>

<template>
  <nav class="mobile-bar" aria-label="Quick actions">
    <a class="mobile-bar__btn mobile-bar__btn--call" :href="practice.phoneHref">
      <Phone :size="22" :stroke-width="1.75" aria-hidden="true" />
      Call now
    </a>
    <a class="mobile-bar__btn mobile-bar__btn--book" href="/book/">
      <CalendarDays :size="22" :stroke-width="1.75" aria-hidden="true" />
      Book online
    </a>
  </nav>
</template>

<style scoped>
.mobile-bar {
  display: none;
}

@media (max-width: 767px) {
  .mobile-bar {
    position: fixed;
    inset: auto 0 0;
    z-index: var(--z-mobilebar);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: env(safe-area-inset-bottom);
    background: var(--color-slip);
    border-top: var(--border-control);
  }

  .mobile-bar__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    min-height: var(--mobilebar-h);
    font-size: var(--text-small);
    font-weight: var(--weight-semibold);
    text-decoration: none;
  }

  .mobile-bar__btn:focus-visible {
    outline-offset: -3px;
  }

  .mobile-bar__btn--call {
    color: var(--color-ink);
  }

  .mobile-bar__btn--call:active {
    background: var(--color-sunk);
  }

  .mobile-bar__btn--book {
    background: var(--color-accent);
    color: var(--color-on-accent);
  }

  .mobile-bar__btn--book:active {
    background: var(--color-accent-active);
  }

  .mobile-bar__btn--book:focus-visible {
    outline-color: var(--color-ink);
  }
}
</style>
