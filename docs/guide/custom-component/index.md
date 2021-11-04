# 自定义组件

你可以通过`defineComponentMaker`这个工具函数自定义组件

## 简单示例

以自定义一个按钮组件为例，首先你需要有一个按钮组件，他可能是以vue的`SFC`方式写的，如下

@[code vue](../../demos/test-pkg/components/button/Button.vue)

我们通过`defineComponentMaker`把它低代码化，代码如下
@[code ts](../../demos/test-pkg/components/button/index.ts)

然后在使用`createCookEditorState`创建`cookEditorState`将这个`按钮资源`放入到编辑器的`makerList`中

@[code{8-14} ts](../../demos/pages/custom-component.vue)

这个时候编辑器页面应该是下面这样

<iframe-demo src='/demos/custom-component'></iframe-demo>

我们可以在最下方的`资源面板`中找到新增加的`ButtonMaker`,按照下面的步骤我们可以感受一下使用这个`ButtonMaker`的流程。

- 在右侧的`页面组件树`中点击`+`按钮，新增一个页面
- 点击新增的页面，页面中心的会打开一个`页面编辑`面板
- 讲`资源面板`里的`按钮`拖到`页面编辑`面板中
- 现在你可以在页面中看到一个按钮了

::: tip 修改页面编辑面板中页面显示的大小
页面编辑面板中`页面`默认的大小是1920*1080像素，默认比例是50%，你可以通过它上方的`操作按钮`来调整`页面`的大小
:::

## 为组件添加属性

按钮中间的文字现在是固定，我们可以通过给`ButtonMaker`添加`props`来让用户可以控制按钮显示的文字。

首先，修改`Button.vue`，使其根据不同的输入，显示不同的文字
@[code vue{3,6-10}](../../demos/test-pkg/components/button-with-props/Button.vue)
然后，修改`ButtonMaker.ts`，添加一个`props`数组，里面填入刚刚在`Button.vue`中新增的`props`的名字`text`
@[code ts{7}](../../demos/test-pkg/components/button-with-props/index.ts)
同样的，在使用`createCookEditorState`创建`cookEditorState`将这个`按钮资源`放入到编辑器的`makerList`中，打开编辑器，这个时候编辑器页面应该是下面这样
<iframe-demo src='/demos/custom-component-with-props'></iframe-demo>
按照下面的步骤，我们可以感受一下使用修改组件属性的流程

- 新增一个页面，然后在页面中添加一个按钮
- 点击新增的按钮，会看到左侧的`组件编辑器`面板显示了选中的组件
- 在`属性`一栏下，有一个名称为`text`的输入框，
- 输入文字后，我们可以看到按钮的文字也发生了变化


::: tip 在组件编辑器面板定位组件
组件编辑器中`基础信息`那一栏，`唯一ID`后面有一个`定位`按钮，鼠标悬停上去，页面编辑器面板中会高亮显示当前的组件
:::

## 为组件添加事件

我们可以组件添加一些事件配置，如点击、双击这种事件，这样用户可以控制更多组件的行为。由于DOM事件在`Vue`当中是可以直接绑定到元素上的，所以这次`Button.vue`不用更改，我们直接修改`ButtonMaker.ts`即可,添加一个`emits`数组，并且在其中放入`click`,这个值对应点击事件，其他的DOM事件的值类似
@[code ts{8}](../../demos/test-pkg/components/button-with-dom-events/index.ts)

然后，我们需要使用`自定义逻辑`来创建一个按钮点击后对应的行为，关于自定义逻辑可以参考后面的[自定义逻辑](./custom-logic.md)，此处先略过
@[code ts](../../demos/test-pkg/logic/alert/index.ts)
将`AlertMaker`也放入`CookEditorState`的`makerList`中
@[code{9-16} ts{5}](../../demos/pages/custom-component-with-dom-events.vue)
这个时候，编辑器页面如下,我们可以在资源面板里找到刚放入`AlertMaker`。
<iframe-demo src='/demos/custom-component-with-dom-events'></iframe-demo>

按照下面的步骤，我们可以感受一下配置组件事件的流程

- 新增一个页面，然后在页面中添加一个按钮，然后选中按钮
- 在`事件`一栏下，有一个名称为`click`的框，上面写着`拖拽逻辑到此处添加`
- 从`资源面板`中找到之前放入的`AlertMaker`，将其拖入到上面的框里
- 可以看到下方的表格发生了变化，出现了一行数据，它就是添加好的行为逻辑
- 通过`页面编辑器`的操作按钮，修改它的选中模式，否则我们没法触发按钮的点击事件
- 点击按钮，可以看到绑定的行为逻辑被成功触发

::: tip 修改事件绑定行为的执行顺序
组件编辑器一个事件可以绑定多个行为逻辑，他们会以表格的形式展示出来，通过点击表格中每一行的`⬆️`或者`⬇️`，可以调整它们执行的顺序
:::

我们也可以为组件添加`Vue`中的自定义事件，首先在组件中按照`Vue`要求的方式自定义事件，例如下

```vue
<template>
// ...
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const emits = defineEmits(["my-events"])
onMounted(() => {
    emits("my-events")
})
</script>
```
然后，和之前类似，在`maker`中添加事件的名称即可
```ts
import { defineComponentMaker } from 'vue-cook'
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "组件资源名称",
    pkg: "test-pkg",
    emits: ["my-events"],
    make: () => Component
})
```



