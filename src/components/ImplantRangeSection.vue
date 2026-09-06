<script setup>
const implants = [
  {
    key: 'standard',
    title: 'Standard Implants',
    text: 'Ideal for most clinical cases, providing a reliable and stable foundation for prosthetics.',
    icon: 'standard',
  },
  {
    key: 'mini',
    title: 'Mini Implants',
    text: 'Minimally invasive solutions designed for placement in limited spaces, perfect for patients with narrower gums.',
    icon: 'mini',
  },
  {
    key: 'all-on-4',
    title: 'All-on-4 Solutions',
    text: 'Innovative solutions for complete teeth replacement using just four implants, allowing for fast and efficient rehabilitation.',
    icon: 'all-on-4',
  },
  {
    key: 'customized',
    title: 'Customized Implants',
    text: "Patient-specific implants created using 3D printing technology for optimal fit to the patient's anatomy.",
    icon: 'customized',
  },
]
</script>

<template>
  <section class="range">
    <div class="range__lines" aria-hidden="true"></div>
    <div class="range__glow" aria-hidden="true"></div>

    <div class="range__inner">
      <h2 class="range__heading">Explore Our <span>Implant Range</span></h2>
      <p class="range__subheading">
        Discover our comprehensive selection of dental implants, designed to meet the
        diverse needs of patients and dental professionals alike.
      </p>

      <div class="range__grid">
        <article v-for="item in implants" :key="item.key" class="range-card">
          <div class="range-card__icon" :class="`range-card__icon--${item.icon}`">
            <svg v-if="item.icon === 'standard'" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M17 4c-2.6 0-5 1.6-7 1.6C7 5.6 5 4 5 4s-1 3.4 0 6c.6 1.7 1.6 3 1.6 5v3.4h4V22h1.8v-3.6h1.2V22h1.8v-3.6h4V15c0-2 1-3.3 1.6-5 1-2.6 0-6 0-6s-2 1.6-4 1.6c-2 0-4.4-1.6-7-1.6Z" fill="#fff"/>
              <rect x="14.5" y="21" width="5" height="8" rx="1.5" fill="#6FCF3D"/>
              <path d="M14.5 24h5M14.5 26.5h5" stroke="#0d2f14" stroke-width="0.8"/>
            </svg>

            <svg v-else-if="item.icon === 'mini'" width="40" height="34" viewBox="0 0 40 34" fill="none">
              <circle cx="7" cy="6" r="4.5" fill="none" stroke="#fff" stroke-width="2"/>
              <path d="M7 10v18" stroke="#6FCF3D" stroke-width="2" stroke-linecap="round"/>
              <path d="M19 4l4 4-9 20-4-1z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
              <path d="M32 3l3 3-2 22-4-1z" fill="none" stroke="#6FCF3D" stroke-width="2" stroke-linejoin="round"/>
            </svg>

            <svg v-else-if="item.icon === 'all-on-4'" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="12" r="10" fill="#6FCF3D"/>
              <path d="M15.5 12.5l3 3 6-6.5" stroke="#0d2f14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 30c0-3 1.8-5 4-5s4 2 4 5-1.8 4-4 4-4-1-4-4Z" fill="#fff"/>
              <path d="M16 30c0-3 1.8-5 4-5s4 2 4 5-1.8 4-4 4-4-1-4-4Z" fill="#fff"/>
              <path d="M23 30c0-3 1.8-5 4-5s4 2 4 5-1.8 4-4 4-4-1-4-4Z" fill="#fff"/>
            </svg>

            <svg v-else width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M17 6c-2.6 0-4.6 1.6-6.6 1.6C8.4 7.6 6.5 6 6.5 6s-1 3.4 0 6c.5 1.6 1.5 3 1.5 4.8v3.2c0 3.2 1.8 6.4 4.2 7.4.8.3 1.6-2 1.8-3.4.2-1.2.6-2 1-2s.8.8 1 2c.2 1.4 1 3.7 1.8 3.4 2.4-1 4.2-4.2 4.2-7.4v-3.2c0-1.8 1-3.2 1.5-4.8 1-2.6 0-6 0-6s-1.9 1.6-3.9 1.6c-2 0-4-1.6-6.6-1.6Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="2.2 2.2"/>
              <path d="M13 4l-.8 2.4M17 3v2.6M21 4l.8 2.4" stroke="#6FCF3D" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="range-card__content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.range {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a2b12 0%, #061c0a 55%, #040f06 100%);
  padding: 72px 0 64px;
}

.range__lines {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0,
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 64px
  );
  z-index: 0;
}

.range__glow {
  position: absolute;
  top: -280px;
  left: 50%;
  width: 900px;
  height: 500px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(140, 230, 90, 0.85) 0%, rgba(90, 200, 70, 0.25) 45%, transparent 72%);
  z-index: 0;
}

.range__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.range__heading {
  margin: 0;
  text-align: center;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
}

.range__heading span {
  color: #6fcf3d;
}

.range__subheading {
  max-width: 640px;
  margin: 16px auto 0;
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.68);
}

.range__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 40px;
}

.range-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 22px;
  background: rgba(20, 60, 30, 0.35);
  border: 1px solid rgba(111, 207, 61, 0.3);
  border-radius: 18px;
}

.range-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(111, 207, 61, 0.35) 0%, rgba(111, 207, 61, 0.05) 70%);
}

.range-card__content h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.range-card__content p {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.65);
}

/* =========================================================
   Tablet and up — 2x2 grid, matching the wider reference
   ========================================================= */
@media (min-width: 768px) {
  .range {
    padding: 100px 0 90px;
  }

  .range__grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 48px;
  }
}
</style>
