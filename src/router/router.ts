import { createRouter, createWebHistory } from 'vue-router'
import SalesPage from '@/pages/SalesPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'
import StocksPage from '@/pages/StocksPage.vue'
import IncomesPage from '@/pages/IncomesPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/sales',
  },
  {
    path: '/incomes',
    name: 'Доходы',
    component: IncomesPage,
    meta: {
      // Иконка для меню
      showInMenu: true, // Показывать ли в меню
    },
  },
  {
    path: '/orders',
    name: 'Заказы',
    component: OrdersPage,
    meta: {
      // Иконка для меню
      showInMenu: true, // Показывать ли в меню
    },
  },
  {
    path: '/sales',
    name: 'Продажи',
    component: SalesPage,
    meta: {
      // Иконка для меню
      showInMenu: true, // Показывать ли в меню
    },
  },
  {
    path: '/stocks',
    name: 'Склады',
    component: StocksPage,
    meta: {
      // Иконка для меню
      showInMenu: true, // Показывать ли в меню
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
