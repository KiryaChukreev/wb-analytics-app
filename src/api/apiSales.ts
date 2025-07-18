import api from './apiClient'

export const fetchSales = async (params: {
  dateFrom?: string | null
  dateTo?: string | null
  page?: number | null
  limit?: number | null
  key?: string
}) => {
  try {
    const response = await api.get('/api/sales', {
      params: {
        dateFrom: params.dateFrom,
        dateTo: params.dateTo,
        page: params.page,
        limit: params.limit,
        key: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
        // можно добавить другие параметры фильтрации здесь
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching sales:', error)
    throw error
  }
}
