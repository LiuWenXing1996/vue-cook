import { ref } from 'vue';
import ICookPlayer from '../types/ICookPlayer';

const list = ref<ICookPlayer[]>([]);

export default function useComponentMakerList() {
    return list
}