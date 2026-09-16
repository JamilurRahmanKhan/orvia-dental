<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { practice } from '../config/practice.js'

const route = useRoute()

const member = computed(() => practice.team.find((t) => t.slug === route.params.slug))

// Bios composed from the short `human` field in practice.js, expanded into a fuller
// paragraph per the demo build spec. Keyed by slug; languages/treatments are hand-picked
// per role so we never over-claim what someone actually does.
const bios = {
  'amara-cole': {
    bio: "Dr. Cole has spent twelve years in general and cosmetic dentistry, and she still starts every new-patient visit the same way: with a conversation, not a drill. She wants to know what's actually worrying you — a chipped tooth you've been hiding in photos, a filling that's overdue, a checkup you've been putting off — before she looks at a single X-ray. Patients describe her as unhurried and plainspoken; she'll tell you what a treatment costs and what it involves before you're in the chair, and she means it when she says a second opinion is always welcome. Dr. Cole sees Spanish-speaking patients and their families without needing an interpreter in the room, which matters for the number of long-time Orvia patients who found her that way. Outside the practice, she's usually the one asking after your kids by name at the next visit.",
    languages: ['English', 'Spanish'],
    treatmentSlugs: ['general-dentistry', 'veneers', 'teeth-whitening'],
  },
  'marcus-reyes': {
    bio: "Dr. Reyes focuses on restorative and implant work — the appointments people tend to research for weeks beforehand. He built his approach around one habit: pulling up your X-ray on the screen and walking through it in plain English, pointing at exactly what he's talking about instead of reciting terms. If you're weighing an implant, a root canal, or a crown, he'll lay out the visits, the timeline, and the written estimate before any of it is scheduled, so there's nothing sprung on you mid-treatment. Patients who've put off bigger work for years say he's the reason they finally went ahead with it. When he's not in the operatory, he's usually logging miles on the Barton Creek Greenbelt trails, which he says teaches the same patience he brings to a multi-visit implant case.",
    languages: ['English'],
    treatmentSlugs: ['dental-implants', 'root-canal', 'sedation-dentistry'],
  },
  'priya-nandan': {
    bio: "Priya leads the hygiene team at Orvia, and the visits she's known for are the ones other offices dread booking: the patient who hasn't been in five, ten, sometimes twenty years. She doesn't lecture and she doesn't rush. She'll walk through what a cleaning actually involves, check in throughout, and stop if you need a break. Kids get the same patience — she's the one letting a nervous six-year-old hold the mirror and see what she's looking at before anything touches their teeth. Between cleanings, she's usually the one keeping the appointment book honest, flagging patients who are overdue for a checkup so nothing slips through. If it's been a while since your last visit, ask the front desk to book with her first.",
    languages: ['English'],
    treatmentSlugs: ['general-dentistry', 'childrens-dentistry'],
  },
}

const bio = computed(() => bios[route.params.slug])
const treatments = computed(() =>
  bio.value ? practice.treatments.filter((t) => bio.value.treatmentSlugs.includes(t.slug)) : []
)

function bookLabel(m) {
  if (m.name.startsWith('Dr. ')) {
    const parts = m.name.split(' ')
    return `Dr. ${parts[parts.length - 1]}`
  }
  return m.name.split(' ')[0]
}

watchEffect(() => {
  document.title = member.value
    ? `${member.value.name}, ${member.value.credential} | Dentist in Austin, TX`
    : 'Team member not found | Orvia Dental'
})
</script>

<template>
  <section v-if="member" class="member" aria-labelledby="member-title">
    <div class="container member__grid">
      <figure class="member__figure">
        <img
          class="member__photo"
          :src="`/images/v2/${member.img}-800.webp`"
          :srcset="`/images/v2/${member.img}-480.webp 480w, /images/v2/${member.img}-800.webp 800w`"
          sizes="(min-width: 1024px) 460px, 100vw"
          width="800"
          height="1000"
          :alt="member.alt"
        />
      </figure>

      <div class="member__content">
        <p class="member__back">
          <a class="link-arrow" href="/about/team/">
            <ArrowRight :size="16" :stroke-width="1.75" class="member__back-icon" aria-hidden="true" />
            All team members
          </a>
        </p>

        <h1 id="member-title" class="member__name">{{ member.name }}</h1>
        <p class="member__role">{{ member.credential }} · {{ member.role }}</p>

        <p v-if="practice.demo" class="member__demo-note">Sample team member for demo.</p>

        <p class="member__bio">{{ bio?.bio }}</p>

        <div v-if="bio?.languages?.length" class="member__block">
          <h2 class="member__block-title">Languages spoken</h2>
          <p class="member__block-body">{{ bio.languages.join(', ') }}</p>
        </div>

        <div v-if="treatments.length" class="member__block">
          <h2 class="member__block-title">Treatments</h2>
          <ul class="member__treatments">
            <li v-for="t in treatments" :key="t.slug">
              <a class="link-arrow" :href="`/treatments/${t.slug}/`">
                {{ t.name }}
                <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <a class="btn btn--primary btn--lg member__book" :href="`/book/?provider=${member.slug}`">
          Book with {{ bookLabel(member) }}
        </a>
      </div>
    </div>
  </section>

  <section v-else class="not-found" aria-labelledby="not-found-title">
    <div class="container">
      <h1 id="not-found-title" class="not-found__title">We couldn't find that team member</h1>
      <p class="not-found__text">
        They may have moved on, or the link may be out of date. You can see everyone currently at
        Orvia Dental on the team page.
      </p>
      <a class="link-arrow not-found__link" href="/about/team/">
        All team members
        <ArrowRight :size="18" :stroke-width="1.75" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.member {
  padding-block: var(--space-8) var(--section-base);
}

.member__grid {
  display: grid;
  gap: var(--space-8);
}

.member__figure {
  margin: 0;
}

.member__photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top center;
}

.member__back {
  margin: 0 0 var(--space-4);
}

.member__back .link-arrow {
  font-size: var(--text-small);
  flex-direction: row-reverse;
}

.member__back-icon {
  transform: rotate(180deg);
}

.member__name {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.member__role {
  margin-top: var(--space-2);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.member__demo-note {
  margin-top: var(--space-3);
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.member__bio {
  margin-top: var(--space-6);
  max-width: var(--measure-narrow);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  color: var(--color-ink-2);
}

.member__block {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: var(--border-hair);
  max-width: var(--measure-narrow);
}

.member__block-title {
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  color: var(--color-ink-3);
}

.member__block-body {
  margin-top: var(--space-2);
  font-size: var(--text-body);
  color: var(--color-ink);
}

.member__treatments {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.member__treatments .link-arrow {
  font-size: var(--text-body);
}

.member__book {
  margin-top: var(--space-8);
}

.not-found {
  padding-block: var(--section-base);
}

.not-found__title {
  max-width: 20ch;
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
}

.not-found__text {
  margin-top: var(--space-5);
  max-width: var(--measure-narrow);
  font-size: var(--text-body-lg);
  color: var(--color-ink-2);
}

.not-found__link {
  margin-top: var(--space-8);
}

@media (min-width: 1024px) {
  .member__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--grid-gap);
    align-items: start;
  }

  .member__figure {
    grid-column: 1 / span 5;
  }

  .member__content {
    grid-column: 6 / -1;
    padding-top: var(--space-2);
  }
}
</style>
