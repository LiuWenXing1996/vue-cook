import ICookEditorState from "@/types/ICookEditorState";
import { computed, reactive } from "vue";

const stateMap = reactive(new Map<ICookEditorState, boolean>())

export default function useComponentPickerEnable(cookEditorState: ICookEditorState) {
    const enable = computed(() => {
        const pickerEnable = stateMap.get(cookEditorState)
        return Boolean(pickerEnable)
    })
    const get = () => {
        return enable
    }

    const set = (componentPickerEnable: boolean) => {
        stateMap.set(cookEditorState, componentPickerEnable)
    }

    const toggle = () => {
        set(!enable.value)
    }
    return {
        get,
        set,
        toggle
    }
}