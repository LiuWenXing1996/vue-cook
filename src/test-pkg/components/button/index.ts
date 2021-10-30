import { markRaw } from 'vue';
import { defineComponentMaker } from '@/lib/index'
import Component from "./Component.vue";
import { pkgName } from '../../const-value';
export default defineComponentMaker({
    name: "按钮",
    pkg: pkgName,
    props: ["text"],
    emits: ["click"],
    make: () => markRaw(Component)
})