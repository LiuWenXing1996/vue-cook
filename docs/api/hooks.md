# 钩子

## useComponentFocused
页面编辑器中被聚焦的组件
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `get` - `() => IComponentFocused`
    ```ts
    type IComponentFocused = ComputedRef<{
        page: IPage;
        component: IComponentConfig;
    } | undefined>
    ```
  - `set` - `(componetFoused?:{pageUid: string,componentUid: string}) => void`
- **用法**
  
  通过控制它的值，可以将`页面编辑面板`中的某一个组件高亮，内置资源中的`页面组件树`和`组件编辑器`中的鼠标悬停高亮组件功能就是用此函数实现的
## useComponentMaker
获取当前状态中的一个自定义组件资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<IComponentMaker | undefined>`
## useComponentMakerList
当前状态中的自定义组件资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<IComponentMaker[]>`
## useComponentPickerEnable
页面编辑器是否启用组件选取模式
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `get` - `() => ComputedRef<boolean>`
  - `set` - `(componentPickerEnable: boolean) => void`
  - `toggle` - `() => void`
## useComponentSelected
页面编辑器中被选取的组件
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `get` - `() => ComputedRef<IComponentSelected>`
  - `set` - `(componetSelected?: IComponentSelected) => void`
## useLogicMaker
获取当前状态中的一个自定义逻辑资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<ILogicMaker | undefined>`
## useLogicMakerList
当前状态中的自定义逻辑资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<ILogicMaker[]>`
## usePageEditingUidList
当前在编辑状态的页面的uid列表
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `list` - `() => ComputedRef<string[]>`
  - `add` - `(pageUid: string) => void`
  - `remove` - `(pageUid?: string | undefined) => void`
- **用法**
  
  可以通过它来动态控制`页面编辑面板`的开关

## usePanelMaker
获取当前状态中的一个自定义面板资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<IPanelMaker | undefined>`
## usePanelMakerList
当前状态中的自定义面板资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<IPanelMaker[]>`
## useSlotOptions
获取组件资源的插槽可选项
- **参数**
  - `cookEditorState` - `ICookEditorState`
  - `componentConfig` - `Ref<IComponentConfig | undefined>`
- **返回** `ComputedRef<string[]>`