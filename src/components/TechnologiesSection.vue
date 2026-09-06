<script setup>
import { computed } from 'vue'

const features = [
  {
    key: 'all-in-4',
    title: 'All-in-4®',
    text: 'Restoration of a full arch of teeth on 4 implants. A reliable solution even in complex cases with bone loss.',
    pos: 'top-left',
  },
  {
    key: 'one-stage',
    title: 'One-Stage Implantation',
    text: 'Placement of the implant and temporary crown in a single visit. A fast, comfortable solution with a predictable result.',
    pos: 'top-right',
  },
  {
    key: 'traditional',
    title: 'Traditional Implantation',
    text: 'A proven method for replacing missing teeth. Maximum reliability, a natural look, and long-term results.',
    pos: 'bottom-left',
  },
  {
    key: 'navigation-guided',
    title: 'Navigation-Guided Implantation',
    text: 'Computer-guided implant placement for maximum precision, safety, and minimal recovery time.',
    pos: 'bottom-right',
  },
]

const mobileOrder = ['all-in-4', 'one-stage', 'navigation-guided', 'traditional']
const mobileFeatures = computed(() =>
  mobileOrder.map((key) => features.find((f) => f.key === key))
)
</script>

<template>
  <section class="tech">
    <div class="tech__inner">
      <div class="tech__intro">
        <span class="tech__badge">Technologies</span>
        <h2 class="tech__heading">
          <span class="tech__heading-line">Dental Implants <em>for</em></span>
          <span class="tech__heading-line">Any Clinical Case</span>
        </h2>
        <p class="tech__subheading">Advanced solutions. Healthier smiles.<br />For every patient.</p>
      </div>

      <div class="tech__stage">
        <svg class="tech__rings" viewBox="0 0 1400 1150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <circle
            v-for="r in [140, 280, 420, 560, 700, 840]"
            :key="r"
            cx="700"
            cy="565"
            :r="r"
            fill="none"
            stroke="rgba(20, 24, 34, 0.1)"
            stroke-width="1.5"
          />
        </svg>

        <div class="tech__image" aria-hidden="true"></div>

        <div class="tech__overlay">
          <article
            v-for="feature in features"
            :key="feature.key"
            class="feature"
            :class="`feature--${feature.pos}`"
          >
            <div class="feature__title">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="7" fill="none" stroke="#82C341" stroke-width="2" />
                <circle cx="9" cy="9" r="3" fill="#82C341" />
              </svg>
              <h3>{{ feature.title }}</h3>
            </div>
            <p>{{ feature.text }}</p>
            <a class="feature__link" href="#">
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </article>
        </div>
      </div>

      <div class="tech__features">
        <article v-for="feature in mobileFeatures" :key="feature.key" class="feature-card">
          <div class="feature-card__content">
            <div class="feature__title">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="9" fill="#82C341" />
                <circle cx="9" cy="9" r="3.5" fill="#fff" />
              </svg>
              <h3>{{ feature.title }}</h3>
            </div>
            <p>{{ feature.text }}</p>
          </div>
          <a class="feature-card__arrow" href="#" :aria-label="`Learn more about ${feature.title}`">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#14161c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  position: relative;
  width: 100%;
  background: #fff;
  padding: 100px 0;
  overflow: hidden;
}

.tech__inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 56px;
}

.tech__intro {
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
}

.tech__badge {
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 999px;
  background: #eef0f2;
  color: #4a4e59;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.tech__heading {
  margin: 0;
  font-size: clamp(34px, 3.6vw, 46px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: #14161c;
}

.tech__heading-line {
  display: block;
}

.tech__heading em {
  font-style: normal;
  color: #9aa0ac;
}

.tech__subheading {
  display: none;
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: #6b7080;
}

/* ---------- stage ---------- */
.tech__stage {
  position: relative;
  aspect-ratio: 1384 / 1136;
}

.tech__rings {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.tech__image {
  position: absolute;
  inset: 0;
  background-image: url('/images/teeth-desktop.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.tech__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.tech__features {
  display: none;
}

.feature {
  position: absolute;
  width: 300px;
}

.feature__title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature__title h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #14161c;
}

.feature p,
.feature-card p {
  margin: 12px 0 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: #6b7080;
}

.feature__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 14.5px;
  font-weight: 600;
  color: #14161c;
  text-decoration: none;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 16px;
}

.feature-card__content {
  flex: 1;
  min-width: 0;
}

.feature-card__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  background: #e3f2d7;
}

.feature--top-left {
  top: 27%;
  left: 4%;
}

.feature--top-right {
  top: 13%;
  right: 0;
  width: 320px;
}

.feature--bottom-left {
  top: 77%;
  left: 12%;
}

.feature--bottom-right {
  top: 71%;
  right: 0;
  width: 320px;
}

/* =========================================================
   Tablet — keeps the desktop-style overlay around the image,
   just tuned down for a narrower stage.
   ========================================================= */
@media (max-width: 1199px) and (min-width: 768px) {
  .tech {
    padding: 72px 0;
  }

  .tech__inner {
    padding: 0 36px;
  }

  .tech__intro {
    margin-bottom: 24px;
  }

  .tech__heading {
    font-size: clamp(28px, 4.2vw, 38px);
  }

  .tech__stage {
    aspect-ratio: 1448 / 1180;
  }

  .tech__image {
    background-image: url('/images/teeth-tab.png');
  }

  .feature {
    width: 220px;
  }

  .feature--top-right,
  .feature--bottom-right {
    width: 230px;
  }

  .feature__title h3 {
    font-size: 16px;
  }

  .feature p {
    font-size: 12.5px;
    line-height: 1.5;
    margin-top: 8px;
  }

  .feature__link {
    font-size: 12.5px;
    margin-top: 10px;
  }

  .feature--top-left {
    top: 24%;
    left: 0;
  }

  .feature--bottom-left {
    top: 80%;
    left: 4%;
  }
}

/* =========================================================
   Mobile — the overlay layout no longer fits; switch to a
   stacked image + card list.
   ========================================================= */
@media (max-width: 767px) {
  .tech {
    padding: 40px 0 56px;
  }

  .tech__inner {
    padding: 0 20px;
  }

  .tech__intro {
    margin-bottom: 8px;
  }

  .tech__heading {
    font-size: 30px;
  }

  .tech__heading-line {
    white-space: nowrap;
  }

  .tech__subheading {
    display: block;
  }

  .tech__stage {
    aspect-ratio: auto;
    height: 400px;
    margin: 0 -20px;
  }

  .tech__image {
    background-image: url('/images/teeth-mobile.png');
  }

  .tech__rings {
    opacity: 0.6;
  }

  .tech__overlay {
    display: none;
  }

  .tech__features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 8px;
  }

  .feature-card {
    background: #fff;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 20px 45px rgba(20, 30, 60, 0.08);
  }

  .feature-card .feature__title h3 {
    font-size: 18px;
  }

  .feature-card p {
    font-size: 14px;
  }
}
</style>
