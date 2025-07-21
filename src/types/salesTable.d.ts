export interface TableState {
  sales: SalesItem[]
  loading: boolean
  error: string | null
  pagination: Pagination
  filters: Filters
}
export interface SalesItem {
  g_number: string
  date: string
  last_change_date: string
  supplier_article: string
  tech_size: string
  barcode: number
  total_price: number
  discount_percent: number
  is_supply: boolean
  is_realization: boolean
  promo_code_discount: string | null
  warehouse_name: string
  country_name: string
  oblast_okrug_name: string
  region_name: string
  income_id: number
  sale_id: string
  odid: string | null
  spp: number
  for_pay: string
  finished_price: number
  price_with_disc: number
  nm_id: number
  subject: string
  category: string
  brand: string
  is_storno: boolean | null
}

export interface TableColumn {
  field: keyof SalesItem
  header: string
  sortable?: boolean
  filterable?: boolean
}

export type DateRangeType = [Date, Date] | null

export interface Filters {
  dateFrom?: string | null
  dateTo?: string | null
  dateRange?: [] | null
  columnFilters: Record<string, string>
}

export interface Pagination {
  currentPage: number
  totalItems: number
  totalPages: number
  limit: number
}
