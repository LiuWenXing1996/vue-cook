import ICookEditorState from "@/types/ICookEditorState";
import { computed, reactive } from "vue";
import findComponentConfig from "@/utils/findComponentConfig";

interface IComponentSelected {
    componentUid: string,
    pageUid: string
}

const stateMap = reactive(new Map<ICookEditorState, IComponentSelected | undefined>())

export default function useComponentSelected(cookEditorState: ICookEditorState) {
    const config = computed(() => {
        const { pageUid, componentUid } = stateMap.get(cookEditorState) || {}
        const page = cookEditorState.pages.find(e => e.uid === pageUid)
        if (page && componentUid) {
            const component = findComponentConfig(page.component, componentUid)
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
    const set = (componetSelected?: IComponentSelected) => {
        stateMap.set(cookEditorState, componetSelected)
    }
    return {
        get,
        set
    }
}