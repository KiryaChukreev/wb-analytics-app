<template>
  <div>
    <SalesTable />
  </div>
  <div><DataRangeFilter /></div>
</template>

<script setup lang="ts">
import SalesTable from '@/components/table/SalesTable.vue'
import DataRangeFilter from '@/components/table/TableFilters/DateRangeFilter.vue'
</script>

<style scoped></style>
