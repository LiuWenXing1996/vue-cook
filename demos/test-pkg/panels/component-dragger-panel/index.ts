import definePanelMaker from '@/utils/definePanelMaker';
import ComponentDraggerPanel from './ComponentDraggerPanel.vue'

export default definePanelMaker({
    name: "组件拖拽添加面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: () => {
        return {
            title: "组件拖拽添加面板",
            content: ComponentDraggerPanel
        }
    }
})