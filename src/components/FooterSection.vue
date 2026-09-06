<script setup>
import { ref } from 'vue'
const openCol = ref(-1)
function toggleCol(i) {
  openCol.value = openCol.value === i ? -1 : i
}
const linkColumns = [
  {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'How It Works', 'Results', 'Reviews', 'FAQs'],
  },
  {
    title: 'Our Services',
    links: [
      'Dental Implants',
      'Teeth Whitening',
      'Preventive Care',
      'Cosmetic Dentistry',
      'Emergency Care',
      'Book a Free Consultation',
    ],
  },
  {
    title: 'Support',
    links: [
      'Help Center',
      'Insurance & Billing',
      'Appointment Policy',
      'Patient Forms',
      'Contact Us',
      'Privacy Policy',
    ],
  },
]

const contactItems = [
  { icon: 'phone', title: '+1 (555) 123-4567', sub: 'Mon – Fri, 9AM – 6PM' },
  { icon: 'mail', title: 'support@orviadental.com', sub: 'We reply within 24 hours' },
  { icon: 'pin', title: '123 Smile Street', sub: 'New York, NY 10001, USA' },
]

const socials = ['facebook', 'instagram', 'youtube', 'pinterest', 'linkedin']
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="newsletter">
        <div class="newsletter__intro">
          <span class="newsletter__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4V6Z" stroke="#2f5233" stroke-width="1.6"/><path d="M4 6l8 7 8-7" stroke="#2f5233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <span class="newsletter__eyebrow">Stay in the Loop</span>
            <h2 class="newsletter__heading">Get expert tips for a brighter smile</h2>
            <p class="newsletter__copy">
              Subscribe to our newsletter and be the first to know about new
              treatments, offers, and smile care tips.
            </p>
          </div>
        </div>

        <div class="newsletter__form">
          <form class="newsletter__row" @submit.prevent>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">
              Subscribe
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </form>
          <p class="newsletter__privacy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 11V8a6 6 0 1 1 12 0v3" stroke="#7c877e" stroke-width="1.6"/><rect x="4" y="11" width="16" height="10" rx="2" stroke="#7c877e" stroke-width="1.6"/></svg>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>

      <div class="footer__grid">
        <div class="footer__brand">
          <a class="footer__logo" href="#">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3c-2.1 0-3.2 1-4.5 1S5 3.3 3.9 4.4C2.8 5.5 2.5 7.6 3 10c.4 2 1.4 3.6 2 5.4.5 1.6.7 4 1.9 4.6.9.4 1.3-1 1.7-2.4.4-1.4.7-2.6 1.4-2.6s1 1.2 1.4 2.6c.4 1.4.8 2.8 1.7 2.4 1.2-.6 1.4-3 1.9-4.6.6-1.8 1.6-3.4 2-5.4.5-2.4.2-4.5-.9-5.6C15 3.3 14.1 4 13.2 4S14.1 3 12 3Z" fill="none" stroke="#2f5233" stroke-width="1.6"/>
              <path d="M12 4c2 0 3 2 3 4-2-1-3 .5-3 2" fill="#6fcf3d"/>
            </svg>
            <span>
              Orvia Dental
              <em>A Brighter Smile</em>
            </span>
          </a>
          <p class="footer__brand-copy">
            Advanced dental care solutions for a brighter, healthier, more
            confident smile.
          </p>
          <div class="footer__socials">
            <a v-for="s in socials" :key="s" class="footer__social" :href="'#'" :aria-label="s">
              <svg v-if="s === 'facebook'" width="16" height="16" viewBox="0 0 24 24" fill="#2f5233"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.2-.8.5-.8Z"/></svg>
              <svg v-else-if="s === 'instagram'" width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#2f5233" stroke-width="1.6"/><circle cx="12" cy="12" r="3.2" stroke="#2f5233" stroke-width="1.6"/><circle cx="16.2" cy="7.8" r="1" fill="#2f5233"/></svg>
              <svg v-else-if="s === 'youtube'" width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="#2f5233" stroke-width="1.6"/><path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="#2f5233"/></svg>
              <svg v-else-if="s === 'pinterest'" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2f5233" stroke-width="1.6"/><path d="M9.5 18c1-3 1.3-4.3 1.3-4.3s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.9-4.2-3.9-3 0-4.9 2.3-4.9 4.7 0 .9.3 1.5.7 2 .2.2.2.3.1.5l-.3 1c0 .2-.2.3-.4.2-1-.4-1.5-1.6-1.5-2.9 0-2.2 1.8-4.8 5.5-4.8 3 0 4.9 2.1 4.9 4.4 0 3-1.7 5.4-4.2 5.4-.8 0-1.6-.4-1.9-1l-.5 2c-.2.7-.6 1.6-.9 2.1" fill="#2f5233"/></svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#2f5233" stroke-width="1.6"/><path d="M8 10.5v6M8 8v.01M12 16.5v-4c0-1 .8-1.8 2-1.8s2 .8 2 1.8v4" stroke="#2f5233" stroke-width="1.6" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>

        <div v-for="(col, i) in linkColumns" :key="col.title" class="footer__col" :class="{ 'is-open': openCol === i }">
          <button type="button" class="footer__col-toggle" @click="toggleCol(i)">
            <h3>{{ col.title }}</h3>
            <svg class="footer__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#2f5233" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <ul>
            <li v-for="link in col.links" :key="link"><a href="#">{{ link }}</a></li>
          </ul>
        </div>

        <div class="footer__col footer__col--contact" :class="{ 'is-open': openCol === 3 }">
          <button type="button" class="footer__col-toggle" @click="toggleCol(3)">
            <h3>Contact Us</h3>
            <svg class="footer__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#2f5233" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <ul class="footer__contact-list">
            <li v-for="c in contactItems" :key="c.title">
              <span class="footer__contact-icon">
                <svg v-if="c.icon === 'phone'" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3c0 1-1 2-2 2-8 0-14-6-14-14 0-1 1-2 2-2Z" stroke="#2f5233" stroke-width="1.5" stroke-linejoin="round"/></svg>
                <svg v-else-if="c.icon === 'mail'" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4V6Z" stroke="#2f5233" stroke-width="1.5"/><path d="M4 6l8 7 8-7" stroke="#2f5233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" stroke="#2f5233" stroke-width="1.5"/><circle cx="12" cy="9.5" r="2.4" stroke="#2f5233" stroke-width="1.5"/></svg>
              </span>
              <span>
                <strong>{{ c.title }}</strong>
                <em>{{ c.sub }}</em>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">&copy; 2024 Orvia Dental. All rights reserved.</p>
        <div class="footer__legal">
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
        </div>
        <button class="footer__lang" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2f5233" stroke-width="1.5"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" stroke="#2f5233" stroke-width="1.5"/></svg>
          English
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#2f5233" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>

    <div class="footer__flourish" aria-hidden="true">
      <svg class="footer__wave" viewBox="0 0 1536 160" preserveAspectRatio="none">
        <path d="M0 80 C 300 160, 700 0, 1000 60 C 1250 110, 1400 40, 1536 70 L1536 160 L0 160 Z" fill="rgba(111,207,61,0.12)" />
      </svg>
      <p class="footer__script">Healthy Smiles<br />Brighter Tomorrows <span>&hearts;</span></p>
      <p class="footer__tagline">Care Today<br />Confidence Tomorrow</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background: #eaf1ec;
  padding: 32px 20px 0;
}

