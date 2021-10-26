import { markRaw } from 'vue';
import Component from "./PageComponentTree.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
import * as OverloadEvents from './OverloadEvents'

export {
    OverloadEvents
}

export default definePanelMaker({
    name: "vue-cook:页面组件树",
    package: pkg.name,
    splitPaneName: "left",
    makeTitle: () => {
        return "页面组件树"
    },
    makePanel: () => markRaw(Component),
})