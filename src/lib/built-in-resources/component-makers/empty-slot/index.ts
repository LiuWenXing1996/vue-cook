import defineComponentMaker from "$/utils/defineComponentMaker";
import Component from "./Component.vue"
import pkg from "@/../package.json"

export default defineComponentMaker({
    name: "empty-slot",
    package: pkg.name,
    label: "空插槽",
    makeComponent: () => Component
})