.footer__inner {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* ---------- newsletter ---------- */
.newsletter {
  background: #fff;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 20px 45px rgba(30, 60, 40, 0.06);
}

.newsletter__intro {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.newsletter__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  background: #dfead9;
}

.newsletter__eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3f8a4c;
}

.newsletter__heading {
  margin: 8px 0 0;
  font-size: 22px;
  font-weight: 800;
  color: #16241a;
}

.newsletter__copy {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.55;
  color: #5c675f;
  max-width: 460px;
}

.newsletter__form {
  margin-top: 22px;
}

.newsletter__row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter__row button {
  justify-content: center;
}

.newsletter__row input {
  flex: 1;
  min-width: 0;
  padding: 14px 18px;
  border-radius: 999px;
  border: 1px solid rgba(20, 40, 25, 0.15);
  font-size: 14px;
  font-family: inherit;
}

.newsletter__row input:focus {
  outline: 2px solid #6fcf3d;
  outline-offset: 1px;
}

.newsletter__row button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(180deg, #3f8a4c, #2f5233);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.newsletter__privacy {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0 0;
  font-size: 12.5px;
  color: #7c877e;
}

/* ---------- link grid ---------- */
.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  margin-top: 40px;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer__logo span {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 800;
  color: #16241a;
}

.footer__logo em {
  font-style: normal;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6fcf3d;
}

