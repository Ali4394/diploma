import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Dialog from 'primevue/dialog'
import { initializeApp } from 'firebase/app'

import router from './router'
import 'primeicons/primeicons.css'
import DialogService from 'primevue/dialogservice'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
  apiKey: 'AIzaSyCiBHWwt8mP_x1avBuGUQS2TXXAnK2t6To',
  authDomain: 'diploma-ca615.firebaseapp.com',
  projectId: 'diploma-ca615',
  storageBucket: 'diploma-ca615.appspot.com',
  messagingSenderId: '156400392439',
  appId: '1:156400392439:web:e0b131079cc908cc509bf2'
}

initializeApp(firebaseConfig)
const app = createApp(App)
app.use(DialogService)
app.component('Dialog', Dialog)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
