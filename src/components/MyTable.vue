<template>
  <div class="data-container">
    <DataTable
      :value="value"
      :columns="columns"
      :columnsGroup="columnsGroup"
      :loading="isLoading"
      showGridlines
      removableSort
      scrollable
      scrollHeight="900px"
    >
      <ColumnGroup type="header" v-if="columnsGroup">
        <Row>
          <Column
            v-for="(group, groupName) in columnsGroup"
            :key="groupName"
            :header="group.name"
            :colspan="group.columns.length"
          />
        </Row>
        <Row>
          <Column
            v-for="col in columns"
            :key="col.field"
            :header="col.header"
            :sortable="col.sortable || false"
          />
        </Row>
      </ColumnGroup>
      <Column v-for="col in columns" :key="col.field" :field="col.field" />
      <template #empty>Нет данных</template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import type { ColumnConfig, GroupConfig, SaleItem } from '@/types/types'
import type { PropType } from 'vue'

defineProps({
  value: Array as PropType<SaleItem[] | null>,
  isLoading: Boolean,
  columns: {
    type: Array as PropType<ColumnConfig[]>,
    required: true,
    default: () => [],
  },
  columnsGroup: {
    type: Object as PropType<Record<string, GroupConfig>>, // Объект с группами
    required: true,
  },
})
</script>

<style scoped>
.data-container {
  margin-top: 20px;
  width: 1200px;
  height: 400px;
}
</style>
