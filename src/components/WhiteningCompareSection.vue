<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const features = [
  { icon: 'tooth', title: 'Whiter Teeth', text: 'Noticeably brighter results' },
  { icon: 'sparkle', title: 'Safe & Gentle', text: 'Enamel-friendly formula' },
  { icon: 'shield', title: 'Dentist Approved', text: 'Trusted by professionals' },
]

const stats = [
  { icon: 'leaf', title: '100% Safe', text: 'Enamel Friendly' },
  { icon: 'tooth', title: 'Visible Results', text: 'In Just Days' },
  { icon: 'shield', title: 'Trusted by', text: 'Dental Professionals' },
]

const value = ref(0)
let direction = 1
let timer = null

function step() {
  value.value += direction * 0.4
  if (value.value >= 100) {
    value.value = 100
    direction = -1
  } else if (value.value <= 0) {
    value.value = 0
    direction = 1
  }
}

onMounted(() => {
  timer = setInterval(step, 20)
})

onUnmounted(() => {
  clearInterval(timer)
})

const overlayClip = computed(() => `inset(0 0 0 ${100 - value.value}%)`)
const handlePosition = computed(() => `${100 - value.value}%`)
</script>

<template>
  <section class="whiten">
    <div class="whiten__card">
      <div class="whiten__grid">
        <div class="whiten__intro">
          <span class="whiten__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 20c8-1 14-7 15-16-9 1-15 7-16 16Zm0 0c2-4 5-7 9-9" stroke="#3f8a4c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Brighter Smiles
          </span>

          <h2 class="whiten__heading">See the<br />Difference</h2>

          <p class="whiten__copy">
            Move the slider to see how our advanced whitening formula can
            transform your smile.
          </p>

          <ul class="whiten__features">
            <li v-for="f in features" :key="f.title" class="feature-row">
              <span class="feature-row__icon">
                <svg v-if="f.icon === 'tooth'" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c-1.8 0-3 1-4.5 1S5 3.3 4 4.3C3 5.4 2.7 7.4 3.2 9.7c.4 1.7 1.3 3 1.3 4.6v1.9c0 2.7 1.5 5.4 3.6 6.2.7.3 1.4-1.7 1.6-2.9.2-1 .5-1.7.9-1.7s.7.7.9 1.7c.2 1.2.9 3.2 1.6 2.9 2.1-.8 3.6-3.5 3.6-6.2v-1.9c0-1.6.9-2.9 1.3-4.6.5-2.3.2-4.3-.8-5.4C16 3.3 14.8 4 13.5 4S13.8 3 12 3Z" stroke="#2f5233" stroke-width="1.4"/></svg>
                <svg v-else-if="f.icon === 'sparkle'" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" fill="#2f5233"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" fill="#2f5233"/></svg>
                <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z" stroke="#2f5233" stroke-width="1.4"/><path d="M9 12l2 2 4-4" stroke="#2f5233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span>
                <strong>{{ f.title }}</strong>
                <em>{{ f.text }}</em>
              </span>
            </li>
          </ul>
        </div>

        <div class="whiten__demo">
          <div class="stage">
            <img class="stage__base" src="/images/teeth-compare.png" alt="Teeth before whitening" />
            <img
              class="stage__white"
              src="/images/teeth-compare.png"
              alt="Teeth after whitening"
              :style="{ clipPath: overlayClip }"
            />
            <span class="stage__label stage__label--before">Before</span>
            <span class="stage__label stage__label--after">After</span>
            <div class="stage__divider" :style="{ left: handlePosition }"></div>
            <div class="stage__knob" :style="{ left: handlePosition }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" stroke="#2f5233" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>

          <a class="whiten__cta" href="#">
            Get Whiter Teeth Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <p class="whiten__caption">Safe &bull; Effective &bull; Visible Results</p>
        </div>
      </div>

      <div class="whiten__stats">
        <div v-for="s in stats" :key="s.title" class="stat-item">
          <span class="stat-item__icon">
            <svg v-if="s.icon === 'leaf'" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20c8-1 14-7 15-16-9 1-15 7-16 16Zm0 0c2-4 5-7 9-9" stroke="#2f5233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else-if="s.icon === 'tooth'" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3c-1.8 0-3 1-4.5 1S5 3.3 4 4.3C3 5.4 2.7 7.4 3.2 9.7c.4 1.7 1.3 3 1.3 4.6v1.9c0 2.7 1.5 5.4 3.6 6.2.7.3 1.4-1.7 1.6-2.9.2-1 .5-1.7.9-1.7s.7.7.9 1.7c.2 1.2.9 3.2 1.6 2.9 2.1-.8 3.6-3.5 3.6-6.2v-1.9c0-1.6.9-2.9 1.3-4.6.5-2.3.2-4.3-.8-5.4C16 3.3 14.8 4 13.5 4S13.8 3 12 3Z" stroke="#2f5233" stroke-width="1.4"/></svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z" stroke="#2f5233" stroke-width="1.4"/><path d="M9 12l2 2 4-4" stroke="#2f5233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <span>
            <strong>{{ s.title }}</strong>
            <em>{{ s.text }}</em>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.whiten {
  background: #dfe9e2;
  padding: 40px 20px;
}

