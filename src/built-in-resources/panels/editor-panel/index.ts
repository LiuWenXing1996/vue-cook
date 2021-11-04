import { markRaw } from 'vue';
import Component from "./EditorPanel.vue";
import definePanelMaker from '@/utils/definePanelMaker';
import { pkgName } from '@/utils/const';
declare global {
    interface ICookEditorStateExtraVueCook {
        ComponentEditorPanel: {
            componetSelected?: {
                pageUid: string,
                componentUid: string
            }
        }
    }
}
export default definePanelMaker({
    name: "基础编辑器",
    pkg: pkgName,
    defaultSplitLayoutPaneName: "right",
    make: () => {
        return {
            title: "基础编辑器",
            content: markRaw(Component)
        }
    },
    install: (state) => {
        state.extra.VueCook = state.extra.VueCook || {}
        state.extra.VueCook.ComponentEditorPanel = {
            componetSelected: undefined
        }
    }
})