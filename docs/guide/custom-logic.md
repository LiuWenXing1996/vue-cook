# 自定义逻辑

可以通过`defineLogicMaker`这个工具函数自定义逻辑资源。

## 定义逻辑

可以将任何的函数变成自定义逻辑，假设，有一个获取数据的函数

@[code ts](../../demos/test-pkg/logic/fetch/fetch.ts)

通过`defineLogicMaker`把它低代码化

@[code ts](../../demos/test-pkg/logic/fetch/index.ts)

创建一个可以解析这个逻辑的组件

@[code vue](../../demos/test-pkg/components/table-with-fetch/Table.vue)

打开<demo-link path='/demos/custom-logic'>示例页面-定义逻辑</demo-link>，可以在最下方的`资源面板`中找到新增加的获取数据逻辑，按照下面的步骤，使用它。

- 创建一个带Table组件的页面，选中Table
- 在组件编辑面板的`属性`一栏中，出现了一个名称为`fetch`的输入框，它的右边有一个图标，鼠标移上去，会提示`拖拽逻辑到此处添加`
- 从资源面板中拖入`FetchMaker`到上面的位置，可以看到输入框中自动填入了一个逻辑配置。
- 页面中的表格组件的按钮文字也变成`点我获取数据`
- 关闭选中模式，点击按钮，稍等片刻，可以看到数据加载成功

## 逻辑传参

假设现在有一个获取数据的函数，它提供两个`maxAge`和`minAge`参数，来控制返回人员数据的年龄范围

@[code ts](../../demos/test-pkg/logic/fetch-with-params/fetch.ts)

在`Table.vue`中对其传参

@[code vue{23-24,36-38}](../../demos/test-pkg/components/table-with-fetch-params/Table.vue)

打开<demo-link path='/demos/custom-logic-with-params'>示例页面-逻辑传参</demo-link>，执行按照下面的步骤

- 创建一个带Table组件的页面，选中Table
- 在组件编辑面板的`属性`一栏中，可以看到它有三个属性配置项，`fetch`,`maxAge`,`minAge`
- 配置`fetch`,`maxAge`,`minAge`
- 关闭选中模式，点击按钮，稍等片刻，可以看到人员数据按照相应的年龄范围加载成功

## 添加属性配置

除了通过传参来控制自定义逻辑，还可以通过`defineComponentMaker`中的`makePropOptions`参数，为自定义的逻辑添加属性配置。

假设现在有一个获取数据的自定义逻辑，它提供两个`maxAge`和`minAge`属性，可以让用户配置返回人员数据的年龄范围

@[code ts](../../demos/test-pkg/logic/fetch-with-props/index.ts)

打开<demo-link path='/demos/custom-logic-with-props'>示例页面-为逻辑添加属性配置</demo-link>，执行按照下面的步骤

- 创建一个带Table组件的页面，选中Table
- 配置`fetch`项，鼠标移动到`fetch`输入框最右边的图标上，可以看到一个编辑弹框
- 滚动下，可以看到属性编辑栏有两个配置项`maxAge`和`minAge`，输入一些数字
- 关闭选中模式，点击按钮，稍等片刻，可以看到人员数据按照相应的年龄范围加载成功

### 事件绑定的逻辑添加属性配置

当自定义逻辑绑定到某一事件上后，它也可以添加一些属性配置，以`AlertMaker`为例，添加`makePropOptions`

@[code ts](../../demos/test-pkg/logic/alert-with-props/index.ts)

打开<demo-link path='/demos/custom-logic-with-events-props'>示例页面-事件绑定的逻辑添加属性配置</demo-link>，执行按照下面的步骤

- 创建一个带按钮的页面，选中按钮
- 为它的点击事件绑定`AlertMaker`
- 下方表格新增的那条数据右侧操作按钮中有一个编辑按钮，鼠标移上去，可以看到一个编辑弹框
- 滚动下，可以看到属性编辑栏有一个配置项`msg`，输入一些内容
- 关闭选中模式，点击按钮，可以看到输入的内容被显示出来


更多`defineLogicMaker`的参数，参考[`defineLogicMaker`](../api/utils.md#definelogicmaker)