# 钩子

## useComponentMaker
从当前状态中使用一个自定义组件资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<IComponentMaker | undefined>`
## useComponentMakerList
使用当前状态中的自定义组件资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<IComponentMaker[]>`
## useLogicMaker
从当前状态中使用一个自定义逻辑资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<ILogicMaker | undefined>`
## useLogicMakerList
使用当前状态中的自定义逻辑资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<ILogicMaker[]>`
## usePanelMaker
从当前状态中使用一个自定义面板资源
- **参数**
  - `cookState` - `ICookState`
  - `name` - `string | undefined`
  - `pkg` - `string | undefined`
- **返回** `Ref<IPanelMaker | undefined>`
## usePanelMakerList
使用当前状态中的自定义面板资源列表
- **参数**
  - `cookState` - `ICookState`
- **返回** `ComputedRef<IPanelMaker[]>`
## useComponentFocused
获取当前编辑器中被聚焦的组件，由`PageEditorMaker`提供
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
## useComponentPickerEnable
是否启用组件选取，由`PageEditorMaker`提供
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `get` - `() => ComputedRef<boolean>`
  - `set` - `(componentPickerEnable: boolean) => void`
  - `toggle` - `() => void`
## useComponentSelected
获取当前编辑器中被选取的组件，由`ComponentEditorMaker`提供
- **参数**
  - `cookEditorState` - `ICookEditorState`
- **返回** 
  - `get` - `() => IComponentSelected`
    ```ts
    type IComponentSelected = ComputedRef<{
        page: IPage;
        component: IComponentConfig;
    } | undefined>
    ```
  - `set` - `(componetFoused?:{pageUid: string,componentUid: string}) => void`