import { ref } from "vue";
import ISplitPaneConfig from "../types/ISplitPaneConfig";

const list = ref<ISplitPaneConfig[]>([])

export default function useSplitPaneConfigList() {
    return list
}