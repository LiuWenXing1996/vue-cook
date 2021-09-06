import { ref } from "vue"
import IData from "../types/IData"

const data = ref<IData>({
    components: [],
    compositions: []
})

export default function useData() {
    return data
}