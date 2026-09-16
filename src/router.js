import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('./pages/Home.vue') },

  { path: '/treatments/', name: 'treatments', component: () => import('./pages/TreatmentsHub.vue') },
  { path: '/treatments/:slug/', name: 'treatment', component: () => import('./pages/TreatmentDetail.vue') },
  { path: '/treatments/:slug/cost/', name: 'treatment-cost', component: () => import('./pages/TreatmentCost.vue') },

  { path: '/emergency-dentist/', name: 'emergency', component: () => import('./pages/EmergencyDentist.vue') },

  { path: '/new-patients/', name: 'new-patients', component: () => import('./pages/NewPatients.vue') },
  { path: '/insurance-and-financing/', name: 'insurance', component: () => import('./pages/InsurancePage.vue') },
  { path: '/insurance-and-financing/medicaid/', name: 'medicaid', component: () => import('./pages/MedicaidPage.vue') },
  { path: '/membership-plan/', name: 'membership', component: () => import('./pages/MembershipPlan.vue') },

  { path: '/about/', name: 'about', component: () => import('./pages/About.vue') },
  { path: '/about/team/', name: 'team', component: () => import('./pages/Team.vue') },
  { path: '/about/team/:slug/', name: 'team-member', component: () => import('./pages/TeamMember.vue') },

  { path: '/smile-gallery/', name: 'gallery', component: () => import('./pages/Gallery.vue') },
  { path: '/reviews/', name: 'reviews', component: () => import('./pages/Reviews.vue') },
  { path: '/faq/', name: 'faq', component: () => import('./pages/Faq.vue') },
  { path: '/contact/', name: 'contact', component: () => import('./pages/Contact.vue') },
  { path: '/book/', name: 'book', component: () => import('./pages/Book.vue') },
  { path: '/book/confirmed/', name: 'book-confirmed', component: () => import('./pages/BookConfirmed.vue') },

  { path: '/privacy-policy/', name: 'privacy', component: () => import('./pages/legal/PrivacyPolicy.vue') },
  { path: '/notice-of-privacy-practices/', name: 'npp', component: () => import('./pages/legal/NoticeOfPrivacyPractices.vue') },
  { path: '/accessibility-statement/', name: 'accessibility', component: () => import('./pages/legal/AccessibilityStatement.vue') },
  { path: '/terms/', name: 'terms', component: () => import('./pages/legal/Terms.vue') },
  { path: '/cookie-policy/', name: 'cookies', component: () => import('./pages/legal/CookiePolicy.vue') },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./pages/NotFound.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
