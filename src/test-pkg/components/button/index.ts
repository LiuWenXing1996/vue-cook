import { markRaw } from 'vue';
import { defineComponentMaker } from '$/index'
import Component from "./Component.vue";
import { pkgName } from '../../const-value';
export default defineComponentMaker({
    name: "按钮",
    package: pkgName,
    props: ["text"],
    emits: ["click"],
    makeComponent: () => markRaw(Component)
})