import autoAddMakers from "./utils/auto-add-makers";

autoAddMakers();
//TODO:增加黑色主题和主题色定义功能？
//TODO:整理代码结构。。。。。
//TODO:方便理解和扩展，是否要将maker转成类的写法？
// TODO:每次hmr的时候都会重新加载包？？？？

export { default as CookEditor } from "./components/cook-editor/CookEditor.vue"
export { default as CookPlayer } from "./components/cook-player/CookPlayer.vue"
// export { default as usePage } from "./hooks/usePage"
export { default as makeComponentConfigDefault } from './utils/makeComponentConfigDefault';
export { default as defineComponentMaker } from "./utils/defineComponentMaker"
export { default as defineLogicMaker } from "./utils/defineLogicMaker"
export { default as defineCookInstallFunc } from "./utils/defineCookInstallFunc"
export { default as installPkg } from "./utils/installPkg"
export { default as createCookEditorConfig } from "./utils/createCookEditorConfig"
export { default as installResourceMaker } from "./utils/installResourceMaker"