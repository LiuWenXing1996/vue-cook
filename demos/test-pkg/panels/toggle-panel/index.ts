import definePanelMaker from '@/utils/definePanelMaker';
import { defineComponent, h } from 'vue';
import TogglePanel from './TogglePanel.vue'
export default definePanelMaker({
    name: "开关面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: (panelConfig) => {
        return {
            title: "开关面板",
            content: defineComponent({
                render: () => h(
                    TogglePanel,
                    {
                        panelConfig
                    }
                )
            })
        }
    }
})