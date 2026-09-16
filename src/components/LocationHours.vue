<script setup>
import { Car, Bus, Accessibility, MapPin } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const fmt = (h) => `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`
const today = new Date().getDay()
const status = openStatus()

const rows = practice.hours.map((h, i) => ({
  day: dayNames[i],
  isToday: i === today,
  label: h ? `${fmt(h[0])} – ${fmt(h[1])}` : 'Closed',
  closed: !h,
}))
</script>

<template>
  <section id="hours" class="hours" aria-labelledby="hours-title">
    <div class="container hours__grid">
      <div class="hours__board">
        <p class="hours__eyebrow">Location & hours</p>
        <h2 id="hours-title" class="hours__title">Find us</h2>

        <table class="board">
          <caption class="visually-hidden">Weekly hours, {{ practice.name }}</caption>
          <tbody>
            <tr v-for="row in rows" :key="row.day" class="board__row" :class="{ 'board__row--today': row.isToday }">
              <th scope="row" class="board__day">{{ row.day }}</th>
              <td class="board__time figure">
                <span v-if="row.isToday" class="board__flag">
                  <span class="dot" :class="{ 'dot--closed': !status.open }" aria-hidden="true"></span>
                  {{ status.open ? 'Open now' : 'Closed now' }} ·
                </span>
                <span :class="{ 'board__time--closed': row.closed }">{{ row.label }}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <ul class="specifics">
          <li>
            <Car :size="20" :stroke-width="1.75" aria-hidden="true" />
            <span>{{ practice.directions.parking }}</span>
          </li>
          <li>
            <Bus :size="20" :stroke-width="1.75" aria-hidden="true" />
            <span>{{ practice.directions.transit }}</span>
          </li>
          <li>
            <Accessibility :size="20" :stroke-width="1.75" aria-hidden="true" />
            <span>{{ practice.directions.access }}</span>
          </li>
        </ul>
      </div>

      <div class="hours__map">
        <a class="map-panel" :href="practice.mapUrl" target="_blank" rel="noopener">
          <img
            v-if="practice.staticMap"
            class="map-panel__img"
            :src="practice.staticMap"
            :alt="`Map showing ${practice.name} at ${practice.address}`"
          />
          <div v-else class="map-panel__placeholder">
            <MapPin :size="28" :stroke-width="1.5" aria-hidden="true" />
            <p class="map-panel__address">{{ practice.address }}</p>
          </div>
        </a>
        <a class="btn btn--secondary hours__directions" :href="practice.mapUrl" target="_blank" rel="noopener">
          Get directions
          <span class="visually-hidden">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hours {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.hours__grid {
  display: grid;
  gap: var(--space-10);
}

/* ---- Departure board ---- */
.hours__eyebrow {
  margin: 0 0 var(--space-2);
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-accent);
}

.hours__title {
  margin: 0 0 var(--space-8);
  font-size: var(--text-h2);
  font-weight: 650;
  letter-spacing: var(--tracking-heading);
}

.board {
  width: 100%;
  border-collapse: collapse;
}

.board__row {
  border-bottom: var(--border-hair);
}

.board__row:first-child {
  border-top: var(--border-hair);
}

.board__day,
.board__time {
  padding: var(--space-3) 0;
  font-weight: var(--weight-regular);
  text-align: left;
}

.board__day {
  font-size: var(--text-body);
  color: var(--color-ink);
}

.board__time {
  font-size: var(--text-body);
  color: var(--color-ink);
  text-align: right;
}

.board__time--closed {
  color: var(--color-ink-2);
}

.board__row--today {
  background: var(--color-accent-tint);
}

.board__row--today .board__day,
.board__row--today .board__time {
  padding-inline: var(--space-3);
  font-weight: var(--weight-semibold);
}

.board__flag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-right: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
}

/* ---- Parking / transit / access ---- */
.specifics {
  display: grid;
  gap: var(--space-4);
  margin: var(--space-8) 0 0;
  padding: 0;
  list-style: none;
}

.specifics li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.specifics li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-ink-3);
}

/* ---- Map panel ---- */
.hours__map {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.map-panel {
  display: block;
  aspect-ratio: 3 / 2;
  background: var(--color-slip);
  border: var(--border-hair);
  text-decoration: none;
  color: inherit;
}

.map-panel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-panel__placeholder {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-8);
  color: var(--color-ink-2);
  text-align: center;
}

.map-panel__address {
  max-width: 24ch;
  font-size: var(--text-body-lg);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

.hours__directions {
  align-self: flex-start;
}

@media (min-width: 1024px) {
  .hours__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
  }

  .hours__board {
    grid-column: 1 / span 5;
  }

  .hours__map {
    grid-column: 7 / -1;
  }
}
</style>
