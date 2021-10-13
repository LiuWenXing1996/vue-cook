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

const maker = definePanelMaker({
    name: "页面编辑器",
    package: pkg.name,
    splitPaneName: "center",
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
})

watch(usePageEditingList(), () => {
    const splitPaneConfig = useSplitPaneConfigList().value;
    const pageEditingList = usePageEditingList().value;
    const needOpenList = pageEditingList.filter(e => {
        return !data.find(d => d.page.uid === e.uid)
    })
    const needCloseList = data.filter(e => {
        return pageEditingList.find(p => p.uid !== e.page.uid)
    })
    // open
    const splitPane = splitPaneConfig.find(e => e.name === maker.splitPaneName)
    if (splitPane) {
        const { list } = splitPane;
        const configList = needOpenList.map(e => {
            const config = makePanelConfigDefault(maker)
            data.push({
                config,
                page: e
            })
            return config
        })
        list.push(...configList)
    }
    // close
    splitPaneConfig.forEach(e => {
        const { list } = e
        const index = list.findIndex(l => {
            return needCloseList.find(n => n.config.uid === l.uid)
        })
        if (index > -1) {
            list.splice(index, 1)
        }
    })
}, {
    deep: true
})
watch(useSplitPaneConfigList(), () => {
    const splitPaneConfigList = useSplitPaneConfigList().value;
    const pageEditingList = usePageEditingList().value;
    const allSplitPaneConfig = splitPaneConfigList.map(e => e.list).flat()
    const needRemoveList = data.filter(e => {
        return !allSplitPaneConfig.find(s => s.uid === e.config.uid)
    })
    needRemoveList.forEach(e => {
        {
            const index = data.findIndex(l => {
                return l === e
            })
            if (index > -1) {
                data.splice(index, 1)
            }
        }
        {
            const index = pageEditingList.findIndex(l => {
                return l.uid === e.page.uid
            })
            if (index > -1) {
                pageEditingList.splice(index, 1)
            }
        }
    })
}, {
    deep: true
})

export default maker


