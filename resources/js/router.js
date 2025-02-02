import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import aboutView from './views/about.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: aboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router