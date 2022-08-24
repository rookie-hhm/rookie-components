import type { App } from 'vue'
import Form from './src/index.vue'

Form.install = (app: App) => {
  app.component('r-form', Form)
}

export default Form