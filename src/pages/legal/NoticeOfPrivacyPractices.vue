<script setup>
import { practice } from '../../config/practice.js'

document.title = 'Notice of Privacy Practices | Orvia Dental'
</script>

<template>
  <section class="page-hero" aria-labelledby="npp-title">
    <div class="container">
      <h1 id="npp-title" class="page-hero__title">Notice of Privacy Practices</h1>
      <p class="page-hero__meta">Last updated September 16, 2026</p>
    </div>
  </section>

  <section class="legal" aria-label="Notice of Privacy Practices details">
    <div class="container legal__grid">
      <nav class="legal__nav" aria-label="On this page">
        <p class="legal__nav-label">On this page</p>
        <ul class="legal__nav-list">
          <li><a class="legal__nav-link" href="#how-we-use-your-records">How we use your dental records</a></li>
          <li><a class="legal__nav-link" href="#your-rights">Your rights</a></li>
          <li><a class="legal__nav-link" href="#our-duties">Our duties</a></li>
          <li><a class="legal__nav-link" href="#nondiscrimination">Notice of nondiscrimination</a></li>
          <li><a class="legal__nav-link" href="#language-assistance">Language assistance</a></li>
          <li><a class="legal__nav-link" href="#changes">Changes to this notice</a></li>
        </ul>
      </nav>

      <div class="legal__content">
        <div class="legal__body">
          <p class="legal__intro">
            This notice describes how medical information about you may be used and disclosed, and
            how you can get access to it. Please review it carefully. This notice applies to the
            treatment records created at {{ practice.name }} — for how our <em>website</em> handles
            information, see our <a class="legal__link" href="/privacy-policy/">privacy policy</a>
            instead.
          </p>

          <h2 id="how-we-use-your-records">How we may use and disclose your health information</h2>
          <p>
            Federal law (HIPAA) allows us to use and share your health information for:
          </p>
          <ul>
            <li>
              <strong>Treatment</strong> — coordinating your care among our dentists, hygienists, and
              any specialist we refer you to.
            </li>
            <li>
              <strong>Payment</strong> — billing you or your insurance plan, verifying coverage
              before your visit, and collecting payment for services.
            </li>
            <li>
              <strong>Healthcare operations</strong> — quality review, staff training, and the
              day-to-day administration of the practice.
            </li>
          </ul>
          <p>
            We may also share limited information as required by law, for public health reporting,
            or to send appointment reminders — reminder texts and calls are limited to your
            appointment details and require your consent, which you can withdraw at any time.
          </p>

          <h2 id="your-rights">Your rights</h2>
          <ul>
            <li><strong>Access.</strong> You can ask to see or get a copy of your dental records.</li>
            <li><strong>Amendment.</strong> You can ask us to correct information you believe is wrong or incomplete.</li>
            <li><strong>Restriction.</strong> You can ask us to limit what we share, though we aren't always required to agree.</li>
            <li><strong>Confidential communication.</strong> You can ask us to contact you in a specific way or at a different address.</li>
            <li><strong>Paper copy.</strong> You can ask for a paper copy of this notice at any time, even if you agreed to receive it electronically.</li>
            <li>
              <strong>File a complaint.</strong> You can file a complaint with us or with the
              U.S. Department of Health and Human Services, Office for Civil Rights, if you believe
              your privacy rights were violated. We will not retaliate against you for filing one.
            </li>
          </ul>

          <h2 id="our-duties">Our duties</h2>
          <p>
            We're required by law to keep your health information private, give you this notice of
            our legal duties and privacy practices, and follow the terms currently in effect.
          </p>

          <h2 id="nondiscrimination">Notice of nondiscrimination</h2>
          <p>
            {{ practice.name }} complies with applicable federal civil rights laws and does not
            discriminate on the basis of race, color, national origin, age, disability, or sex.
            We do not exclude people or treat them differently because of these characteristics.
          </p>

          <h2 id="language-assistance">Language assistance and auxiliary aids</h2>
          <p>
            If you need help understanding this notice, or have trouble reading, hearing, or
            speaking English, we provide language assistance services and auxiliary aids free of
            charge. Our team includes Spanish-speaking staff, and we can arrange other language
            assistance or aids for people with disabilities on request — just let us know when you
            call or book.
          </p>

          <h2 id="changes">Changes to this notice</h2>
          <p>
            We reserve the right to change this notice and to make the revised notice apply to
            health information we already have. A current copy will always be available on this
            page and at the front desk.
          </p>
        </div>

        <p class="legal__closing">
          Questions about your privacy rights? Call
          <a class="figure legal__phone" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>
          or visit our <a class="legal__link" href="/contact/">contact page</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--space-8);
}

.page-hero__title {
  max-width: 22ch;
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

.legal__grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-inline: 0;
}

/* ---- On-page nav (same pattern as the FAQ jump nav) ---- */
.legal__nav-label {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  color: var(--color-ink-3);
}

.legal__nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.legal__nav-link {
  display: inline-flex;
  align-items: center;
  min-height: var(--tap-min);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: underline;
  text-decoration-color: var(--color-rule-strong);
  text-underline-offset: 3px;
}

.legal__nav-link:hover {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}

.legal__content {
  max-width: var(--measure);
}

.legal__intro {
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.legal__body h2 {
  margin-top: var(--space-10);
  font-size: var(--text-h3);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
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

.legal__body li strong {
  color: var(--color-ink);
  font-weight: var(--weight-semibold);
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

@media (min-width: 1024px) {
  .legal__grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .legal__nav {
    grid-column: 1 / span 3;
    position: sticky;
    top: calc(64px + var(--space-8));
  }

  .legal__nav-list {
    flex-direction: column;
  }

  .legal__content {
    grid-column: 5 / -1;
  }
}
</style>
