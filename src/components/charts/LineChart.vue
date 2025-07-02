<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface Props {
  chartData: ChartData<'line'>
  options?: object
}

const props = defineProps<Props>()
</script>
<template>
  <Line :data="props.chartData" :options="props.options || {}" />
</template>

<style scoped>
div {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>
