import definePanelMaker from '@/utils/definePanelMaker';
import { defineComponent, h } from 'vue';
import TogglePanel from './TogglePanel.vue'
export default definePanelMaker({
    name: "开关面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: (cookEditorState, panelConfig) => defineComponent({
        render: () => h(
            TogglePanel,
            {
                panelConfig
            }
        )
    })
})