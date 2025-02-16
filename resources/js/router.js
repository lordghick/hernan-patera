import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import aboutView from './views/about.vue'
import calendarView from './views/calendar.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: aboutView },
  { path: '/calendar', component: calendarView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router