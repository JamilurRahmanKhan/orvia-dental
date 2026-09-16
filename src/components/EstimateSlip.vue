<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

const props = defineProps({
  variant: { type: String, default: 'full' }, // 'full' | 'compact'
  title: { type: String, default: '' },
  rows: { type: Array, required: true },
})

const mode = ref('cash')
const isFull = computed(() => props.variant === 'full')
const groupName = `slip-mode-${Math.random().toString(36).slice(2, 8)}`

function figureFor(row) {
  if (!practice.showPrices) return row.detail
  if (mode.value === 'insured' && row.insured) return row.insured
  return row.price || 'Ask for a quote'
}

const figureIsText = computed(() => mode.value === 'insured' || !practice.showPrices)
</script>

<template>
  <div class="slip-wrap" :class="`slip-wrap--${variant}`">
    <div class="slip">
      <div class="slip__head">
        <p class="slip__label">{{ isFull ? `Estimate · ${practice.name} · ${practice.city}` : title }}</p>

        <fieldset v-if="isFull && practice.showPrices" class="toggle">
          <legend class="visually-hidden">Show prices for</legend>
          <label class="toggle__opt">
            <input v-model="mode" type="radio" :name="groupName" value="cash" />
            <span>No insurance</span>
          </label>
          <label class="toggle__opt">
            <input v-model="mode" type="radio" :name="groupName" value="insured" />
            <span>I have insurance</span>
          </label>
        </fieldset>
      </div>

      <ol class="slip__rows">
        <li v-for="row in rows" :key="row.name">
          <component
            :is="row.slug ? 'a' : 'div'"
            :href="row.slug ? `/treatments/${row.slug}/` : undefined"
            class="row"
            :class="{ 'row--link': row.slug }"
          >
            <span class="row__line">
              <span class="row__name">{{ row.name }}</span>
              <span class="row__leader" aria-hidden="true"></span>
              <Transition name="fig" mode="out-in">
                <span :key="mode" class="row__figure" :class="{ 'row__figure--text': figureIsText }">
                  {{ figureFor(row) }}
                </span>
              </Transition>
              <ArrowRight v-if="row.slug" class="row__arrow" :size="18" :stroke-width="1.75" aria-hidden="true" />
            </span>
            <span v-if="row.detail && practice.showPrices" class="row__detail">{{ row.detail }}</span>
            <span v-if="isFull && row.tags?.length" class="row__tags">
              <span v-for="tag in row.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
            </span>
          </component>
        </li>
      </ol>

      <div class="slip__foot">
        <p v-if="isFull" class="slip__promise">
          You get this in writing before any treatment starts. Second opinions welcome.
        </p>
        <p v-else class="slip__note">Insured? We check your plan first.</p>
        <p class="slip__caption">
          <template v-if="isFull">Ranges for a typical case. Your exam sets the real number.</template>
          <template v-if="practice.demo"> Sample prices for demo.</template>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* drop-shadow on the wrapper: the slip's perforation mask would clip a box-shadow */
.slip-wrap {
  filter: drop-shadow(0 1px 0 rgb(27 31 29 / 0.06)) drop-shadow(0 18px 22px rgb(27 31 29 / 0.14));
}

.slip {
  background: var(--color-slip);
  border-radius: var(--radius-paper);
  padding: var(--space-8) var(--space-8) var(--space-6);
  -webkit-mask: radial-gradient(circle at 6px 0, transparent 4px, #000 4.5px) 0 0 / 12px 100% repeat-x;
  mask: radial-gradient(circle at 6px 0, transparent 4px, #000 4.5px) 0 0 / 12px 100% repeat-x;
}

.slip__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-5);
  border-bottom: var(--border-hair);
}

.slip__label {
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-3);
}

/* ---- Insurance toggle (native radios, restyled) ---- */
.toggle {
  display: inline-flex;
  gap: 2px;
  margin: 0;
  padding: 2px;
  border: var(--border-control);
  border-radius: var(--radius-control);
}

.toggle__opt {
  position: relative;
  display: grid;
}

.toggle__opt input {
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.toggle__opt span {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--tap-min);
  padding: 0 var(--space-4);
  border-radius: 4px;
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink-2);
  transition: background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}

.toggle__opt input:checked + span {
  background: var(--color-accent-tint);
  color: var(--color-ink);
}

.toggle__opt input:focus-visible + span {
  outline: var(--focus-ring);
  outline-offset: 2px;
}

/* ---- Rows ---- */
.slip__rows {
  margin: 0;
  padding: 0;
  list-style: none;
}

.row {
  display: block;
  margin-inline: calc(-1 * var(--space-3));
  padding: var(--space-5) var(--space-3);
  border-bottom: var(--border-hair);
  color: inherit;
  text-decoration: none;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.slip__rows li:last-child .row {
  border-bottom: 0;
}

.row--link:hover {
  background: var(--color-paper);
}

.row--link:focus-visible {
  outline-offset: -2px;
  background: var(--color-paper);
}

.row__line {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.row__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.row__leader {
  flex: 1;
  min-width: var(--space-6);
  border-bottom: var(--border-leader);
  transform: translateY(-4px);
}

.row__figure {
  font-family: var(--font-figure);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-figure);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-figure);
  white-space: nowrap;
  text-align: right;
}

.row__figure--text {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-ink-2);
  letter-spacing: 0;
}

.row__arrow {
  flex-shrink: 0;
  align-self: center;
  color: var(--color-accent);
  opacity: 0;
  transition: opacity var(--dur-fast) var(--ease-out);
}

.row--link:hover .row__arrow,
.row--link:focus-visible .row__arrow {
  opacity: 1;
}

.row__detail {
  display: block;
  margin-top: var(--space-1);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.tag {
  padding: 2px var(--space-2);
  border-radius: var(--radius-paper);
  background: var(--color-accent-tint);
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
}

/* ---- Footer ---- */
.slip__foot {
  padding-top: var(--space-5);
  border-top: var(--border-hair);
}

.slip__promise {
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.slip__note {
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.slip__caption {
  margin-top: var(--space-2);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.fig-enter-active,
.fig-leave-active {
  transition: opacity var(--dur-fast) var(--ease-out);
}

.fig-enter-from,
.fig-leave-to {
  opacity: 0;
}

/* ---- Compact variant (hero) ---- */
.slip-wrap--compact .slip {
  padding: var(--space-6) var(--space-5) var(--space-5);
}

.slip-wrap--compact .slip__head {
  padding-bottom: var(--space-3);
}

.slip-wrap--compact .row {
  padding-block: var(--space-3);
}

.slip-wrap--compact .row__name {
  font-size: var(--text-small);
}

.slip-wrap--compact .row__leader {
  min-width: var(--space-4);
}

.slip-wrap--compact .row__figure {
  font-size: var(--text-small);
}

.slip-wrap--compact .slip__foot {
  padding-top: var(--space-3);
}

/* ---- Mobile ---- */
@media (max-width: 639px) {
  .slip {
    padding: var(--space-6) var(--space-5) var(--space-5);
  }

  .slip__head {
    flex-direction: column;
    align-items: stretch;
  }

  .toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .toggle__opt span {
    padding-inline: var(--space-2);
    white-space: nowrap;
  }

  /* Name and price share a line when they fit; the price drops below, right-aligned, when they don't */
  .row__line {
    flex-wrap: wrap;
    column-gap: var(--space-4);
    row-gap: var(--space-1);
  }

  .row__leader,
  .row__arrow {
    display: none;
  }

  .row__figure {
    margin-left: auto;
  }
}
</style>
