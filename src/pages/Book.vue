<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Phone, ChevronLeft } from 'lucide-vue-next'
import { practice } from '../config/practice.js'
import { fetchAvailability, submitBooking, submitLead, backendConfigured } from '../config/backend.js'
import { setMeta } from '../lib/meta.js'

const route = useRoute()
const router = useRouter()

const STEPS = ['patient', 'reason', 'time', 'details', 'insurance', 'confirm']
const stepIndex = ref(0)
const step = computed(() => STEPS[stepIndex.value])

const reasons = [
  { id: 'checkup', label: 'Checkup & cleaning' },
  { id: 'emergency', label: 'Emergency / in pain' },
  { id: 'new-exam', label: 'New patient exam' },
  { id: 'treatment', label: 'A specific treatment' },
  { id: 'consult', label: 'Consultation' },
  { id: 'not-sure', label: "Not sure" },
]

const form = ref({
  patientType: '',
  reason: route.query.reason === 'emergency' ? 'emergency' : '',
  date: '',
  time: '',
  timePreference: '',
  name: '',
  phone: '',
  email: '',
  insurance: '',
  skipInsurance: false,
  notes: '',
  smsConsent: false,
})

const minDate = computed(() => new Date().toISOString().slice(0, 10))
const maxDate = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toISOString().slice(0, 10)
})

const slots = ref([])
const slotsLoading = ref(false)
const slotsChecked = ref(false)
const useFallback = computed(() => !backendConfigured || (slotsChecked.value && slots.value.length === 0))

watch(
  () => form.value.date,
  async (date) => {
    slots.value = []
    slotsChecked.value = false
    form.value.time = ''
    if (!date || !backendConfigured) return
    slotsLoading.value = true
    const res = await fetchAvailability(date)
    slots.value = res.ok ? res.slots || [] : []
    slotsChecked.value = true
    slotsLoading.value = false
  }
)

const submitting = ref(false)
const submitError = ref('')

async function confirm() {
  submitting.value = true
  submitError.value = ''
  const reasonLabel = reasons.find((r) => r.id === form.value.reason)?.label || form.value.reason

  let result
  if (!useFallback.value && form.value.date && form.value.time) {
    result = await submitBooking({
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email,
      reason: reasonLabel,
      date: form.value.date,
      time: form.value.time,
      patientType: form.value.patientType,
      insurance: form.value.skipInsurance ? "Bringing it in person" : form.value.insurance,
      notes: form.value.notes,
      smsConsent: form.value.smsConsent,
    })
  } else {
    // No live slots (backend not configured, or nothing open that day) — fall back to a
    // request that a human confirms, per the site spec's stated fallback behavior.
    result = await submitLead({
      source: 'booking-request',
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email,
      insurancePlan: form.value.skipInsurance ? '' : form.value.insurance,
      consent: form.value.smsConsent,
      message: `Reason: ${reasonLabel}. Patient: ${form.value.patientType}. Preferred date: ${form.value.date || 'flexible'}. Preferred time: ${form.value.timePreference || 'flexible'}.${form.value.notes ? ' Notes: ' + form.value.notes : ''}`,
    })
  }

  submitting.value = false

  if (!result.ok && result.error === 'not-configured') {
    // Demo mode: no backend deployed yet. Still let the visitor complete the flow so the
    // UI can be reviewed end to end; nothing is silently pretended to be sent anywhere real.
    sessionStorage.setItem('orvia-booking-demo', '1')
  } else if (!result.ok) {
    submitError.value = result.error || 'Something went wrong. Please call us instead.'
    return
  }

  sessionStorage.setItem(
    'orvia-booking-confirmation',
    JSON.stringify({
      name: form.value.name,
      reason: reasonLabel,
      date: form.value.date,
      time: form.value.time || null,
      timePreference: form.value.timePreference,
      fallback: useFallback.value,
      demo: !result.ok && result.error === 'not-configured',
    })
  )
  router.push('/book/confirmed/')
}

function next() {
  if (stepIndex.value < STEPS.length - 1) stepIndex.value++
}
function back() {
  if (stepIndex.value > 0) stepIndex.value--
}

const canProceed = computed(() => {
  if (step.value === 'patient') return Boolean(form.value.patientType)
  if (step.value === 'reason') return Boolean(form.value.reason)
  if (step.value === 'time') {
    if (useFallback.value) return Boolean(form.value.date && form.value.timePreference)
    return Boolean(form.value.date && form.value.time)
  }
  if (step.value === 'details') return Boolean(form.value.name && form.value.phone)
  return true
})

onMounted(() => {
  setMeta(`Book an Appointment | ${practice.name}`, `Book online in under a minute. No account, no phone tag. Same-day emergency slots available.`)
})
</script>

