import type { App, Component } from 'vue';
import ChooseArea from './src/index.vue'
import withInstall from '../../utils/common'
// ChooseArea.install = (app: App) => {
//   app.component('r-choose-city', ChooseArea as Component)
// }

ChooseArea.name = 'r-choose-city'
export default withInstall(ChooseArea)