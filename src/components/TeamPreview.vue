<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

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
  <section class="team" aria-labelledby="team-title">
    <div class="container">
      <div class="team__head">
        <h2 id="team-title" class="team__title">The people you'll see</h2>
        <a class="link-arrow team__all" href="/about/team/">
          Meet the whole team
          <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
        </a>
      </div>
      <p v-if="practice.demo" class="team__demo-note">Sample team for demo</p>

      <ul class="team__grid">
        <li v-for="m in practice.team" :key="m.slug" class="team__member">
          <img
            class="team__photo"
            :src="`/images/v2/${m.img}-800.webp`"
            :srcset="`/images/v2/${m.img}-480.webp 480w, /images/v2/${m.img}-800.webp 800w`"
            sizes="(min-width: 1024px) 380px, 96px"
            width="800"
            height="1000"
            loading="lazy"
            :alt="m.alt"
          />
          <div class="team__badge">
            <p class="team__name">{{ m.name }}</p>
            <p class="team__role">{{ m.credential }} · {{ m.role }}</p>
            <p class="team__human">{{ m.human }}</p>
            <a class="link-arrow team__book" :href="`/book/?provider=${m.slug}`">
              Book with {{ bookLabel(m) }}
              <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.team {
  background: var(--color-paper);
  padding-block: var(--section-base);
}

.team__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
}

.team__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.team__all {
  flex-shrink: 0;
  font-size: var(--text-small);
}

.team__demo-note {
  margin-top: var(--space-2);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  margin: var(--space-10) 0 0;
  padding: 0;
  list-style: none;
}

.team__member {
  display: flex;
  gap: var(--space-5);
  align-items: flex-start;
}

.team__photo {
  flex-shrink: 0;
  width: 96px;
  height: 120px;
  object-fit: cover;
  object-position: top center;
  border-radius: var(--radius-none);
}

.team__badge {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-1);
}

.team__name {
  font-size: var(--text-h4);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.team__role {
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.team__human {
  font-size: var(--text-small);
  color: var(--color-ink);
}

.team__book {
  margin-top: var(--space-2);
  font-size: var(--text-small);
}

@media (min-width: 1024px) {
  .team__grid {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gap);
    row-gap: var(--space-10);
  }

  .team__member {
    flex-direction: column;
  }

  .team__photo {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
  }

  .team__badge {
    margin-top: var(--space-4);
    padding-top: 0;
  }
}
</style>
