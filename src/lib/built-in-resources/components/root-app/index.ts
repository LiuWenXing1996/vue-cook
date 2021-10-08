import { markRaw } from 'vue';
import defineComponentMaker from "$/utils/defineComponentMaker"
import Component from "./RootApp.vue";
import pkg from "@/../package.json"
export default defineComponentMaker({
    name: "主应用",
    package: pkg.name,
    slots: ["default"],
    makeComponent: () => markRaw(Component)
})