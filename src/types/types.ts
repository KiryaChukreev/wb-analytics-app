export interface SaleItem {
  g_number: string
  date: string // или Date, если будете преобразовывать
  last_change_date: string // или Date
  supplier_article: string
  tech_size: string
  barcode: number
  total_price: string // или number, если будете преобразовывать
  discount_percent: string // или number
  is_supply: boolean
  is_realization: boolean
  promo_code_discount: null | string // или number
  warehouse_name: string
  country_name: string
  oblast_okrug_name: string
  region_name: string
  income_id: number
  sale_id: string
  odid: null | number | string // зависит от реальных данных
  spp: string // или number
  for_pay: string // или number
  finished_price: string // или number
  price_with_disc: string // или number
  nm_id: number
  subject: string
  category: string
  brand: string
  is_storno: null | boolean
}

export interface ColumnConfig {
  field: string
  header: string
  group: string
  sortable?: boolean
}

export interface GroupConfig {
  name: string
  columns: ColumnConfig[]
}

export interface TableGroups {
  [groupKey: string]: GroupConfig
}

export interface TableConfig {
  groups: TableGroups
}
