import { ref } from "vue";
import IPage from "../types/IPage";

const list = ref<IPage[]>([])

export default function usePageEditingList() {
    return list
}