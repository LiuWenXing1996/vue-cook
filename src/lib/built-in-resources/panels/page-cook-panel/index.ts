import { defineComponent, h, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import definePanelMaker from '@/lib/utils/definePanelMaker';
import IPanelConfig from '@/lib/types/IPanelConfig';
import { pkgName } from '@/lib/utils/const';
import removeTab from '@/lib/utils/removeTab';
import makeEmptyPanelConfig from '@/lib/utils/makeEmptyPanelConfig';
import tabAdd from '@/lib/utils/tabAdd';
import IPanelMaker from '@/lib/types/IPanelMaker';
import makeDefaultPanelConfig from '@/lib/utils/makeDefaultPanelConfig';
import IResourceMaker from '@/lib/types/IResourceMaker';

interface IPageEditorConfigExtra extends Record<string, string> {
    pageName: string,
    pageUid: string
}

declare global {
    interface ICookEditorStateExtraVueCook {
        PageEditorPanel: {
            pageEditingUidList: string[],
            componetFoused: {
                pageUid: string,
                componentUid: string
            } | undefined
        }
    }
}

const isIPageEditorConfig = (config: any): config is IPanelConfig<IPageEditorConfigExtra> => {
    if (!config) {
        return false
    }
    const { makerName, makerPkg } = config
    return makerName === maker.name && makerPkg === maker.pkg
}

const maker: IPanelMaker<IPanelConfig<IPageEditorConfigExtra>> = definePanelMaker<IPageEditorConfigExtra>({
    name: "page-editor-maker",
    pkg: pkgName,
    defaultSplitPaneName: "center",
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
    install: (cookEditorState) => {
        // 初始化状态
        cookEditorState.extra.VueCook = cookEditorState.extra.VueCook || {}
        cookEditorState.extra.VueCook.PageEditorPanel = {
            pageEditingUidList: [],
            componetFoused: undefined
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
                    removeTab(cookEditorState, (resourceConfig) => {
                        if (isIPageEditorConfig(resourceConfig)) {
                            return resourceConfig?.extra?.pageUid === e
                        }
                        return false
                    })
                })
                needOpen.map(e => {
                    let config = makeDefaultPanelConfig(maker)
                    const page = cookEditorState.pages.find(d => d.uid === e)
                    if (page) {
                        config.extra!.pageUid = page.uid
                        config.extra!.pageName = page.name
                        tabAdd(cookEditorState, config, maker.defaultSplitPaneName)
                    }
                })
            }
        )
    }
})

export default maker


