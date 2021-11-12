
//TODO:增加黑色主题和主题色定义功能？
//TODO:所有图标转成svg存在本地，而不是@vicons？
//TODO:maker的展示前面的中尉改成资源类型？？？，然后uid改成唯一ID
//TODO:makePropOptions等没有传入cooksatte????

// components
export { default as CookEditor } from "./components/cook-editor/index.vue"
export { default as CookPlayer } from "./components/cook-player/index.vue"
export { default as ComponentDragger } from "./components/component-dragger/index.vue"
export { default as LogicDragger } from "./components/logic-dragger/index.vue"
export { default as ResourceMaker } from "./components/resource-maker/index.vue"
// panel makers
export { default as PageComponentTreeMaker } from "@/built-in-resources/panels/page-component-tree"
export { default as PageEditorMaker } from "@/built-in-resources/panels/page-editor"
export { default as ComponentEditorMaker } from "@/built-in-resources/panels/component-editor"
export { default as ResourcePanelMaker } from "@/built-in-resources/panels/resource-panel"
// component makers
export { default as RootAppMaker } from "@/built-in-resources/components/root-app"
// hooks
export { default as useComponentFocused } from "./hooks/useComponentFocused"
export { default as useComponentMaker } from "./hooks/useComponentMaker"
export { default as useComponentMakerList } from "./hooks/useComponentMakerList"
export { default as useComponentPickerEnable } from "./hooks/useComponentPickerEnable"
export { default as useComponentSelected } from "./hooks/useComponentSelected"
export { default as useLogicMaker } from "./hooks/useLogicMaker"
export { default as useLogicMakerList } from "./hooks/useLogicMakerList"
export { default as usePageEditingUidList } from './hooks/usePageEditingUidList'
export { default as usePanelMaker } from "./hooks/usePanelMaker"
export { default as usePanelMakerList } from "./hooks/usePanelMakerList"
export { default as useSlotOptions } from "./hooks/useSlotOptions"
// utils
export { default as addComponentConfig } from "./utils/addComponentConfig"
export { default as createCookEditorState } from "./utils/createCookEditorState"
export { default as createCookPlayerState } from "./utils/createCookPlayerState"
export { default as defaultMakerList } from "./utils/defaultMakerList"
export { default as defaultSplitLayout } from "./utils/defaultSplitLayout"
export { default as defineComponentMaker } from "./utils/defineComponentMaker"
export { default as defineLogicMaker } from "./utils/defineLogicMaker"
export { default as definePanelMaker } from "./utils/definePanelMaker"
export { default as findComponentConfig } from "./utils/findComponentConfig"
export { default as findPanelConfig } from "./utils/findPanelConfig"
export { default as isLogicConfig } from "./utils/isLogicConfig"
export { default as layoutAddTab } from "./utils/layoutAddTab"
export { default as layoutRemoveTab } from "./utils/layoutRemoveTab"
export { default as logicRun } from "./utils/logic-run"
export { default as makeDefaultComponentConfig } from "./utils/makeDefaultComponentConfig"
export { default as makeDefaultLogicConfig } from "./utils/makeDefaultLogicConfig"
export { default as makeDefaultPanelConfig } from "./utils/makeDefaultPanelConfig"
export { default as parseLogicConfig } from "./utils/parseLogicConfig"
export { default as removeComponentConfig } from "./utils/removeComponentConfig"
// types
export type { default as ICookPlayerState } from "./types/ICookPlayerState"
export type { default as ICookEditorState } from "./types/ICookEditorState"
export type { default as ILogicConfig } from "./types/ILogicConfig"
export type { default as IPanelConfig } from "./types/IPanelConfig"
export type { default as IComponentConfig } from "./types/IComponentConfig"
export type { default as IPage } from "./types/IPage"

