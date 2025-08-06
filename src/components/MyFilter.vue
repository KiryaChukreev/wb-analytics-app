<template>
  <div class="container">
    <DatePicker
      v-model="dates"
      selectionMode="range"
      :manualInput="false"
      dateFormat="yy-mm-dd"
      placeholder="Выберите диапазон"
    />
    <Button label="Применить" @click="applyFilters" />
    <Button label="Сбросить" @click="deleteFilters" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const dates = ref<[Date, Date] | null>(null)

const emit = defineEmits(['datesSelected', 'datesDeleted'])

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

const deleteFilters = () => {
  dates.value = null
  emit('datesDeleted', { dates: null })
}

const applyFilters = () => {
  if (dates.value) {
    const [startDate, endDate] = dates.value
    const formattedDates = {
      dateFrom: formatDate(startDate),
      dateTo: formatDate(endDate),
    }

    emit('datesSelected', formattedDates) // 3. Отправляем даты только при нажатии кнопки
  }
}
</script>
<style scoped>
.container {
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
}
</style>
