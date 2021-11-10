import { markRaw } from 'vue';
import Component from "./ResourcePanel.vue";
import { name as pkgName } from "@/../package.json"
import definePanelMaker from '@/utils/definePanelMaker';
import IPanelMaker from '@/types/IPanelMaker';

const maker: IPanelMaker = definePanelMaker({
    name: "资源面板",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "bottom",
    make: () => {
        return {
            title: "资源面板",
            content: markRaw(Component)
        }
    }
})
export default maker