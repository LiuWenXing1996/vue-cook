import { ref } from "vue";

const componentPickerEnable = ref(false)
//TODO:将这个变成page-editor-maker提供的全局状态
export default function useComponentPickerEnable() {
    return componentPickerEnable
}