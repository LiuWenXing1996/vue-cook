# 自定义交互面板

可以通过`definePanelMaker`这个工具函数自定义交互面板资源。

## 定义面板

一个最简单的交互面板如下：

@[code ts](../../demos/test-pkg/panels/simple-panel/index.ts)

打开<demo-link path='/demos/custom-panel'>示例页面-自定义交互面板</demo-link>，可以在最下方的`资源面板`中找到新增加`简单面板`，点击`简单面板`，会看到面板在右侧被打开。可以通过`defaultSplitLayoutPaneName`来控制面板被打开的位置，有`left`、`center`、`right`、`bottom`

## 自定义编辑器

可以自定义编辑器来更好辅助`组件`和`逻辑`的属性配置，

### 颜色选择器面板

以自定义一个颜色选择器为例

@[code vue](../../demos/test-pkg/panels/color-panel/ColorPanel.vue)

创建一个带颜色配置的按钮组件

@[code vue](../../demos/test-pkg/components/button-with-color-props/Button.vue)

@[code ts](../../demos/test-pkg/components/button-with-color-props/index.ts)

打开<demo-link path='/demos/custom-panel-with-color-input'>示例页面-自定义颜色编辑器</demo-link>，按照以下步骤，使用此面板

- 创建一个带按钮的页面
- 从资源面板中打开`颜色选择器面板`
- 选中按钮
- 在颜色选择器面板中选取颜色，可以看到按钮的颜色发生了改变

### 组件拖拽添加面板
VueCook提供了`<component-dragger>`，可以很方便的实现`组件拖拽添加`这个功能

@[code vue](../../demos/test-pkg/panels/component-dragger-panel/ComponentDraggerPanel.vue)

打开<demo-link path='/demos/custom-panel-with-component-dragger'>示例页面-自定义组件拖拽添加面板</demo-link>，按照以下步骤，使用此面板

- 创建一个带按钮的页面,选中按钮
- 从资源面板中打开`组件拖拽添加面板`
- 可以看到它识别到了按钮组件拥有的插槽配置，并且每个插槽配置后面都带了一个框，上面写着`拖拽组件到此处添加`
- 将资源面板中的emoji图标组件拖入，可以看到图标正常显示在按钮组件上
- 点击删除按钮可以将添加的图标组件删除

### 逻辑拖拽添加面板

VueCook提供了`<logic-dragger>`，可以很方便的实现`逻辑拖拽添加`这个功能

@[code vue](../../demos/test-pkg/panels/logic-dragger-panel/LogicDraggerPanel.vue)

打开<demo-link path='/demos/custom-panel-with-logic-dragger'>示例页面-自定义逻辑拖拽添加面板</demo-link>，按照以下步骤，使用此面板

- 创建一个带表格的页面，选中表格组件
- 从资源面板中打开`逻辑拖拽添加面板`
- 可以看到它显示了一个框，上面写着`fetch:拖拽逻辑到此处添加`
- 将资源面板中的fetch逻辑拖入，页面中的表格组件的按钮文字变成了`点我获取数据`
- 关闭选中模式，点击按钮，稍等片刻，可以看到数据加载成功

### 自定义资源面板

VueCook提供了`<resource-maker>`，可以很方便的在实现一个`资源面板`的同时，具有`组件拖拽`、`逻辑拖拽`以及`面板点击打开`功能

@[code vue](../../demos/test-pkg/panels/resource-panel/ResourcePanel.vue)

打开<demo-link path='/demos/custom-panel-with-resource-panel'>示例页面-自定义自定义资源面板</demo-link>，按照以下步骤，使用此面板

- 创建一个新页面，选中新页面
- 从资源面板中打开`自定义资源面板`，可以看到它将所有的资源都列了出来
- 从`自定义资源面板`拖拽表格组件到新页面的`default`插槽里，可以看到表格被正常添加
- 选中页面中的表格组件，从`自定义资源面板`拖拽Fetch逻辑到它的`fetch`属性中，可以看到页面中的表格组件的按钮文字变成`点我获取数据`
- 关闭选中模式，点击按钮，稍等片刻，可以看到数据加载成功

## 编程控制面板开关

有的时候需要通过代码来控制面板的开关，可以通过`layoutAddTab`和`layoutRemoveTab`来打开和关闭面板

@[code vue](../../demos/test-pkg/panels/toggle-panel/TogglePanel.vue)

在PanelMaker中使用`defineComponent`传入Vue组件需要的props

@[code ts](../../demos/test-pkg/panels/toggle-panel/index.ts)

打开<demo-link path='/demos/custom-panel-with-toggle'>示例页面-编程控制面板开关</demo-link>，执行以下步骤，

- 从资源面板中打开`开关面板`
- 点击`开关面板`中的`打开面板`按钮，打开另一个面板
- 点击`开关面板`中的`关闭自身`按钮，关闭面板自身

更多`definePanelMaker`的参数，参考[`definePanelMaker`](../api/utils.md#definepanelmaker)