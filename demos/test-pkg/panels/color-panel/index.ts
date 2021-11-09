import definePanelMaker from '@/utils/definePanelMaker';
import ColorPanel from './ColorPanel.vue'

export default definePanelMaker({
    name: "颜色选择器面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: () => {
        return {
            title: "颜色选择器面板",
            content: ColorPanel
        }
    }
})