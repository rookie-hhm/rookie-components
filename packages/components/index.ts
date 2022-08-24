import type { App } from 'vue'
// const modules = import.meta.globEager('./*/index.ts')
// const componentList: any[] = []

// const getComponentName = (path: string): string => {
//   return path.replace(/\.\/(.*)\/index\.ts$/, '$1')
// }

// const registerGlobalComponent = (app: App) => {
//   for (const key in modules) {
//     const module = modules[key]
//     const name = getComponentName(key)
//     console.log(name, 'name', module.default)
//     if (name.toLowerCase() !== 'progress') {
//       componentList.push({ name, default: module.default })
//     }
//   }
//   componentList.forEach(component => {
//     app.component(`R${component.name}`, component.default)
//   })
// }

import '../styles/index.scss'
import Table from './Table'
import ChooseArea from './ChooseArea'
import ChooseIcon from './ChooseIcon'
import ChooseTime from './ChooseTime'
import Form from './Form'
import Menu from './Menu'
import Progress from './Progress'
import ChooseCity from './ChooseCity'
const componentList = [
  Table,
  Menu,
  Form,
  ChooseArea,
  ChooseIcon,
  ChooseCity,
  ChooseTime,
  Progress // 注释掉可以打包，不注释就会报错
]
const registerGlobalComponent = (app: App) => {
  componentList.forEach(component => app.use(component))
}
export default {
  install (app: App) {
    registerGlobalComponent(app)
  }
}

