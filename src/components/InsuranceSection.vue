<script setup>
import { ref, computed } from 'vue'
import { Search, ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

const query = ref('')
const activeIndex = ref(-1)
const selected = ref(null)
const indexOpen = ref(false)

const trimmed = computed(() => query.value.trim())
const expanded = computed(() => trimmed.value.length > 0)

const filtered = computed(() => {
  const q = trimmed.value.toLowerCase()
  if (!q) return []
  return practice.plans.filter((p) => p.name.toLowerCase().includes(q))
})

// The listbox popup shows while typing; a selection replaces it with a confirmation line.
const showListbox = computed(() => expanded.value && !selected.value && filtered.value.length > 0)
const showEmpty = computed(() => expanded.value && !selected.value && filtered.value.length === 0)

const activeOptionId = computed(() =>
  showListbox.value && activeIndex.value > -1 ? `plan-option-${activeIndex.value}` : undefined
)

function statusFor(plan) {
  return plan.network === 'in' ? 'In network — we bill them directly' : "Out of network — we'll file the claim for you"
}

function onInput() {
  selected.value = null
  activeIndex.value = filtered.value.length ? 0 : -1
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    if (query.value) {
      query.value = ''
      selected.value = null
      activeIndex.value = -1
    }
    return
  }
  if (!showListbox.value) return
  const count = filtered.value.length
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = activeIndex.value < count - 1 ? activeIndex.value + 1 : 0
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : count - 1
  } else if (e.key === 'Enter') {
    if (activeIndex.value > -1 && filtered.value[activeIndex.value]) {
      e.preventDefault()
      selectPlan(filtered.value[activeIndex.value])
    }
  }
}

function selectPlan(plan) {
  selected.value = plan
  query.value = plan.name
  activeIndex.value = -1
}
</script>

<template>
  <section id="insurance" class="insurance" aria-labelledby="insurance-title">
    <div class="container insurance__grid">
      <div class="insurance__tool">
        <h2 id="insurance-title" class="insurance__title">Do you take my plan?</h2>
        <p class="insurance__lede">
          Type your insurance plan below to see if we accept it. Not listed? We'll still check for you.
        </p>

        <div class="finder">
          <label for="plan-search" class="finder__label">Search your insurance plan</label>
          <div class="finder__field">
            <Search class="finder__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
            <input
              id="plan-search"
              v-model="query"
              type="text"
              class="finder__input"
              role="combobox"
              aria-autocomplete="list"
              aria-controls="plan-listbox"
              :aria-expanded="showListbox"
              :aria-activedescendant="activeOptionId"
              autocomplete="off"
              placeholder="e.g. Delta Dental, Cigna, Aetna"
              @input="onInput"
              @keydown="onKeydown"
            />
          </div>

          <ul
            id="plan-listbox"
            role="listbox"
            aria-label="Matching plans"
            class="finder__listbox"
            v-show="showListbox"
          >
            <li
              v-for="(plan, i) in filtered"
              :id="`plan-option-${i}`"
              :key="plan.name"
              role="option"
              :aria-selected="i === activeIndex"
              class="finder__option"
              :class="{ 'is-active': i === activeIndex }"
              @mousedown.prevent="selectPlan(plan)"
              @mouseenter="activeIndex = i"
            >
              <span class="finder__option-name">{{ plan.name }}</span>
              <span class="finder__option-status" :class="plan.network === 'in' ? 'is-in' : 'is-out'">
                {{ statusFor(plan) }}
              </span>
            </li>
          </ul>

          <p v-if="showEmpty" class="finder__empty" role="status">
            We don't see that plan.
            <a class="link-arrow" href="/insurance-and-financing/#verify">
              We'll check for you
              <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </p>

          <p v-else-if="selected" class="finder__result" role="status">
            <span class="finder__option-name">{{ selected.name }}</span>
            <span class="finder__option-status" :class="selected.network === 'in' ? 'is-in' : 'is-out'">
              {{ statusFor(selected) }}
            </span>
          </p>
        </div>

        <a class="ledger-row card card--tap" :href="practice.membership.href">
          <span class="ledger-row__name">{{ practice.membership.label }}</span>
          <span class="ledger-row__leader" aria-hidden="true"></span>
          <span class="ledger-row__figure figure">{{ practice.membership.price }}</span>
          <ArrowRight class="ledger-row__arrow" :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>

      <div class="insurance__index">
        <div class="insurance__index-head">
          <h3 class="insurance__index-title">Plans we bill directly</h3>
          <button
            type="button"
            class="insurance__disclosure"
            :aria-expanded="indexOpen"
            aria-controls="plan-index"
            @click="indexOpen = !indexOpen"
          >
            {{ indexOpen ? 'Hide plans' : `See all ${practice.plans.length} plans` }}
          </button>
        </div>

        <ul id="plan-index" class="index" :class="{ 'is-open': indexOpen }">
          <li v-for="plan in practice.plans" :key="plan.name" class="index__row">
            <span class="index__name">{{ plan.name }}</span>
            <span class="index__status" :class="plan.network === 'in' ? 'is-in' : 'is-out'">
              {{ plan.network === 'in' ? 'In network' : 'Out of network' }}
            </span>
          </li>
        </ul>

        <p v-if="practice.demo" class="insurance__caption">Sample plan list for demo.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.insurance {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.insurance__grid {
  display: grid;
  gap: var(--space-12);
}

.insurance__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.insurance__lede {
  margin-top: var(--space-4);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

/* ---- Combobox ---- */
.finder {
  position: relative;
  margin-top: var(--space-8);
}

.finder__label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

.finder__field {
  position: relative;
}

.finder__icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-ink-3);
  pointer-events: none;
}

