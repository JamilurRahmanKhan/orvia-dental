<script setup>
import { practice } from '../config/practice.js'

document.title = `Page not found | ${practice.name}`

const links = [
  { label: 'Home', href: '/' },
  { label: 'Treatments & prices', href: '/treatments/' },
  { label: 'Book an appointment', href: '/book/' },
  { label: 'New patients', href: '/new-patients/' },
  { label: 'Insurance & financing', href: '/insurance-and-financing/' },
  { label: 'Contact & hours', href: '/contact/' },
]
</script>

<template>
  <section class="notfound" aria-labelledby="notfound-title">
    <div class="container notfound__wrap">
      <p class="notfound__eyebrow figure" aria-hidden="true">404 — page not found</p>
      <h1 id="notfound-title" class="notfound__title">We can't find that page, but we can get you where you're going.</h1>
      <p class="notfound__lede">
        The link may be out of date, or the address may be off by a little. Here's where people
        usually end up next.
      </p>

      <ul class="notfound__list">
        <li v-for="link in links" :key="link.href" class="notfound__row">
          <a :href="link.href" class="notfound__link">{{ link.label }}</a>
        </li>
      </ul>

      <p class="notfound__call">
        Rather talk to someone?
        <a class="link-arrow" :href="practice.phoneHref">
          Call <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.notfound {
  padding-block: var(--space-16) var(--section-open);
}

.notfound__wrap {
  max-width: var(--measure-narrow);
  margin-inline: 0;
}

.notfound__eyebrow {
  font-size: var(--text-small);
  color: var(--color-ink-3);
  letter-spacing: var(--tracking-figure);
}

.notfound__title {
  margin-top: var(--space-3);
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.notfound__lede {
  margin-top: var(--space-4);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.notfound__list {
  margin: var(--space-8) 0 0;
  padding: 0;
  list-style: none;
  border-top: var(--border-hair);
}

.notfound__row {
  border-bottom: var(--border-hair);
}

.notfound__link {
  display: flex;
  align-items: center;
  min-height: 56px;
  font-size: var(--text-body-lg);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: none;
}

.notfound__link:hover {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.notfound__call {
  margin-top: var(--space-8);
  font-size: var(--text-body);
  color: var(--color-ink-2);
}
</style>
