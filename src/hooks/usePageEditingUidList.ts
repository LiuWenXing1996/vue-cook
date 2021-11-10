import ICookEditorState from "@/types/ICookEditorState";
import { computed, reactive } from 'vue';

const stateMap = reactive(new Map<ICookEditorState, string[]>())

export default function usePageEditingUidList(cookEditorState: ICookEditorState) {
    const list = computed(() => {
        const _list = stateMap.get(cookEditorState) || []
        return [..._list]
    })
    const add = (pageUid: string) => {
        let _list = stateMap.get(cookEditorState)
        if (!_list) {
            _list = []
            stateMap.set(cookEditorState, _list)
        }
        _list.push(pageUid)
    }
    const remove = (pageUid?: string) => {
        if (pageUid) {
            const list = stateMap.get(cookEditorState)
            if (list) {
                const _list = list.filter(d => d !== pageUid)
                stateMap.set(cookEditorState, _list)
            }
        }
    }
    return {
        list,
        add,
        remove
    }
}