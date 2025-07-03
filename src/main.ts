import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVuePlugin from './plugins/primevue.ts'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVuePlugin)
app.mount('#app')
