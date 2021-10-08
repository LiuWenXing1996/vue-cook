import { markRaw } from 'vue';
import Component from "./ResourcePanel.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
export default definePanelMaker({
    name: "资源面板",
    package: pkg.name,
    makePanel: () => markRaw(Component)
})