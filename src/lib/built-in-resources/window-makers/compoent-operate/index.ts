import defineWindowMaker from "$/utils/defineWindowMaker"
import ComponentOperate from "./ComponentOperate.vue"
import pkg from "@/../package.json"
export default defineWindowMaker({
    name: "compoent-operate",
    package: pkg.name,
    label: "组件操作台",
    content: ComponentOperate,
    title: "组件操作台"
})