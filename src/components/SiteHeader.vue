<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { Phone, Menu, X } from 'lucide-vue-next'
import { practice, openStatus } from '../config/practice.js'

const status = openStatus()
const nav = [
  { label: 'Treatments', href: '/treatments/' },
  { label: 'New patients', href: '/new-patients/' },
  { label: 'About', href: '/about/' },
  { label: 'Smile gallery', href: '/smile-gallery/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
]

const compact = ref(false)
const open = ref(false)
const menuButton = ref(null)
const panel = ref(null)
const firstAction = ref(null)

function onScroll() {
  compact.value = window.scrollY > 100
}

async function openMenu() {
  open.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  firstAction.value?.focus()
}

function closeMenu() {
  open.value = false
  document.body.style.overflow = ''
  menuButton.value?.focus()
}

function onKeydown(e) {
  if (!open.value) return
  if (e.key === 'Escape') {
    closeMenu()
    return
  }
  if (e.key !== 'Tab' || !panel.value) return
  const focusable = panel.value.querySelectorAll('a[href], button')
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="utility">
    <div class="container utility__inner">
      <span class="utility__status">
        <span class="dot" :class="{ 'dot--closed': !status.open }" aria-hidden="true"></span>
        <span class="figure">{{ status.label }}</span>
      </span>
      <a class="utility__link" :href="practice.mapUrl">{{ practice.address }}</a>
      <a class="utility__link figure" :href="practice.phoneHref">{{ practice.phoneDisplay }}</a>
      <span class="utility__note">New patients welcome</span>
    </div>
  </div>

  <header class="header" :class="{ 'header--compact': compact }">
    <div class="container header__inner">
      <a class="logo" href="/">{{ practice.name }}</a>

      <nav class="header__nav" aria-label="Primary">
        <ul>
          <li v-for="item in nav" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <a class="header__phone" :href="practice.phoneHref">
          <Phone :size="18" :stroke-width="1.75" aria-hidden="true" />
          <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
        <a class="btn btn--primary header__book" href="/book/">Book appointment</a>
        <a class="icon-btn header__call" :href="practice.phoneHref" :aria-label="`Call ${practice.phoneDisplay}`">
          <Phone :size="22" :stroke-width="1.75" aria-hidden="true" />
        </a>
        <button
          ref="menuButton"
          class="icon-btn header__menu"
          type="button"
          aria-haspopup="dialog"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="openMenu"
        >
          <Menu :size="24" :stroke-width="1.75" aria-hidden="true" />
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
    </div>
  </header>

  <Transition name="menu">
    <div
      v-if="open"
      id="mobile-menu"
      ref="panel"
      class="menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div class="menu__top">
        <span class="logo">{{ practice.name }}</span>
        <button class="icon-btn" type="button" aria-label="Close menu" @click="closeMenu">
          <X :size="24" :stroke-width="1.75" aria-hidden="true" />
        </button>
      </div>

      <div class="menu__actions">
        <a ref="firstAction" class="btn btn--secondary menu__action" :href="practice.phoneHref">
          <Phone :size="22" :stroke-width="1.75" aria-hidden="true" />
          Call <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
        <a class="btn btn--primary menu__action" href="/book/">Book appointment</a>
      </div>

      <nav aria-label="Mobile">
        <ul class="menu__nav">
          <li v-for="item in nav" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>

      <p class="menu__meta">
        <span class="figure">{{ status.label }}</span>
        <span>{{ practice.address }}</span>
      </p>
    </div>
  </Transition>
</template>

<style scoped>
/* ---- Utility bar (≥768 only) ---- */
.utility {
  display: none;
  background: var(--color-sunk);
  font-size: var(--text-caption);
  color: var(--color-ink-2);
}

.utility__inner {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  min-height: 36px;
}

.utility__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-ink);
}

.utility__link {
  text-decoration: none;
}

.utility__link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.utility__note {
  margin-left: auto;
}

/* Tablet: status + phone only, so the bar stays one line */
.utility__link:not(.figure),
.utility__note {
  display: none;
}

.utility__link.figure {
  margin-left: auto;
}

@media (min-width: 1024px) {
  .utility__link:not(.figure),
  .utility__note {
    display: inline;
  }

  .utility__link.figure {
    margin-left: 0;
  }
}

/* ---- Header ---- */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: var(--color-paper);
  border-bottom: var(--border-hair);
  box-shadow: 0 0 0 rgb(27 31 29 / 0);
  transition: box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}

.header--compact {
  border-bottom-color: transparent;
  box-shadow: var(--shadow-sm);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  min-height: 64px;
  transition: min-height var(--dur-base) var(--ease-out);
}

.logo {
  display: inline-flex;
  align-items: center;
  min-height: var(--tap-min);
  font-size: var(--text-h4);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-heading);
  text-decoration: none;
  white-space: nowrap;
}

.header__nav {
  display: none;
}

.header__nav ul {
  display: flex;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
  list-style: none;
}

.header__nav a {
  display: inline-flex;
  align-items: center;
  min-height: var(--tap-min);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  text-decoration: none;
  text-underline-offset: 6px;
}

.header__nav a:hover {
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 2px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}

.header__phone {
  display: none;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--tap-min);
  font-size: var(--text-small);
  text-decoration: none;
}

.header__phone:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.header__book {
  display: none;
}

/* ---- Mobile menu ---- */
.menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-menu);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-3) var(--gutter) var(--space-8);
  background: var(--color-paper);
  overflow-y: auto;
}

.menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
}

.menu__actions {
  display: grid;
  gap: var(--space-3);
}

.menu__action {
  min-height: 56px;
  font-size: var(--text-body);
}

.menu__nav {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu__nav a {
  display: flex;
  align-items: center;
  min-height: 56px;
  border-bottom: var(--border-hair);
  font-size: var(--text-h3);
  font-weight: var(--weight-semibold);
  text-decoration: none;
}

.menu__meta {
  display: grid;
  gap: var(--space-1);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (min-width: 768px) {
  .utility {
    display: block;
  }

  .header__book {
    display: inline-flex;
  }

  .header__inner {
    min-height: 88px;
  }

  .header--compact .header__inner {
    min-height: 64px;
  }
}

@media (min-width: 1024px) {
  .header__nav {
    display: block;
  }

  .header__phone {
    display: inline-flex;
  }

  .header__call,
  .header__menu {
    display: none;
  }

  .header__actions {
    gap: var(--space-5);
  }
}
</style>
