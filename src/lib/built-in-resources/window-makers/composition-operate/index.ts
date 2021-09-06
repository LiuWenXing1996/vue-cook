import defineWindowMaker from "$/utils/defineWindowMaker"
import LogicComposer from "./LogicComposer.vue"
import pkg from "@/../package.json"
export default defineWindowMaker({
    name: "composition-operate",
    package: pkg.name,
    label: "组合操作台",
    content: LogicComposer,
    title: "组合操作台"
})