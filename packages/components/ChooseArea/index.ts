import type { App } from 'vue'
import ChooseArea from './src/index.vue'
import withInstall from '../../utils/common'
// ChooseArea.install = (app: App) => {
//   app.component('r-choose-area', ChooseArea)
// }
ChooseArea.name = 'r-choose-area'
export default withInstall(ChooseArea)