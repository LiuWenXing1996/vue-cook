import IPanelConfig from "@/lib/types/IPanelConfig";
import { ref } from "vue";

const tempTelportList = ref<IPanelConfig[]>([])

export default function useTempTelportList() {
    return tempTelportList
}