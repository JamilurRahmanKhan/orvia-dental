<script setup>
import { ref } from 'vue'

const navLinks = ['Treatments', 'Our Dentists', 'Patient Care', 'Smile Gallery']
const mobileMenuOpen = ref(false)
const chipsRowOne = ['Personalized', 'Trusted', 'Comfortable']
const chipsRowTwo = ['Modern', 'Confident']
const stats = [
  { line1: 'Comfort comes', line2: 'first' },
  { line1: 'Advanced treatment', line2: 'approach' },
  { line1: 'Treatment designed', line2: 'around you' },
]
const heroFeatures = [
  { key: 'personalized', label: 'Personalized Care' },
  { key: 'trusted', label: 'Trusted Professionals' },
  { key: 'comfortable', label: 'Comfortable Experience' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>

    <div class="hero__inner">
      <header class="hero__nav">
        <a class="nav__logo" href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3c-2.1 0-3.2 1-4.5 1S5 3.3 3.9 4.4C2.8 5.5 2.5 7.6 3 10c.4 2 1.4 3.6 2 5.4.5 1.6.7 4 1.9 4.6.9.4 1.3-1 1.7-2.4.4-1.4.7-2.6 1.4-2.6s1 1.2 1.4 2.6c.4 1.4.8 2.8 1.7 2.4 1.2-.6 1.4-3 1.9-4.6.6-1.8 1.6-3.4 2-5.4.5-2.4.2-4.5-.9-5.6C15 3.3 14.1 4 13.2 4S14.1 3 12 3Z"
              fill="#6fcf3d"
            />
          </svg>
          <span>Orvia Dental</span>
        </a>

        <nav class="nav__links">
          <a v-for="link in navLinks" :key="link" href="#">{{ link }}</a>
        </nav>

        <div class="nav__cta">
          <a class="btn btn--primary" href="#">Book Appointment</a>
          <a class="btn-icon" href="#" aria-label="Book appointment">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 18 18 6M18 6H9M18 6v9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <button
            class="nav__burger"
            type="button"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#15171d" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div class="nav__mobile-menu" v-if="mobileMenuOpen">
          <a v-for="link in navLinks" :key="link" href="#">{{ link }}</a>
          <a class="btn btn--primary nav__mobile-cta" href="#">Book Appointment</a>
        </div>
      </header>

      <div class="hero__trust">
        <div class="trust__avatars">
          <span class="avatar avatar--1"></span>
          <span class="avatar avatar--2"></span>
          <span class="avatar avatar--3"></span>
        </div>
        <p>Trusted by patients for comfortable, personal care.</p>
      </div>

      <div class="hero__content">
        <p class="hero__eyebrow">Your Smile, Our Priority</p>
        <h1 class="heading--desktop">Dental<br />Care Made<br />Simple</h1>
        <h1 class="heading--mobile">Dental Care<br />Made Simple</h1>
        <p class="hero__copy">
          Personalized dental care designed around your comfort, confidence, and
          long-term oral health.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#">Book Online</a>
          <a class="btn-icon" href="#" aria-label="Book online">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 18 18 6M18 6H9M18 6v9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
        <a class="btn btn--primary hero__cta-mobile" href="#">
          Book Online
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 18 18 6M18 6H9M18 6v9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <div class="hero__features">
        <div v-for="f in heroFeatures" :key="f.key" class="feature-icon">
          <span class="feature-icon__circle">
            <svg v-if="f.key === 'personalized'" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 3c-1.8 0-3 1-4.5 1S5 3.3 4 4.3C3 5.4 2.7 7.4 3.2 9.7c.4 1.7 1.3 3 1.3 4.6v1.9c0 2.7 1.5 5.4 3.6 6.2.7.3 1.4-1.7 1.6-2.9.2-1 .5-1.7.9-1.7s.7.7.9 1.7c.2 1.2.9 3.2 1.6 2.9 2.1-.8 3.6-3.5 3.6-6.2v-1.9c0-1.6.9-2.9 1.3-4.6.5-2.3.2-4.3-.8-5.4C16 3.3 14.8 4 13.5 4S13.8 3 12 3Z" stroke="#2c2f38" stroke-width="1.5"/></svg>
            <svg v-else-if="f.key === 'trusted'" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z" stroke="#2c2f38" stroke-width="1.5"/><path d="M9 12l2 2 4-4" stroke="#2c2f38" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else width="28" height="26" viewBox="0 0 28 22" fill="none"><circle cx="10" cy="7" r="3.4" stroke="#2c2f38" stroke-width="1.5"/><circle cx="19" cy="8" r="2.6" stroke="#2c2f38" stroke-width="1.5"/><path d="M3 20c0-3.3 2.8-5.8 7-5.8s7 2.5 7 5.8M17 20c0-2.8 2-5 4.8-5S27 17.2 27 20" stroke="#2c2f38" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="feature-icon__label">{{ f.label }}</span>
        </div>
      </div>

      <div class="hero__visual">
        <svg class="annotation__svg annotation__svg--desktop" viewBox="0 0 1536 1000" preserveAspectRatio="none" aria-hidden="true">
          <path d="M895 438 L1150 412" stroke="#8891A3" stroke-width="1" />
          <circle cx="1150" cy="412" r="4" fill="#454955" />
          <path d="M895 690 L1108 672" stroke="#8891A3" stroke-width="1" />
          <circle cx="1108" cy="672" r="4" fill="#454955" />
        </svg>

        <svg class="annotation__svg annotation__svg--mobile" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
          <path d="M228 120 L272 100" stroke="#6fcf3d" stroke-width="1.5" />
          <circle cx="272" cy="100" r="4" fill="#6fcf3d" />
          <path d="M170 165 L128 145" stroke="#6fcf3d" stroke-width="1.5" />
          <circle cx="128" cy="145" r="4" fill="#6fcf3d" />
        </svg>

        <p class="annotation annotation--top">Digital Precision<br />Advanced Treatment</p>
        <p class="annotation annotation--bottom">Personalized Fit<br />Natural Finish</p>
      </div>

      <div class="hero__chips" aria-hidden="true">
        <div class="chips__row">
          <span v-for="chip in chipsRowOne" :key="chip" class="chip">{{ chip }}</span>
        </div>
        <div class="chips__row chips__row--offset">
          <span v-for="chip in chipsRowTwo" :key="chip" class="chip">{{ chip }}</span>
        </div>
      </div>

      <div class="hero__stats">
        <div v-for="(stat, i) in stats" :key="i" class="stat">
          <span>{{ stat.line1 }}</span>
          <span>{{ stat.line2 }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-image: url('/images/hero-bg-desktop.png');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1536px;
  margin: 0 auto;
  min-height: 1000px;
  padding: 0 70px;
}

/* ---------- nav ---------- */
.hero__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #15171d;
  text-decoration: none;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav__links a {
  font-size: 15px;
  font-weight: 500;
  color: #2c2f38;
  text-decoration: none;
}

.nav__cta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.btn--primary {
  background: #6fcf3d;
  color: #fff;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: #6fcf3d;
  text-decoration: none;
}

.nav__burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

.nav__mobile-menu {
  display: none;
}

/* ---------- trust block ---------- */
.hero__trust {
  position: absolute;
  top: 150px;
  right: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  max-width: 190px;
}

.trust__avatars {
  display: flex;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -10px;
  background: linear-gradient(135deg, #a3e67e, #6fcf3d);
}

.avatar:first-child {
  margin-left: 0;
}

.hero__trust p {
  margin: 0;
  text-align: right;
  font-size: 13.5px;
  line-height: 1.45;
  color: #4a4e59;
}

/* ---------- main content ---------- */
.hero__content {
  padding-top: 110px;
  max-width: 620px;
}

.hero__eyebrow {
  display: none;
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4a9c2e;
}

.hero__content h1 {
  margin: 0;
  font-size: clamp(42px, 5.2vw, 72px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: #14161c;
}

.heading--mobile {
  display: none;
}

.hero__copy {
  margin: 28px 0 0;
  max-width: 340px;
  font-size: 16px;
  line-height: 1.65;
  color: #63677a;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 36px;
}

.hero__cta-mobile {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
  width: 100%;
}

/* ---------- feature icons (mobile) ---------- */
.hero__features {
  display: none;
}

.feature-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.feature-icon__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #eef1ee;
}

.feature-icon__label {
  font-size: 14.5px;
  font-weight: 600;
  color: #2c2f38;
  line-height: 1.3;
}

/* ---------- visual / annotations ---------- */
.hero__visual {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.annotation__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.annotation__svg--mobile {
  display: none;
}

.annotation {
  position: absolute;
  margin: 0;
  width: 210px;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.4;
  color: #454955;
}

.annotation--top {
  top: 316px;
  left: 968px;
  width: 182px;
  text-align: right;
}

.annotation--bottom {
  top: 573px;
  left: 968px;
  width: 140px;
  text-align: right;
}

/* ---------- chips ---------- */
.hero__chips {
  position: absolute;
  top: 615px;
  right: 70px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-end;
}

.chips__row {
  display: flex;
  gap: 12px;
}

.chips__row--offset {
  padding-right: 0;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 11px 22px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 6px 16px rgba(20, 30, 60, 0.08);
  font-size: 14px;
  font-weight: 500;
  color: #2c2f38;
  white-space: nowrap;
}

/* ---------- stats ---------- */
.hero__stats {
  position: absolute;
  left: 70px;
  right: 70px;
  bottom: 56px;
  display: flex;
  justify-content: space-between;
  padding-top: 26px;
  border-top: 1px solid rgba(20, 30, 60, 0.12);
}

.stat {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.45;
  color: #24262e;
}

.hero__stats .stat:last-child {
  text-align: right;
}

/* =========================================================
   Tablet
   ========================================================= */
@media (max-width: 1199px) {
  .hero__inner {
    min-height: 100vh;
    padding: 0 40px;
  }

  .hero__bg {
    background-image: url('/images/hero-bg-tab.png');
    background-position: center 100%;
    transform: scale(1.18);
    transform-origin: center bottom;
  }

  .nav__links {
    display: none;
  }

  .hero__content {
    padding-top: 64px;
    max-width: 520px;
  }

  .hero__content h1 {
    font-size: clamp(38px, 6vw, 54px);
  }

  .hero__trust,
  .hero__visual,
  .hero__chips {
    display: none;
  }

  .hero__stats {
    left: 40px;
    right: 40px;
    bottom: 32px;
    padding-top: 20px;
  }
}

/* =========================================================
   Mobile
   ========================================================= */
@media (max-width: 640px) {
  .hero {
    min-height: 0;
    background: #fff;
    overflow: hidden;
  }

  .hero::before,
  .hero::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(30px);
    background: rgba(111, 207, 61, 0.28);
    z-index: 0;
  }

  .hero::before {
    top: 60px;
    right: -40px;
    width: 140px;
    height: 220px;
    transform: rotate(20deg);
  }

  .hero::after {
    top: 45%;
    left: -50px;
    width: 100px;
    height: 160px;
    transform: rotate(-15deg);
  }

  .hero__bg {
    display: none;
  }

  .hero__inner {
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 0 22px 40px;
  }

  .hero__nav {
    padding-top: 24px;
    order: 0;
  }

  .nav__logo {
    gap: 6px;
    font-size: 16px;
    white-space: nowrap;
  }

  .nav__cta {
    gap: 8px;
  }

  .nav__cta .btn--primary {
    height: 40px;
    padding: 0 14px;
    font-size: 12.5px;
  }

  .nav__cta .btn-icon {
    display: none;
  }

  .nav__burger {
    width: 36px;
    height: 36px;
  }

  .nav__burger {
    display: flex;
  }

  .hero__nav {
    position: relative;
  }

  .nav__mobile-menu {
    position: absolute;
    top: 100%;
    left: 22px;
    right: 22px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 12px;
    padding: 16px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 45px rgba(20, 30, 60, 0.14);
  }

  .nav__mobile-menu a {
    padding: 10px 8px;
    font-size: 15px;
    font-weight: 500;
    color: #2c2f38;
    text-decoration: none;
  }

  .nav__mobile-cta {
    justify-content: center;
    margin-top: 8px;
  }

  .hero__content {
    position: relative;
    z-index: 1;
    order: 1;
    padding-top: 24px;
    max-width: 100%;
    text-align: left;
  }

  .hero__eyebrow {
    display: inline-block;
    background: rgba(111, 207, 61, 0.14);
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 14px;
  }

  .hero__content .heading--desktop {
    display: none;
  }

  .heading--mobile {
    display: block;
    font-size: 40px;
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: #14161c;
    margin: 0;
  }

  .hero__copy {
    max-width: 100%;
  }

  .hero__actions {
    display: none;
  }

  .hero__cta-mobile {
    display: flex;
  }

  .hero__features {
    position: relative;
    z-index: 1;
    order: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 28px;
  }

  .hero__visual {
    display: block;
    position: relative;
    order: 3;
    inset: auto;
    pointer-events: auto;
    margin: 8px -22px 0;
    aspect-ratio: 7 / 9;
    overflow: hidden;
    background-image: url('/images/hero-bg-mobile.png');
    background-size: 135% auto;
    background-position: center bottom;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 70px);
    mask-image: linear-gradient(to bottom, transparent 0, #000 70px);
  }

  .annotation__svg--desktop {
    display: none;
  }

  .annotation__svg--mobile {
    display: block;
  }

  .annotation {
    width: auto;
    max-width: 150px;
    font-size: 12.5px;
    background: rgba(255, 255, 255, 0.85);
    padding: 4px 8px;
    border-radius: 8px;
  }

  .annotation--top {
    top: 20%;
    left: auto;
    right: 6%;
    width: auto;
    max-width: 140px;
    text-align: left;
  }

  .annotation--bottom {
    top: 31%;
    left: 4%;
    width: auto;
    max-width: 130px;
    text-align: left;
  }

  .hero__trust {
    display: flex;
    position: relative;
    z-index: 1;
    order: 4;
    inset: auto;
    top: auto;
    right: auto;
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-top: -28px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 20px 45px rgba(20, 30, 60, 0.1);
  }

  .hero__trust::before {
    content: '';
    width: 1px;
    align-self: stretch;
    background: rgba(20, 30, 60, 0.12);
    order: -1;
  }

  .trust__avatars {
    order: -2;
  }

  .hero__trust p {
    text-align: left;
  }

  .hero__chips,
  .hero__stats {
    display: none;
  }
}
</style>
