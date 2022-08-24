import type { App } from 'vue'
import Progress from './src/index.vue'

Progress.install = (app: App) => {
  app.component('r-progress', Progress)
}

export default Progress