.footer__brand-copy {
  margin: 16px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: #5c675f;
  max-width: 340px;
}

.footer__socials {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.footer__social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #dfead9;
}

.footer__col h3 {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 800;
  color: #16241a;
}

.footer__col-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.footer__col-toggle h3 {
  margin: 0;
}

.footer__chevron {
  display: none;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.footer__col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__col a {
  font-size: 14.5px;
  color: #5c675f;
  text-decoration: none;
}

.footer__contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.footer__contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 50%;
  background: #dfead9;
  margin-top: 1px;
}

.footer__contact-list strong {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  color: #16241a;
}

.footer__contact-list em {
  display: block;
  font-style: normal;
  font-size: 12.5px;
  color: #7c877e;
  margin-top: 2px;
}

/* ---------- bottom bar ---------- */
.footer__bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
  padding: 24px 0;
  border-top: 1px solid rgba(20, 40, 25, 0.1);
  font-size: 13.5px;
  color: #5c675f;
}

.footer__legal {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer__legal a {
  color: #5c675f;
  text-decoration: none;
}

.footer__legal span {
  color: #b7c1b8;
}

.footer__lang {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(20, 40, 25, 0.15);
  background: #fff;
  font-size: 13.5px;
  color: #2f5233;
  font-family: inherit;
  cursor: pointer;
}

/* ---------- flourish ---------- */
.footer__flourish {
  position: relative;
  margin-top: 20px;
  padding: 48px 20px 40px;
}

.footer__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.footer__script {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: 'Brush Script MT', cursive;
  font-size: 26px;
  line-height: 1.3;
  color: #8fa892;
  max-width: 1400px;
  margin: 0 auto;
}

.footer__script span {
  color: #6fcf3d;
}

.footer__tagline {
  position: relative;
  z-index: 1;
  margin: 20px auto 0;
  max-width: 1400px;
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5c675f;
  line-height: 1.7;
}

/* =========================================================
   Mobile — collapsible link columns
   ========================================================= */
@media (max-width: 899px) {
  .footer__grid {
    gap: 0;
  }

  .footer__brand {
    padding-bottom: 24px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(20, 40, 25, 0.1);
  }

  .footer__col {
    padding: 18px 0;
    border-bottom: 1px solid rgba(20, 40, 25, 0.1);
  }

  .footer__col-toggle {
    margin-bottom: 0;
  }

  .footer__col ul {
    display: none;
    padding-top: 16px;
  }

  .footer__col.is-open ul {
    display: flex;
  }

  .footer__chevron {
    display: block;
  }

  .footer__col.is-open .footer__chevron {
    transform: rotate(180deg);
  }
}

/* =========================================================
   Tablet and up
   ========================================================= */
@media (min-width: 900px) {
  .footer {
    padding: 40px 40px 0;
  }

  .newsletter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 32px 40px;
  }

  .newsletter__row {
    flex-direction: row;
  }

  .newsletter__form {
    margin-top: 0;
    min-width: 420px;
  }

  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1fr 1.1fr;
    gap: 24px;
  }

  .footer__tagline {
    margin-top: -50px;
    text-align: right;
  }

  .footer__bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
