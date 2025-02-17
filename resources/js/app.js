import './bootstrap';
import { createApp } from 'vue'
import router from './router'
import vuetify from './vuetify'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../css/app.css'

// Components
import App from './app.vue'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')