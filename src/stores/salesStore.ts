import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, reactive, watch } from 'vue'
import type { SaleItem } from '@/types/types'

export const useSalesStore = defineStore('salesStore', () => {
  // Состояние
  const LOCAL_STORAGE_KEY = 'salesData'

  const salesItems = ref<SaleItem[] | null>(loadFromStorage())
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  const pagination = ref({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 500,
  })
  const dateFilters = reactive({
    dateFrom: null as string | null,
    dateTo: null as string | null,
  })

  const API_URL = 'http://109.73.206.144:6969/api/sales'
  const API_KEY = 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie'

  function loadFromStorage() {
    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
      return storedData ? JSON.parse(storedData) : null
    } catch (e) {
      console.error('Ошибка чтения из localStorage:', e)
      return null
    }
  }
  function saveToStorage(data: SaleItem[]) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.error('Ошибка сохранения в localStorage:', e)
    }
  }

  watch(
    salesItems,
    (newValue) => {
      if (newValue) {
        saveToStorage(newValue)
      }
    },
    { deep: true },
  )

  const fetchSales = async () => {
    try {
      isLoading.value = true
      error.value = null

      const params = {
        dateFrom: dateFilters.dateFrom, // Передаем конкретные значения
        dateTo: dateFilters.dateTo,
        page: pagination.value.currentPage,
        key: API_KEY,
        limit: pagination.value.perPage,
      }
      const response = await axios.get(API_URL, { params })
      salesItems.value = response.data.data
      saveToStorage(response.data.data)

      if (response.data.meta) {
        pagination.value = {
          currentPage: response.data.meta.current_page,
          totalPages: response.data.meta.last_page,
          perPage: parseInt(response.data.meta.per_page),
          totalItems: response.data.meta.total,
        }
      }

      return response.data.data
    } catch (err) {
      console.error('Ошибка при загрузке данных:', err)
      if (!salesItems.value) {
        salesItems.value = loadFromStorage()
      }
      throw err // Пробрасываем для обработки в компоненте
    } finally {
      isLoading.value = false
    }
  }

  const clearStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    salesItems.value = null
  }

  return {
    salesItems,
    dateFilters,
    isLoading,
    error,
    pagination,
    clearStorage,
    fetchSales,
  }
})
