# 组件

## `<cook-editor>`

编辑器组件，它将多个交互面板融合在同一个页面中。

- **props**
  - `state` - `ICookEditorState` 编辑器的状态，里面包括了所有可以编辑的页面`pages`,布局状态`layout`,其他资源挂载的全局状态`extra`。通常使用`createEditorState`来创建
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
TODO:使用cook-player的代码

## `<slot-dragger>`
插槽拖拽组件
- **props**
  - `slotName` - `string` 
  - `componentConfig` - `IComponentConfig`
- **用法**
  TODO:插槽拖拽组件用法代码
## `<logic-dragger>`
拖拽

TODO:然后，对应的有component-dragger ----- component-dragger-container,对应的有logic-dragger ----- logic-dragger-container，这样就不用暴漏那几个全局变量了，是否还要有一个panel-maker

TODO:直接一个resource-maker组件代表一切？？？？
