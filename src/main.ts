import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcons from './plugins/icons'
import registerGlobalComponent from '@/components/index'
// 打包后的文件在这里引入测试, 把 registerGlobalComponent 的代码注释掉
// import UI from '../lib/index.mjs'
// import UI from '../m-ui/index.mjs'
// import '../m-ui/style.css'
import UI from '@my/element-plus-ui-library'
import '@my/element-plus-ui-library/r-ui/style.css'
// import '@/styles/index.scss'
async function bootstrapApp () {
  const app = createApp(App)
  app
    .use(ElementPlus)
    .use(installIcons)
    .use(UI)
    // .use(registerGlobalComponent)
    .use(router)
    .mount('#app')
}

bootstrapApp()