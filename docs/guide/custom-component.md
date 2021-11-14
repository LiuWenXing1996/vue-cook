# 自定义组件

可以通过`defineComponentMaker`这个工具函数自定义组件资源。

## 定义组件

以自定义一个按钮组件为例，假设现在有一个用`Vue`写的按钮组件

@[code vue](../../demos/test-pkg/components/button/Button.vue)

通过`defineComponentMaker`把它低代码化

@[code ts](../../demos/test-pkg/components/button/index.ts)

在`cookEditorState`中放入这个按钮组件资源

@[code{8-14} ts{4}](../../demos/pages/custom-component.vue)

打开<demo-link path='/demos/custom-component'>示例页面-定义组件</demo-link>，可以在最下方的`资源面板`中找到新增加的按钮组件，按照下面的步骤，创建一个拥有按钮的页面。

- 在左侧的`页面组件树`中点击`+`
- 点击新增的页面，中间会打开一个`页面编辑`面板
- 鼠标移到`页面编辑`面板中间，可以看到一个高亮的矩形框，点击选中这个矩形框
- 左边的`组件编辑器`面板显示当前选中组件的一些可配置项，其中`插槽`一栏中，有一个名称为`default`的框，上面写着`拖拽组件到此处添加`
- 从下方的`资源面板`中，将`按钮`拖到右上编辑器的框中，可以看到下方的表格发生了变化，出现了一行数据，它就是添加好的按钮组件
- 在中间的`页面编辑`面板中，应该可以看到一个有按钮的页面

## 添加属性配置

通过`defineComponentMaker`的中的`makePropOptions`参数，可以为自定义的组件添加属性配置。

假设现在有一个按钮组件，它有一个`text`属性

@[code vue](../../demos/test-pkg/components/button-with-props/Button.vue)

添加`makePropOptions`

@[code ts{7}](../../demos/test-pkg/components/button-with-props/index.ts)

打开<demo-link path='/demos/custom-component-with-props'>示例页面-组件添加属性配置</demo-link>，按照下面的步骤，配置组件的属性

- 创建一个拥有按钮的页面
- 选中添加的按钮
- 可以看到它的`属性`一栏有一个名称为`text`的输入框
- 输入文字后，对应按钮的文字会变成相应的内容

## 添加事件配置

通过`defineComponentMaker`的中的`makeEventOptions`参数，可以为自定义的组件添加事件配置。可以添加如点击、双击这种原生DOM事件，也可以添加使用`Vue`自定义的事件。

### 原生DOM事件配置

假设现在有一个按钮组件

@[code vue](../../demos/test-pkg/components/button-with-dom-events/Button.vue)

添加`makeEventOptions`，`click`代表的是DOM事件的点击事件

@[code ts{7}](../../demos/test-pkg/components/button-with-dom-events/index.ts)

此处，需要自定义一个`逻辑`来绑定按钮点击后的行为

@[code ts](../../demos/test-pkg/logic/alert/index.ts)

在`cookEditorState`中放入这个自定义逻辑资源

@[code{9-16} ts{5}](../../demos/pages/custom-component-with-dom-events.vue)

打开<demo-link path='/demos/custom-component-with-dom-events'>示例页面-组件添加DOM事件配置</demo-link>，按照下面的步骤，配置组件的DOM事件

- 创建一个拥有按钮的页面
- 选中添加的按钮
- 可以看到它的`事件`一栏有一个名称为`click`的框，上面写着`拖拽逻辑到此处添加`
- 从`资源面板`中找到之前放入的`AlertMaker`，将其拖入到上面的框里，可以看到下方的表格发生了变化，出现了一行数据，它就是添加好的行为逻辑。
- 关闭`页面编辑器`的组件选中模式，否则没法触发按钮的点击事件。
- 点击按钮，可以看到绑定的行为逻辑被成功触发

### 多个根节点组件DOM事件配置

假设，有一个多根节点组件需要配置DOM事件，则需要在组件中显示指定事件的绑定

@[code vue](../../demos/test-pkg/components/button-fragment-with-dom-events/Button.vue)

打开<demo-link path='/demos/custom-fragment-component-with-dom-event'>示例页面-多个根节点组件DOM事件配置</demo-link>，按照下面的步骤，配置多个根节点组件的DOM事件

- 创建一个拥有按钮的页面
- 选中添加的按钮，配置事件的逻辑行为
- 关闭`页面编辑器`的组件选中模式
- 点击右边的按钮可以正常触发事件，点击左侧的按钮则不会触发

### Vue中自定义事件配置

假设，有一个自定义了事件的组件

@[code vue](../../demos/test-pkg/components/button-with-custom-events/Button.vue)

