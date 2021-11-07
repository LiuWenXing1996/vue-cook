import { defineComponent, h, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import definePanelMaker from '@/utils/definePanelMaker';
import IPanelConfig from '@/types/IPanelConfig';
import { pkgName } from '@/utils/const-value';
import layoutRemoveTab from '@/utils/layoutRemoveTab';
import makeEmptyPanelConfig from '@/utils/makeEmptyPanelConfig';
import layoutAddTab from '@/utils/layoutAddTab';
import IPanelMaker from '@/types/IPanelMaker';
import makeDefaultPanelConfig from '@/utils/makeDefaultPanelConfig';

interface IPageEditorConfigExtra extends Record<string, string> {
    pageName: string,
    pageUid: string
}

declare global {
    interface ICookEditorStateExtraVueCook {
        PageEditorPanel?: {
            pageEditingUidList?: string[],
            pageUidMapToPanelUid?: Record<string, IPanelConfig>,
            componentPickerEnable?: boolean,
            componetFoused?: {
                pageUid: string,
                componentUid: string
            }
        }
    }
}

const maker: IPanelMaker<IPanelConfig<IPageEditorConfigExtra>> = definePanelMaker<IPageEditorConfigExtra>({
    name: "page-editor-maker",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "center",
    make: (config) => {
        return {
            title: config?.extra?.pageName || "没有正在编辑的页面",
            content: defineComponent({
                setup() {
                    return () => h(
                        Component,
                        {
                            pageUid: config?.extra?.pageUid
                        }
                    )
                }
            })
        }
    },
    makeDefaultConfig: () => {
        const _config = makeEmptyPanelConfig(maker)
        return {
            ..._config,
            extra: {
                pageName: "",
                pageUid: ""
            }
        }
    },
    close: (cookEditorState, config) => {
        cookEditorState.extra.VueCook!.PageEditorPanel!.pageEditingUidList =
            cookEditorState.extra.VueCook!.PageEditorPanel!.pageEditingUidList!.filter(d => d !== config.extra?.pageUid)
    },
    install: (cookEditorState) => {
        // 初始化状态
        cookEditorState.extra.VueCook = cookEditorState.extra.VueCook || {}
        cookEditorState.extra.VueCook.PageEditorPanel = {
            pageEditingUidList: [],
            pageUidMapToPanelUid: {},
            componetFoused: undefined,
            componentPickerEnable: true
        }
        // 监听页面编辑列表
        watch(
            () => {
                const pageEditingUidList = cookEditorState.extra.VueCook?.PageEditorPanel?.pageEditingUidList || []
                return [...pageEditingUidList]
            },
            (state, prevState) => {
                const needClose = prevState.filter(e => {
                    return !state.find(d => e === d)
                })
                const needOpen = state.filter(e => {
                    return !prevState.find(d => e === d)
                })
                needClose.map(e => {
                    const panelConfig = cookEditorState.extra.VueCook?.PageEditorPanel?.pageUidMapToPanelUid?.[e]
                    if (panelConfig) {
                        layoutRemoveTab(cookEditorState, panelConfig)
                    }
                })
                needOpen.map(e => {
                    let config = makeDefaultPanelConfig(maker)
                    const page = cookEditorState.pages.find(d => d.uid === e)
                    if (page) {
                        cookEditorState.extra.VueCook!.PageEditorPanel!.pageUidMapToPanelUid![page.uid] = config
                        config.extra!.pageUid = page.uid
                        config.extra!.pageName = page.name
                        layoutAddTab(cookEditorState, config, maker.defaultSplitLayoutPaneName)
                    }
                })
            }
        )
    }
})

export { default as useComponentFocused } from "./hooks/useComponentFocused"
export { default as useComponentPickerEnable } from "./hooks/useComponentPickerEnable"

export default maker


