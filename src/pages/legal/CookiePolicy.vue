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
    <div class="container legal__grid">
      <nav class="legal__nav" aria-label="On this page">
        <p class="legal__nav-label">On this page</p>
        <ul class="legal__nav-list">
          <li><a class="legal__nav-link" href="#what-this-covers">What this policy covers</a></li>
          <li><a class="legal__nav-link" href="#what-we-use">What we use</a></li>
          <li><a class="legal__nav-link" href="#what-we-dont-use">What we don't use</a></li>
          <li><a class="legal__nav-link" href="#analytics">Analytics</a></li>
          <li><a class="legal__nav-link" href="#managing-cookies">Managing cookies</a></li>
          <li><a class="legal__nav-link" href="#changes">Changes to this policy</a></li>
        </ul>
      </nav>

      <div class="legal__content">
        <div class="legal__body">
          <h2 id="what-this-covers">What this policy covers</h2>
          <p>
            Cookies are small pieces of data a website can store in your browser. This page explains
            what {{ practice.name }}'s website stores and why.
          </p>

          <h2 id="what-we-use">What we use</h2>
          <p>
            We use only essential cookies and local browser storage necessary for the site to
            function — for example, remembering that you've closed a banner, or keeping your place
            in a multi-step form so you don't lose your progress. These aren't used to track you
            across other websites.
          </p>

          <h2 id="what-we-dont-use">What we don't use</h2>
          <p>
            We do not use advertising or tracking cookies. There is no Meta Pixel, Google Ads tag, or
            similar third-party ad-tracking technology on this site — including on our booking and
            contact pages, where we've deliberately kept ad networks out.
          </p>

          <h2 id="analytics">Analytics</h2>
          <p>
            Any analytics we run is server-side and looks at aggregate information like page views,
            not individual visitors, and doesn't rely on tracking cookies. See our
            <a class="legal__link" href="/privacy-policy/">privacy policy</a> for more detail on how
            we use website data generally.
          </p>

          <h2 id="managing-cookies">Managing cookies</h2>
          <p>
            Because we don't use advertising cookies, there's nothing to opt out of on this site
            beyond your browser's own settings. Most browsers let you view, block, or delete cookies
            from their privacy or security settings if you'd like to clear what little this site
            stores.
          </p>

          <h2 id="changes">Changes to this policy</h2>
          <p>
            If what this site stores in your browser ever changes, we'll update this page and the
            date above.
          </p>
        </div>

        <p class="legal__closing">
          Questions about cookies on this site? Visit our <a class="legal__link" href="/contact/">contact page</a>.
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
