import definePanelMaker from '@/utils/definePanelMaker';
import ResourcePanel from './ResourcePanel.vue'

export default definePanelMaker({
    name: "自定义资源面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "bottom",
    make: () => {
        return {
            title: "自定义资源面板",
            content: ResourcePanel
        }
    }
})