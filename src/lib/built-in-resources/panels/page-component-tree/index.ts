import { markRaw } from 'vue';
import Component from "./PageComponentTree.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
export default definePanelMaker({
    name: "页面组件树",
    package: pkg.name,
    splitPaneName: "left",
    makePanel: () => markRaw(Component),
})