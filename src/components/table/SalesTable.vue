<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      filterDisplay="row"
      :value="sales"
      :rows="pagination.limit"
      :totalRecords="pagination.totalItems"
      :loading="loading"
      paginator
      removableSort
      :rowsPerPageOptions="[5, 10, 20, 50]"
      @rows-per-page-change="onLimitChange"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Показано {first} - {last} из {totalRecords}"
      @page="onPageChange"
    >
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
import { useSalesStore } from '@/stores/salesStore'
import { storeToRefs } from 'pinia'
import type { DataTablePageEvent } from 'primevue/datatable'
import type { TableColumn } from '@/types/salesTable'
import { SALES_COLUMNS } from '@/config/salesTableColumns'
import { FilterMatchMode } from '@primevue/core/api'

const columns = ref<TableColumn[]>(SALES_COLUMNS)
const filters = ref({
  g_number: { value: null, matchMode: FilterMatchMode.EQUALS },
  supplier_article: { value: null, matchMode: FilterMatchMode.EQUALS },
  tech_size: { value: null, matchMode: FilterMatchMode.EQUALS },
  barcode: { value: null, matchMode: FilterMatchMode.EQUALS },
  warehouse_name: { value: null, matchMode: FilterMatchMode.EQUALS },
  country_name: { value: null, matchMode: FilterMatchMode.EQUALS },
  oblast_okrug_name: { value: null, matchMode: FilterMatchMode.EQUALS },
  region_name: { value: null, matchMode: FilterMatchMode.EQUALS },
  sale_id: { value: null, matchMode: FilterMatchMode.EQUALS },
  nm_id: { value: null, matchMode: FilterMatchMode.EQUALS },
  subject: { value: null, matchMode: FilterMatchMode.EQUALS },
  category: { value: null, matchMode: FilterMatchMode.EQUALS },
  brand: { value: null, matchMode: FilterMatchMode.EQUALS },
})

const salesStore = useSalesStore()
const { sales, loading, pagination } = storeToRefs(salesStore)

const onPageChange = (event: DataTablePageEvent) => {
  salesStore.setPage(event.page + 1)
}

const onLimitChange = (event: { value: number }) => {
  salesStore.setLimit(event.value)
}

onMounted(() => {
  salesStore.fetchData()
})
</script>

<style scoped></style>
