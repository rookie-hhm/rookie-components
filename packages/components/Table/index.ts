import type { App } from 'vue'
import Table from './src/index.vue'
import withInstall from '../../utils/common'
// Table.install = (app: App) => {
//   app.component('r-table', Table)
// }
Table.name = 'r-table'

export default withInstall(Table)