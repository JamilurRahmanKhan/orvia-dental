// Deep content for /treatments/:slug/cost/ pages. Sample figures for the demo.
export const costContent = {
  'dental-implants': {
    title: 'What dental implants cost in Austin',
    intro: 'A single implant runs $3,200–$4,800 here, including the post, abutment, and crown. Full-arch replacement (a complete set of teeth on implants) is quoted separately because it varies so much by case.',
    breakdown: [
      { item: 'Consultation & 3D scan', price: '$150–$300', note: 'Often waived if you proceed with treatment' },
      { item: 'Implant post placement', price: '$1,800–$2,400', note: 'Per tooth' },
      { item: 'Abutment + crown', price: '$1,200–$1,900', note: 'Per tooth; material affects price' },
      { item: 'Bone graft (if needed)', price: '$400–$1,200', note: 'Only if your scan shows insufficient bone' },
      { item: 'Full-arch (All-on-4 style)', price: '$16,000–$28,000', note: 'Per arch; replaces a full set of teeth' },
    ],
    whatChangesPrice: [
      'Whether you need a bone graft first',
      'Front tooth (more visible, more precision) vs. back tooth',
      'Crown material — porcelain-fused-to-metal vs. all-ceramic',
      'One tooth vs. multiple vs. a full arch',
    ],
    financing: 'Most patients use CareCredit or Cherry for monthly payments — both let you spread the cost over 6–24 months. We\'ll show you real numbers for your specific case before you commit to anything.',
    insurance: 'Dental insurance often covers 10–50% of implant costs, sometimes with a waiting period. We verify your specific plan before treatment so there are no surprises.',
  },
  'clear-aligners': {
    title: 'What clear aligners cost in Austin',
    intro: 'Full treatment runs $3,500–$5,800 depending on how many trays your case needs. Minor crowding needs fewer trays than a full bite correction.',
    breakdown: [
      { item: 'Initial scan & treatment plan', price: 'Included', note: 'No separate charge' },
      { item: 'Minor correction (10–20 trays)', price: '$3,500–$4,200', note: 'Small gaps or mild crowding' },
      { item: 'Moderate correction (20–35 trays)', price: '$4,200–$5,200', note: 'Most common case' },
      { item: 'Complex correction (35+ trays)', price: '$5,200–$5,800', note: 'Significant crowding or bite issues' },
      { item: 'Retainer (after treatment)', price: '$200–$400', note: 'Per arch, to hold your result' },
    ],
    whatChangesPrice: [
      'How many trays your case needs',
      'Whether attachments (small tooth-colored bumps that help movement) are needed',
      'Refinement trays if you need extra adjustment near the end',
      'Retainers after treatment finishes',
    ],
    financing: 'We offer monthly payment plans directly, plus CareCredit and Cherry financing. Many patients pay $150–$250/month rather than the full amount up front.',
    insurance: 'If your plan has orthodontic coverage (not all do — check your specific plan), it often covers a flat amount ($1,000–$1,500) toward aligners. We\'ll check for you before you start.',
  },
}
