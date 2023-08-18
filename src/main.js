import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // Pass på at dette er riktig sti til din router-fil

createApp(App).use(router).mount('#app')
