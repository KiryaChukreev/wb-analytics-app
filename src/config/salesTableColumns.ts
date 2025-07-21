import type { TableColumn } from '@/types/salesTable'

export const SALES_COLUMNS: TableColumn[] = [
  {
    field: 'g_number',
    header: 'Номер заказа',
    sortable: true,
    filterable: true,
  },
  {
    field: 'date',
    header: 'Дата продажи',
    sortable: true,
  },
  {
    field: 'last_change_date',
    header: 'Дата изменения',
    sortable: true,
  },
  {
    field: 'supplier_article',
    header: 'Артикул поставщика',
    filterable: true,
  },
  {
    field: 'tech_size',
    header: 'Технический размер',
    filterable: true,
  },
  {
    field: 'barcode',
    header: 'Штрихкод',
    filterable: true,
  },
  {
    field: 'total_price',
    header: 'Общая сумма',
    sortable: true,
  },
  {
    field: 'discount_percent',
    header: 'Процент скидки',
    sortable: true,
  },
  {
    field: 'warehouse_name',
    header: 'Склад',
    filterable: true,
  },
  {
    field: 'country_name',
    header: 'Страна',
    filterable: true,
  },
  {
    field: 'oblast_okrug_name',
    header: 'Федеральный округ',
    filterable: true,
  },
  {
    field: 'region_name',
    header: 'Регион',
    filterable: true,
  },
  {
    field: 'income_id',
    header: 'ID поступления',
  },
  {
    field: 'sale_id',
    header: 'ID продажи',
    filterable: true,
  },
  {
    field: 'for_pay',
    header: 'К оплате',
    sortable: true,
  },
  {
    field: 'finished_price',
    header: 'Финальная цена',
    sortable: true,
  },
  {
    field: 'price_with_disc',
    header: 'Цена со скидкой',
    sortable: true,
  },
  {
    field: 'nm_id',
    header: 'WB ID товара',
    filterable: true,
  },
  {
    field: 'subject',
    header: 'Категория',
    filterable: true,
  },
  {
    field: 'category',
    header: 'Подкатегория',
    filterable: true,
  },
  {
    field: 'brand',
    header: 'Бренд',
    filterable: true,
  },
]
