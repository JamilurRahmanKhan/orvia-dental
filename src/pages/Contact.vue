<script setup>
import { ref, computed, onMounted } from 'vue'
import { Phone, Mail } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
import { submitLead, backendConfigured } from '../config/backend.js'
import { setMeta } from '../lib/meta.js'
import LocationHours from '../components/LocationHours.vue'

const form = ref({ name: '', email: '', phone: '', message: '', preferred: 'Phone', consent: false })
const state = ref('idle') // idle | sending | sent | error
const showContactError = ref(false)
const hasContactMethod = computed(() => Boolean(form.value.email || form.value.phone))

async function onSubmit() {
  if (!form.value.email && !form.value.phone) {
    showContactError.value = true
    return
  }
  showContactError.value = false
  state.value = 'sending'
  const result = await submitLead({
    source: 'contact form',
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    message: `Preferred contact: ${form.value.preferred}. ${form.value.message}`,
    consent: form.value.consent,
  })
  state.value = result.ok || result.error === 'not-configured' ? 'sent' : 'error'
}

onMounted(() => {
  setMeta(`Contact Us | ${practice.name}, ${practice.city} ${practice.state}`, `Call, email, or send a message to ${practice.name} in ${practice.city}, TX.`)
})
</script>

<template>
  <div class="contact">
    <div class="container contact__head">
      <h1 class="contact__title">Contact us</h1>

      <div class="cards">
        <a class="contact-card" :href="practice.phoneHref">
          <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
          <span class="figure">{{ practice.phoneDisplay }}</span>
        </a>
        <a class="contact-card" :href="`mailto:${practice.email}`">
          <Mail :size="20" :stroke-width="1.75" aria-hidden="true" />
          {{ practice.email }}
        </a>
        <a class="contact-card" :href="practice.mapUrl" target="_blank" rel="noopener">
          {{ practice.address }}
        </a>
      </div>
    </div>

    <LocationHours />

    <div class="container form-block">
      <h2 class="form-block__title">Send a message</h2>
      <p class="form-block__note">
        For anything urgent, call us — this form isn't monitored in real time. Please don't include medical
        details or symptoms here; we'll ask what we need when we call.
      </p>

      <form v-if="state !== 'sent'" class="form" @submit.prevent="onSubmit">
        <label class="field">
          <span class="field__label">Name</span>
          <input v-model="form.name" type="text" class="field__input" autocomplete="name" required />
        </label>
        <label class="field">
          <span class="field__label">Email</span>
          <input v-model="form.email" type="email" class="field__input" autocomplete="email" />
        </label>
        <label class="field">
          <span class="field__label">Phone</span>
          <input v-model="form.phone" type="tel" class="field__input" autocomplete="tel" />
        </label>
        <p v-if="showContactError && !hasContactMethod" class="error" role="alert">
          Add an email or phone number so we can reach you back.
        </p>
        <fieldset class="field field--radio">
          <legend class="field__label">Preferred contact method</legend>
          <label v-for="opt in ['Phone', 'Email', 'Text']" :key="opt" class="radio">
            <input v-model="form.preferred" type="radio" name="preferred" :value="opt" />
            {{ opt }}
          </label>
        </fieldset>
        <label class="field">
          <span class="field__label">Message</span>
          <textarea v-model="form.message" class="field__input field__textarea" rows="4" required></textarea>
        </label>
        <label class="consent">
          <input v-model="form.consent" type="checkbox" />
          <span>You can text me about this message. Msg &amp; data rates may apply.</span>
        </label>

        <p v-if="state === 'error'" class="error" role="alert">Something went wrong — please call us instead.</p>

        <button type="submit" class="btn btn--primary btn--lg" :disabled="state === 'sending'">
          {{ state === 'sending' ? 'Sending…' : 'Send message' }}
        </button>
      </form>

      <div v-else class="sent">
        <p v-if="(form.preferred === 'Email' && form.email) || (form.preferred !== 'Email' && form.phone)">
          Thanks, {{ form.name }} — we'll be in touch by {{ form.preferred.toLowerCase() }}.
        </p>
        <p v-else>Thanks, {{ form.name }} — we'll be in touch using the contact info you gave us.</p>
        <p v-if="!backendConfigured" class="sent__demo">
          Demo mode: this site isn't connected to a live inbox yet. See <code>google-apps-script/README.md</code>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact__head {
  padding-block: var(--space-10) var(--space-8);
}

.contact__title {
  font-size: var(--text-h1);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-heading);
}

.cards {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--tap-comfort);
  padding: 0 var(--space-4);
  border: var(--border-hair);
  color: var(--color-ink);
  text-decoration: none;
  font-size: var(--text-body);
}

.contact-card:hover {
  background: var(--color-sunk);
}

.form-block {
  max-width: 60ch;
  padding-block: var(--section-base);
  margin-inline: 0;
}

.form-block__title {
  font-size: var(--text-h2);
  font-weight: 650;
}

.form-block__note {
  margin-top: var(--space-3);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.form {
  display: grid;
  gap: var(--space-5);
  margin-top: var(--space-8);
}

.field__label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
}

.field--radio {
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  gap: var(--space-5);
  align-items: center;
}

.field--radio .field__label {
  flex-basis: 100%;
}

.radio {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  font-size: var(--text-small);
}

.field__input {
  width: 100%;
  height: var(--tap-comfort);
  padding: 0 var(--space-4);
  border: var(--border-control);
  border-radius: var(--radius-control);
  background: var(--color-slip);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-ink);
}

.field__textarea {
  height: auto;
  padding: var(--space-3) var(--space-4);
  resize: vertical;
}

.field__input:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.consent input {
  margin-top: 3px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.error {
  color: var(--color-signal);
  font-size: var(--text-small);
}

.sent {
  margin-top: var(--space-8);
  font-size: var(--text-body-lg);
}

.sent__demo {
  margin-top: var(--space-4);
  padding: var(--space-4);
  background: var(--color-sunk);
  border-radius: var(--radius-control);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.sent__demo code {
  font-family: var(--font-figure);
}
</style>
