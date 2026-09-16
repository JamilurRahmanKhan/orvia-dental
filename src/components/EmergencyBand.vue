<script setup>
import { practice } from '../config/practice.js'
</script>

<template>
  <section class="emergency" aria-label="Emergency dental care">
    <div class="emergency__card">
      <span class="emergency__icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v2M5 6l1.4 1.4M19 6l-1.4 1.4M3 12h2M19 12h2" stroke="#e0483e" stroke-width="1.6" stroke-linecap="round"/><path d="M6 21v-6a6 6 0 1112 0v6H6Z" stroke="#e0483e" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 21h12" stroke="#e0483e" stroke-width="1.6" stroke-linecap="round"/></svg>
      </span>

      <div class="emergency__text">
        <p class="emergency__eyebrow">Dental emergency?</p>
        <p class="emergency__headline">In pain right now?</p>
        <p class="emergency__sub">We hold same-day emergency appointments every day.</p>
      </div>

      <span class="emergency__divider" aria-hidden="true"></span>

      <div class="emergency__actions">
        <a class="emergency__btn emergency__btn--primary" :href="practice.phoneHref">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          Call {{ practice.phoneDisplay }}
        </a>
        <a class="emergency__btn emergency__btn--secondary" href="#book">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          Book an emergency slot
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.emergency {
  background: #fff;
  padding: 20px 56px 0;
}

.emergency__card {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 22px;
  background: #fdeeec;
  border-radius: 20px;
  padding: 26px 36px;
}

.emergency__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  background: #f9d9d5;
}

.emergency__text {
  flex: 1;
  min-width: 0;
}

.emergency__eyebrow {
  margin: 0 0 6px;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e0483e;
}

.emergency__headline {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: #14161c;
}

.emergency__sub {
  margin: 6px 0 0;
  font-size: 14.5px;
  color: #63677a;
}

.emergency__divider {
  width: 1px;
  align-self: stretch;
  background: rgba(20, 30, 60, 0.1);
  flex-shrink: 0;
}

.emergency__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.emergency__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 50px;
  padding: 0 24px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 100ms ease-out, background-color 150ms ease-out, border-color 150ms ease-out;
}

.emergency__btn:active {
  transform: scale(0.97);
}

.emergency__btn--primary {
  background: #4a9c2e;
  color: #fff;
}

.emergency__btn--primary:hover {
  background: #3f8626;
}

.emergency__btn--secondary {
  background: #fff;
  color: #14161c;
  border: 1.5px solid rgba(20, 30, 60, 0.18);
}

.emergency__btn--secondary:hover {
  border-color: rgba(20, 30, 60, 0.34);
}

@media (max-width: 1199px) {
  .emergency {
    padding: 18px 36px 0;
  }

  .emergency__card {
    flex-wrap: wrap;
    padding: 26px 28px;
  }

  .emergency__divider {
    display: none;
  }

  .emergency__actions {
    width: 100%;
    padding-left: 78px;
  }
}

@media (max-width: 640px) {
  .emergency {
    padding: 16px 20px 0;
  }

  .emergency__card {
    padding: 22px;
  }

  .emergency__actions {
    flex-direction: column;
    padding-left: 0;
    width: 100%;
  }

  .emergency__btn {
    width: 100%;
    justify-content: center;
  }

  .emergency__headline {
    font-size: 21px;
  }
}
</style>
