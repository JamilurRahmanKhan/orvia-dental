<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TrustStrip from './components/TrustStrip.vue'
import EmergencyBand from './components/EmergencyBand.vue'
import PriceList from './components/PriceList.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import TeamPreview from './components/TeamPreview.vue'
import BeforeAfterGallery from './components/BeforeAfterGallery.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import InsuranceSection from './components/InsuranceSection.vue'
import LocationHours from './components/LocationHours.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import FooterSection from './components/FooterSection.vue'
import StickyMobileBar from './components/StickyMobileBar.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <TrustStrip />
    <EmergencyBand />
    <PriceList />
    <WhyChooseUs />
    <TeamPreview />
    <BeforeAfterGallery />
    <ReviewsSection />
    <InsuranceSection />
    <LocationHours />
    <FaqSection />
    <FinalCta />
  </main>
  <FooterSection />
  <StickyMobileBar />
</template>
