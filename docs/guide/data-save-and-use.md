# 编辑数据保存和使用

## 编辑数据保存

使用`<cook-editor>`编辑的数据会实时存在它的`CookEditorState`的`pages`中，这个对象的类型描述如下：

```ts
// pages =====> Array<IPage>
interface IPage {
    path: string,
    name: string,
    uid: string,
    component: IComponentConfig
}
interface IComponentConfig {
    uid: string,
    name: string,
    makerType: IMakerType,
    makerName: string,
    makerPkg: string,
    props?: Record<string, string>,
    slots?: Record<string, IComponentConfig[]>,
    events?: Record<string, ILogicConfig[]>
}
interface ILogicConfig {
    uid: string,
    name: string,
    makerType: IMakerType,
    makerName: string,
    makerPkg: string,
    props?: Record<string, string>
}
type IMakerType = "component" | "logic" | "panel"
```
我们可以将`pages`通过`JSON.stringify`这个方法转成字符串，存储到数据库中，等到使用的时候再通过接口取出来，使用`JSON.parse`转成对象。

## 编辑数据使用

### 在`<cook-editor>`中使用

在使用`createEditorState`创建编辑状态的时候，可以传入已经存在的一些编辑数据。

假设现在已经有了一些编辑数据

@[code ts](../../demos/utils/fecthPages.ts)

创建`createEditorState`

@[code{14-25} ts](../../demos/pages/use-data-in-cook-editor.vue)

在`<cook-editor>`中使用它

@[code{1-5} vue](../../demos/pages/use-data-in-cook-editor.vue)


打开<a href='/demos/use-data-in-cook-editor' target="_blank">示例页面-在`<cook-editor>`使用编辑数据</a>，可以看到左侧面板中已经有了一个新建页面，执行一下步骤

- 点击已经存在的新建页面，可以看到页面编辑器中出现了一个带表格的页面
- 取消选中模式，点击表格上面的按钮
- 点击按钮，可以看到表格数据正常加载

### 在`<cook-player>`中使用

在使用`createPlayerState`创建状态的时候，可以传入已经存在的页面数据。

假设存在有一个页面

@[code ts](../../demos/utils/fecthPage.ts)

创建`createPlayerState`

@[code{13-24} ts](../../demos/pages/use-data-in-cook-player.vue)

在`<cook-player>`中使用它

@[code{1-5} vue](../../demos/pages/use-data-in-cook-player.vue)

打开<a href='/demos/use-data-in-cook-player' target="_blank">示例页面-在`<cook-player>`使用编辑数据</a>，可以看到一个带表格的页面显示了出来，点击按钮，可以看到表格数据正常加载。

### 结合动态路由使用`<cook-player>`

可以使用`vue-router`的动态路由，动态添加`<cook-player>`

@[code{19-45} ts](../.vuepress/clientAppEnhance.ts)

打开<a href='/8630b4fc-7e22-4bc8-993a-0c1d36e1c2a5' target="_blank">示例页面-结合动态路由使用`<cook-player>`</a>，可以看到一个带表格的页面显示了出来，点击按钮，可以看到表格数据正常加载。