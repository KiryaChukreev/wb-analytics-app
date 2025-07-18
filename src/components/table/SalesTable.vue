<template>
  <div class="card">
    <DataTable
      :value="sales"
      :rows="pagination.limit"
      :totalRecords="pagination.totalItems"
      :loading="loading"
      paginator
      :rowsPerPageOptions="[5, 10, 20, 50]"
      @rows-per-page-change="onLimitChange"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Показано {first} - {last} из {totalRecords}"
      @page="onPageChange"
    >
      <template #header>
        <div>
          <h3>{{ title }}</h3>
          <Button icon="pi pi-refresh" @click="refreshData" />
        </div>
      </template>

      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :filterField="col.field"
        :showFilterMenu="col.filterable"
      >
        <template #filter="{ filterModel, filterCallback }" v-if="col.filterable">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            :placeholder="`Поиск по ${col.header.toLowerCase()}`"
          />
        </template>
      </Column>

      <template #empty>
        <div class>Данные не найдены</div>
      </template>

      <template #loading>
        <div>Загрузка данных...</div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useSalesStore } from '@/stores/salesStore'
import { storeToRefs } from 'pinia'
import type { DataTablePageEvent } from 'primevue/datatable'
import type { TableColumn } from '@/types/salesTable'

const title = ref('Продажи')
const columns = ref<TableColumn[]>([])

const salesStore = useSalesStore()
const { sales, loading, pagination } = storeToRefs(salesStore)

const onPageChange = (event: DataTablePageEvent) => {
  salesStore.setPage(event.page + 1)
}

const refreshData = () => {
  salesStore.refreshData()
}

const onLimitChange = (event: { value: number }) => {
  salesStore.setLimit(event.value)
}

onMounted(() => {
  salesStore.fetchData()
})
</script>

<style scoped></style>
