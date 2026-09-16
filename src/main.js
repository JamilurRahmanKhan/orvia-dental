import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import '@fontsource-variable/schibsted-grotesk'
import '@fontsource/geist-mono/400.css'
import '@fontsource/geist-mono/500.css'
import './styles/tokens.css'
import './style.css'

createApp(App).use(router).mount('#app')
