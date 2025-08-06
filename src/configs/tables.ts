export const TABLE_CONFIGS = {
  sales: {
    groups: {
      basic: {
        name: 'Основная информация',
        columns: [
          { field: 'g_number', header: 'Номер заказа', group: 'basic' },
          { field: 'date', header: 'Дата заказа', group: 'basic', sortable: true },
          { field: 'last_change_date', header: 'Дата последнего изменения', group: 'basic' },
          { field: 'income_id', header: 'Номер поставки', group: 'basic' },
          { field: 'sale_id', header: 'Номер продажи', group: 'basic' },
        ],
      },

      product: {
        name: 'Информация о товаре',
        columns: [
          { field: 'supplier_article', header: 'Артикул поставщика', group: 'product' },
          { field: 'tech_size', header: 'Технический размер', group: 'product' },
          { field: 'barcode', header: 'Штрихкод', group: 'product' },
          { field: 'nm_id', header: 'Номенклатура WB', group: 'product' },
          { field: 'subject', header: 'Предмет', group: 'product' },
          { field: 'category', header: 'Категория', group: 'product' },
          { field: 'brand', header: 'Бренд', group: 'product' },
        ],
      },

      finance: {
        name: 'Финансовая информация',
        columns: [
          { field: 'total_price', header: 'Общая стоимость', group: 'finance', sortable: true },
          { field: 'discount_percent', header: 'Процент скидки', group: 'finance', sortable: true },
          { field: 'price_with_disc', header: 'Цена со скидкой', group: 'finance', sortable: true },
          { field: 'finished_price', header: 'Итоговая цена', group: 'finance', sortable: true },
          { field: 'for_pay', header: 'К оплате', group: 'finance', sortable: true },
          {
            field: 'promo_code_discount',
            header: 'Скидка по промокоду',
            group: 'finance',
            sortable: true,
          },
          {
            field: 'spp',
            header: 'СПП (Скидка постоянного покупателя)',
            group: 'finance',
            sortable: true,
          },
        ],
      },

      logistics: {
        name: 'Логистическая информация',
        columns: [
          { field: 'warehouse_name', header: 'Склад', group: 'logistics' },
          { field: 'country_name', header: 'Страна', group: 'logistics' },
          { field: 'oblast_okrug_name', header: 'Федеральный округ', group: 'logistics' },
          { field: 'region_name', header: 'Регион', group: 'logistics', sortable: true },
        ],
      },

      status: {
        name: 'Статусы',
        columns: [
          { field: 'is_supply', header: 'Поставка', group: 'status' },
          { field: 'is_realization', header: 'Реализация', group: 'status' },
          { field: 'is_storno', header: 'Сторно', group: 'status' },
        ],
      },

      additional: {
        name: 'Дополнительная информация',
        columns: [
          { field: 'odid', header: 'Уникальный идентификатор заказа', group: 'additional' },
        ],
      },
    },
  },
}
export const allColumns = Object.values(TABLE_CONFIGS.sales.groups).flatMap(
  (group) => group.columns,
)
