import { App } from "vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from '../utils/format'

export default (app: App<HTMLElement>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    console.log(`el-icon${toLine(key)}`, 'let')
    app.component(`el-icon${toLine(key)}`, component as any)
  }
}