在`makeEventOptions`中配置`delayClick`

@[code ts{7}](../../demos/test-pkg/components/button-with-custom-events/index.ts)

打开<demo-link path='/demos/custom-component-with-custom-events'>示例页面-Vue中自定义事件配置</demo-link>，按照下面的步骤，配置Vue中自定义的事件

- 创建一个拥有按钮的页面
- 选中添加的按钮，配置事件的逻辑行为
- 关闭`页面编辑器`的组件选中模式
- 点击按钮，可以在延迟了一段时间后，逻辑被成功执行

### 事件传参

#### 默认参数传递

可以在自定义逻辑的里面直接接收事件传递的默认参数

@[code ts{7-8}](../../demos/test-pkg/logic/alert-with-receive-params/index.ts)

打开<demo-link path='/demos/custom-component-with-event-receive-param'>示例页面-事件传参</demo-link>，按照下面的步骤，可以看到事件参数的传递

- 创建一个拥有按钮的页面
- 选中添加的按钮，配置事件的逻辑行为
- 关闭`页面编辑器`的组件选中模式
- 点击按钮，可以看到事件的默认参数被正常传递

#### 额外参数传递

也可以传递一些额外的参数

@[code vue](../../demos/test-pkg/components/button-with-send-extra-param-to-event/Button.vue)

在自定义的逻辑中接收这些参数

@[code ts{7-8}](../../demos/test-pkg/logic/alert-with-receive-extra-params/index.ts)

打开<demo-link path='/demos/custom-component-with-send-extra-param-to-event'>示例页面-向事件传递额外参数</demo-link>，按照下面的步骤，可以看到事件参数的传递

- 创建一个拥有按钮的页面
- 选中添加的按钮，配置事件的逻辑行为
- 关闭`页面编辑器`的组件选中模式
- 点击按钮，可以看到事件的额外参数被正常传递

## 添加插槽配置

通过`defineComponentMaker`的中的`makeSlotOptions`参数字段，可以为自定义的组件添加插槽配置。插槽是组件之间相互结合的纽带，使用它可以很方便的在组件之间进行嵌套。

假设，有一个前置图标插槽的按钮组件，在`Vue`中，`slot`可以指定名字，如果不指定的话有一个默认的名字`default`

@[code vue{5}](../../demos/test-pkg/components/button-with-slots/Button.vue)

添加`makeSlotOptions`

@[code ts{7}](../../demos/test-pkg/components/button-with-slots/index.ts)

创建一个图标组件，这里为了方便演示，直接使用emoji表情作为图标

@[code ts](../../demos/test-pkg/components/emoji/index.ts)

打开<demo-link path='/demos/custom-component-with-slots'>示例页面-组件添加插槽配置</demo-link>，按照下面的步骤，配置组件的插槽

- 创建一个带按钮的页面
- 选中添加的按钮
- 可以看到它的`插槽`一栏，有一个名称为`default`的框，上面写着`拖拽组件到此处添加`，
- 将资源面板中的图标组件拖入，可以看到按钮中添加了一个图标

## 多个插槽配置

可以添加多个插槽配置

@[code vue{5,9}](../../demos/test-pkg/components/button-with-multi-slots/Button.vue)

添加`makeSlotOptions`

@[code ts{7}](../../demos/test-pkg/components/button-with-multi-slots/index.ts)

打开<demo-link path='/demos/custom-component-with-multi-slots'>示例页面-组件添加多个插槽配置</demo-link>，按照下面的步骤，配置组件的插槽

- 创建一个带按钮的页面
- 选中添加的按钮
- 可以看到它的`插槽`一栏，出现了两个配置项，可以同时配置前置图标和后置图标，
- 将资源面板中的图标组件拖入，配置组件的前置图标和后置图标

## 插槽与属性联动：创建一个动态布局组件

假设，有这样一个布局组件，它根据传入不同的行列值，拥有不同的插槽数量

@[code vue](../../demos/test-pkg/components/layout/Layout.vue)

添加`makeSlotOptions`

@[code ts](../../demos/test-pkg/components/layout/index.ts)

打开<demo-link path='/demos/custom-layout-component'>示例页面-创建一个布局组件</demo-link>，按照下面的步骤，配置布局组件

- 创建一个带布局组件的页面
- 选中布局组件
- 可以看到它的属性栏有两个配置，分别是行和列的数量
- 修改它的行列数，可以看到它的`插槽`数量会不断的更改
- 将按钮组件放入不同的插槽查看效果

更多`defineComponentMaker`的参数，参考[`defineComponentMaker`](../api/utils.md#definecomponentmaker)