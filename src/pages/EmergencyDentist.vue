<script setup>
import { onMounted } from 'vue'
import { Phone, CalendarDays } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'
import { treatmentContent } from '../config/treatmentContent.js'
import { setMeta } from '../lib/meta.js'

const status = openStatus()
const content = treatmentContent.emergency

const emergencies = [
  'A knocked-out tooth',
  'Severe pain or swelling',
  'A broken or cracked tooth',
  'A lost filling or crown',
  'An abscess',
  "Bleeding that won't stop",
]

onMounted(() => {
  setMeta(
    `Emergency Dentist in ${practice.city}, TX — Same-Day Appointments | ${practice.name}`,
    `Emergency dental care in ${practice.city}. Call ${practice.phoneDisplay} for a same-day appointment. Same-day exam from ${practice.emergencyVisit.price}.`
  )
})
</script>

<template>
  <div class="emergency-page">
    <!-- Call block: phone is the first and largest element, above everything -->
    <section class="call-block" :class="{ 'call-block--closed': !status.open }">
      <div class="container call-block__inner">
        <h1 class="call-block__title">Emergency dentist in Austin — same-day appointments</h1>
        <p class="call-block__status">
          <span class="dot" :class="{ 'dot--closed': !status.open }" aria-hidden="true"></span>
          {{ status.open ? "We're open now" : "We're closed right now" }}
        </p>
        <a class="call-block__number figure" :href="practice.phoneHref">
          <Phone :size="32" :stroke-width="1.75" aria-hidden="true" />
          {{ practice.phoneDisplay }}
        </a>
        <p class="call-block__prompt">Call now for a same-day appointment.</p>
        <a class="btn btn--primary btn--lg call-block__book" href="/book/?reason=emergency">
          <CalendarDays :size="20" :stroke-width="1.75" aria-hidden="true" />
          Or book an emergency slot online
        </a>
      </div>
    </section>

    <div class="container page">
      <section class="block">
        <h2 class="block__title">What counts as a dental emergency</h2>
        <ul class="checklist">
          <li v-for="item in emergencies" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="block">
        <h2 class="block__title">What to do right now, before you get here</h2>
        <dl class="firstaid">
          <div class="firstaid__row">
            <dt>Knocked-out tooth</dt>
            <dd>Pick it up by the crown, not the root. Rinse gently if dirty. Try to place it back in the socket, or keep it in milk. Get to us within 30 minutes if you can.</dd>
          </div>
          <div class="firstaid__row">
            <dt>Severe pain</dt>
            <dd>Rinse with warm salt water. An over-the-counter pain reliever can help until you're seen — don't put aspirin directly on the gum, it can burn tissue.</dd>
          </div>
          <div class="firstaid__row">
            <dt>Broken or chipped tooth</dt>
            <dd>Rinse your mouth and save any broken pieces if you can. A cold compress on the outside of your cheek reduces swelling.</dd>
          </div>
          <div class="firstaid__row">
            <dt>Lost filling or crown</dt>
            <dd>Keep the crown if you have it. Over-the-counter dental cement (from a pharmacy) can hold it temporarily.</dd>
          </div>
          <div class="firstaid__row">
            <dt>Bleeding that won't stop</dt>
            <dd>Apply firm, steady pressure with clean gauze for 15 minutes. If it hasn't stopped after that, call us or go to an ER.</dd>
          </div>
        </dl>
      </section>

      <section class="block">
        <h2 class="block__title">Same-day availability</h2>
        <p>
          We hold emergency slots every day we're open. Call us — we'll ask a few quick questions
          and get you in the same day.
        </p>
      </section>

      <section class="block">
        <h2 class="block__title">Cost</h2>
        <p>An emergency exam and X-ray costs <span class="figure">{{ practice.emergencyVisit.price }}</span>. {{ content.costFactors }} <span v-if="practice.demo">Sample price for demo.</span></p>
      </section>

      <section class="block">
        <h2 class="block__title">After hours</h2>
        <p>Call anyway — the voicemail explains same-day options. For a true medical emergency (uncontrolled bleeding, facial swelling affecting breathing or swallowing, a jaw fracture) go to an ER first, then call us once you're stable.</p>
      </section>

      <section class="block">
        <h2 class="block__title">Questions</h2>
        <div class="mini-faq">
          <div v-for="f in content.faqs" :key="f.q" class="mini-faq__item">
            <p class="mini-faq__q">{{ f.q }}</p>
            <p class="mini-faq__a">{{ f.a }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Call block, repeated -->
    <section class="call-block call-block--repeat">
      <div class="container call-block__inner">
        <a class="call-block__number figure" :href="practice.phoneHref">
          <Phone :size="28" :stroke-width="1.75" aria-hidden="true" />
          {{ practice.phoneDisplay }}
        </a>
        <p class="call-block__prompt">Call now — we'll get you in today.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.emergency-page {
  /* deliberately light: no hero image, minimal weight per spec */
}

.call-block {
  background: var(--color-signal);
  color: var(--color-on-accent);
  padding-block: var(--space-10);
}

.call-block--repeat {
  padding-block: var(--space-8);
}

.call-block__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.call-block__title {
  max-width: 20ch;
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

.call-block__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
}

.call-block__status .dot {
  background: var(--color-on-accent);
}

.call-block__status .dot--closed {
  background: transparent;
  box-shadow: inset 0 0 0 1.5px var(--color-on-accent);
}

.call-block__number {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  color: var(--color-on-accent);
  text-decoration: none;
  line-height: 1;
}

.call-block__prompt {
  font-size: var(--text-body-lg);
}

.call-block__book {
  margin-top: var(--space-2);
  background: var(--color-on-accent);
  color: var(--color-signal);
}

.call-block__book:hover {
  background: var(--color-paper);
}

.page {
  padding-block: var(--section-base);
  display: grid;
  gap: var(--space-12);
  max-width: 70ch;
  margin-inline: 0;
}

.block__title {
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-4);
}

.checklist {
  display: grid;
  gap: var(--space-2);
  padding-left: 1.2em;
  color: var(--color-ink-2);
}

.firstaid {
  display: grid;
  gap: var(--space-6);
}

.firstaid__row dt {
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.firstaid__row dd {
  margin: var(--space-1) 0 0;
  color: var(--color-ink-2);
  line-height: var(--leading-body);
}

.mini-faq {
  display: grid;
  gap: var(--space-6);
}

.mini-faq__q {
  font-weight: var(--weight-semibold);
}

.mini-faq__a {
  margin-top: var(--space-1);
  color: var(--color-ink-2);
}
</style>
