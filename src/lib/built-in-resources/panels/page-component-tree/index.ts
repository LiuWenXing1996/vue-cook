import { markRaw } from 'vue';
import Component from "./Component.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
export default definePanelMaker({
    name: "page-component-tree",
    package: pkg.name,
    label: '主应用',
    makePanel: () => markRaw(Component)
})