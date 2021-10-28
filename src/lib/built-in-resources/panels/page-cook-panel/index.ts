import { defineComponent, h, markRaw, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import definePanelMaker from '@/lib/utils/definePanelMaker';
import IPanelConfig from '@/lib/types/IPanelConfig';
import { pkgName } from '@/lib/utils/const';

declare global {
    interface IVueCookMessageBusEventMap {
        "vue-cook:page-editor-maker:open-page": {
            pageUid: string,
        },
        "vue-cook:page-editor-maker:highlight-component": {
            pageUid: string,
            componentUid: string,
        },
        "vue-cook:page-editor-maker:unHighlight-component": undefined
    }
}
interface IPageEditorConfig extends IPanelConfig {
    extra: {
        pageName: string,
        pageUid: string
    }
}

const maker = definePanelMaker<IPageEditorConfig>({
    name: "page-editor-maker",
    pkg: pkgName,
    defaultSplitPaneName: "center",
    make: (config) => {
        return {
            title: config.extra.pageName || "没有正在编辑的页面",
            content: defineComponent({
                setup() {
                    return () => h(
                        Component,
                        {
                            pageUid: config.extra.pageUid
                        }
                    )
                }
            })
        }
    },
    install(cookEditorConfig) {
        cookEditorConfig.messageBus.reciveMessage("vue-cook:page-editor-maker:open-page", (type, message, cookEditorConfig) => {
            //TODO:使用新版的事件机制处理来打开数据
        })
    }
})

export default maker