<template>
  <div class="book container">
    <div class="book__head">
      <a class="link-arrow book__back-home" href="/">
        <ChevronLeft :size="16" :stroke-width="1.75" aria-hidden="true" />
        Orvia Dental
      </a>
      <a class="link-arrow book__phone" :href="practice.phoneHref">
        <Phone :size="16" :stroke-width="1.75" aria-hidden="true" />
        Prefer to call? <span class="figure">{{ practice.phoneDisplay }}</span>
      </a>
    </div>

    <div class="progress" role="progressbar" :aria-valuenow="stepIndex + 1" :aria-valuemin="1" :aria-valuemax="STEPS.length" :aria-label="`Step ${stepIndex + 1} of ${STEPS.length}`">
      <span
        v-for="(s, i) in STEPS"
        :key="s"
        class="progress__dot"
        :class="{ 'is-done': i <= stepIndex }"
      ></span>
      <span class="progress__label figure">Step {{ stepIndex + 1 }} of {{ STEPS.length }}</span>
    </div>

    <!-- Step: new or existing patient -->
    <fieldset v-if="step === 'patient'" class="step">
      <legend class="step__title">Are you a new or existing patient?</legend>
      <div class="tiles tiles--2">
        <button
          v-for="opt in ['New patient', 'Existing patient']"
          :key="opt"
          type="button"
          class="tile"
          :class="{ 'is-selected': form.patientType === opt }"
          @click="form.patientType = opt; next()"
        >
          {{ opt }}
        </button>
      </div>
    </fieldset>

    <!-- Step: what do you need -->
    <fieldset v-else-if="step === 'reason'" class="step">
      <legend class="step__title">What do you need?</legend>
      <div class="tiles tiles--3">
        <button
          v-for="r in reasons"
          :key="r.id"
          type="button"
          class="tile"
          :class="{ 'is-selected': form.reason === r.id }"
          @click="form.reason = r.id; next()"
        >
          {{ r.label }}
        </button>
      </div>
    </fieldset>

    <!-- Step: pick a time -->
    <div v-else-if="step === 'time'" class="step">
      <h2 class="step__title">Pick a time</h2>

      <label class="field">
        <span class="field__label">Preferred date</span>
        <input v-model="form.date" type="date" class="field__input" :min="minDate" :max="maxDate" />
      </label>

      <div v-if="form.date && !useFallback && slotsLoading" class="hint">Checking real availability…</div>

      <div v-if="form.date && !useFallback && !slotsLoading && slots.length" class="slots">
        <button
          v-for="t in slots"
          :key="t"
          type="button"
          class="slot"
          :class="{ 'is-selected': form.time === t }"
          @click="form.time = t"
        >
          {{ t }}
        </button>
      </div>

      <div v-else-if="form.date && useFallback" class="fallback">
        <p class="hint">
          <template v-if="!backendConfigured">This demo isn't connected to live scheduling yet.</template>
          <template v-else>Nothing open that day.</template>
          Tell us a time of day and we'll confirm your slot by text within one business hour.
        </p>
        <div class="tiles tiles--3">
          <button
            v-for="t in ['Morning', 'Afternoon', 'Evening']"
            :key="t"
            type="button"
            class="tile"
            :class="{ 'is-selected': form.timePreference === t }"
            @click="form.timePreference = t"
          >
            {{ t }}
          </button>
        </div>
      </div>
    </div>

    <!-- Step: details -->
    <div v-else-if="step === 'details'" class="step">
      <h2 class="step__title">Your details</h2>
      <div class="fields">
        <label class="field">
          <span class="field__label">Full name</span>
          <input v-model="form.name" type="text" class="field__input" autocomplete="name" required />
        </label>
        <label class="field">
          <span class="field__label">Mobile number</span>
          <input v-model="form.phone" type="tel" class="field__input" autocomplete="tel" required />
        </label>
        <label class="field">
          <span class="field__label">Email</span>
          <input v-model="form.email" type="email" class="field__input" autocomplete="email" />
        </label>
      </div>
    </div>

    <!-- Step: insurance (skippable) -->
    <div v-else-if="step === 'insurance'" class="step">
      <h2 class="step__title">Insurance <span class="step__optional">(new patients only — skippable)</span></h2>
      <div v-if="!form.skipInsurance" class="fields">
        <label class="field">
          <span class="field__label">Insurance carrier</span>
          <input v-model="form.insurance" type="text" class="field__input" placeholder="e.g. Delta Dental" />
        </label>
      </div>
      <button type="button" class="link-arrow" @click="form.skipInsurance = !form.skipInsurance">
        {{ form.skipInsurance ? "Actually, I'll add it" : "Skip — I'll bring it with me" }}
      </button>
    </div>

    <!-- Step: confirm -->
    <div v-else-if="step === 'confirm'" class="step">
      <h2 class="step__title">Confirm</h2>
      <dl class="summary">
        <div class="summary__row"><dt>Patient</dt><dd>{{ form.patientType }}</dd></div>
        <div class="summary__row"><dt>Reason</dt><dd>{{ reasons.find(r => r.id === form.reason)?.label }}</dd></div>
        <div class="summary__row">
          <dt>When</dt>
          <dd>
            <template v-if="!useFallback">{{ form.date }} at <span class="figure">{{ form.time }}</span></template>
            <template v-else>{{ form.date || 'Flexible' }}, {{ form.timePreference || 'flexible' }} — we'll confirm the exact time</template>
          </dd>
        </div>
        <div class="summary__row"><dt>Contact</dt><dd>{{ form.name }} · {{ form.phone }}</dd></div>
      </dl>

      <p class="policy">
        Cancellations with at least 24 hours' notice are free. We hold your slot as soon as you confirm.
      </p>

      <label class="consent">
        <input v-model="form.smsConsent" type="checkbox" />
        <span>I agree to receive appointment texts from {{ practice.name }} about this booking. Msg &amp; data rates may apply. Reply STOP to opt out.</span>
      </label>

      <p v-if="submitError" class="error" role="alert">{{ submitError }}</p>

      <button type="button" class="btn btn--primary btn--lg confirm-btn" :disabled="submitting" @click="confirm">
        {{ submitting ? 'Booking…' : 'Confirm appointment' }}
      </button>
    </div>

    <div class="nav" v-if="step !== 'confirm'">
      <button v-if="stepIndex > 0" type="button" class="btn btn--secondary" @click="back">Back</button>
      <button
        v-if="!['patient', 'reason'].includes(step)"
        type="button"
        class="btn btn--primary"
        :disabled="!canProceed"
        @click="next"
      >
        Continue
      </button>
    </div>
    <div class="nav" v-else>
      <button type="button" class="btn btn--secondary" @click="back">Back</button>
    </div>
  </div>
