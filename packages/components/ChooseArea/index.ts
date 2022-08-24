import type { App } from 'vue'
import ChooseArea from './src/index.vue'

ChooseArea.install = (app: App) => {
  app.component('r-choose-area', ChooseArea)
}

export default ChooseArea