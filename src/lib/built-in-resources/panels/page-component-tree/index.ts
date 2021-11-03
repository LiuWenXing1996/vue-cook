import { markRaw } from 'vue';
import Component from "./PageComponentTree.vue";
import definePanelMaker from '@/lib/utils/definePanelMaker';
import { name as pkgName } from "@/../package.json"
import makeEmptyPanelConfig from '@/lib/utils/makeEmptyPanelConfig';
import IPanelMaker from '@/lib/types/IPanelMaker';

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