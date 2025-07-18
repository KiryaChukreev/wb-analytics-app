<template>
  <div class="date-filter-container">
    <div class="p-field">
      <label for="dateRange">Диапазон дат:</label>
      <DatePicker
        v-model="dateRange"
        inputId="dateRange"
        selectionMode="range"
        :manualInput="false"
        dateFormat="yy-MM-dd"
        showIcon
        :maxDate="maxDate"
        @update:modelValue="handleDateChange"
      />
    </div>

    <Button
      label="Сбросить"
      @click="resetDates"
      class="p-button-outlined"
      :disabled="!dateRange || dateRange.length === 0"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useSalesStore } from '@/stores/salesStore'
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'
import { format } from 'date-fns'
import { debounce } from 'lodash-es'

const salesStore = useSalesStore()
const maxDate = ref(new Date())
const dateRange = ref<Date[]>([])
const formatDate = (date: Date) => format(date, 'yyyy-MM-dd')

const handleDateChange = debounce(() => {
  if (dateRange.value?.length === 2) {
    if (dateRange.value[0] > dateRange.value[1]) {
      console.error('Введите некорректный диапазон!')
      return
    }
    salesStore.setFilters({
      dateFrom: formatDate(dateRange.value[0]),
      dateTo: formatDate(dateRange.value[1]),
    })
  } else {
    salesStore.resetDateFilters()
    salesStore.fetchData()
  }
}, 300)

const resetDates = () => {
  dateRange.value = []
  salesStore.resetDateFilters() // внутри уже есть fetchData
}
</script>

<style scoped></style>
