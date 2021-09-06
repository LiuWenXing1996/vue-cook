import { ref } from 'vue';
import ICompositionMaker from '../types/ICompositionMaker';

const list = ref<ICompositionMaker[]>([

]);

export default function useCompositionMakerList() {
    return list
}