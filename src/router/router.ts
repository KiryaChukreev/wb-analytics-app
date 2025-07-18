import { createRouter, createWebHistory } from 'vue-router'
import SalesPage from '@/pages/SalesPage.vue'

const routes = [
  {
    path: '/sales',
    name: 'Sales',
    component: SalesPage,
  },
  // Добавьте маршруты для других страниц аналогично
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
