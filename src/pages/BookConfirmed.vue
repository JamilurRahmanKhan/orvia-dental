<script setup>
import { ref, onMounted } from 'vue'
import { CalendarCheck, Phone } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
import { setMeta } from '../lib/meta.js'

const data = ref(null)

onMounted(() => {
  setMeta(`Appointment ${data.value?.fallback ? 'requested' : 'confirmed'} | ${practice.name}`)
  const raw = sessionStorage.getItem('orvia-booking-confirmation')
  if (raw) {
    try {
      data.value = JSON.parse(raw)
    } catch {
      data.value = null
    }
  }
})

function calendarLink() {
  if (!data.value?.date || !data.value?.time) return null
  const [h, m] = data.value.time.split(':').map(Number)
  const start = new Date(`${data.value.date}T00:00:00`)
  start.setHours(h, m, 0, 0)
  const end = new Date(start.getTime() + 30 * 60000)
  const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '')
  const text = encodeURIComponent(`${data.value.reason} — ${practice.name}`)
  const details = encodeURIComponent(`Appointment at ${practice.name}, ${practice.address}`)
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${fmt(start)}/${fmt(end)}&details=${details}&location=${encodeURIComponent(practice.address)}`
}
</script>

<template>
  <div class="confirmed container">
    <span class="confirmed__icon"><CalendarCheck :size="32" :stroke-width="1.5" aria-hidden="true" /></span>

    <template v-if="data && data.fallback">
      <h1 class="confirmed__title">Got it — we'll confirm your time.</h1>
      <p class="confirmed__lede">
        Thanks, {{ data.name }}. We'll text or call you within one business hour to lock in your
        {{ data.reason.toLowerCase() }} for {{ data.date || 'your preferred day' }}
        ({{ data.timePreference || 'flexible' }}).
      </p>
    </template>
    <template v-else-if="data">
      <h1 class="confirmed__title">You're booked.</h1>
      <p class="confirmed__lede">
        {{ data.name }}, your {{ data.reason.toLowerCase() }} is set for
        <span class="figure">{{ data.date }}</span> at <span class="figure">{{ data.time }}</span>.
      </p>
      <a v-if="calendarLink()" class="link-arrow" :href="calendarLink()" target="_blank" rel="noopener">
        Add to Google Calendar
        <span class="visually-hidden">(opens in a new tab)</span>
      </a>
    </template>
    <template v-else>
      <h1 class="confirmed__title">All set.</h1>
      <p class="confirmed__lede">If you booked an appointment, we've got it. Call us any time if you need to check details.</p>
    </template>

    <p v-if="data?.demo" class="confirmed__demo">
      Demo mode: this site isn't connected to a live calendar yet, so nothing was actually booked. See
      <code>google-apps-script/README.md</code> to turn this on for real.
    </p>

    <div class="confirmed__next">
      <h2 class="confirmed__next-title">What's next</h2>
      <ul>
        <li>We'll text a reminder before your visit.</li>
        <li><a href="/new-patients/">New patient? Fill out your intake info ahead of time →</a></li>
        <li><a href="/contact/">Get directions and parking info →</a></li>
      </ul>
    </div>

    <a class="link-arrow" :href="practice.phoneHref">
      <Phone :size="16" :stroke-width="1.75" aria-hidden="true" />
      Need to change something? Call <span class="figure">{{ practice.phoneDisplay }}</span>
    </a>
  </div>
</template>

<style scoped>
.confirmed {
  max-width: 560px;
  padding-block: var(--section-base);
}

.confirmed__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-round);
  background: var(--color-accent-tint);
  color: var(--color-accent);
  margin-bottom: var(--space-6);
}

.confirmed__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-heading);
}

.confirmed__lede {
  margin-top: var(--space-4);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.confirmed__demo {
  margin-top: var(--space-6);
  padding: var(--space-4);
  background: var(--color-sunk);
  border-radius: var(--radius-control);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.confirmed__demo code {
  font-family: var(--font-figure);
}

.confirmed__next {
  margin: var(--space-10) 0;
  padding-top: var(--space-8);
  border-top: var(--border-hair);
}

.confirmed__next-title {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-4);
}

.confirmed__next ul {
  display: grid;
  gap: var(--space-3);
  padding: 0;
  list-style: none;
  color: var(--color-ink-2);
}

.confirmed__next a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
