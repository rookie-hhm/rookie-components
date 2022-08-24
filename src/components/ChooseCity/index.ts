import type { App, Component } from 'vue';
import ChooseArea from './src/index.vue'

ChooseArea.install = (app: App) => {
  app.component('r-choose-city', ChooseArea as Component)
}

export default ChooseArea