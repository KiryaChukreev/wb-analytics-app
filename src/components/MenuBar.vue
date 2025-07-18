<template>
  <MenuBar :model="menuItems">
    <template #start>
      <span class="text-xl font-semibold">WB API Dashboard</span>
    </template>
  </MenuBar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuBar from 'primevue/menubar'
import { useRouter } from 'vue-router'

const router = useRouter()

interface MenuItem {
  label: string
  icon: string
  command: () => void
}

const menuItems = ref<MenuItem[]>([
  {
    label: 'Доходы',
    icon: 'pi pi-money-bill',
    command: () => router.push('/incomes'),
  },
  {
    label: 'Заказы',
    icon: 'pi pi-shopping-cart',
    command: () => router.push('/orders'),
  },
  {
    label: 'Продажи',
    icon: 'pi pi-chart-line',
    command: () => router.push('/sales'),
  },
  {
    label: 'Склады',
    icon: 'pi pi-box',
    command: () => router.push('/stocks'),
  },
])
</script>

<style scoped>
/* Дополнительные стили можно добавить при необходимости */
</style>
