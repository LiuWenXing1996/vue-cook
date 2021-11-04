import { ref } from 'vue';
import IResourceMaker from '../types/IResourceMaker';

const makerList = ref<IResourceMaker[]>([]);

export default function useResourceMakerList() {
    return makerList
}