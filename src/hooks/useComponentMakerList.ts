
import { computed } from 'vue';
import ICookStateBase from '../types/ICookStateBase';
import IComponentMaker from './../types/IComponentMaker';

export default function useComponentMakerList(cookState: ICookStateBase) {
    return computed(() => {
        const allList = cookState.makerList
        return allList.filter(e => e.type === "component") as IComponentMaker[]
    })
}