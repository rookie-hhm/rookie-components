import type { App } from 'vue'
import Menu from './src/menu'
import withInstall from '../../utils/common'
// Menu.install = (app: App) => {
//   app.component('r-menu', Menu)
// }
Menu.name = 'r-menu'
export default withInstall(Menu)