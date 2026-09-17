<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

// type "multiple": any number of rows can be open at once
const openSet = reactive(new Set())

function toggle(i) {
  if (openSet.has(i)) {
    openSet.delete(i)
  } else {
    openSet.add(i)
  }
}

let schemaScript = null

onMounted(() => {
  // FAQPage JSON-LD for AI/search parsing only — not rendered UI.
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: practice.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  schemaScript = document.createElement('script')
  schemaScript.type = 'application/ld+json'
  schemaScript.textContent = JSON.stringify(data)
  document.head.appendChild(schemaScript)
})

onUnmounted(() => {
  schemaScript?.remove()
})
</script>

<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="container faq__grid">
      <h2 id="faq-title" class="faq__heading">Questions people ask us</h2>

      <p class="faq__still">
        Still unsure?
        <a class="link-arrow" :href="practice.phoneHref">
          Call <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
      </p>

      <div class="faq__list">
        <div v-for="(item, i) in practice.faqs" :key="item.q" class="faq__item">
          <h3 class="faq__item-heading">
            <button
              :id="`faq-trigger-${i}`"
              type="button"
              class="faq__trigger"
              :aria-expanded="openSet.has(i)"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              <span class="faq__q">{{ item.q }}</span>
              <Plus v-if="!openSet.has(i)" class="faq__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
              <Minus v-else class="faq__icon" :size="20" :stroke-width="1.75" aria-hidden="true" />
            </button>
          </h3>
          <div
            :id="`faq-panel-${i}`"
            class="faq__panel"
            :class="{ 'faq__panel--open': openSet.has(i) }"
            role="region"
            :aria-labelledby="`faq-trigger-${i}`"
          >
            <div class="faq__panel-inner">
              <p class="faq__a">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.faq__grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.faq__heading {
  order: 1;
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.faq__list {
  order: 2;
  display: flex;
  flex-direction: column;
}

.faq__still {
  order: 3;
  font-size: var(--text-body);
  color: var(--color-ink-2);
}

/* ---- Accordion rows: an index, hairline-separated — not individual cards. ---- */
.faq__item {
  border-bottom: var(--border-hair);
}

.faq__item:first-child {
  border-top: var(--border-hair);
}

.faq__item-heading {
  margin: 0;
}

.faq__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  min-height: 56px;
  padding: var(--space-4) 0;
  background: transparent;
  border: 0;
  text-align: left;
  font-family: var(--font-body);
  cursor: pointer;
}

.faq__q {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.faq__trigger:hover .faq__q {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.faq__icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

/* Grid-rows 0fr -> 1fr animation, instant under reduced motion via the global rule */
.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-base) var(--ease-out);
}

.faq__panel--open {
  grid-template-rows: 1fr;
}

.faq__panel-inner {
  overflow: hidden;
  min-height: 0;
}

.faq__a {
  max-width: var(--measure);
  padding-bottom: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

@media (min-width: 1024px) {
  .faq__grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    row-gap: var(--space-6);
  }

  .faq__heading {
    grid-column: 1 / span 4;
    grid-row: 1;
    order: initial;
  }

  .faq__still {
    grid-column: 1 / span 4;
    grid-row: 2;
    order: initial;
  }

  .faq__list {
    grid-column: 5 / -1;
    grid-row: 1 / span 2;
    order: initial;
  }
}
</style>
