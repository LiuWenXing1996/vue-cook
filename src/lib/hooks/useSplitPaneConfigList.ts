import { toRefs } from "@vueuse/shared";
import { Ref } from "vue";
import ICookEditorState from './../types/ICookEditorState';

export default function useSplitPaneConfigList(cookEditorState: ICookEditorState) {
    return toRefs(cookEditorState).splines
}