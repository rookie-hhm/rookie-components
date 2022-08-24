import type { App } from 'vue'
import ChooseIcon from './src/index.vue'
import withInstall from '../../utils/common'
// ChooseIcon.install = (app: App) => {
//   app.component('r-choose-icon', ChooseIcon)
// }
ChooseIcon.name = 'r-choose-icon'
export default withInstall(ChooseIcon)