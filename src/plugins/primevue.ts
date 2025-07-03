import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'

export default {
  install(app: App) {
    app.use(PrimeVue)
    app.component('DataTable', DataTable)
    app.component('PrimeColumn', Column)
    app.component('InputText', InputText)
    app.component('PrimeSelect', Select)
    app.component('PrimeButton', Button)
    app.component('PrimePaginator', Paginator)
  },
}
