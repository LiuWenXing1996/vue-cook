# VueCook(WIP)
一个基于vue的低代码平台辅助工具，让你的vue组件更容易低代码化。

# 特性
  - 💎 组件渲染DOM一致: 将组件渲染成对应的DOM结构时没有添加任何的包裹div层
  - 📝 多页面同时编辑: 支持同时编辑多个页面
  - 🧱 自定义组件: 支持自定义低代码组件，或者将现有的组件低代码化
  - 🔗 自定义逻辑: 支持自定义低代码逻辑，或者将现有的业务逻辑低代码化
  - ⚙️ 自定义交互面板: 支持自定义的交互面板，如自定义编辑器
  - 😊 内置多个交互面板: 内置了多个开箱即用的交互面板，如基础组件编辑器、页面编辑器等等
# 文档

官方文档在这里：https://liuwenxing1996.github.io/vue-cook/

# 安装

```bash
npm install vue-cook
```
或者

```bash
yarn add vue-cook
```

# 使用

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, createCookEditorState} from "vue-cook"
import "vue-cook/dist/style.css"

const cookEditorState = createCookEditorState() // 创建编辑器全局状态
const routes = [
    {
        path: '/vue-cook', // 自定义的地址
        component: CookEditor,
        props: route => ({
            state: cookEditorState,  // 传入状态
            preview: route.query.preview // 是否预览
        })
    }
]
const router = createRouter({
    history: createWebHistory(), // 也可以使用hash模式
    routes,
})

export default router

```