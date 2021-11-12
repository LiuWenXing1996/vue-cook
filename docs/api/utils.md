# 工具

## addComponentConfig
移除父组件中的某一个子组件配置
- **参数**
  - `parentComponent` - `IComponentConfig`
  - `childComponent` - `IComponentConfig`
  - `slotName` - `string`
## createCookEditorState
创建一个组件编辑器的状态，用于`<cook-editor>`,它返回的是一个响应式对象
- **参数**
  - `state` - `Partial<ICookEditorState> | undefined` 所有参数都是可选的，它的默认值是下面这个
    ```ts
    const defaultState = {
        makerList: defaultMakerList,
        pages: [],
        layout: defaultSplitLayout,
    }
    ```
- **返回** `ICookEditorState`
## createCookPlayerState
创建一个组件渲染器的状态，用于`<cook-player>`,它返回的是一个响应式对象
- **参数**
  - `state` - `ICookPlayerStateOptions` 其中，`makerList`的默认值是`defaultMakerList`
    ```ts
    interface ICookPlayerStateOptions {
        page: IPage,
        makerList?: IResourceMaker[]
    }
    ```
- **返回** `ICookPlayerState`
## defaultMakerList
默认的资源列表
- **类型** `IResourceMaker[]`
  ```ts
  const defaultMakerList: IResourceMaker[] = [
    PageComponentTreeMaker,
    PageEditorMaker,
    ComponentEditorMaker,
    ResourcePanelMaker,
    RootAppMaker
  ]
  ```
## defaultSplitLayout
默认的布局
- **类型** `ISplitLayout`
  ```ts
  const defaultSplitLayout: ISplitLayout = {
    "left": [
        makeDefaultPanelConfig(PageComponentTreeMaker)
    ],
    "center": [],
    "bottom": [
        makeDefaultPanelConfig(ResourcePanelMaker)
    ],
    "right": [
        makeDefaultPanelConfig(ComponentEditorMaker)
    ]
  }
  ```
## defineComponentMaker
自定义一个组件资源
- **参数**
  - `maker` - `IComponentMakerOptions` 
  ```ts
  type IComponentMakerOptions = Omit<IComponentMaker, "type">
  ```
  - `maker.name` - `string` 资源名称，同一个资源包下同一个类型的资源，它的名称之间不能重复
  - `maker.pkg` - `string` 资源包名称，不能重复。通过`pkg`,`type`以及`name`保证一个资源的唯一性
  - `maker.make` - `(cookPlayerState: ICookPlayerState, componentConfig: IComponentConfig) => Component` 生成函数，它是将组件配置转换成组件的桥梁。
  - `maker.install` - `undefined | (cookPlayerState: ICookPlayerState) => void` 安装函数，资源在被放入`cookPlayerState`的时候触发，可以用来初始化一些默认操作
  - `maker.makePropOptions` - `undefined | (cookPlayerState: ICookPlayerState, componentConfig: IComponentConfig)` 生成组件资源属性配置项
  - `maker.makeEventOptions` - `undefined | (cookPlayerState: ICookPlayerState, componentConfig: IComponentConfig)` 生成组件资源插槽配置项
  - `maker.makeSlotOptions` - `undefined | (cookPlayerState: ICookPlayerState, componentConfig: IComponentConfig)` 生成组件资源事件配置项
- **返回** `IComponentMaker` 其中，`type`被自动赋值为`'component'`
- **用法** 
  
  参照 [自定义组件](../guide/custom-component.md)
## defineLogicMaker
自定义一个逻辑资源
- **参数**
  - `maker` - `ILogicMakerOptions` 
  ```ts
  type ILogicMakerOptions = Omit<ILogicMaker, "type">
  ```
  - `maker.name` - `string` 资源名称，同一个资源包下同一个类型的资源，它的名称之间不能重复
  - `maker.pkg` - `string` 资源包名称，不能重复。通过`pkg`,`type`以及`name`保证一个资源的唯一性
  - `maker.make` - `(cookPlayerState: ICookPlayerState, logicConfig: ILogicConfig) => Function` 生成函数，它是将逻辑配置转换成`Function`的桥梁。
  - `maker.install` - `undefined | (cookPlayerState: ICookPlayerState) => void` 安装函数，资源在被放入`cookPlayerState`的时候触发，可以用来初始化一些默认操作
  - `maker.makePropOptions` - `undefined | (cookPlayerState: ICookPlayerState, logicConfig: T) => string[]` 生成逻辑资源属性配置项
- **返回** `ILogicMaker` 其中，`type`被自动赋值为`'logic'`
- **用法** 
  
  参照 [自定义逻辑](../guide/custom-logic.md)
## definePanelMaker
自定义一个交互面板资源
- **参数**
  - `maker` - `IPanelMakerOptions` 
  ```ts
  type IPanelMakerOptions = Omit<IPanelMaker, "type">
  ```
  - `maker.name` - `string` 资源名称，同一个资源包下同一个类型的资源，它的名称之间不能重复
  - `maker.pkg` - `string` 资源包名称，不能重复。通过`pkg`,`type`以及`name`保证一个资源的唯一性
  - `maker.make` - `(cookEditorState: ICookEditorState, panelConfig: IPanelConfig) => Function` 生成函数，它是将交互面板配置转换成`Function`的桥梁。
  - `maker.install` - `undefined | (cookEditorState: ICookEditorState) => void` 安装函数，资源在被放入`cookEditorState`的时候触发，可以用来初始化一些默认操作
  - `maker.onClose` - `undefined | (cookEditorState: ICookEditorState, panelConfig: IPanelConfig) => void` 面板关闭时触发的回调函数
  - `maker.onOpen` - `undefined | (cookEditorState: ICookEditorState, panelConfig: IPanelConfig) => void` 面板打开时触发的回调函数
- **返回** `IPanelMaker` 其中，`type`被自动赋值为`'panel'`
- **用法** 
  
  参照 [自定义交互面板](../guide/custom-panel.md)
## exportCookEditorData
## findComponentConfig
## getCookEditorExportDataFromWindow
## getCookEditorExportDataUniqTag
## getCookPlayerExportDataFromWindow
## getMakerDataFromDataEvent
## layoutAddTab
## layputRemoveTab
## logic-compiler
## makerDefaultComponentConfig
## makerDefaultLogicConfig
## makerDefaultPanelConfig
## makerEmptyComponentConfig
## makerEmptyLogicConfig
## makerEmptyPanelConfig
