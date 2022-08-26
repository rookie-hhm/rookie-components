import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/

export default ({ mode }) => {
  return defineConfig({
  publicDir: false,
  base: mode === 'production' ? '/rookie-components/' : './',
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    outDir: path.resolve(__dirname, 'docs')
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
}