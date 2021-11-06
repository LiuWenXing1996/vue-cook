# 为组件添加事件配置

通过defineComponentMaker的中的`emits`参数字段，可以为自定义的组件添加事件配置，我们可以添加如点击、双击这种原生DOM事件，也可以添加使用`Vue`自定义的事件。

## 添加原生DOM事件配置

由于DOM事件在`Vue`当中是可以直接绑定到元素上的，所以这次`Button.vue`不用更改，我们直接修改`ButtonMaker.ts`即可,添加一个`emits`数组，并且在其中放入`click`,这个值对应点击事件，其他的DOM事件的值类似
@[code ts{8}](../../../demos/test-pkg/components/button-with-dom-events/index.ts)

然后，我们需要使用`自定义逻辑`来创建一个按钮点击后对应的行为，关于自定义逻辑可以参考后面的[自定义逻辑](./custom-logic.md)，此处先略过
@[code ts](../../../demos/test-pkg/logic/alert/index.ts)
将`AlertMaker`也放入`CookEditorState`的`makerList`中
@[code{9-16} ts{5}](../../../demos/pages/custom-component-with-dom-events.vue)
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

## 添加Vue中自定义事件配置

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

下一步，我们将为自定义组件添加插槽配置。