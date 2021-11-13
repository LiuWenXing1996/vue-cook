import definePanelMaker from '@/utils/definePanelMaker';
import LogicDraggerPanel from './LogicDraggerPanel.vue'

export default definePanelMaker({
    name: "逻辑拖拽添加面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: () => LogicDraggerPanel
})