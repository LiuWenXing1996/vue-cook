import ICookEditorState from "@/types/ICookEditorState";
import { computed } from "vue";

export default function useComponentPickerEnable(cookEditorState: ICookEditorState) {
    const enable = computed(() => {
        const pickerEnable = cookEditorState.extra.VueCook?.PageEditorPanel?.componentPickerEnable
        return Boolean(pickerEnable)
    })
    const get = () => {
        return enable
    }

    const set = (componentPickerEnable: boolean) => {
        cookEditorState.extra.VueCook = cookEditorState.extra.VueCook || {}
        cookEditorState.extra.VueCook.PageEditorPanel = cookEditorState.extra.VueCook?.PageEditorPanel || {}
        cookEditorState.extra.VueCook.PageEditorPanel.componentPickerEnable = componentPickerEnable
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