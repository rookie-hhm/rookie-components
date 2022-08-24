import type { App } from 'vue'
import Table from './src/index.vue'

Table.install = (app: App) => {
  app.component('r-table', Table)
}

export default Table