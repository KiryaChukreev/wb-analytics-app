<template>
  <div class="datatable">
    <h3>{{ title }}</h3>

    <!-- Фильтры -->
    <div class="filters">
      <div v-for="(filter, key) in filters" :key="key" class="p-field p-grid">
        <label :for="key" class="p-col-12 p-md-4">{{ filter.label }}</label>
        <InputText
          v-model="filters[key].value"
          :placeholder="`Filter by ${filter.label}`"
          class="p-col-12 p-md-8"
        />
      </div>
    </div>

    <!-- Таблица -->
    <DataTable
      :value="data"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 20]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: 'Table',
  },
})
</script>

<style scoped>
.datatable {
  padding: 1rem;
}
.filters {
  margin-bottom: 1rem;
}
</style>
