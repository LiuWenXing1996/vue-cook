import { ref } from "vue";
import IPageEditing from './../types/IPageEditing';

const list = ref<IPageEditing[]>([])

export default function usePageEditingList() {
    return list
}