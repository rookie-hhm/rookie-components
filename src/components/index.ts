import type { App } from 'vue'
const modules = import.meta.globEager('./**/index.ts')
const componentList: any[] = []

const getComponentName = (path: string): string => {
  return path.replace(/\.\/(.*)\/index\.ts$/, '$1')
}

const registerGlobalComponent = (app: App) => {
  for (const key in modules) {
    const module = modules[key]
    const name = getComponentName(key)
    componentList.push({ name, default: module.default })
  }
  componentList.forEach(component => {
    app.component(`R${component.name}`, component.default)
  })
}


export default {
  install (app: App) {
    registerGlobalComponent(app)
  }
}

