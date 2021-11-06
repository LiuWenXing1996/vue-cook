# 为组件添加属性配置

通过defineComponentMaker的中的`props`参数字段，可以为自定义的组件添加属性配置

上一步中的按钮组件中间的文字现在是固定的，我们通过给`ButtonMaker`添加`props`参数来让用户可以控制按钮显示的文字。

首先，修改`Button.vue`，使其根据不同的输入，显示不同的文字
@[code vue{3,6-10}](../../../demos/test-pkg/components/button-with-props/Button.vue)
然后，修改`ButtonMaker.ts`，添加一个`props`数组，里面填入刚刚在`Button.vue`中新增的`props`的名字`text` 
@[code ts{7}](../../../demos/test-pkg/components/button-with-props/index.ts)
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

下一步，我们将为自定义组件添加事件配置。