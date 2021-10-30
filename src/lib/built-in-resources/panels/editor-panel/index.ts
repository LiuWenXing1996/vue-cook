import { markRaw } from 'vue';
import Component from "./EditorPanel.vue";
import definePanelMaker from '@/lib/utils/definePanelMaker';
import { pkgName } from '@/lib/utils/const';
declare global {
    interface ICookEditorStateExtraVueCook {
        ComponentEditorPanel: {
            componetSelected: {
                pageUid: string,
                componentUid: string
            } | undefined
        }
    }
}
export default definePanelMaker({
    name: "基础编辑器",
    pkg: pkgName,
    defaultSplitPaneName: "right",
    make: () => {
        return {
            title: "基础编辑器",
            content: markRaw(Component)
        }
    },
})