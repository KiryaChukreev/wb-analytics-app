import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import router from './router/router'
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import InputText from 'primevue/inputtext'
import MenuBar from 'primevue/menubar'
import Row from 'primevue/row'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.component('Button', Button) // Было 'ResetButton'
app.component('DatePicker', DatePicker) // В PrimeVue компонент называется Calendar
app.component('Column', Column) // Было 'TableColumn'
app.component('InputText', InputText)
app.component('MenuBar', MenuBar) // Обратите внимание на регистр!
app.component('ColumnGroup', ColumnGroup)
app.component('DataTable', DataTable)
app.component('Row', Row)

app.mount('#app')
