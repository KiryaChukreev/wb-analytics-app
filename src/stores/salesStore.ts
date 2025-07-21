import { defineStore } from 'pinia'
import { fetchSales } from '@/api/apiSales'
import type { TableState } from '@/types/salesTable'

export const useSalesStore = defineStore('sales', {
  state: (): TableState => ({
    sales: [],
    loading: false,
    error: null,
    filters: {
      dateFrom: null,
      dateTo: null,
      dateRange: null,
      columnFilters: {},
    },
    pagination: {
      currentPage: 1,
      limit: 500,
      totalItems: 0,
      totalPages: 0,
    },
  }),

  getters: {},
  actions: {
    async fetchData() {
      if (this.loading) return

      try {
        this.loading = true
        this.error = null

        const params = {
          ...this.filters,
          page: this.pagination.currentPage,
          limit: this.pagination.limit,
        }
        if (params.dateFrom && params.dateTo && params.dateFrom > params.dateTo) {
          this.error = 'Некорректный диапазон дат'
          return
        }
        if (!this.filters.dateFrom || !this.filters.dateTo) {
          this.error = 'Необходимо указать обе даты'
          return
        }
        const response = await fetchSales(params)

        this.pagination.totalItems = response.total
        this.sales = response.data
        this.pagination.totalPages = Math.ceil(response.total / this.pagination.limit)
      } catch (error) {
        this.error = 'Не удалось загрузить данные'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    setFilters({ dateFrom, dateTo }: { dateFrom?: string | null; dateTo?: string | null }) {
      this.filters.dateFrom = dateFrom
      this.filters.dateTo = dateTo
      this.fetchData()
    },

    async refreshData() {
      this.pagination.currentPage = 1
      this.pagination.limit = 10

      this.resetDateFilters()

      await this.fetchData()
    },

    resetDateFilters() {
      this.filters.dateFrom = null
      this.filters.dateTo = null
      this.filters.dateRange = null
    },

    setPage(page: number) {
      if (page > 0 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        this.fetchData()
      }
    },
    setLimit(limit: number) {
      this.pagination.limit = limit
      this.setPage(1)
    },
    setColumnFilter(field: string, value: string) {
      this.filters.columnFilters[field] = value
      this.fetchData()
    },

    clearColumnFilters() {
      this.filters.columnFilters = {}
      this.fetchData()
    },
  },
})
