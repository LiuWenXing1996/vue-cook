
import { computed } from 'vue';
import useResourceMakerList from './useResourceMakerList';
import ILogicMaker from '../types/ILogicMaker';

export default function useLogicMakerList() {
    return computed(() => {
        const allList = useResourceMakerList().value
        return allList.filter(e => e.type === "logic") as ILogicMaker[]
    })
}