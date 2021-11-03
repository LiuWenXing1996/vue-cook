import ICookEditorState from "@/lib/types/ICookEditorState";
import { computed } from "vue";
import findComponentConfig from "@/lib/utils/findComponentConfig";

export default function useComponentSelected(cookEditorState: ICookEditorState) {
    const config = computed(() => {
        const configUid = cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected?.componentUid
        const pageUid = cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected?.pageUid
        const page = cookEditorState.pages.find(e => e.uid === pageUid)
        if (page && configUid) {
            const component = findComponentConfig(page.component, configUid)
            if (component) {
                return {
                    page,
                    component
                }
            }
        }
    })
    const get = () => {
        return config
    }
    const set = (componetSelected?: {
        pageUid: string,
        componentUid: string
    }) => {
        cookEditorState.extra.VueCook = cookEditorState.extra.VueCook || {}
        cookEditorState.extra.VueCook.ComponentEditorPanel = cookEditorState.extra.VueCook?.ComponentEditorPanel || {}
        cookEditorState.extra.VueCook.ComponentEditorPanel.componetSelected = componetSelected
    }
    return {
        get,
        set
    }
}