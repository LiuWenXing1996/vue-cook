import autoAddMakers from "./utils/auto-add-makers";

autoAddMakers();

export { default as CookEditor } from "./components/cook-editor/CookEditor.vue"
export { default as CookPlayer } from "./components/cook-player/CookPlayer.vue"
export { default as DraggaleTabs } from "./components/draggable-tabs/DraggaleTabs.vue"
export { default as DraggableSplitTabs } from "./components/draggable-split-tabs/DraggableSplitTabs.vue"
export { default as useCookConfig } from "./hooks/useCookConfig"
export { default as usePage } from "./hooks/usePage"
export { default as makeComponentConfigDefault } from './utils/makeComponentConfigDefault';
export { default as defineComponentMaker } from "./utils/defineComponentMaker"
export { default as defineCookInstallFunc } from "./utils/defineCookInstallFunc"
export { default as installPkg } from "./utils/installPkg"
export { default as defineEditor } from "./utils/defineEditor"
export { default as defineCookConfig } from "./utils/defineCookConfig"