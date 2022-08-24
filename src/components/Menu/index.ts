import type { App } from 'vue'
import Menu from './src/menu'

Menu.install = (app: App) => {
  app.component('r-menu', Menu)
}

export default Menu