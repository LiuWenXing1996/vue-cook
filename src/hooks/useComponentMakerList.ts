
import { computed } from 'vue';
import ICookState from '../types/ICookState';
import IComponentMaker from './../types/IComponentMaker';

export default function useComponentMakerList(cookState: ICookState) {
    return computed(() => {
        const allList = cookState.makerList
        return allList.filter(e => e.type === "component") as IComponentMaker[]
    })
}