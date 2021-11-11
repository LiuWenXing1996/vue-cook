# 组件

## `<cook-editor>`

编辑器组件，它将多个交互面板融合在同一个页面中。

- **props**
  - `state` - `ICookEditorState` 编辑器的状态，里面包括了所有可以编辑的页面`pages`,布局状态`layout`。通常使用`createEditorState`来创建
  - `preview` - `string | undefined` 需要预览页面的`uid`，需要从页面url的参数传入。

- **基础用法**
  
    在路由配置文件中添加相关路由

    ```js
    import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
    import { CookEditor, createCookEditorState} from "vue-cook"

    const cookEditorState = createCookEditorState() // 创建编辑器全局状态
    const routes = [
        {
            path: '/vue-cook', // 自定义地址
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

- **作为其他组件的子组件**

    有时，需要将`<cook-editor>`当作其他组件的子组件使用，这个时候需要将页面url中的preview参数透传给`CookEditor`。并且判断`preview`的值，当`preview`有值的时候，只渲染`CookEditor`

    ```vue
    <template>
        <template v-if="!preview">
            <component-foo>
                //....
                <component-boo>
                    <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
                </component-boo>
            </component-foo>
        </template>
        <template v-else>
            <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
        </template>
    </template>
    <script setup lang="ts">
    import { CookEditor } from "vue-cook"
    import { useRoute } from "vue-router";
    import { createCookEditorState } from "vue-cook"
    const cookEditorState = createCookEditorState()
    const route = useRoute()
    const preview = route.query.preview as string
    </script>
    ```
## `<cook-player>`
组件渲染器。通过编辑器组件生成的配置，将其放入到此组件中，它根据提供的配置，使用`Vue`的`动态组件`将其渲染出来

- **props**
  - `state` - `ICookPlayerState` 渲染器的状态，里面包括了当前页面的配置`page`,其他资源挂载的全局状态`extra`。通常使用`createPlayerState`来创。
  - `preview` - `string | undefined` 预览页面的`uid`，当其有值是，`<cook-player>`会在的`window`对象上，暴露出一些可供调用的方法，方便`<cook-editor>`和其通信

- **用法**

参照 [在`<cook-player>`中使用](../guide/data-save-and-use.md#在-cook-player-中使用)以及 [结合动态路由使用`<cook-player>`](../guide/data-save-and-use.md#结合动态路由使用-cook-player)

## `<component-dragger>`

插槽拖拽组件，当某一个组件资源被拖拽上去后，会触发一个`drop`事件,它的回调参数包含一个新创建的对应拖拽组件的组件配置
- **events**
  - `drop` - `(componentConfig: IComponentConfig) => void` 
- **slots**
  - `default` - 默认会显示`拖拽组件到此处添加`，可以自定义想要显示内容
  ```vue
  <component-dragger>自定义内容</component-dragger>
  ```
- **用法**
  
  参照 [自定义交互面板-组件拖拽添加面板](../guide/custom-panel.md#组件拖拽添加面板)

## `<logic-dragger>`
拖拽拖拽组件，当某一个逻辑资源被拖拽上去后，会触发一个`drop`事件,它的回调参数包含一个新创建的对应拖拽逻辑的逻辑配置
- **events**
  - `drop` - `(logicConfig: ILogicConfig) => void` 
- **slots**
  - `default` - 默认会显示`拖拽逻辑到此处添加`，可以自定义想要显示内容
  ```vue
  <logic-dragger>自定义内容</logic-dragger>
  ```
- **用法**
  
  参照 [自定义交互面板-逻辑拖拽添加面板](../guide/custom-panel.md#逻辑拖拽添加面板)
  
## `<resource-maker>`
资源展示组件，实现了组件资源和逻辑资源的拖拽事件，以及面板资源的点击开启面板功能。

- **props**
  - `maker` - `IResourceMaker`
- **slots**
  - `default` - 默认会显示`maker.name - maker.pkg`，可以自定义想要显示内容
  ```vue
  <resource-maker>自定义内容</resource-maker>
  ```
- **用法**
  
  参照 [自定义交互面板-自定义资源面板](../guide/custom-panel.md#自定义资源面板)
