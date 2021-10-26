import { defineComponent, h, markRaw, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import pkg from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
import usePageEditingList from "$/hooks/usePageEditingList";
import useSplitPaneConfigList from '@/lib/hooks/useSplitPaneConfigList';
import IPanelConfig from '@/lib/types/IPanelConfig';
import makePanelConfigDefault from '@/lib/utils/makePanelConfigDefault';
import IPage from '@/lib/types/IPage';

const data: Array<{ config: IPanelConfig, page: IPage }> = []

interface IPageEditorConfig extends IPanelConfig {
    extra: {
        pageName: string,
        pageUid: string
    }
}

const maker = definePanelMaker<IPageEditorConfig>({
    name: "页面编辑器",
    package: pkg.name,
    splitPaneName: "center",
    // TODO:尝试使用全局事件总线来通信。。。。
    makeTitle: (config) => {
        const page = data.find(e => e.config.uid === config.uid)?.page
        if (page) {
            return page.name
        } else {
            return "没有正在编辑的页面"
        }
    },
    makePanel: (config) => {
        const page = data.find(e => e.config.uid === config.uid)?.page
        return defineComponent({
            setup() {
                return () => h(
                    Component,
                    {
                        pageEditing: page
                    }
                )
            }
        })
    },
    on: (type, event) => {
        if(type===Click_Event_Tag)
    }
})

export default maker


