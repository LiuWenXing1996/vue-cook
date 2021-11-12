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
  - `state` - `ICookEditorStateOptions | undefined` 
    ```ts
    type ICookEditorStateOptions = {
        layout?: ISplitLayout;
        pages?: IPage[];
        makerList?: IResourceMaker[];
    }
    ```
    它的默认值是下面这个
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
  - `maker.make` - `(cookState: ICookState, componentConfig: IComponentConfig) => Component` 生成函数，它是将组件配置转换成组件的桥梁。
  - `maker.install` - `undefined | (cookState: ICookState) => void` 安装函数，资源在被放入`cookState`的时候触发，可以用来初始化一些默认操作
  - `maker.makePropOptions` - `undefined | (cookState: ICookState, componentConfig: IComponentConfig)` 生成组件资源属性配置项
  - `maker.makeEventOptions` - `undefined | (cookState: ICookState, componentConfig: IComponentConfig)` 生成组件资源插槽配置项
  - `maker.makeSlotOptions` - `undefined | (cookState: ICookState, componentConfig: IComponentConfig)` 生成组件资源事件配置项
- **返回** `IComponentMaker`
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
  - `maker.make` - `(cookState: ICookState, logicConfig: ILogicConfig) => Function` 生成函数，它是将逻辑配置转换成`Function`的桥梁。
  - `maker.install` - `undefined | (cookState: ICookState) => void` 安装函数，资源在被放入`cookState`的时候触发，可以用来初始化一些默认操作
  - `maker.makePropOptions` - `undefined | (cookState: ICookState, logicConfig: T) => string[]` 生成逻辑资源属性配置项
- **返回** `ILogicMaker`
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
  - `maker.make` - `(cookState: ICookState, panelConfig: IPanelConfig) => Function` 生成函数，它是将交互面板配置转换成`Function`的桥梁。
  - `maker.install` - `undefined | (cookState: ICookState) => void` 安装函数，资源在被放入`cookEditorState`的时候触发，可以用来初始化一些默认操作
  - `maker.onClose` - `undefined | (cookState: ICookState, panelConfig: IPanelConfig) => void` 面板关闭时触发的回调函数
  - `maker.onOpen` - `undefined | (cookState: ICookState, panelConfig: IPanelConfig) => void` 面板打开时触发的回调函数
- **返回** `IPanelMaker`
- **用法** 
  
  参照 [自定义交互面板](../guide/custom-panel.md)
## findComponentConfig
寻找子组件配置
- **参数**
  - `parent` - `IComponentConfig`
  - `componentUid` - `string`
- **返回** `IComponentConfig | undefined`
## findPanelConfig
从当前编辑器状态中找到面板配置
- **参数**
  - `cookEditorState` - `ICookEditorState`
  - `panelUid` - `string`
- **返回** `IPanelConfig | undefined`
## isLogicConfig
自定义类型守卫，判断一个对象是否是`ILogicConfig`类型
- **参数**
  - `config` - `any`
- **返回** `boolean`
## layoutAddTab
打开一个面板，该方法同时会尝试触发面板的`onOpen`回调函数
- **参数**
  - `cookEditorState` - `ICookEditorState`
  - `panelConfig` - `IPanelConfig`
  - `splitLayoutPaneName` - `ISplitLayoutPaneName`
## layputRemoveTab
关闭一个面板，该方法同时会尝试触发面板的`onClose`回调函数
- **参数**
  - `cookEditorState` - `ICookEditorState`
  - `panelConfig` - `IPanelConfig`
## logicRun
运行一个逻辑配置，请注意，这是一个异步操作
- **参数**
  - `cookState` - `ICookState`
  - `config` - `ILogicConfig`
  - `...payload` - `any[]` 剩余参数，可以传任意数量的参数，它会原封不动传给生成的函数
    ```ts
    let func = maker.make(cookState, config)
    let returns = await func(...payload)
    ```
- **返回** `Promise<unknown>`
  在ts中，可以通过`logicRun<T>`来指定返回值的类型
  ```ts
  const result = await logicRun<IResultType>(cookPlayerState, logicConfig)
  ```
- **用法**
  
  参照 [自定义逻辑](../guide/custom-logic.md)

## makerDefaultComponentConfig
生成一个默认的组件配置
- **参数**
  - `maker` - `IComponentMaker`
- **返回** `IComponentConfig`
## makerDefaultLogicConfig
生成一个默认的逻辑配置
- **参数**
  - `maker` - `ILogicMaker`
- **返回** `ILogicConfig`
## makerDefaultPanelConfig
生成一个默认的面板配置
- **参数**
  - `maker` - `IPanelMaker`
- **返回** `IPanelConfig`
## parseLogicConfig
从一个json字符串中解析出来一个逻辑配置
- **参数**
  - `jsonString` - `string | undefined`
- **返回** `ILogicConfig | undefined`
## removeComponentConfig
为父组件中的某一个插槽添加一个子组件配置
- **参数**
  - `parentComponent` - `IComponentConfig`
  - `childComponent` - `IComponentConfig`
  - `slotName` - `string`