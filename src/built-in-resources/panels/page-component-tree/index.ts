import PageComponentTree from "./PageComponentTree.vue";
import definePanelMaker from '@/utils/definePanelMaker';
import { name as pkgName } from "@/../package.json"
import IPanelMaker from '@/types/IPanelMaker';

const maker: IPanelMaker = definePanelMaker({
    name: "页面组件树",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "left",
    make: () => PageComponentTree
})


export default maker