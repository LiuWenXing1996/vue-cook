import { markRaw } from 'vue';
import Component from "./ResourcePanel.vue";
import { name as pkgName } from "@/../package.json"
import definePanelMaker from '@/utils/definePanelMaker';
import makeEmptyPanelConfig from '@/utils/makeEmptyPanelConfig';
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
    },
    makeDefaultConfig: () => {
        const config = makeEmptyPanelConfig(maker)
        config.alwaysOpen = true
        return config
    }
})
export default maker