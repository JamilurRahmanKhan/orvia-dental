<script setup>
import { practice } from '../../config/practice.js'

document.title = 'Cookie Policy | Orvia Dental'
</script>

<template>
  <section class="page-hero" aria-labelledby="cookies-title">
    <div class="container">
      <h1 id="cookies-title" class="page-hero__title">Cookie policy</h1>
      <p class="page-hero__meta">Last updated September 16, 2026</p>
    </div>
  </section>

  <section class="legal" aria-label="Cookie policy details">
    <div class="container legal__wrap">
      <div class="legal__body">
        <h2>What this policy covers</h2>
        <p>
          Cookies are small pieces of data a website can store in your browser. This page explains
          what {{ practice.name }}'s website stores and why.
        </p>

        <h2>What we use</h2>
        <p>
          We use only essential cookies and local browser storage necessary for the site to
          function — for example, remembering that you've closed a banner, or keeping your place
          in a multi-step form so you don't lose your progress. These aren't used to track you
          across other websites.
        </p>

        <h2>What we don't use</h2>
        <p>
          We do not use advertising or tracking cookies. There is no Meta Pixel, Google Ads tag, or
          similar third-party ad-tracking technology on this site — including on our booking and
          contact pages, where we've deliberately kept ad networks out.
        </p>

        <h2>Analytics</h2>
        <p>
          Any analytics we run is server-side and looks at aggregate information like page views,
          not individual visitors, and doesn't rely on tracking cookies. See our
          <a class="legal__link" href="/privacy-policy/">privacy policy</a> for more detail on how
          we use website data generally.
        </p>

        <h2>Managing cookies</h2>
        <p>
          Because we don't use advertising cookies, there's nothing to opt out of on this site
          beyond your browser's own settings. Most browsers let you view, block, or delete cookies
          from their privacy or security settings if you'd like to clear what little this site
          stores.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If what this site stores in your browser ever changes, we'll update this page and the
          date above.
        </p>
      </div>

      <p class="legal__closing">
        Questions about cookies on this site? Visit our <a class="legal__link" href="/contact/">contact page</a>.
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
</style>
