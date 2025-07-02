import axios from 'axios'

const API_HOST = 'http://109.73.206.144:6969'
const API_KEY = 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie'

const api = axios.create({
  baseURL: API_HOST,
  headers: {
    Authorization: API_KEY,
  },
})

export const getIncomes = async (params = {}) => {
  const response = await api.get('/incomes', { params })
  return response.data
}

export const getOrders = async (params = {}) => {
  const response = await api.get('/orders', { params })
  return response.data
}

export const getSales = async (params = {}) => {
  const response = await api.get('/sales', { params })
  return response.data
}

export const getStocks = async (params = {}) => {
  const response = await api.get('/stocks', { params })
  return response.data
}
