import type { App } from 'vue'
import Time from './src/index.vue'
import withInstall from '@/utils/common'
// Time.install = (app: App) => {
//   app.component('r-time', Time)
// }
Time.name = 'r-choose-time'
console.log(Time, 'time')
withInstall(Time)
export default Time