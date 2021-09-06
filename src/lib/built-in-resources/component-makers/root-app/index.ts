import { markRaw } from 'vue';
import { defineComponentMaker } from "$/index"
import Component from "./Component.vue";
import pkg from "@/../package.json"
export default defineComponentMaker({
    name: "root-app",
    package: pkg.name,
    label: '主应用',
    makeComponent: () => markRaw(Component),
    makeDefaultAttrs: () => {
        return {
            slots: {
                default: []
            }
        }
    }
})