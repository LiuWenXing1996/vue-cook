import { computed } from "vue";
import useData from "./useData"

export default function useCompositionConfig(uid: string) {
    return computed(() => {
        let data = useData();
        return data.value.compositions.find(e => e.uid === uid)
    })
}