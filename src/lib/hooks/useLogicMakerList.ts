
import { computed } from 'vue';
import ILogicMaker from '../types/ILogicMaker';
import ICookState from '../types/ICookState';

export default function useLogicMakerList(cookState: ICookState) {
    return computed(() => {
        const allList = cookState.makerList
        return allList.filter(e => e.type === "logic") as ILogicMaker[]
    })
}