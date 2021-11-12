
import { computed } from 'vue';
import ILogicMaker from '../types/ILogicMaker';
import ICookStateBase from '../types/ICookStateBase';

export default function useLogicMakerList(cookState: ICookStateBase) {
    return computed(() => {
        const allList = cookState.makerList
        return allList.filter(e => e.type === "logic") as ILogicMaker[]
    })
}