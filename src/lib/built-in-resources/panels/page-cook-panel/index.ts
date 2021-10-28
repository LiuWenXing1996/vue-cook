import { defineComponent, h, markRaw, watch } from 'vue';
import Component from "./PageCookPanel.vue";
import { name as pkgName } from "@/../package.json"
import definePanelMaker from '@/lib/utils/definePanelMaker';
import IPanelConfig from '@/lib/types/IPanelConfig';
import IMakerMethods from '@/lib/types/IMakerMethods';
import ICookEditorConfig from '@/lib/types/ICookEditorConfig';

interface IPageEditorConfig extends IPanelConfig {
    extra: {
        pageName: string,
        pageUid: string
    }
}

const maker = definePanelMaker<IPageEditorConfig>({
    name: "页面编辑器",
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
    }
})

export type IPageEditorMaker = typeof maker

export default maker


