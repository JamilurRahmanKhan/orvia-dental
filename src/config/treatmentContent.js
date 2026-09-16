// Deep content for /treatments/:slug/ pages. Keyed by the same slug as practice.treatments.
// Sample copy for the demo — replace with the client's real specifics before launch.
export const treatmentContent = {
  'general-dentistry': {
    quickFacts: { visits: '1 visit', recovery: 'None', covers: 'Usually covered by insurance' },
    whatIsIt: "A checkup and cleaning is the visit that catches problems while they're still small and cheap to fix. We take digital X-rays (about 80% less radiation than old film), a dentist looks at every tooth and your gums, and a hygienist cleans off the plaque and tartar a toothbrush can't reach.",
    whoItsFor: [
      'You\'re due for your six-month cleaning',
      'It\'s been longer than six months and you\'re not sure where to start',
      'You want a baseline before starting any other treatment',
      'Your gums bleed when you brush or floss',
    ],
    whatItsLike: [
      'Paperwork and a quick chat about anything that\'s been bothering you.',
      'Digital X-rays — you see the images on screen right away.',
      'The dentist checks every tooth, your bite, and your gums.',
      'A hygienist cleans and polishes. You may feel scraping, not pain.',
      'We tell you what we found and what, if anything, needs attention next — with a price if it does.',
    ],
    costFactors: 'The range covers exam, X-rays and a standard cleaning. It goes up if you need a deep cleaning (gum disease), more X-rays than usual, or it\'s been several years since your last visit.',
    alternatives: 'There isn\'t a substitute for a professional cleaning — a toothbrush can\'t remove hardened tartar. Electric toothbrushes and water flossers help between visits but don\'t replace them.',
    aftercare: 'Teeth can feel sensitive to cold for a day or two if you had a deep cleaning. Otherwise, back to normal immediately.',
    faqs: [
      { q: 'Does this hurt?', a: 'Most people feel pressure and scraping, not pain. Tell us if anything is sensitive and we\'ll adjust.' },
      { q: 'How often do I actually need this?', a: 'Every six months for most people; every three to four months if you have gum disease.' },
    ],
  },

  'dental-implants': {
    quickFacts: { visits: '2–3 visits', recovery: '3–6 months total (implant needs to fuse with bone)', covers: 'Often partly covered' },
    whatIsIt: 'A dental implant replaces a missing tooth root with a small titanium post, topped with a crown that matches your other teeth. Unlike a bridge, it doesn\'t rely on the teeth next to the gap — it stands on its own, which is better for your long-term bone health.',
    whoItsFor: [
      'You have one or more missing teeth',
      'You\'re tired of a loose partial denture',
      'A bridge would mean grinding down healthy teeth next to the gap',
      'You want something that feels and functions like a real tooth',
    ],
    whatItsLike: [
      'Consultation and a 3D scan to check bone density and plan placement.',
      'The implant post is placed under local anesthesia — most people describe pressure, not pain.',
      'A healing period of 3–6 months while the post fuses with your jawbone.',
      'The crown is attached once healing is confirmed. This visit is quick.',
    ],
    costFactors: 'Price depends on how much bone grafting is needed, whether it\'s a front or back tooth, and the crown material. A full-arch replacement (multiple implants supporting a full set of teeth) costs more than a single tooth and is quoted separately.',
    alternatives: 'A bridge is faster and cheaper up front but requires shaving down the teeth on either side. A partial denture is the least expensive option but least like a natural tooth. We\'ll walk through all three honestly.',
    aftercare: 'Some swelling and tenderness for 2–3 days, managed with over-the-counter pain relief for most people. Soft foods for about a week. Follow-up visits check healing before the crown goes on.',
    faqs: [
      { q: 'What if I don\'t have enough jawbone?', a: 'A bone graft can build up the site first — it adds a few months but doesn\'t rule out an implant.' },
      { q: 'How long does an implant last?', a: 'The post itself can last decades with normal care. The crown may need replacing after 10–15 years of wear.' },
    ],
  },

  'clear-aligners': {
    quickFacts: { visits: '9–12 check-ins', recovery: 'No downtime; mild pressure per tray', covers: 'Often partly covered' },
    whatIsIt: 'Clear aligners are a series of custom, removable trays that gradually move your teeth — no metal brackets or wires. You switch to a new tray roughly every one to two weeks and check in with us every 6–8 weeks to track progress.',
    whoItsFor: [
      'Mild to moderate crowding, gaps, or bite issues',
      'You want straighter teeth without visible metal braces',
      'You\'re disciplined about wearing something 20–22 hours a day',
      'You\'ve already had braces and things have shifted back',
    ],
    whatItsLike: [
      'A scan (no goopy impressions) and a digital preview of your treatment plan.',
      'Your first set of trays, with instructions on wear time.',
      'New trays every 1–2 weeks, worn 20–22 hours a day.',
      'Check-ins every 6–8 weeks so we can catch anything off-track early.',
      'A retainer at the end to hold the result.',
    ],
    costFactors: 'Cost scales with how many trays your case needs and how complex the movement is. Minor crowding needs fewer trays than a full bite correction.',
    alternatives: 'Traditional braces handle more complex cases and don\'t rely on you remembering to wear them, but are visible and harder to keep clean around. We\'ll tell you honestly if your case is better suited to braces.',
    aftercare: 'Each new tray feels tight for a day or two — that\'s the tooth movement working. Take trays out to eat and brush; wearing them under 20 hours a day slows or stalls your progress.',
    faqs: [
      { q: 'Will people be able to tell I\'m wearing them?', a: 'They\'re genuinely hard to notice in conversation. Some staining can show if you drink coffee or wine without brushing first.' },
      { q: 'What if I lose a tray?', a: 'Call us — we can usually move you to the next tray early or make a replacement, depending on timing.' },
    ],
  },

  'teeth-whitening': {
    quickFacts: { visits: '1 visit (in-office) or 1–2 weeks (take-home)', recovery: 'Mild sensitivity for a day or two', covers: 'Usually not covered' },
    whatIsIt: 'Professional whitening lifts stains a store-bought kit can\'t reach, using a stronger gel under controlled conditions. In-office treatment takes about 90 minutes; take-home trays work gradually over one to two weeks.',
    whoItsFor: [
      'Coffee, tea, wine, or tobacco staining',
      'You want a faster result than store-bought strips give',
      'You have an event coming up',
      'You want a custom fit rather than one-size-strips',
    ],
    whatItsLike: [
      'In-office: gums are protected, whitening gel is applied in cycles under a light, about 90 minutes total.',
      'Take-home: we make custom trays from a scan of your teeth; you wear them with gel for 30–60 minutes a day for 1–2 weeks.',
    ],
    costFactors: 'In-office costs more up front but shows results the same day. Take-home trays cost less and let you touch up whenever you want in the future.',
    alternatives: 'Whitening toothpaste and store strips are cheaper but weaker and can\'t fix staining inside a tooth (from an old root canal, for instance) — that needs a different approach we can talk through.',
    aftercare: 'Teeth can feel sensitive to hot and cold for a day or two. Avoid coffee, red wine, and tobacco for 48 hours while the enamel is most porous.',
    faqs: [
      { q: 'Is whitening safe for my enamel?', a: 'Done under supervision with the right concentration, yes. That\'s the main risk with unsupervised, high-strength kits bought online.' },
      { q: 'How long does it last?', a: 'Six months to two years depending on your diet and habits. Touch-up trays make maintaining it easy.' },
    ],
  },

  emergency: {
    quickFacts: { visits: 'Same day', recovery: 'Depends on treatment', covers: 'Often partly covered' },
    whatIsIt: 'An emergency visit gets you out of pain and stops the problem from getting worse — same day. That might mean a temporary fix now and a full treatment plan once the pain is under control, or it might resolve everything in one visit.',
    whoItsFor: [
      'A knocked-out or badly broken tooth',
      'Severe pain, swelling, or an abscess',
      'A lost filling or crown',
      'Bleeding that won\'t stop',
    ],
    whatItsLike: [
      'Call us — we\'ll ask a few questions and hold you a same-day slot.',
      'We numb the area first. You won\'t feel the work, only pressure.',
      'X-rays if needed to see what\'s actually going on.',
      'We treat what we can that day and give you a clear plan (and price) for anything that needs a follow-up visit.',
    ],
    costFactors: 'The exam and X-ray are a flat rate. What happens next — a filling, extraction, or root canal referral — is quoted separately once we can see the problem.',
    alternatives: 'For a true medical emergency (uncontrolled bleeding, facial swelling affecting breathing or swallowing, jaw fracture) go to an ER — call us on the way and we\'ll take over dental care once you\'re stable.',
    aftercare: 'Depends on treatment — we\'ll walk you through exactly what to expect before you leave, including when to call us back.',
    faqs: [
      { q: 'What do I do with a knocked-out tooth right now?', a: 'Pick it up by the crown (not the root), rinse gently if dirty, and try to place it back in the socket or keep it in milk. Get to us within 30 minutes if possible.' },
      { q: 'What if it\'s after hours?', a: 'Call anyway — the voicemail explains same-day options and when to go to an ER instead.' },
    ],
  },

  'childrens-dentistry': {
    quickFacts: { visits: 'Every 6 months', recovery: 'None', covers: 'Usually covered' },
    whatIsIt: 'A first visit is short and mostly about getting comfortable — meeting us, sitting in the chair, maybe a quick look and count. We build up to a full exam and cleaning at the pace your child needs.',
    whoItsFor: [
      'First tooth or first birthday, whichever comes first',
      'Regular six-month checkups for any age',
      'A child who\'s nervous about the dentist',
      'A cavity or injury that needs attention',
    ],
    whatItsLike: [
      'A tour of the room and a chance to sit in the chair before anything happens.',
      'A gentle look at teeth and gums — we narrate what we\'re doing in kid-friendly terms.',
      'A cleaning and, if they\'re ready, a first set of X-rays.',
      'We talk to you about home care, not just what happened at the visit.',
    ],
    costFactors: 'A first visit and routine checkups are near the low end of the range. Cost goes up for a filling, a cap on a baby tooth, or sedation for a child who needs extra support.',
    alternatives: 'There isn\'t a substitute for a dentist visit, but the first visit can be scaled way back (just a look, no cleaning) if a child needs more time to warm up.',
    aftercare: 'None for a checkup. We\'ll tell you specifically what to expect if anything more was done.',
    faqs: [
      { q: 'What if my child won\'t open their mouth?', a: 'That\'s normal at a first visit. We never force it — we\'d rather take two short visits to build trust than one bad one.' },
      { q: 'Do you see teenagers too?', a: 'Yes, all ages through adulthood.' },
    ],
  },

  'root-canal': {
    quickFacts: { visits: '1–2 visits', recovery: '2–3 days of tenderness', covers: 'Often partly covered' },
    whatIsIt: "A root canal removes infected or badly decayed tissue from inside a tooth and seals it, so you keep the tooth instead of losing it. It doesn't hurt like you think — the pain people fear is usually the infection itself, which the procedure relieves.",
    whoItsFor: [
      'Sharp pain when you bite down',
      'Lingering sensitivity to hot or cold',
      'A tooth that\'s darkened or a gum that\'s swollen near one tooth',
      'A dentist has told you a tooth is infected',
    ],
    whatItsLike: [
      'We numb the area completely before starting.',
      'The infected tissue is removed and the inside of the tooth is cleaned and shaped.',
      'The space is sealed to prevent reinfection.',
      'A crown usually goes on afterward to protect the tooth, in a follow-up visit.',
    ],
    costFactors: 'Front teeth (single root) cost less than molars (multiple roots, more complex). The crown afterward is quoted separately.',
    alternatives: 'The only alternative to a root canal on an infected tooth is extraction. We\'ll tell you honestly which is the better long-term option for that specific tooth.',
    aftercare: 'Tenderness for 2–3 days, manageable with over-the-counter pain relief. Avoid chewing on that side until any crown is placed.',
    faqs: [
      { q: 'Will I be in pain during the procedure?', a: 'No — you\'re fully numb. Most people say it feels similar to getting a filling.' },
      { q: 'Why do I need a crown afterward?', a: 'A tooth that\'s had a root canal is more brittle. A crown protects it from cracking under normal biting force.' },
    ],
  },

  veneers: {
    quickFacts: { visits: '2 visits', recovery: 'None', covers: 'Usually not covered' },
    whatIsIt: 'Veneers are thin, custom shells bonded to the front of your teeth to fix chips, gaps, or discoloration that whitening can\'t touch. Each one is shaped and shaded to look like a natural tooth, not a cap.',
    whoItsFor: [
      'Chipped or worn front teeth',
      'Gaps you don\'t want closed with orthodontics',
      'Discoloration that doesn\'t respond to whitening',
      'You want a permanent cosmetic change, not a gradual one',
    ],
    whatItsLike: [
      'A consultation to talk through shape, shade, and how many teeth.',
      'A small amount of enamel is removed to make room for the veneer — this step doesn\'t grow back, so it\'s worth being sure first.',
      'A temporary veneer while your custom ones are made.',
      'The final veneers are bonded in place and adjusted for bite and appearance.',
    ],
    costFactors: 'Priced per tooth. Porcelain veneers cost more than composite but last longer and resist staining better.',
    alternatives: 'Composite bonding is less expensive and reversible but doesn\'t last as long or resist stains as well. Whitening alone can\'t fix chips or reshape a tooth.',
    aftercare: 'Treat them like natural teeth — avoid using them to open packages or bite very hard foods directly with your front teeth.',
    faqs: [
      { q: 'Are veneers permanent?', a: 'The enamel removal is permanent, so yes, you\'ll need some form of veneer or crown on that tooth going forward. The veneers themselves typically last 10–15 years.' },
      { q: 'Can just one tooth get a veneer?', a: 'Yes, though we\'ll help you think about whether matching neighboring teeth makes the result look more natural.' },
    ],
  },

  'sedation-dentistry': {
    quickFacts: { visits: 'Added to any visit', recovery: 'A few hours grogginess (oral/IV only)', covers: 'Usually not covered' },
    whatIsIt: "Sedation takes the edge off — from mild nitrous ('laughing gas', gone in minutes) to oral sedation (a pill that leaves you drowsy but responsive) to IV sedation for longer or more involved procedures. You choose the level that matches your anxiety and the work being done.",
    whoItsFor: [
      "You've avoided the dentist for years because of anxiety",
      'You have a strong gag reflex',
      'You need a longer or more involved procedure',
      "Past experiences have made you dread dental visits",
    ],
    whatItsLike: [
      'We talk through your anxiety and what\'s triggered it before — no judgment, no lectures.',
      'Nitrous: a mask, breathe normally, feel relaxed within minutes, clear-headed again minutes after we remove it. You can drive yourself home.',
      'Oral sedation: a pill taken before your visit; you\'ll need someone to drive you and stay with you for the rest of the day.',
      'IV sedation: for longer procedures, monitored throughout; you\'ll need a ride home.',
    ],
    costFactors: 'Nitrous is the least expensive and often included or low-cost when added to a visit. Oral and IV sedation cost more due to monitoring time and, for IV, the medication itself.',
    alternatives: 'For mild nerves, some patients do fine with just clear communication and breaks during the visit — we\'re happy to go that route first and add sedation later if needed.',
    aftercare: 'Nitrous: none, you\'re clear-headed immediately. Oral/IV: rest for the remainder of the day, no driving or major decisions until the next day.',
    faqs: [
      { q: 'Will I be unconscious?', a: 'No — even IV sedation here keeps you responsive, just very relaxed. General anesthesia is a different, hospital-based procedure we\'d refer out for.' },
      { q: "Is it safe?", a: 'Yes, when administered by a trained provider with monitoring, which is standard practice. We\'ll review your health history first to confirm the right level for you.' },
    ],
  },
}
