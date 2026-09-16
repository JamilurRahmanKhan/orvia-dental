<script setup>
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  before: { type: String, required: true },
  after: { type: String, required: true },
  altBefore: { type: String, required: true },
  altAfter: { type: String, required: true },
  label: { type: String, required: true },
})

const pos = ref(50)
const clip = computed(() => `inset(0 ${100 - pos.value}% 0 0)`)
const valueText = computed(() => `Showing ${pos.value}% after`)

const trackEl = ref(null)
let dragging = false

function fromClientX(x) {
  const rect = trackEl.value.getBoundingClientRect()
  const ratio = (x - rect.left) / rect.width
  pos.value = Math.round(Math.min(100, Math.max(0, ratio * 100)))
}

function onPointerDown(e) {
  dragging = true
  trackEl.value.setPointerCapture(e.pointerId)
  fromClientX(e.clientX)
}

function onPointerMove(e) {
  if (dragging) fromClientX(e.clientX)
}

function onPointerUp() {
  dragging = false
}
</script>

<template>
  <div
    ref="trackEl"
    class="slider"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <img class="slider__img" :src="after" :alt="altAfter" loading="lazy" />
    <img class="slider__img slider__img--before" :src="before" :alt="altBefore" :style="{ clipPath: clip }" loading="lazy" />

    <span class="slider__tag slider__tag--before">Before</span>
    <span class="slider__tag slider__tag--after">After</span>

    <div class="slider__line" :style="{ left: pos + '%' }" aria-hidden="true"></div>
    <div class="slider__handle" :style="{ left: pos + '%' }" aria-hidden="true">
      <ChevronLeft :size="16" :stroke-width="2" />
      <ChevronRight :size="16" :stroke-width="2" />
    </div>

    <input
      class="slider__range visually-hidden"
      type="range"
      min="0"
      max="100"
      step="1"
      v-model.number="pos"
      :aria-label="`Drag to compare before and after for ${label}`"
      :aria-valuetext="valueText"
    />
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  aspect-ratio: 698 / 894;
  overflow: hidden;
  background: var(--color-sunk);
  touch-action: pan-y;
  cursor: ew-resize;
}

.slider__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.slider__tag {
  position: absolute;
  top: var(--space-3);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  color: var(--color-ink-inverse);
  background: rgb(27 31 29 / 0.7);
  pointer-events: none;
}

.slider__tag--before {
  left: var(--space-3);
}

.slider__tag--after {
  right: var(--space-3);
}

.slider__line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-slip);
  transform: translateX(-50%);
  pointer-events: none;
}

.slider__handle {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-round);
  background: var(--color-slip);
  color: var(--color-ink);
  box-shadow: var(--shadow-pop);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.slider__range {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: ew-resize;
}

.slider:focus-within {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}
</style>
