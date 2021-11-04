import { markRaw } from 'vue';
import Component from "./PageComponentTree.vue";
import definePanelMaker from '@/utils/definePanelMaker';
import { name as pkgName } from "@/../package.json"
import makeEmptyPanelConfig from '@/utils/makeEmptyPanelConfig';
import IPanelMaker from '@/types/IPanelMaker';

const maker: IPanelMaker = definePanelMaker({
    name: "页面组件树",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "left",
    make: () => {
        return {
            title: "页面组件树",
            content: markRaw(Component)
        }
    }
})


export default maker