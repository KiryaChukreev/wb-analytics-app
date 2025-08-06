<template>
  <div>
    <MyFilter @datesSelected="handleDatesSelected" @datesDeleted="handleDatesDeleted" />
    <MyTable
      :value="salesItems"
      :loading="isLoading"
      :columns-group="columnsGroup"
      :columns="allColumns"
    />
    <div v-if="error" class="error-message">Ошибка загрузки: {{ error.message }}</div>
  </div>
</template>

<script setup lang="ts">
import MyFilter from '@/components/MyFilter.vue'
import MyTable from '@/components/MyTable.vue'
import { TABLE_CONFIGS, allColumns } from '@/configs/tables'
import { useSalesStore } from '@/stores/salesStore'
import { storeToRefs } from 'pinia'

const salesStore = useSalesStore()
const tableConfig = TABLE_CONFIGS.sales
const columnsGroup = tableConfig.groups

const handleDatesSelected = (dates: { dateFrom: string | null; dateTo: string | null }) => {
  salesStore.dateFilters.dateFrom = dates.dateFrom
  salesStore.dateFilters.dateTo = dates.dateTo
  salesStore.fetchSales()
}

const handleDatesDeleted = (dates: { dateFrom: string | null; dateTo: string | null }) => {
  salesStore.dateFilters.dateFrom = dates.dateFrom
  salesStore.dateFilters.dateTo = dates.dateTo
  salesStore.salesItems = null
}

const { salesItems, isLoading, error } = storeToRefs(salesStore)
</script>
