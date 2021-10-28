import { markRaw } from 'vue';
import Component from "./PageComponentTree.vue";
import definePanelMaker from '@/lib/utils/definePanelMaker';
import { name as pkgName } from "@/../package.json"

export default definePanelMaker({
    name: "页面组件树",
    pkg: pkgName,
    defaultSplitPaneName: "left",
    make: () => {
        return {
            title: "页面组件树",
            content: markRaw(Component)
        }
    }
})