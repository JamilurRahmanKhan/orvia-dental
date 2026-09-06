<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'What makes your implants different from others on the market?',
    answer:
      'Our implants utilize advanced 3D printing technology and biocompatible materials, ensuring a superior fit and enhancing the longevity of every implant solution.',
  },
  {
    question: 'What materials do you use for your implants?',
    answer:
      'We use medical-grade titanium and zirconia, chosen for their strength, biocompatibility, and long-term durability inside the body.',
  },
  {
    question: 'How do your implants enhance osseointegration?',
    answer:
      'A precision-engineered surface texture encourages bone cells to bond directly with the implant, creating a stable, long-lasting foundation.',
  },
  {
    question: 'What technologies support the customization of your implants?',
    answer:
      '3D scanning and printing let us map each patient\'s anatomy precisely, producing implants tailored to their exact fit and bite.',
  },
  {
    question: 'Can you provide data on implant success rates?',
    answer:
      'Our implants maintain a documented success rate above 97% over 10-year follow-up studies across standard and complex cases.',
  },
  {
    question: 'What post-operative protocols do you recommend for optimal results?',
    answer:
      'We recommend a soft-food diet, prescribed oral hygiene routine, and follow-up visits at 2, 6, and 12 weeks to monitor healing.',
  },
]

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section class="faq">
    <div class="faq__lines" aria-hidden="true"></div>
    <div class="faq__glow" aria-hidden="true"></div>

    <div class="faq__inner">
      <h2 class="faq__heading">Key <span>Questions</span></h2>

      <div class="faq__card">
        <div v-for="(item, i) in faqs" :key="item.question" class="faq-item" :class="{ 'faq-item--open': openIndex === i }">
          <button class="faq-item__row" type="button" @click="toggle(i)">
            <span class="faq-item__question">{{ item.question }}</span>
            <span class="faq-item__toggle">
              <svg v-if="openIndex === i" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10" stroke="#fff" stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="#fff" stroke-width="2" stroke-linecap="round" />
              </svg>
            </span>
          </button>
          <p v-if="openIndex === i" class="faq-item__answer">{{ item.answer }}</p>
        </div>
      </div>

      <div class="faq__footer">
        <a class="faq__logo" href="#">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3c-2.1 0-3.2 1-4.5 1S5 3.3 3.9 4.4C2.8 5.5 2.5 7.6 3 10c.4 2 1.4 3.6 2 5.4.5 1.6.7 4 1.9 4.6.9.4 1.3-1 1.7-2.4.4-1.4.7-2.6 1.4-2.6s1 1.2 1.4 2.6c.4 1.4.8 2.8 1.7 2.4 1.2-.6 1.4-3 1.9-4.6.6-1.8 1.6-3.4 2-5.4.5-2.4.2-4.5-.9-5.6C15 3.3 14.1 4 13.2 4S14.1 3 12 3Z"
              fill="none"
              stroke="#6fcf3d"
              stroke-width="1.6"
            />
          </svg>
          <span>Orvia Dental</span>
        </a>
        <span class="faq__divider" aria-hidden="true"></span>
        <p class="faq__tagline">
          We specialize in the production of high-quality dental implants,
          engineered for optimal performance and longevity.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #040f06 0%, #061c0a 55%, #0a2b12 100%);
  padding: 64px 0;
}

.faq__lines {
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

.faq__glow {
  position: absolute;
  left: -10%;
  bottom: -10%;
  width: 70%;
  height: 55%;
  background: radial-gradient(ellipse at bottom left, rgba(120, 230, 90, 0.55) 0%, rgba(90, 200, 70, 0.15) 45%, transparent 72%);
  z-index: 0;
}

.faq__inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
}

.faq__heading {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(30px, 6vw, 44px);
  font-weight: 800;
  color: #fff;
}

.faq__heading span {
  color: #6fcf3d;
}

.faq__card {
  background: rgba(20, 60, 30, 0.35);
  border: 1px solid rgba(111, 207, 61, 0.3);
  border-radius: 22px;
  padding: 8px 18px;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item__row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

.faq-item__question {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
}

.faq-item--open .faq-item__question {
  font-size: 18px;
}

.faq-item__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 50%;
  background: #4caf42;
  margin-top: 2px;
}

.faq-item--open .faq-item__toggle {
  background: #3d9636;
}

.faq-item__answer {
  margin: -8px 0 20px;
  max-width: 90%;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
}

.faq__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 48px;
}

.faq__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

.faq__divider {
  display: none;
}

.faq__tagline {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.02em;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
}

/* =========================================================
   Tablet and up
   ========================================================= */
@media (min-width: 768px) {
  .faq {
    padding: 90px 0;
  }

  .faq-item__row {
    padding: 24px 4px;
  }

  .faq-item__question {
    font-size: 18px;
  }

  .faq-item--open .faq-item__question {
    font-size: 20px;
  }

  .faq-item__answer {
    max-width: 75%;
  }

  .faq__footer {
    flex-direction: row;
    align-items: center;
    margin-top: 64px;
  }

  .faq__divider {
    display: block;
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
  }

  .faq__tagline {
    max-width: 420px;
    text-transform: uppercase;
  }
}
</style>
