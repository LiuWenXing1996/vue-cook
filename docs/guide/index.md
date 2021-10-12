# 开始

## 总览

VueCook 是一个基于vue的低代码平台辅助工具，让你的vue组件更容易低代码化。它主要有两个组件组成：

- `CookEditor` 编辑器组件，它提供了一个支持自由布局的交互界面，可以将`标签页`自由的拖拽，也可以将其水平或自由的嵌套排列。
- `CookPlayer` 组件配置渲染组件，它根据提供的组件配置，使用`Vue`的`动态组件`将其渲染成对应的组件树，为了保持DOM结构的一致性，在渲染过程中没有添加任何的包裹div

VueCook 将`组件`、`逻辑`和`交互面板`统称为资源，通过对应的`define***Maker`函数可以添加自定义的资源。VueCook内置了一些开箱即用的资源：
- 内置组件
  - `RootAppMaker`
- 内置逻辑
- 内置交互面板
  - 资源面板
  - 页面组件树
  - 组件基础编辑器
  - 页面编辑面板
 
## 安装

::: tip 前置依赖
需要先安装vue3和vue-router
:::

使用 NPM:

```bash
$ npm install vue-cook
```

使用 Yarn:

```bash
$ yarn add vue-cook
```

## 使用

在路由配置文件中添加相关路由

```js
import { createRouter, createWebHistory } from 'vue-router'
import { CookEditor, CookPlayer, useCookConfig } from "vue-cook"

const cookConfig = useCookConfig() // 获取到配置文件

// 动态生成需要编辑的页面路由
const dynamicRoutes = cookConfig.value.pages.map(page => {
    return {
        path: page.path,
        component: CookPlayer,
        props: {
            config: page.component
        }
    }
})
const routes = [
    {
        path: '/cook', // 可以是其他名称
        component: CookEditor,
        props: {
            config: cookConfig
        }
    },
    ...dynamicRoutes
]
const router = createRouter({
    history: createWebHistory(), // 也可以使用hash模式
    routes, 
})

export default router
```
## 模板

- 资源包开发模板
- 应用开发模板


