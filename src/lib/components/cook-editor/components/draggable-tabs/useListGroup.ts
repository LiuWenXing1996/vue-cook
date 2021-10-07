import { ref } from "vue";
import IPanelConfig from "@/lib/types/IPanelConfig";

const group = ref<Record<string, IPanelConfig[]>>({})

export default function useListGroup() {
    return group
}
