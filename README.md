### 问题1

执行 `npm run build:components` 打包组件
报错信息:
[vite:vue] Illegal tag name. Use '&lt;' to print '<'.

报错文件:
`file:/element-plus-ui-library/packages/components/Progress/src/index.vue`

github上找到相关的链接:
[地址](https://github.com/vitejs/vite/discussions/8476?sort=top)


### 问题2

执行`npm run build:components` 跟 `npm run build:components2` 这两个命令的时候（后面分别用`components` 和 `components2`区分），分别执行的是 `command`目录下的 `build.ts` 跟 `build.js`  我配置的命令是一样的，**但是执行出来的结果完全不同**。

如果我执行的是 `build:components2`就不会出现上面 `问题1`的问题，并且能够成功的引入生成的js文件，看了下主要的区别:

看了打包的后文件的区别:
执行`components`后生成的文件`lib`目录下: 文件的内容很少
```js
const _sfc_main$ = {} // 组件对应的代码
```
执行`components2`后: **文件的内容多了很多**, 并且组件相关的代码如下
```js
import { defineComponent } from 'vue'
const _sfc_main$5 = defineComponent({ ... }) // 每个组件都会有defineComponent包裹起来
```
原因是为什么？


### 注意
打包后的文件，可以放在`src/main.ts`目录下引入，测试看效果