.finder__input {
  width: 100%;
  height: var(--tap-comfort);
  padding: 0 var(--space-4) 0 calc(var(--space-4) + 20px + var(--space-2));
  border: var(--border-control);
  border-radius: var(--radius-control);
  background: var(--color-slip);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
}

.finder__input::placeholder {
  color: var(--color-ink-3);
}

.finder__input:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.finder__listbox {
  margin: var(--space-2) 0 0;
  padding: var(--space-2);
  list-style: none;
  background: var(--color-slip);
  border-radius: var(--radius-control);
  box-shadow: var(--shadow-pop);
  max-height: 17rem;
  overflow-y: auto;
}

.finder__option {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-3);
  border-radius: var(--radius-paper);
  cursor: pointer;
}

.finder__option.is-active {
  background: var(--color-accent-tint);
}

.finder__option-name {
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

.finder__option-status {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  text-align: right;
}

.finder__option-status.is-in {
  color: var(--color-accent);
}

.finder__option-status.is-out {
  color: var(--color-ink-2);
}

.finder__empty,
.finder__result {
  margin: var(--space-4) 0 0;
  padding: var(--space-4);
  background: var(--color-slip);
  border-radius: var(--radius-control);
  border: var(--border-hair);
  box-shadow: var(--shadow-xs);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.finder__result {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
}

/* ---- Membership CTA: a card so it reads as the one thing on the page you can
   tap to act on, not just another line of text ---- */
.ledger-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-top: var(--space-8);
  padding: var(--space-5);
  color: inherit;
  text-decoration: none;
}

.ledger-row__name {
  min-width: 0;
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
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  white-space: nowrap;
}

.ledger-row__arrow {
  flex-shrink: 0;
  color: var(--color-accent);
  opacity: 0;
  transition: opacity var(--dur-fast) var(--ease-out);
}

/* The dotted ledger leader needs room to breathe; below that, drop it and let
   the price wrap to its own right-aligned line instead of squeezing everything
   onto one row. */
@media (max-width: 479px) {
  .ledger-row {
    flex-wrap: wrap;
    row-gap: var(--space-2);
  }

  .ledger-row__leader {
    display: none;
  }

  .ledger-row__figure {
    margin-left: auto;
  }
}

.ledger-row:hover .ledger-row__arrow,
.ledger-row:focus-visible .ledger-row__arrow {
  opacity: 1;
}

/* ---- Index ---- */
.insurance__index-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.insurance__index-title {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
}

.insurance__disclosure {
  display: none;
  align-items: center;
  min-height: var(--tap-min);
  padding: 0 var(--space-3);
  border: 0;
  background: transparent;
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  cursor: pointer;
}

.index {
  margin: var(--space-4) 0 0;
  padding: 0;
  list-style: none;
  column-count: 2;
  column-gap: var(--space-8);
}

.index__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: var(--border-hair);
  break-inside: avoid;
}

.index__name {
  font-size: var(--text-small);
  color: var(--color-ink);
}

.index__status {
  flex-shrink: 0;
  font-size: var(--text-caption);
}

.index__status.is-in {
  color: var(--color-accent);
}

.index__status.is-out {
  color: var(--color-ink-3);
}

.insurance__caption {
  margin-top: var(--space-4);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

/* ---- Mobile: index collapses behind a disclosure ---- */
@media (max-width: 767px) {
  .insurance__disclosure {
    display: inline-flex;
  }

  .index {
    column-count: 1;
  }

  .index:not(.is-open) {
    display: none;
  }
}

@media (min-width: 1024px) {
  .insurance__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .insurance__tool {
    grid-column: 1 / span 5;
  }

  .insurance__index {
    grid-column: 7 / -1;
    padding-top: calc(var(--space-8) + 2px);
  }
}
</style>
