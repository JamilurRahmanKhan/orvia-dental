// Demo practice data. Swap per prospect — every value here must match their Google Business Profile.
export const practice = {
  name: 'Orvia Dental',
  city: 'Austin',
  state: 'TX',
  address: '2408 Barton Springs Rd, Austin, TX 78704',
  mapUrl: 'https://maps.google.com/?q=2408+Barton+Springs+Rd+Austin+TX+78704',
  phoneDisplay: '(512) 648-2210',
  phoneHref: 'tel:+15126482210',
  email: 'hello@orviadental.example',
  rating: 4.9,
  reviewCount: 287,
  yearsInPractice: 18,
  credential: 'ADA member practice',

  // Demo mode shows "Sample … for demo" captions. Set false only with client-supplied data.
  demo: true,
  // false = estimate slip shows visit length instead of prices (fallback mode)
  showPrices: true,

  firstVisit: { label: 'Exam, X-rays & cleaning', duration: '~60 min', price: 'from $119' },
  emergencyVisit: { label: 'Emergency visit · exam + X-ray', price: 'from $79' },

  // Order = search volume (spec §4.1). Sample ranges for demo; replace per client.
  treatments: [
    { slug: 'general-dentistry', name: 'Checkup & cleaning', detail: 'Exam, X-rays, polish · 60 min', price: '$119–$240', insured: 'We check your plan first', tags: ['Insurance often helps'] },
    { slug: 'dental-implants', name: 'Dental implant (one tooth)', detail: '2–3 visits over 3–6 months', price: '$3,200–$4,800', insured: 'Often partly covered' },
    { slug: 'clear-aligners', name: 'Clear aligners', detail: 'Full treatment · 12–18 months', price: '$3,500–$5,800', insured: 'Often partly covered' },
    { slug: 'teeth-whitening', name: 'Teeth whitening', detail: 'In-office 90 min, or take-home trays', price: '$250–$650', insured: 'Usually not covered' },
    { slug: 'emergency', name: 'Emergency visit', detail: 'Exam + X-ray, same day', price: 'from $79', insured: 'Often partly covered', tags: ['Same day'] },
    { slug: 'childrens-dentistry', name: "Children's first visit", detail: 'Gentle exam and cleaning · 30 min', price: '$79–$129', insured: 'We check your plan first' },
    { slug: 'root-canal', name: 'Root canal', detail: 'Front tooth to molar · 1–2 visits', price: '$700–$1,400', insured: 'Often partly covered', tags: ['Sedation available'] },
    { slug: 'veneers', name: 'Veneers', detail: 'Per tooth · 2 visits', price: '$900–$1,800', insured: 'Usually not covered' },
    { slug: 'sedation-dentistry', name: 'Sedation dentistry', detail: 'Nitrous, oral, or IV · added to any visit', price: '$50–$500', insured: 'Usually not covered' },
  ],

  // ---- Everything below is SAMPLE content for the demo. Replace per client. ----

  // Checkable promises only. Render fewer if a clinic can't honestly claim one.
  promises: [
    { text: 'We publish our prices.', proof: 'See the price list', href: '/#treatments' },
    { text: 'Open until 7pm, and Saturdays 9–2.', proof: 'Hours and directions', href: '/contact/' },
    { text: 'Numbing first. Sedation if you want it. You can stop anytime.', proof: 'Sedation options', href: '/treatments/sedation-dentistry/' },
    { text: 'We check your insurance before you arrive.', proof: 'Check my coverage', href: '/insurance-and-financing/' },
  ],
  welcomeBack: { text: "Haven't been in years? No lectures. Come see the office first.", href: '/new-patients/' },

  team: [
    { slug: 'amara-cole', name: 'Dr. Amara Cole', credential: 'DDS', role: 'General & cosmetic dentist', human: 'Speaks Spanish. Twelve years in practice.', img: 'team-DrAmaraCole', alt: 'Dr. Amara Cole, dentist at Orvia Dental' },
    { slug: 'marcus-reyes', name: 'Dr. Marcus Reyes', credential: 'DDS', role: 'Restorative & implant dentist', human: 'Explains X-rays in plain English. Runs the Barton Creek trails.', img: 'team-DrMarcusReyes', alt: 'Dr. Marcus Reyes, dentist at Orvia Dental' },
    { slug: 'priya-nandan', name: 'Priya Nandan', credential: 'RDH', role: 'Lead hygienist', human: 'Patient with people who haven’t been in years.', img: 'team-PriyaNandan', alt: 'Priya Nandan, dental hygienist at Orvia Dental' },
  ],

  // Separate before and after files (split from the supplied composites). 698×894 each.
  cases: [
    { id: 'veneers', label: 'Veneers', visits: '2 visits', timeframe: '3 weeks', dentist: 'amara-cole', before: '/images/results/split/Veneer-before.jpg', after: '/images/results/split/Veneer-after.jpg', altBefore: 'Before veneers: uneven, discolored upper front teeth', altAfter: 'After veneers: even, lighter upper front teeth' },
    { id: 'aligners', label: 'Clear aligners', visits: '9 visits', timeframe: '11 months', dentist: 'amara-cole', before: '/images/results/split/ClearAligners-before.jpg', after: '/images/results/split/ClearAligners-after.jpg', altBefore: 'Before clear aligners: crowded, stained upper teeth', altAfter: 'After clear aligners: straighter, whiter upper teeth' },
    { id: 'implant', label: 'Dental implant', visits: '3 visits', timeframe: '4 months', dentist: 'marcus-reyes', before: '/images/results/split/DentalImplants-before.jpg', after: '/images/results/split/DentalImplants-after.jpg', altBefore: 'Before dental implant: missing upper front tooth', altAfter: 'After dental implant: gap filled with a natural-looking tooth' },
  ],

  // Experience, not skill (Texas SBDE 108.59). Design for max 5 (Google Places API limit).
  reviews: [
    { name: 'Jessica M.', date: 'Aug 2026', text: 'Hadn’t been in six years. They walked me through every step before starting and never made me feel bad about it.' },
    { name: 'Devon R.', date: 'Jul 2026', text: 'Cracked a molar on a Tuesday, was seen that afternoon. The price matched what they told me on the phone.' },
    { name: 'Priya S.', date: 'Jul 2026', text: 'My six-year-old walked out smiling. The hygienist let her hold the mirror and explained everything.' },
    { name: 'Tom H.', date: 'Jun 2026', text: 'Booked online at 10pm, came in after work the next day. They had already checked my insurance.' },
    { name: 'Ana L.', date: 'May 2026', text: 'Front desk answered in Spanish for my mom and stayed on the line while she filled in the forms.' },
  ],
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Orvia+Dental+Austin',

  plans: [
    { name: 'Aetna Dental PPO', network: 'in' },
    { name: 'Ameritas', network: 'in' },
    { name: 'Blue Cross Blue Shield of Texas', network: 'in' },
    { name: 'Cigna Dental PPO', network: 'in' },
    { name: 'Delta Dental PPO', network: 'in' },
    { name: 'Delta Dental Premier', network: 'in' },
    { name: 'Guardian', network: 'in' },
    { name: 'Humana Dental', network: 'in' },
    { name: 'MetLife PDP', network: 'in' },
    { name: 'Principal', network: 'in' },
    { name: 'Sun Life', network: 'in' },
    { name: 'United Concordia', network: 'in' },
    { name: 'UnitedHealthcare Dental', network: 'in' },
    { name: 'Careington', network: 'out' },
    { name: 'Dentegra', network: 'out' },
    { name: 'GEHA Connection Dental', network: 'out' },
    { name: 'Lincoln Financial', network: 'out' },
    { name: 'Spirit Dental', network: 'out' },
    { name: 'TRICARE Dental (United Concordia)', network: 'out' },
    { name: 'Texas Medicaid (MCNA)', network: 'in' },
    { name: 'Texas Medicaid (DentaQuest)', network: 'in' },
    { name: 'CHIP Dental (DentaQuest)', network: 'in' },
    { name: 'Anthem', network: 'out' },
    { name: 'Physicians Mutual', network: 'out' },
  ],
  membership: { label: 'No insurance? Membership plan', price: 'from $300/yr', href: '/membership-plan/' },

  directions: {
    parking: 'Free lot behind the building. Enter from Kinney Ave.',
    transit: 'CapMetro routes 3 and 30 stop at Barton Springs & Lamar, a 4-minute walk.',
    access: 'Step-free entrance, accessible parking, and an accessible restroom.',
  },
  staticMap: null, // client-supplied static map image path; null = styled placeholder panel

  faqs: [
    { q: 'Do you take my insurance?', a: 'We’re in network with most major PPO plans and Texas Medicaid. Search your plan above, or send us your details and we’ll confirm coverage before your visit.' },
    { q: 'How much does a new patient exam cost?', a: 'Exam, X-rays and cleaning start at $119 without insurance. If you need anything more, you get a written estimate before we start.' },
    { q: 'Can I be seen today if I’m in pain?', a: 'Yes. We hold same-day emergency slots every day we’re open. Call and we’ll tell you the earliest time.' },
    { q: 'What if I haven’t been to a dentist in years?', a: 'That’s common, and there are no lectures here. We start with a look and a conversation. Nothing happens without your go-ahead, and you can stop anytime.' },
    { q: 'Do you see children?', a: 'Yes, from their first tooth. First visits are short and mostly about getting comfortable.' },
    { q: 'What payment options do you offer?', a: 'Cards, HSA/FSA, and monthly payment plans through CareCredit or Cherry. Uninsured patients can join our membership plan.' },
  ],

  footerLinks: {
    Treatments: [
      { label: 'Checkups & cleanings', href: '/treatments/general-dentistry/' },
      { label: 'Dental implants', href: '/treatments/dental-implants/' },
      { label: 'Clear aligners', href: '/treatments/clear-aligners/' },
      { label: 'Teeth whitening', href: '/treatments/teeth-whitening/' },
      { label: 'Emergency dentist', href: '/emergency-dentist/' },
      { label: "Children's dentistry", href: '/treatments/childrens-dentistry/' },
      { label: 'Root canal', href: '/treatments/root-canal/' },
      { label: 'Veneers', href: '/treatments/veneers/' },
    ],
    Patients: [
      { label: 'New patients', href: '/new-patients/' },
      { label: 'Insurance & financing', href: '/insurance-and-financing/' },
      { label: 'Membership plan', href: '/membership-plan/' },
      { label: 'FAQ', href: '/faq/' },
    ],
    Practice: [
      { label: 'About', href: '/about/' },
      { label: 'Meet the team', href: '/about/team/' },
      { label: 'Smile gallery', href: '/smile-gallery/' },
      { label: 'Reviews', href: '/reviews/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  legalLinks: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Notice of privacy practices', href: '/notice-of-privacy-practices/' },
    { label: 'Accessibility statement', href: '/accessibility-statement/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'Cookie policy', href: '/cookie-policy/' },
  ],
  // 0 = Sunday. null = closed. Hours in 24h.
  hours: [null, [8, 19], [8, 19], [8, 19], [8, 19], [8, 17], [9, 14]],
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const fmt = (h) => `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`

export function openStatus(now = new Date()) {
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const today = practice.hours[day]
  if (today && hour >= today[0] && hour < today[1]) {
    return { open: true, label: `Open today until ${fmt(today[1])}` }
  }
  for (let i = today && hour < today[0] ? 0 : 1; i <= 7; i++) {
    const d = (day + i) % 7
    const h = practice.hours[d]
    if (h) {
      const when = i === 0 ? 'today' : i === 1 ? 'tomorrow' : dayNames[d]
      return { open: false, label: `Closed — opens ${when} ${fmt(h[0])}` }
    }
  }
  return { open: false, label: 'Closed' }
}
