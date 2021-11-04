import { ref } from "vue";
import IPanelConfig from "@/types/IPanelConfig";

const group = ref<Record<string, IPanelConfig[]>>({})

export default function useListGroup() {
    return group
}
