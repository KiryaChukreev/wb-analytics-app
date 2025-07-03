<template>
  <div class="orders-page">
    <h1>Таблица заказов</h1>
    <DataTable />
    <!-- Ваш компонент с таблицей -->
  </div>
</template>

<script setup lang="ts">
import DataTable from '../table/DataTable.vue'
</script>

<style scoped>
.orders-page {
  padding: 20px;
  max-width: 1800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 20px;
  color: var(--primary-color);
}
</style>
