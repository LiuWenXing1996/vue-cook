import ICookEditorState from "@/types/ICookEditorState";
import findComponentConfig from "@/utils/findComponentConfig";
import { computed, reactive } from "vue";

interface IComponentFoused {
    componentUid: string,
    pageUid: string
}

const stateMap = reactive(new Map<ICookEditorState, IComponentFoused | undefined>())

export default function useComponentFocused(cookEditorState: ICookEditorState) {
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
    const set = (componetFoused?: IComponentFoused) => {
        stateMap.set(cookEditorState, componetFoused)
    }
    return {
        get,
        set
    }
}