.whiten__card {
  max-width: 1200px;
  margin: 0 auto;
  background: #eef4f0;
  border-radius: 28px;
  box-shadow: 0 30px 60px rgba(30, 60, 40, 0.1);
  overflow: hidden;
}

.whiten__grid {
  padding: 32px 24px 8px;
}

.whiten__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #d8ead9;
  color: #3f8a4c;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.whiten__heading {
  margin: 20px 0 0;
  font-size: 38px;
  font-weight: 800;
  line-height: 1.15;
  color: #16241a;
}

.whiten__copy {
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: #5c675f;
  max-width: 420px;
}

.whiten__features {
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.feature-row__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: #dfead9;
}

.feature-row strong {
  display: block;
  font-size: 15.5px;
  font-weight: 700;
  color: #16241a;
}

.feature-row em {
  display: block;
  font-style: normal;
  font-size: 13.5px;
  color: #6b7568;
  margin-top: 2px;
}

.whiten__demo {
  margin-top: 32px;
}

.stage {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #4c6b5b;
  aspect-ratio: 4 / 3;
}

.stage__base,
.stage__white {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stage__base {
  filter: brightness(0.85) saturate(1.15) sepia(0.12);
}

.stage__white {
  filter: brightness(1.05) contrast(1.05) saturate(0.85);
  transition: clip-path 0.05s linear;
}

.stage__label {
  position: absolute;
  top: 16px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
}

.stage__label--before {
  left: 16px;
  background: rgba(0, 0, 0, 0.28);
}

.stage__label--after {
  right: 16px;
  background: rgba(255, 255, 255, 0.85);
  color: #2f5233;
}

.stage__divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #fff;
  box-shadow: 0 0 15px #fff;
  transform: translateX(-50%);
}

.stage__knob {
  position: absolute;
  top: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.whiten__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
  padding: 18px;
  background: linear-gradient(180deg, #7ec860, #5aa841);
  border-radius: 999px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
}

.whiten__caption {
  margin: 14px 0 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7c877e;
}

.whiten__stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;
  padding: 28px 24px;
  border-top: 1px solid rgba(20, 40, 25, 0.08);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.stat-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: #dfead9;
}

.stat-item strong {
  display: block;
  font-size: 15.5px;
  font-weight: 700;
  color: #16241a;
}

.stat-item em {
  display: block;
  font-style: normal;
  font-size: 13px;
  color: #6b7568;
  margin-top: 2px;
}

/* =========================================================
   Tablet and up
   ========================================================= */
@media (min-width: 900px) {
  .whiten__grid {
    display: grid;
    grid-template-columns: 0.85fr 1fr;
    gap: 56px;
    padding: 56px 56px 16px;
    align-items: center;
  }

  .whiten__heading {
    font-size: 48px;
  }

  .whiten__demo {
    margin-top: 0;
  }

  .whiten__stats {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 36px 56px;
  }

  .stat-item {
    justify-content: center;
    text-align: left;
  }

  .stat-item:not(:last-child) {
    border-right: 1px solid rgba(20, 40, 25, 0.1);
  }
}
</style>
