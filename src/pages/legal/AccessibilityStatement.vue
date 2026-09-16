<script setup>
import { practice } from '../../config/practice.js'

document.title = 'Accessibility Statement | Orvia Dental'
</script>

<template>
  <section class="page-hero" aria-labelledby="accessibility-title">
    <div class="container">
      <h1 id="accessibility-title" class="page-hero__title">Accessibility statement</h1>
      <p class="page-hero__meta">Last reviewed September 16, 2026</p>
    </div>
  </section>

  <section class="legal" aria-label="Accessibility statement details">
    <div class="container legal__wrap">
      <div class="legal__body">
        <h2>Our commitment</h2>
        <p>
          {{ practice.name }} wants everyone, including people using a screen reader, voice
          control, keyboard-only navigation, or magnification, to be able to find our hours, check
          our prices, and book an appointment on this website. Accessibility is something we build
          in from the start, not something added on afterward.
        </p>

        <h2>Conformance target</h2>
        <p>
          This site is built to meet <strong>WCAG 2.1 Level AA</strong>, the Web Content
          Accessibility Guidelines used as the standard by the U.S. Department of Justice for ADA
          Title III compliance. That includes labeled form fields, descriptive alt text on images,
          visible keyboard focus, sufficient color contrast, and support for reduced-motion
          preferences.
        </p>

        <h2>What we've done</h2>
        <ul>
          <li>Every interactive control — buttons, menus, the FAQ accordion, form fields — can be operated from a keyboard alone, with a visible focus outline.</li>
          <li>Form fields carry real, associated labels, not placeholder text alone.</li>
          <li>Photos of our team, office, and treatments carry descriptive alt text.</li>
          <li>Text and interface colors are checked against WCAG AA contrast minimums.</li>
          <li>Animation is minimal by design, and pages respect your device's reduced-motion setting.</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          We're not aware of any accessibility barriers on this site right now. If you find one —
          a control that doesn't work with your keyboard, an image without a useful description,
          or anything else that gets in your way — please tell us so we can fix it.
        </p>

        <h2>Contact us about accessibility</h2>
        <p>
          Call us at
          <a class="figure legal__phone" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>
          or send a message through our <a class="legal__link" href="/contact/">contact page</a>
          and mention "accessibility" so it reaches the right person quickly. We aim to respond
          within two business days.
        </p>
      </div>

      <p class="legal__closing">
        General questions? Visit our <a class="legal__link" href="/contact/">contact page</a>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--space-8);
}

.page-hero__title {
  max-width: 20ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.page-hero__meta {
  margin-top: var(--space-4);
  font-size: var(--text-small);
  color: var(--color-ink-3);
}

.legal {
  background: var(--color-paper);
  padding-bottom: var(--section-open);
}

.legal__wrap {
  max-width: var(--measure);
  margin-inline: 0;
}

.legal__body h2 {
  margin-top: var(--space-10);
  font-size: var(--text-h3);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.legal__body h2:first-child {
  margin-top: 0;
}

.legal__body p {
  margin-top: var(--space-4);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.legal__body ul {
  margin: var(--space-4) 0 0;
  padding-left: 1.25rem;
  color: var(--color-ink-2);
}

.legal__body li {
  margin-top: var(--space-3);
  font-size: var(--text-body);
  line-height: var(--leading-body);
}

.legal__link {
  color: var(--color-accent);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.legal__link:hover {
  text-underline-offset: 5px;
}

.legal__closing {
  margin-top: var(--section-tight);
  padding-top: var(--space-6);
  border-top: var(--border-hair);
  font-size: var(--text-body);
  color: var(--color-ink-2);
}

.legal__phone {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
}
</style>
