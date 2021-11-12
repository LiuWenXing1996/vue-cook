import { defineComponent, h, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import definePanelMaker from '@/utils/definePanelMaker';
import { pkgName } from '@/utils/const-value';
import layoutRemoveTab from '@/utils/layoutRemoveTab';
import layoutAddTab from '@/utils/layoutAddTab';
import IPanelMaker from '@/types/IPanelMaker';
import makeDefaultPanelConfig from '@/utils/makeDefaultPanelConfig';
import usePageEditingUidList from '@/hooks/usePageEditingUidList';
import PagePanelLinker from './utils/PagePanelLinker';
import findPanelConfig from '@/utils/findPanelConfig';
import useComponentPickerEnable from '@/hooks/useComponentPickerEnable';

const maker: IPanelMaker = definePanelMaker({
    name: "页面编辑器",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "center",
    make: (cookEditorState, config) => {
        const pageUid = PagePanelLinker.getPageUid(cookEditorState, config.uid)
        const page = cookEditorState.pages.find(d => d.uid === pageUid)
        return {
            title: page?.name || "没有正在编辑的页面",
            content: defineComponent({
                setup() {
                    return () => h(
                        Component,
                        {
                            pageUid: pageUid
                        }
                    )
                }
            })
        }
    },
    onClose: (cookEditorState, config) => {
        const pageUid = PagePanelLinker.getPageUid(cookEditorState, config.uid)
        usePageEditingUidList(cookEditorState).remove(pageUid)
    },
    install: (cookEditorState) => {
        useComponentPickerEnable(cookEditorState).set(true) // 默认组件选取模式开启
        const pageEditingUidList = usePageEditingUidList(cookEditorState).list
        // 监听页面编辑列表
        watch(pageEditingUidList, (state, prevState) => {
            const needClose = prevState.filter(e => {
                return !state.find(d => e === d)
            })
            const needOpen = state.filter(e => {
                return !prevState.find(d => e === d)
            })
            needClose.map(e => {
                const panelUid = PagePanelLinker.getPanelUid(cookEditorState, e);
                const panelConfig = findPanelConfig(cookEditorState, panelUid);
                layoutRemoveTab(cookEditorState, panelConfig)
            })
            needOpen.map(e => {
                const page = cookEditorState.pages.find(d => d.uid === e)
                if (page) {
                    const config = makeDefaultPanelConfig(maker)
                    PagePanelLinker.link(cookEditorState, e, config.uid)
                    layoutAddTab(cookEditorState, config, maker.defaultSplitLayoutPaneName)
                }
            })
        })
    }
})

export default maker


