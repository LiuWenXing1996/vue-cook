import { toRefs } from "@vueuse/shared";
import { Ref } from "vue";
import ICookEditorConfig from './../types/ICookEditorConfig';

export default function useSplitPaneConfigList(cookEditorConfig: Ref<ICookEditorConfig>) {
    return toRefs(cookEditorConfig).splines
}