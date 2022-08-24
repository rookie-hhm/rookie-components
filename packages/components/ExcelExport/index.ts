import type { App } from 'vue'
import ExcelExport from './src/index.vue'

ExcelExport.install = (app: App) => {
  app.component('r-table', ExcelExport)
}

export default ExcelExport