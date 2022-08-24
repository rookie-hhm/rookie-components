import type { App } from 'vue'
import Progress from './src/index.vue'
import withInstall from '../../utils/common'

// Progress.install = (app: App) => {
//   app.component('r-progress', Progress)
// }
Progress.name = 'r-progress'
export default withInstall(Progress)