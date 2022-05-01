import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import './theme.css'
import AppButton from '@/components/AppButton.vue'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.component('app-button', AppButton)
