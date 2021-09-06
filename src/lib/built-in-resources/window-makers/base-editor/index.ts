import defineWindowMaker from '$/utils/defineWindowMaker';
import EditorUi from "./EditorUi.vue"
import pkg from "@/../package.json"
export default defineWindowMaker({
    name: "component-base-editor",
    package: pkg.name,
    label: "组件基础编辑器",
    content: EditorUi,
    title: "组件基础编辑器"
})
