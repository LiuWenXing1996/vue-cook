import { markRaw } from 'vue';
import defineComponentMaker from "$/utils/defineComponentMaker"
import Component from "./Component.vue";
import pkg from "@/../package.json"
export default defineComponentMaker({
    name: "root-app",
    package: pkg.name,
    label: '主应用',
    slots: ["default"],
    makeComponent: () => markRaw(Component)
})