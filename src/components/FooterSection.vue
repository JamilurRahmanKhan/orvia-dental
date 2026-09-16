<script setup>
import { ref } from 'vue'
import { Phone } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'

const status = openStatus()
const year = new Date().getFullYear()
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fmt = (h) => `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`
const today = new Date().getDay()

const hoursCompact = practice.hours.map((h, i) => ({
  day: dayNames[i],
  isToday: i === today,
  label: h ? `${fmt(h[0])}–${fmt(h[1])}` : 'Closed',
}))

const openGroups = ref(new Set())
function toggleGroup(name) {
  openGroups.value.has(name) ? openGroups.value.delete(name) : openGroups.value.add(name)
  // force reactivity on the Set
  openGroups.value = new Set(openGroups.value)
}
</script>

<template>
  <footer class="footer on-carbon">
    <div class="container">
      <div class="footer__top">
        <div class="nap">
          <p class="nap__name">{{ practice.name }}</p>
          <p class="nap__line figure">{{ practice.address }}</p>
          <p class="nap__line figure"><a :href="practice.phoneHref">{{ practice.phoneDisplay }}</a></p>
          <a class="link-arrow nap__directions" :href="practice.mapUrl" target="_blank" rel="noopener">
            Get directions
            <span class="visually-hidden">(opens in a new tab)</span>
          </a>
          <p class="nap__emergency">
            <Phone :size="16" :stroke-width="1.75" aria-hidden="true" />
            Emergency? Call <a class="figure" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>
          </p>
        </div>

        <table class="mini-hours">
          <caption class="visually-hidden">Hours this week</caption>
          <tbody>
            <tr v-for="h in hoursCompact" :key="h.day" :class="{ 'mini-hours__row--today': h.isToday }">
              <th scope="row">{{ h.day }}</th>
              <td class="figure">{{ h.label }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="footer__links">
        <div v-for="(links, group) in practice.footerLinks" :key="group" class="link-group">
          <button
            type="button"
            class="link-group__trigger"
            :aria-expanded="openGroups.has(group)"
            :aria-controls="`footer-group-${group}`"
            @click="toggleGroup(group)"
          >
            {{ group }}
          </button>
          <ul :id="`footer-group-${group}`" class="link-group__list" :class="{ 'is-open': openGroups.has(group) }">
            <li v-for="link in links" :key="link.href"><a :href="link.href">{{ link.label }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© {{ year }} {{ practice.name }}. All rights reserved.</p>
        <ul class="legal">
          <li v-for="link in practice.legalLinks" :key="link.href"><a :href="link.href">{{ link.label }}</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--space-16) var(--space-10);
}

.footer__top {
  display: grid;
  gap: var(--space-10);
  padding-bottom: var(--space-10);
  border-bottom: var(--border-hair);
}

.nap__name {
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-heading);
}

.nap__line {
  margin-top: var(--space-2);
  font-size: var(--text-body);
}

.nap__line a {
  text-decoration: none;
}

.nap__line a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.nap__directions {
  margin-top: var(--space-4);
  font-size: var(--text-small);
}

.nap__emergency {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  font-size: var(--text-small);
  color: var(--color-signal);
}

.nap__emergency a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.mini-hours {
  border-collapse: collapse;
  font-size: var(--text-small);
}

.mini-hours th,
.mini-hours td {
  padding: var(--space-1) var(--space-4) var(--space-1) 0;
  font-weight: var(--weight-regular);
  text-align: left;
  color: var(--color-ink-2);
}

.mini-hours td {
  text-align: right;
  padding-right: 0;
}

.mini-hours__row--today th,
.mini-hours__row--today td {
  color: var(--color-ink);
  font-weight: var(--weight-semibold);
}

/* ---- Link columns ---- */
.footer__links {
  display: grid;
  gap: 0;
  padding-block: var(--space-8);
  border-bottom: var(--border-hair);
}

.link-group {
  border-bottom: var(--border-hair);
}

.link-group:last-child {
  border-bottom: 0;
}

.link-group__trigger {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 0;
  background: transparent;
  border: 0;
  color: var(--color-ink-inverse-2);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
}

.link-group__list {
  display: grid;
  grid-template-rows: 0fr;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: grid-template-rows var(--dur-base) var(--ease-out);
}

.link-group__list > * {
  overflow: hidden;
}

.link-group__list.is-open {
  grid-template-rows: 1fr;
}

.link-group__list li {
  min-height: 0;
}

.link-group__list a {
  display: flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-ink-inverse-2);
  font-size: var(--text-small);
  text-decoration: none;
}

.link-group__list a:hover {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ---- Bottom bar ---- */
.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-6);
  font-size: var(--text-caption);
  color: var(--color-ink-inverse-2);
}

.legal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin: 0;
  padding: 0;
  list-style: none;
}

.legal a {
  color: inherit;
  text-decoration: none;
}

.legal a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (min-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
}

/* ---- Desktop: link groups become plain static columns ---- */
@media (min-width: 1024px) {
  .footer__links {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gap);
    border-bottom: 0;
  }

  .link-group {
    border-bottom: 0;
  }

  .link-group__trigger {
    min-height: auto;
    margin-bottom: var(--space-4);
    cursor: default;
    pointer-events: none;
  }

  .link-group__list,
  .link-group__list.is-open {
    display: grid;
    grid-template-rows: none;
    gap: var(--space-1);
    overflow: visible;
  }
}
</style>
