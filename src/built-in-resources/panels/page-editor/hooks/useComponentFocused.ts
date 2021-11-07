import ICookEditorState from "@/types/ICookEditorState";
import findComponentConfig from "@/utils/findComponentConfig";
import { computed } from "vue";

export default function useComponentFocused(cookEditorState: ICookEditorState) {
    const config = computed(() => {
        const configUid = cookEditorState.extra.VueCook?.PageEditorPanel?.componetFoused?.componentUid
        const pageUid = cookEditorState.extra.VueCook?.PageEditorPanel?.componetFoused?.pageUid
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
    const set = (componetFoused?: {
        pageUid: string,
        componentUid: string
    }) => {
        cookEditorState.extra.VueCook = cookEditorState.extra.VueCook || {}
        cookEditorState.extra.VueCook.PageEditorPanel = cookEditorState.extra.VueCook?.PageEditorPanel || {}
        cookEditorState.extra.VueCook.PageEditorPanel.componetFoused = componetFoused
    }
    return {
        get,
        set
    }
}