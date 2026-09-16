<script setup>
import { onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

const timeline = [
  {
    name: 'Arrival & paperwork',
    body: "Get there a few minutes early. New patient forms take about five minutes, or fill them out online first if you'd rather.",
  },
  {
    name: 'X-rays',
    body: 'A quick, low-dose set so we can see what’s going on beneath the surface.',
  },
  {
    name: 'Exam',
    body: 'A dentist looks at your teeth, gums, and bite, and walks you through anything they see.',
  },
  {
    name: 'Cleaning',
    body: 'Removes buildup and polishes. Takes about 20 minutes.',
  },
  {
    name: 'Treatment plan discussion',
    body: "If anything needs attention, you'll get it in writing before we touch a thing.",
  },
]

onMounted(() => {
  document.title = 'New Patients | Orvia Dental, Austin TX'
})
</script>

<template>
  <article>
    <section class="intro" aria-labelledby="new-patients-title">
      <div class="container intro__inner">
        <h1 id="new-patients-title" class="intro__title">Your first visit, start to finish.</h1>
        <p class="intro__lede">{{ practice.welcomeBack.text }}</p>
        <p class="intro__lede2">
          We'll start with a conversation, not a drill. Here's exactly what to expect, so nothing
          about the visit is a surprise.
        </p>
      </div>
    </section>

    <section class="offer" aria-labelledby="offer-title">
      <div class="container offer__inner">
        <h2 id="offer-title" class="offer__eyebrow">New patient offer</h2>
        <a class="ledger-row" href="/book/">
          <span class="ledger-row__name">{{ practice.firstVisit.label }}</span>
          <span class="ledger-row__leader" aria-hidden="true"></span>
          <span class="ledger-row__figure figure">{{ practice.firstVisit.price }}</span>
        </a>
        <p class="offer__meta">
          <span class="figure">{{ practice.firstVisit.duration }}</span> · insured? We check your
          plan first.
        </p>
      </div>
    </section>

    <section class="timeline" aria-labelledby="timeline-title">
      <div class="container timeline__layout">
        <h2 id="timeline-title" class="timeline__title">What happens, in order</h2>
        <ol class="timeline__list">
          <li v-for="(step, i) in timeline" :key="step.name" class="timeline__item">
            <span class="timeline__num figure" aria-hidden="true">{{ i + 1 }}</span>
            <div class="timeline__text">
              <p class="timeline__name">{{ step.name }}</p>
              <p class="timeline__body">{{ step.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="practical" aria-labelledby="practical-title">
      <div class="container">
        <h2 id="practical-title" class="visually-hidden">Practical details</h2>
        <div class="practical__grid">
          <div class="practical__item">
            <p class="practical__term">What to bring</p>
            <ul class="practical__list">
              <li>A photo ID</li>
              <li>Your insurance card, if you have one</li>
              <li>A list of any medications you're taking</li>
            </ul>
          </div>
          <div class="practical__item">
            <p class="practical__term">Parking &amp; finding us</p>
            <p class="practical__body">
              Free parking and step-free entry are steps from the door.
              <a class="link-arrow" href="/contact/">
                Full directions
                <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
              </a>
            </p>
          </div>
          <div class="practical__item">
            <p class="practical__term">Insurance</p>
            <p class="practical__body">
              Not sure what's covered?
              <a class="link-arrow" href="/insurance-and-financing/">
                Search your plan
                <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="nervous" aria-labelledby="nervous-title">
      <div class="container nervous__inner">
        <h2 id="nervous-title" class="nervous__title">
          Nervous about visiting? Haven't been in years?
        </h2>
        <p class="nervous__body">
          No lectures, and no judgment about how long it's been. We tell you what we see, ask
          before we do anything, and numb first every time. If you'd like more than that, sedation
          options are available for any visit, and you can stop at any point.
        </p>
        <a class="link-arrow nervous__link" href="/treatments/sedation-dentistry/">
          See sedation options
          <ArrowRight :size="20" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="children" aria-labelledby="children-title">
      <div class="container children__inner">
        <h2 id="children-title" class="visually-hidden">Bringing children</h2>
        <p class="children__body">
          Bringing children? We see kids from their first tooth, and first visits are short and
          mostly about getting comfortable.
        </p>
        <a class="link-arrow" href="/treatments/childrens-dentistry/">
          Children's dentistry
          <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
    </section>

    <FinalCta />
  </article>
</template>

<style scoped>
.intro {
  background: var(--color-paper);
  padding-block: var(--space-16) var(--section-tight);
}

.intro__inner {
  max-width: 64ch;
  margin-inline: 0;
}

.intro__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.intro__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-medium);
  line-height: 1.5;
  color: var(--color-ink);
}

.intro__lede2 {
  margin-top: var(--space-3);
  max-width: var(--measure-narrow);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Offer ---- */
.offer {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.offer__inner {
  max-width: 60ch;
  margin-inline: 0;
}

.offer__eyebrow {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

.ledger-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-top: var(--space-4);
  padding: var(--space-5) var(--space-3);
  margin-inline: calc(-1 * var(--space-3));
  border-top: var(--border-hair);
  border-bottom: var(--border-hair);
  color: inherit;
  text-decoration: none;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.ledger-row:hover,
.ledger-row:focus-visible {
  background: var(--color-paper);
}

.ledger-row__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
}

.ledger-row__leader {
  flex: 1;
  min-width: var(--space-6);
  border-bottom: var(--border-leader);
  transform: translateY(-4px);
}

.ledger-row__figure {
  font-size: var(--text-figure-xl);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  white-space: nowrap;
}

.offer__meta {
  margin-top: var(--space-3);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

/* ---- Timeline (genuine sequence: numbering is allowed here) ---- */
.timeline {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.timeline__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.timeline__list {
  margin: var(--space-10) 0 0;
  padding: 0;
  list-style: none;
  max-width: 60ch;
}

.timeline__item {
  display: flex;
  gap: var(--space-5);
  padding: var(--space-6) 0;
  border-top: var(--border-hair);
}

.timeline__list .timeline__item:last-child {
  border-bottom: var(--border-hair);
}

.timeline__num {
  flex-shrink: 0;
  font-size: var(--text-h3);
  font-weight: var(--weight-medium);
  color: var(--color-ink-3);
  min-width: 1.5ch;
}

.timeline__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.timeline__body {
  margin-top: var(--space-2);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Practical details ---- */
.practical {
  background: var(--color-sunk);
  padding-block: var(--section-base);
}

.practical__grid {
  display: grid;
  gap: var(--space-10);
}

.practical__term {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.practical__list {
  margin: var(--space-3) 0 0;
  padding-left: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.practical__list li + li {
  margin-top: var(--space-1);
}

.practical__body {
  margin-top: var(--space-3);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

/* ---- Nervous / no-judgment block ---- */
.nervous {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.nervous__inner {
  max-width: 68ch;
  margin-inline: 0;
}

.nervous__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.nervous__body {
  margin-top: var(--space-5);
  max-width: var(--measure);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.nervous__link {
  display: inline-flex;
  margin-top: var(--space-6);
  font-size: var(--text-body-lg);
}

/* ---- Children ---- */
.children {
  background: var(--color-sunk);
  padding-block: var(--section-tight);
}

.children__inner {
  max-width: 60ch;
  margin-inline: 0;
}

.children__body {
  font-size: var(--text-body-lg);
  color: var(--color-ink);
}

.children .link-arrow {
  margin-top: var(--space-4);
}

@media (min-width: 768px) {
  .practical__grid {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gap);
  }
}

/* Ledger row: drop the leader and stack name/figure when space is tight */
@media (max-width: 479px) {
  .ledger-row {
    flex-wrap: wrap;
    row-gap: var(--space-1);
  }

  .ledger-row__leader {
    display: none;
  }

  .ledger-row__figure {
    margin-left: auto;
  }
}
</style>
