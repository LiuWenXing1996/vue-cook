import { markRaw } from 'vue';
import { defineComponentMaker } from 'vue-cook'
import Component from "./Component.vue";
import { pkgName } from '../../const-value';
export default defineComponentMaker({
    name: "按钮",
    pkg: pkgName,
    props: ["text", "count"],
    emits: ["click"],
    make: () => markRaw(Component)
})