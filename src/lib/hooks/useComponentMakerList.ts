
import { computed } from 'vue';
import useResourceMakerList from './useResourceMakerList';
import IComponentMaker from './../types/IComponentMaker';

export default function useComponentMakerList() {
    return computed(() => {
        const allList = useResourceMakerList().value
        return allList.filter(e => e.type === "component") as IComponentMaker[]
    })
}