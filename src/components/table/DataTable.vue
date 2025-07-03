<template>
  <div class="card">
    <DataTable
      :value="orders"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :loading="loading"
      :filters="filters"
      filterDisplay="menu"
    >
      <template #header>
        <div class="flex justify-content-between">
          <h3>Таблица заказов</h3>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Global Search" />
          </span>
        </div>
      </template>

      <Column field="date" header="Date" sortable>
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
      </Column>
      <Column field="lastChangeDate" header="Last Change Date" sortable>
        <template #body="{ data }">
          {{ formatDate(data.lastChangeDate) }}
        </template>
      </Column>
      <Column
        field="supplierArticle"
        header="Supplier Article"
        sortable
        filterField="supplierArticle"
        :showFilterMenu="false"
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Search by article"
          />
        </template>
      </Column>
      <Column field="techSize" header="Tech Size" sortable></Column>
      <Column field="barcode" header="Barcode" sortable></Column>
      <Column field="totalPrice" header="Total Price" sortable>
        <template #body="{ data }"> {{ data.totalPrice.toFixed(2) }} ₽ </template>
      </Column>
      <Column field="discountPercent" header="Discount %" sortable></Column>
      <Column field="warehouseName" header="Warehouse" sortable></Column>
      <Column field="oblast" header="Region" sortable></Column>
      <Column field="incomeID" header="Income ID" sortable></Column>
      <Column field="odid" header="ODID" sortable></Column>
      <Column field="nmId" header="NM ID" sortable></Column>
      <Column field="subject" header="Subject" sortable></Column>
      <Column field="category" header="Category" sortable></Column>
      <Column field="brand" header="Brand" sortable></Column>
      <Column field="isCancel" header="Is Canceled" sortable>
        <template #body="{ data }">
          <Tag
            :value="data.isCancel ? 'Yes' : 'No'"
            :severity="data.isCancel ? 'danger' : 'success'"
          />
        </template>
      </Column>
      <Column field="cancel_dt" header="Cancel Date" sortable>
        <template #body="{ data }">
          {{ data.cancel_dt ? formatDate(data.cancel_dt) : '-' }}
        </template>
      </Column>
      <Column field="gNumber" header="G Number" sortable></Column>
      <Column field="sticker" header="Sticker" sortable></Column>
      <Column field="srid" header="SR ID" sortable></Column>

      <template #empty> No records found </template>
      <template #loading> Loading data. Please wait. </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
interface Order {
  date: string
  lastChangeDate: string
  supplierArticle: string
  techSize: string
  barcode: string
  totalPrice: number
  discountPercent: number
  warehouseName: string
  oblast: string
  incomeID: number
  odid: number
  nmId: number
  subject: string
  category: string
  brand: string
  isCancel: boolean
  cancel_dt: string | null
  gNumber: string
  sticker: string
  srid: string
}

import { ref, onMounted } from 'vue'
import axios from 'axios'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Tag from 'primevue/tag'

const orders = ref<Order[]>([])
const loading = ref(true)
const filters = ref({
  global: { value: null, matchMode: 'contains' },
})

const fetchOrders = async () => {
  try {
    loading.value = true
    const response = await axios.get('http://109.73.206.144:6969/api/v1/orders', {
      headers: {
        Authorization: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
      },
    })
    orders.value = response.data
  } catch (error) {
    console.error('Error fetching orders:', error)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '-' : date.toLocaleDateString()
}

onMounted(() => {
  fetchOrders()
})
</script>

<style scoped>
.card {
  padding: 2rem;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
