const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const dts = require('vite-plugin-dts')

const entryDir = path.resolve(__dirname, '../packages/components')
const outputDir = path.resolve(__dirname, '../r-ui')


const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [dts({
    include: ['packages/**', 'packages/**/*.ts'],
    exclude: ['src/**'],
    entryDir: path.resolve(__dirname, '../packages'),
    outputDir: path.resolve(outputDir, 'types'),
    skipDiagnostics: false
  }), vue(), vueJsx()]
  //   include?: string | string[];
  //   exclude?: string | string[];
  //   root?: string;
  //   outputDir?: string | string[];
  //   entryRoot?: string;
  //   compilerOptions?: ts.CompilerOptions | null;
  //   tsConfigFilePath?: string;
  //   aliasesExclude?: Alias['find'][];
  //   cleanVueFileName?: boolean;
  //   staticImport?: boolean;
  //   clearPureImport?: boolean;
  //   insertTypesEntry?: boolean;
  //   rollupTypes?: boolean;
  //   copyDtsFiles?: boolean;
  //   noEmitOnError?: boolean;
  //   skipDiagnostics?: boolean;
  //   logDiagnostics?: boolean;
  //   afterDiagnostic?: (diagnostics: Diagnostic[]) => void | Promise<void>;
  //   beforeWriteFile?: (filePath: string, content: string) => void | TransformWriteFile;
  //   afterBuild?: () => void | Promise<void>;
})

const rollupOptions = {
  external: ['vue', 'vue-router', 'elementPlus', 'element-plus'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

//全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: outputDir
    }
  }))
}


const buildSingle = async (name) => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outputDir, name)
    }
  }))
}

// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`

  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}



const buildLib = async () => {
  await buildAll()
  // 获取组件名称组成的数组
  // const components = fs.readdirSync(entryDir).filter(name => {
  //   const componentDir = path.resolve(entryDir, name)
  //   const isDir = fs.lstatSync(componentDir).isDirectory()
  //   return isDir && fs.readdirSync(componentDir).includes('index.ts')
  // })

  // // 循环一个一个组件构建
  // for (const name of components) {
  //   // 构建单组件
  //   await buildSingle(name)

  //   // 生成组件的 package.json 文件
  //   createPackageJson(name)
  // }
}

buildLib()