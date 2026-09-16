<script setup>
import SiteHeader from './components/SiteHeader.vue'
import FooterSection from './components/FooterSection.vue'
import StickyMobileBar from './components/StickyMobileBar.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <FooterSection />
  <StickyMobileBar />
</template>
