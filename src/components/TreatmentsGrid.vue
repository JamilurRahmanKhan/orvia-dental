<script setup>
const treatments = [
  { name: 'General Checkups', desc: 'Exams, cleanings, and digital X-rays to keep your smile healthy.', img: 'General-Checkups', icon: 'M12 3c-1.8 0-3 1-4.5 1S5 3.3 4 4.3C3 5.4 2.7 7.4 3.2 9.7c.4 1.7 1.3 3 1.3 4.6v1.9c0 2.7 1.5 5.4 3.6 6.2.7.3 1.4-1.7 1.6-2.9.2-1 .5-1.7.9-1.7s.7.7.9 1.7c.2 1.2.9 3.2 1.6 2.9 2.1-.8 3.6-3.5 3.6-6.2v-1.9c0-1.6.9-2.9 1.3-4.6.5-2.3.2-4.3-.8-5.4C16 3.3 14.8 4 13.5 4S13.8 3 12 3Z' },
  { name: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth.', img: 'Dental-Implants', icon: 'M12 4v9M8 13c0 3 4 7 4 7s4-4 4-7M9 8h6' },
  { name: 'Clear Aligners', desc: 'Straighten your teeth without metal braces.', img: 'Clear-Aligners', icon: 'M4 9c2-2 4-3 8-3s6 1 8 3M4 15c2 2 4 3 8 3s6-1 8-3' },
  { name: 'Teeth Whitening', desc: 'A brighter, whiter smile in-office or at home.', img: 'Teeth-Whitening', icon: 'M12 3l2.5 5 5.5.8-4 4 1 5.4L12 15.8 7 18.2l1-5.4-4-4 5.5-.8Z' },
  { name: 'Emergency Care', desc: 'Same-day relief for pain, breaks, or swelling.', img: 'Emergency-Care', icon: 'M12 2v6M12 16v6M2 12h6M16 12h6' },
  { name: "Children's Dentistry", desc: 'Gentle, friendly care for healthy smiles that last.', img: 'Childrens-Dentistry', icon: 'M9 12a3 3 0 106 0M8 8h.01M16 8h.01M12 3a9 9 0 100 18 9 9 0 000-18Z' },
  { name: 'Root Canal', desc: 'Relieve pain and save your natural tooth.', img: 'Root-Canal', icon: 'M12 3c-1.8 0-3 1-4.5 1S5 3.3 4 4.3c-1 1.1-1.3 3.1-.8 5.4.4 1.7 1.3 3 1.3 4.6v1.9c0 2.7 1.5 5.4 3.6 6.2.7.3 1.4-1.7 1.6-2.9.2-1 .5-1.7.9-1.7s.7.7.9 1.7c.2 1.2.9 3.2 1.6 2.9 2.1-.8 3.6-3.5 3.6-6.2v-1.9c0-1.6.9-2.9 1.3-4.6.5-2.3.2-4.3-.8-5.4C16 3.3 14.8 4 13.5 4S13.8 3 12 3Z' },
  { name: 'Veneers', desc: 'Custom shells to fix chips, gaps, or discoloration.', img: 'Veneers', icon: 'M4 9c2-2 4-3 8-3s6 1 8 3M4 15c2 2 4 3 8 3s6-1 8-3' },
]
</script>

<template>
  <section class="treatments" id="treatments">
    <div class="treatments__inner">
      <p class="treatments__eyebrow">Treatments</p>
      <h2 class="treatments__title">Everything your family needs, under one roof</h2>
      <p class="treatments__intro">From routine cleanings to advanced treatments, we provide comprehensive dental care for every stage of life.</p>

      <div class="treatments__grid">
        <a v-for="t in treatments" :key="t.name" class="treatments__card" href="#book">
          <div class="treatments__photo">
            <img :src="`/images/treatments/${t.img}.png`" :alt="t.name" loading="lazy" />
            <span class="treatments__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path :d="t.icon" stroke="#4a9c2e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <div class="treatments__body">
            <h3>{{ t.name }}</h3>
            <p>{{ t.desc }}</p>
            <span class="treatments__link">Learn more →</span>
          </div>
        </a>
      </div>

      <a class="treatments__more" href="#treatments">See all treatments →</a>
    </div>
  </section>
</template>

<style scoped>
.treatments {
  background: #fafbf9;
}

.treatments__inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 88px 56px;
  text-align: center;
}

.treatments__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4a9c2e;
}

.treatments__title {
  margin: 0 auto;
  max-width: 720px;
  font-size: clamp(28px, 3.4vw, 38px);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: #14161c;
}

.treatments__intro {
  margin: 14px auto 44px;
  max-width: 540px;
  font-size: 15.5px;
  line-height: 1.6;
  color: #63677a;
}

.treatments__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: left;
}

.treatments__card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(20, 30, 60, 0.07);
  text-decoration: none;
  overflow: hidden;
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}

.treatments__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(20, 30, 60, 0.08);
}

.treatments__card:active {
  transform: translateY(-1px) scale(0.99);
}

.treatments__photo {
  position: relative;
  aspect-ratio: 4 / 3;
}

.treatments__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.treatments__icon {
  position: absolute;
  left: 16px;
  bottom: -18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 6px 16px rgba(20, 30, 60, 0.14);
}

.treatments__body {
  padding: 30px 20px 22px;
}

.treatments__card h3 {
  margin: 0;
  font-size: 16.5px;
  font-weight: 700;
  color: #14161c;
}

.treatments__body p {
  margin: 6px 0 0;
  font-size: 13.5px;
  line-height: 1.5;
  color: #63677a;
}

.treatments__link {
  display: inline-block;
  margin-top: 12px;
  font-size: 13.5px;
  font-weight: 700;
  color: #4a9c2e;
}

.treatments__more {
  display: inline-flex;
  align-items: center;
  height: 52px;
  margin-top: 40px;
  padding: 0 30px;
  border-radius: 999px;
  background: #1e3f1a;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 100ms ease-out, background-color 150ms ease-out;
}

.treatments__more:hover {
  background: #14300f;
}

.treatments__more:active {
  transform: scale(0.97);
}

@media (max-width: 1199px) {
  .treatments__inner {
    padding: 64px 36px;
  }

  .treatments__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .treatments__inner {
    padding: 48px 20px;
  }

  .treatments__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .treatments__title {
    margin-bottom: 8px;
  }

  .treatments__intro {
    margin-bottom: 28px;
  }
}
</style>
