<template>
  <div>
    <MenuBar :model="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([
  {
    label: 'Продажи',
    icon: 'pi pi-chart-line',
    to: '/sales',
  },
  {
    label: 'Склад',
    icon: 'pi pi-box',
    to: '/warehouse',
  },
  {
    label: 'Заказы',
    icon: 'pi pi-shopping-cart',
    to: '/orders',
  },
  {
    label: 'Доходы',
    icon: 'pi pi-money-bill',
    to: '/income',
  },
])
</script>

<style scoped></style>
