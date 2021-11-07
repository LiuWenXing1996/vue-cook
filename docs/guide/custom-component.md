# 自定义组件
可以通过`defineComponentMaker`这个工具函数自定义组件。
## 定义组件
以自定义一个按钮组件为例，假设现在有一个用`Vue`写的按钮组件
@[code vue](../../demos/test-pkg/components/button/Button.vue)
通过`defineComponentMaker`把它低代码化
@[code ts](../../demos/test-pkg/components/button/index.ts)
在`cookEditorState`中放入这个按钮组件资源
@[code{8-14} ts{4}](../../demos/pages/custom-component.vue)
在最下方的`资源面板`中找到新增加的按钮组件
<iframe-demo src='/demos/custom-component'></iframe-demo>
按照下面的步骤，创建一个拥有按钮的页面。

- 在右侧的`页面组件树`中点击`+`按钮，新增一个页面
- 点击新增的页面，中间会打开一个`页面编辑`面板
- 鼠标移到`页面编辑`面板中间，可以看到一个高亮的矩形框，点击选中这个矩形框
- 左边的`组件编辑`面板显示当前选中组件的一些可配置项，其中`插槽`一栏中，有一个名称为`default`的框，上面写着`拖拽组件到此处添加`
- 从`资源面板`中，将`按钮`拖到上面的框中，可以看到下方的表格发生了变化，出现了一行数据，它就是添加好的按钮组件
- 在中间的`页面编辑`面板中，应该可以看到一个有按钮的页面

## 添加属性配置

通过`defineComponentMaker`的中的`makePropOptions`参数，可以为自定义的组件添加属性配置。
假设现在有一个按钮组件，它有一个`text`属性
@[code vue](../../demos/test-pkg/components/button-with-props/Button.vue)
添加`makePropOptions`
@[code ts{7}](../../demos/test-pkg/components/button-with-props/index.ts)
在页面中选中一个已经添加的按钮组件，可以看到它的`属性`一栏有一个名称为`text`的输入框
<iframe-demo src='/demos/custom-component-with-props'></iframe-demo>
输入文字后，对应按钮的文字也发生了变化

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
在页面中选中一个已经添加的按钮组件，可以看到它的`事件`一栏有一个名称为`click`的框，上面写着`拖拽逻辑到此处添加`

<iframe-demo src='/demos/custom-component-with-dom-events'></iframe-demo>

从`资源面板`中找到之前放入的`AlertMaker`，将其拖入到上面的框里，可以看到下方的表格发生了变化，出现了一行数据，它就是添加好的行为逻辑。关闭`页面编辑器`的组件选中模式，否则没法触发按钮的点击事件。点击按钮，可以看到绑定的行为逻辑被成功触发

### 多个根节点组件DOM事件配置

假设，有一个多根节点组件需要配置DOM事件，则需要显示指定事件的绑定

@[code vue](../../demos/test-pkg/components/button-fragment-with-dom-events/Button.vue)

绑定事件的逻辑行为后，点击左边的按钮可以正常触发事件，点击左侧的按钮则不会触发
<iframe-demo src='/demos/custom-fragment-component-with-dom-event'></iframe-demo>

### Vue中自定义事件配置

假设，有一个自定义了事件的组件
@[code vue](../../demos/test-pkg/components/button-with-custom-events/Button.vue)
在`makeEventOptions`中配置`delayClick`
@[code ts{7}](../../demos/test-pkg/components/button-with-custom-events/index.ts)
绑定逻辑行为后，点击按钮，可以在延迟了一段时间后，逻辑被成功执行
<iframe-demo src='/demos/custom-component-with-custom-events'></iframe-demo>

### 事件传参

可以在自定义逻辑的里面直接接收事件传递的默认参数
@[code ts{7-8}](../../demos/test-pkg/logic/alert-with-receive-params/index.ts)
绑定逻辑行为后，点击按钮，可以看到事件的默认参数被正常传递
<iframe-demo src='/demos/custom-component-with-event-receive-param'></iframe-demo>
也可以传递一些额外的参数

@[code vue](../../demos/test-pkg/components/button-with-send-extra-param-to-event/Button.vue)
在自定义的逻辑中接收这些参数
@[code ts{7-8}](../../demos/test-pkg/logic/alert-with-receive-extra-params/index.ts)
绑定逻辑行为后，点击按钮，可以看到事件的额外参数也被正常传递
<iframe-demo src='/demos/custom-component-with-send-extra-param-to-event'></iframe-demo>

## 添加插槽配置
通过`defineComponentMaker`的中的`makeSlotOptions`参数字段，可以为自定义的组件添加插槽配置。插槽是组件之间相互结合的纽带，使用它可以直观的看出组件之间的嵌套关系。

假设，有一个前置图标插槽的按钮组件，在`Vue`中，`slot`可以指定名字，如果不指定的话有一个默认的名字`default`
@[code vue{5}](../../demos/test-pkg/components/button-with-slots/Button.vue)
添加`makeSlotOptions`
@[code ts{7}](../../demos/test-pkg/components/button-with-slots/index.ts)
创建一个图标组件，这里为了方便演示，直接使用emoji表情作为图标
@[code ts](../../demos/test-pkg/components/emoji/index.ts)
选中创建的按钮后，可以看到它的`插槽`一栏，有一个名称为`default`的框，上面写着`拖拽组件到此处添加`，将资源面板中的图标组件拖入，可以看到按钮中添加了一个图标
<iframe-demo src='/demos/custom-component-with-slots'></iframe-demo>

## 多个插槽配置

可以添加多个插槽配置
@[code vue{5,9}](../../demos/test-pkg/components/button-with-multi-slots/Button.vue)
添加`makeSlotOptions`
@[code ts{7}](../../demos/test-pkg/components/button-with-multi-slots/index.ts)
选中创建的按钮后，可以看到它的`插槽`一栏，出现了两个配置项，可以同时配置前置按钮和后置按钮
<iframe-demo src='/demos/custom-component-with-slots'></iframe-demo>

## 插槽与属性联动：创建一个布局组件

假设，有这样一个布局组件，它根据传入不同的行列值，拥有不同的插槽数量
@[code vue](../../demos/test-pkg/components/layout/Layout.vue)
添加`makeSlotOptions`
@[code ts](../../demos/test-pkg/components/layout/index.ts)
添加布局组件后，选中它，可以看到它的属性栏有两个配置，分别是行和列的数量
<iframe-demo src='/demos/custom-layout-component'></iframe-demo>

修改它的行列数，可以看到它的`插槽`数量会不断的更改。

## 共享全局状态

组件的渲染是由`CookPlayer`组件驱动的，它拥有一个全局状态`CookPlayerState`，这个状态通过`Vue`中的`Provide`注入到了所有的组件中。`CookPlayerState`提供了一个`extra`字段，组件想要共享的全局状态都可以挂载这个字段上。

假设，现在有一个挂载了自身状态的组件
@[code ts](../../demos/test-pkg/components/button-with-state/index.ts)
在组件中操作`inject`获取到全局状态
@[code vue](../../demos/test-pkg/components/button-with-state/Button.vue)
添加多个按钮后，点击任意一个按钮，都可以切换所有按钮的圆角状态
<iframe-demo src='/demos/custom-componen-with-state'></iframe-demo>

