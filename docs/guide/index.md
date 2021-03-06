# 开始

::: warning WIP
vue-cook还在开发中，请不要将它用在生产环境
:::

## 总览

VueCook 是一个基于vue的低代码平台辅助工具，让你的vue组件更容易低代码化。它主要有两个组件组成：

- `CookEditor` 编辑器组件，它将多个面板融合在同一个页面中，我们可以通过自定义自己的交互面板来扩充这个编辑器的搭建能力。使用它，你可以很容易实现下面页面的效果

![效果图](./effect-picture.gif)

- `CookPlayer` 渲染器组件，通过编辑器组件，我们会生成一套配置，将其放入到此组件中，它会根据提供的配置，使用`Vue`的`动态组件`将其渲染成对应的组件树，并且为了保持DOM结构的一致性，在渲染过程中没有添加任何的包裹div

VueCook本身并不是一个低代码平台，它是开发低代码平台的辅助工具。VueCook将低代码平台的搭建能力抽象成了三个东西，`组件`、`逻辑`和`交互面板` ，并统称其为`资源`，通过对应的`define***Maker`函数可以添加自定义的资源。VueCook内置了一些开箱即用的资源：
- 内置组件
  - `RootAppMaker`：根应用组件
- 内置交互面板
  - `ResourcePanelMaker`：资源面板
  - `PageComponentTreeMaker`：页面组件树
  - `ComponentEditorMaker`：组件基础编辑器
  - `PageEditorMaker`：页面编辑器
 
## 安装

::: tip 前置依赖
需要先安装vue3和vue-router
:::

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash
yarn add vue-cook
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash
npm install vue-cook
```

  </CodeGroupItem>
</CodeGroup>

## 使用

在路由配置文件中添加相关路由

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
此时开启开发服务器，进入`/vue-cook`，你会看到<demo-link path='/demos/get-started' >示例页面-起步页</demo-link>