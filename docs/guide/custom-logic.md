# 自定义逻辑
可以通过`defineLogicMaker`这个工具函数自定义逻辑。
## 定义逻辑
可以将任何的函数变成自定义逻辑，假设，有一个获取数据的函数
@[code ts](../../demos/test-pkg/logic/fetch/fetch.ts)
通过`defineLogicMaker`把它低代码化
@[code ts](../../demos/test-pkg/logic/fetch/index.ts)
创建一个可以解析这个逻辑的组件
@[code vue](../../demos/test-pkg/components/table-with-fetch/Table.vue)
将这个Table组件添加到页面中后，选中这个组件，在组件编辑面板的`属性`一栏中，出现了一个名称为`fetch`的输入框，它的右边有一个图标，鼠标以上去，会提示`拖拽逻辑到此处添加`
<iframe-demo src='/demos/custom-logic'></iframe-demo>

从资源面板中拖入`FetchMaker`到上面的位置，可以看到输入框中自动填入了一个逻辑配置。页面中的表格组件的按钮文字也变成`点我获取数据`,关闭选中模式，点击按钮，稍等片刻，可以看到数据加载成功

## 添加属性配置
TODO：逻辑添加属性。。。。。。
