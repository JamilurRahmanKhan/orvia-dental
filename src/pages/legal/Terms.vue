<script setup>
import { practice } from '../../config/practice.js'

document.title = 'Terms | Orvia Dental'
</script>

<template>
  <section class="page-hero" aria-labelledby="terms-title">
    <div class="container">
      <h1 id="terms-title" class="page-hero__title">Terms of use</h1>
      <p class="page-hero__meta">Last updated September 16, 2026</p>
    </div>
  </section>

  <section class="legal" aria-label="Terms of use details">
    <div class="container legal__wrap">
      <div class="legal__body">
        <h2>Acceptance of these terms</h2>
        <p>
          By using this website, you agree to these terms. If you don't agree with them, please
          don't use the site — you're always welcome to call us instead at
          <a class="figure legal__phone" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>.
        </p>

        <h2>Acceptable use</h2>
        <p>
          This site is here to help you learn about our practice, check prices, and book or
          request an appointment. Please don't use it to submit false information, attempt to
          access data that isn't yours, or interfere with the site's normal operation.
        </p>

        <h2>Medical disclaimer</h2>
        <p>
          Nothing on this website is medical advice, and none of it is a substitute for an
          in-person exam. Prices shown are estimates and ranges, not a quote for your specific
          case — every treatment is confirmed with a written estimate before we start. If you're
          in pain or think you have a dental emergency, call us or seek care right away rather than
          relying on anything you read here.
        </p>

        <h2>This is a demonstration website</h2>
        <p>
          This is a demonstration website. The reviews, before-and-after case photos, and team
          profiles shown here are sample content created to illustrate the site's design, and they
          do not represent real patients, outcomes, or testimonials. No claim about a dentist's
          skill or clinical ability is made or implied by this content, consistent with Texas State
          Board of Dental Examiners advertising rules, and no review shown here is a paid,
          incentivized, or fabricated review under the FTC's rule on fake reviews and testimonials.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The text, photos, and design of this site belong to {{ practice.name }} or are used with
          permission. Please don't copy or republish them without asking first.
        </p>

        <h2>No warranty</h2>
        <p>
          This site is provided as-is. We don't guarantee it will be error-free or uninterrupted,
          and we make no warranty about the outcome of any dental treatment described on it.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Texas, without regard to its
          conflict-of-law principles.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The date at the top of this page shows when
          they were last revised.
        </p>
      </div>

      <p class="legal__closing">
        Questions about these terms? Visit our <a class="legal__link" href="/contact/">contact page</a>.
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
