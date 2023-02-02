import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@mdi/font/css/materialdesignicons.css'
// import axios from 'axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: { light: true },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

const app = createApp(App).use(vuetify).use(router)
app.config.globalProperties.$axios = require('axios').create({withCredentials: true})
app.mount('#app')

