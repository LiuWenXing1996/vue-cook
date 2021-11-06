# 定义一个简单的按钮组件

你可以通过`defineComponentMaker`这个工具函数自定义组件。

以自定义一个按钮组件为例，首先你需要有一个用`Vue`写的按钮组件，它可能是以`SFC`方式写的，如下

@[code vue](../../../demos/test-pkg/components/button/Button.vue)

我们通过`defineComponentMaker`把它低代码化，代码如下
@[code ts](../../../demos/test-pkg/components/button/index.ts)

然后在使用`createCookEditorState`创建`cookEditorState`将这个`按钮资源`放入到编辑器的`makerList`中

@[code{8-14} ts](../../../demos/pages/custom-component.vue)

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

下一步，我们将为自定义组件添加属性配置。

