import { createRouter, createWebHistory } from 'vue-router'
import Incomes from '../pages/IncomesPage.vue'
import Orders from '../pages/OrdersPage.vue'
import Sales from '../pages/SalesPage.vue'
import Stocks from '../pages/StocksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/incomes',
      name: 'incomes',
      component: Incomes, // Укажите новый компонент
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders, // Укажите новый компонент
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales, // Укажите новый компонент
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks, // Укажите новый компонент
    },
  ],
})

export default router
