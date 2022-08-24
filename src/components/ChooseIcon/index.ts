import type { App } from 'vue'
import ChooseIcon from './src/index.vue'

ChooseIcon.install = (app: App) => {
  app.component('r-choose-icon', ChooseIcon)
}

export default ChooseIcon