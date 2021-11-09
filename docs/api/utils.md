# 工具

## createCookEditorState
创建一个组件编辑器的状态，用于`<cook-editor>`,它返回的是一个响应式对象

- **参数**
  - `state` - `Partial<ICookEditorState> | undefined`
- **返回** `ICookEditorState`
## createCookPlayerState
创建一个组件渲染器的状态，用于`<cook-player>`,它返回的是一个响应式对象

- **参数**
  - `state` - `ICookPlayerStateOptions`
    ```ts
    type ICookPlayerStateOptions = Partial<Omit<ICookPlayerState, "page">> & {
        page: ICookPlayerState["page"]
    }
    ```
- **返回** `ICookPlayerState`
## defaultMakerList
## defaultSplitLayout
## defaineComponentMaker
## defineLogicMaker
## definePanelMaker
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


TODO:类型定义也弄到api里？？？？
