import { markRaw } from 'vue';
import Component from "./EditorPanel.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
export default definePanelMaker({
    name: "基础编辑器",
    package: pkg.name,
    splitPaneName: "right",
    makePanel: () => markRaw(Component),
})