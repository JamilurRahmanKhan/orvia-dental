<script setup>
import { onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import FinalCta from '../components/FinalCta.vue'
import { practice } from '../config/practice.js'

onMounted(() => {
  document.title = 'Meet Our Dentists | Orvia Dental, Austin TX'
})

// "Book with Dr. Reyes" for dentists, "Book with Priya" for staff without a Dr. title.
function bookLabel(member) {
  if (member.name.startsWith('Dr. ')) {
    const parts = member.name.split(' ')
    return `Dr. ${parts[parts.length - 1]}`
  }
  return member.name.split(' ')[0]
}
</script>

<template>
  <section class="page-hero" aria-labelledby="team-title">
    <div class="container">
      <h1 id="team-title" class="page-hero__title">Meet the team</h1>
      <p class="page-hero__lede">
        The people who'll greet you at the door, take your X-rays and walk you through your
        estimate before anything starts.
      </p>
      <p v-if="practice.demo" class="page-hero__demo-note">Sample team for demo.</p>
    </div>
  </section>

  <section class="team-page" aria-label="Team members">
    <div class="container">
      <ul class="team-page__grid">
        <li v-for="m in practice.team" :key="m.slug" class="team-page__card card card--tap">
          <a class="team-page__link" :href="`/about/team/${m.slug}/`">
            <img
              class="team-page__photo"
              :src="`/images/v2/${m.img}-800.webp`"
              :srcset="`/images/v2/${m.img}-480.webp 480w, /images/v2/${m.img}-800.webp 800w`"
              sizes="(min-width: 1024px) 380px, 96px"
              width="800"
              height="1000"
              loading="lazy"
              :alt="m.alt"
            />
            <span class="team-page__badge">
              <span class="team-page__name">{{ m.name }}</span>
              <span class="team-page__role">{{ m.credential }} · {{ m.role }}</span>
            </span>
          </a>

          <p class="team-page__human">{{ m.human }}</p>

          <div class="team-page__actions">
            <a class="link-arrow" :href="`/about/team/${m.slug}/`">
              View profile
              <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
            <a class="link-arrow" :href="`/book/?provider=${m.slug}`">
              Book with {{ bookLabel(m) }}
              <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <FinalCta />
</template>

<style scoped>
.page-hero {
  padding-block: var(--space-16) var(--section-tight);
}

.page-hero__title {
  max-width: 16ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  text-wrap: balance;
}

.page-hero__lede {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  color: var(--color-ink-2);
}

.page-hero__demo-note {
  margin-top: var(--space-4);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.team-page {
  background: var(--color-paper);
  padding-block: var(--space-4) var(--section-base);
}

.team-page__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
  margin: 0;
  padding: 0;
  list-style: none;
}

.team-page__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
}

.team-page__link {
  display: flex;
  gap: var(--space-5);
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
}

.team-page__link:hover .team-page__name {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.team-page__photo {
  flex-shrink: 0;
  width: 96px;
  height: 120px;
  object-fit: cover;
  object-position: top center;
  border-radius: var(--radius-none);
}

.team-page__badge {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-1);
}

.team-page__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.team-page__role {
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.team-page__human {
  font-size: var(--text-small);
  color: var(--color-ink);
  max-width: var(--measure-narrow);
}

.team-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
}

.team-page__actions .link-arrow {
  font-size: var(--text-small);
}

@media (min-width: 1024px) {
  .team-page__grid {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gap);
    row-gap: var(--space-12);
  }

  .team-page__link {
    flex-direction: column;
  }

  .team-page__photo {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
  }

  .team-page__badge {
    margin-top: var(--space-4);
    padding-top: 0;
  }
}
</style>
