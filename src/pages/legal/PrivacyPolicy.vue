<script setup>
import { practice } from '../../config/practice.js'

document.title = 'Privacy Policy | Orvia Dental'
</script>

<template>
  <section class="page-hero" aria-labelledby="privacy-title">
    <div class="container">
      <h1 id="privacy-title" class="page-hero__title">Privacy policy</h1>
      <p class="page-hero__meta">Last updated September 16, 2026</p>
    </div>
  </section>

  <section class="legal" aria-label="Privacy policy details">
    <div class="container legal__grid">
      <nav class="legal__nav" aria-label="On this page">
        <p class="legal__nav-label">On this page</p>
        <ul class="legal__nav-list">
          <li><a class="legal__nav-link" href="#overview">Overview</a></li>
          <li><a class="legal__nav-link" href="#information-you-give-us">Information you give us</a></li>
          <li><a class="legal__nav-link" href="#appointment-requests">How appointment requests are handled</a></li>
          <li><a class="legal__nav-link" href="#analytics">Website analytics</a></li>
          <li><a class="legal__nav-link" href="#cookies">Cookies</a></li>
          <li><a class="legal__nav-link" href="#how-we-protect-it">How we protect your information</a></li>
          <li><a class="legal__nav-link" href="#your-rights">Your rights</a></li>
          <li><a class="legal__nav-link" href="#childrens-privacy">Children's privacy</a></li>
          <li><a class="legal__nav-link" href="#changes">Changes to this policy</a></li>
        </ul>
      </nav>

      <div class="legal__content">
        <div class="legal__body">
          <h2 id="overview">Overview</h2>
          <p>
            This policy explains what information {{ practice.name }}'s website collects, how we
            use it, and the choices you have. It covers this website only. It does not cover the
            health records we create when you're treated in the office — those are covered by our
            <a class="legal__link" href="/notice-of-privacy-practices/">Notice of Privacy Practices</a>.
          </p>

          <h2 id="information-you-give-us">Information you give us directly</h2>
          <p>
            When you use the contact or new-patient form, we collect what you type in: your name,
            phone number or email, and the reason for your message. We use this only to respond to
            you, schedule your visit, or answer your question.
          </p>

          <h2 id="appointment-requests">How appointment and contact requests are handled</h2>
          <p>
            This site does not run on a separate patient-management server. When you submit the
            contact or booking form, the submission is sent directly to a Google Sheet and a Google
            Calendar that the practice controls, so our front desk sees new requests right away. We
            don't share that information with an outside marketing company, and it isn't sold.
          </p>

          <h2 id="analytics">Website analytics</h2>
          <p>
            We use server-side analytics to understand which pages are useful — things like page
            views and general location by city, not anything that identifies you personally. We do
            not run advertising pixels (such as a Meta Pixel or Google Ads tag) on our booking,
            contact, or intake pages, because those pages can involve health-related information and
            we'd rather keep third-party ad networks away from them entirely.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            The site uses only the cookies and local storage needed to make it work — for example,
            remembering that you closed a banner. Details are in our
            <a class="legal__link" href="/cookie-policy/">cookie policy</a>. We do not use
            advertising or cross-site tracking cookies.
          </p>

          <h2 id="how-we-protect-it">How we protect your information</h2>
          <p>
            The site is served over an encrypted connection (HTTPS), and access to the Google Sheet
            and Calendar that receive form submissions is limited to practice staff.
          </p>

          <h2 id="your-rights">Your rights</h2>
          <p>
            You can ask us what information we hold about you from a website form, ask us to correct
            it, or ask us to delete it, by contacting us using the details below. If you're asking
            about your dental treatment records rather than a website form, see the rights described
            in our <a class="legal__link" href="/notice-of-privacy-practices/">Notice of Privacy Practices</a>
            instead.
          </p>

          <h2 id="childrens-privacy">Children's privacy</h2>
          <p>
            This website is intended for parents and guardians managing appointments on behalf of
            children. We don't knowingly collect information submitted directly by children through
            this site.
          </p>

          <h2 id="changes">Changes to this policy</h2>
          <p>
            If we change how the site collects or uses information, we'll update this page and the
            date above.
          </p>
        </div>

        <p class="legal__closing">
          Questions about this policy? Call
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