</template>

<style scoped>
.book {
  max-width: 640px;
  padding-block: var(--space-10) var(--section-base);
}

.book__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.book__back-home,
.book__phone {
  font-size: var(--text-small);
}

.progress {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-10);
}

.progress__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-round);
  background: var(--color-rule-strong);
}

.progress__dot.is-done {
  background: var(--color-accent);
}

.progress__label {
  margin-left: auto;
  font-size: var(--text-caption);
  color: var(--color-ink-3);
}

.step__title {
  font-size: var(--text-h2);
  font-weight: 650;
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-heading);
  margin: 0 0 var(--space-8);
}

.step__optional {
  font-size: var(--text-small);
  font-weight: var(--weight-regular);
  color: var(--color-ink-2);
}

.tiles {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: 1fr;
}

.tiles--2,
.tiles--3 {
  grid-template-columns: repeat(2, 1fr);
}

.tile {
  min-height: 64px;
  padding: var(--space-4);
  background: var(--color-slip);
  border: var(--border-control);
  border-radius: var(--radius-control);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-align: left;
  cursor: pointer;
}

.tile.is-selected {
  border-color: var(--color-accent);
  border-width: 2px;
  background: var(--color-accent-tint);
}

.fields {
  display: grid;
  gap: var(--space-5);
}

.field {
  display: block;
}

.field__label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
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

.field__input:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.hint {
  margin: var(--space-4) 0;
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.slot {
  min-height: 44px;
  border: var(--border-control);
  border-radius: var(--radius-control);
  background: var(--color-slip);
  font-family: var(--font-figure);
  font-size: var(--text-small);
  cursor: pointer;
}

.slot.is-selected {
  border-color: var(--color-accent);
  border-width: 2px;
  background: var(--color-accent-tint);
}

.summary {
  display: grid;
  gap: var(--space-4);
  margin: 0 0 var(--space-6);
}

.summary__row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: var(--border-hair);
}

.summary__row dt {
  color: var(--color-ink-3);
  font-size: var(--text-small);
}

.summary__row dd {
  margin: 0;
  font-weight: var(--weight-medium);
  text-align: right;
}

.policy {
  font-size: var(--text-small);
  color: var(--color-ink-2);
  margin-bottom: var(--space-6);
}

.consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  font-size: var(--text-small);
  color: var(--color-ink-2);
}

.consent input {
  margin-top: 3px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.error {
  color: var(--color-signal);
  font-size: var(--text-small);
  margin-bottom: var(--space-4);
}

.confirm-btn {
  width: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: var(--space-8);
}
</style>
