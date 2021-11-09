// SimplePanelMaker.ts
import definePanelMaker from '@/utils/definePanelMaker';
import { defineComponent, h } from "vue";

export default definePanelMaker({
    name: "简单面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: () => {
        return {
            title: "简单面板",
            content: defineComponent({
                render: () => h(
                    'div',
                    '我是一个简单面板'
                )
            })
        }
    }
})