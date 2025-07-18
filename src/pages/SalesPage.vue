<template>
  <div>
    <DataTable />
  </div>
  <div><DataRangeFilter /></div>
</template>

<script setup lang="ts">
import DataTable from '@/components/table/DataTable.vue'
import DataRangeFilter from '@/components/table/TableFilters/DateRangeFilter.vue'
</script>

<style scoped></style>
