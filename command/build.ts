import { defineConfig, build, type UserConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import fse from 'fs-extra'
import fs from 'fs'

const entryDir = path.resolve(__dirname, '../packages/components')
const outputDir = path.resolve(__dirname, '../lib')

const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx()]
}) as UserConfig

const rollupOptions = {
  external: ['vue', 'vue-router', 'element-plus', '@element-plus/icons-vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
console.log(path.resolve(entryDir, 'index.ts'), 'build')
// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'rookie-element-components',
        fileName: 'rookie-element-components',
        formats: ['es', 'umd']
      },
      outDir: outputDir
    }
  })
}

const buildSingleFile = async (name: string) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: name,
        fileName: name,
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outputDir, name)
    }
  })
}

const buildLib = async () => {
  await buildAll()
  // const dirNames = fs.readdirSync(entryDir)
  // const newDirNames = dirNames.filter(dir => {
  //   const dirPath = path.join(entryDir, dir)
  //   const isDir = fs.statSync(dirPath).isDirectory()
  //   return isDir && fs.readdirSync(dirPath).includes('index.ts')
  // })
  // for (const name of newDirNames) {
  //   // 构建单文件
  //   await buildSingleFile(name)
  // }
}

buildLib()
