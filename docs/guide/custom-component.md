# 自定义组件

你可以通过`defineComponentMaker`这个工具函数自定义组件

## 简单示例

以自定义一个按钮组件为例，首先你需要有一个按钮组件，他可能是以vue的`SFC`方式写的，如下

```vue
// Button.vue
<template>
    <button>我是按钮</button>
</template>
<script>
    export default{}
</script>
```
我们通过`defineComponentMaker`把它低代码化，代码如下
```js
// ButtonMaker.js
import { markRaw } from 'vue';
import Button from "./Button.vue";
export default defineComponentMaker({
    name: "按钮",
    pkg: "测试包",
    make: () => Button
})
```
将这个`按钮资源`放入到编辑器的`makerList`中，我们就可以在




