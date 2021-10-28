import { markRaw } from 'vue';
import Component from "./ResourcePanel.vue";
import { name as pkgName } from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';

const maker = definePanelMaker({
    name: "资源面板",
    pkg: pkgName,
    defaultSplitPaneName: "bottom",
    make: () => {
        return {
            title: "资源面板",
            content: markRaw(Component)
        }
    },
})

export default maker