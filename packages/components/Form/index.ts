import type { App } from 'vue'
import Form from './src/index.vue'
import withInstall from '../../utils/common'
// Form.install = (app: App) => {
//   app.component('r-form', Form)
// }
Form.name = 'r-form'
export default withInstall(Form)