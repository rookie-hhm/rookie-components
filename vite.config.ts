import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'packages/components/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: path.resolve(__dirname, 'lib'),
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'element-plus'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
