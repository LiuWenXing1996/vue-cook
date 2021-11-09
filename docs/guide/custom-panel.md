# 自定义交互面板

可以通过`definePanelMaker`这个工具函数自定义交互面板。

## 定义面板

一个最简单的交互面板如下：

@[code ts](../../demos/test-pkg/panels/simple-panel/index.ts)

打开<a href='/demos/custom-panel'>示例页面-自定义交互面板</a>，可以在最下方的`资源面板`中找到新增加`简单面板`，点击`简单面板`，会看到面板在右侧被打开。可以通过`defaultSplitLayoutPaneName`来控制面板被打开的位置，有`left`、`center`、`right`、`bottom`

## 共享全局状态

自定义交互面板是在`CookEditor`中运行的，它拥有一个全局状态`CookEditorState`，这个状态通过`Vue`中的`Provide`注入到了所有的面板中。`CookEditorState`提供了一个`extra`字段，面板想要共享的全局状态都可以挂载这个字段上。VueCook的内置面板提供的`useComponentSelected`、`useComponentFouced`等都是通过这种方式共享的全局状态。

@[code ts](../../demos/test-pkg/panels/state-panel/index.ts)

在面板中使用这个状态

@[code vue](../../demos/test-pkg/panels/state-panel/StatePanel.vue)

打开<a href='/demos/custom-panel-with-state'>示例页面-交互面板共享全局状态</a>，在`资源面板`中点击`状态面板`，会看到打开的面板显示了一条全局状态里的信息。

## 自定义编辑器

可以自定义编辑器来更好辅助`组件`和`逻辑`的属性配置，以自定义一个颜色选择器为例

@[code vue](../../demos/test-pkg/panels/color-panel/ColorPanel.vue)

创建一个带颜色配置的按钮组件

@[code vue](../../demos/test-pkg/components/button-with-color-props/Button.vue)

@[code vue](../../demos/test-pkg/components/button-with-color-props/index.ts)

打开<a href='/demos/custom-panel-with-color-input' target="_blank">示例页面-自定义颜色编辑器</a>，按照以下步骤，使用此面板

- 创建一个带按钮的页面
- 从资源面板中打开`颜色选择器面板`
- 选中按钮
- 在颜色选择器面板中选取颜色，可以看到按钮的颜色发生了改变

## 编程控制面板开关

有的时候需要通过代码来控制面板的开关，可以通过`layoutAddTab`和`layoutRemoveTab`来打开和关闭面板

@[code vue](../../demos/test-pkg/panels/toggle-panel/TogglePanel.vue)

在PanelMaker中使用`defineComponent`传入Vue组件需要的props

@[code ts](../../demos/test-pkg/panels/toggle-panel/index.ts)

打开<a href='/demos/custom-panel-with-toggle' target="_blank">示例页面-编程控制面板开关</a>，执行以下步骤，

- 从资源面板中打开`开关面板`
- 点击`开关面板`中的`打开面板`按钮，打开另一个面板
- 点击`开关面板`中的`关闭自身`按钮，关闭面板自身

## 面板扩展配置属性

有时，同一种面板

// TODO:额外扩展属性去掉。。。。。？

更多`definePanelMaker`的参数，参照api????