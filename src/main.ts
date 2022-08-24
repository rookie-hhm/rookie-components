import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcons from './plugins/icons'
import registerGlobalComponent from '@/components/index'
import '@/styles/index.scss'
async function bootstrapApp () {
  const app = createApp(App)
  app
    .use(ElementPlus)
    .use(installIcons)
    .use(registerGlobalComponent)
    .use(router)
    .mount('#app')
}

bootstrapApp()