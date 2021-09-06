import { computed, Ref } from "vue";
import ICompositionMaker from "../types/ICompositionMaker";
import useCompositionMakerList from "./useCompositionMakerList";

export default function useCompositionMaker(name?: string): Ref<ICompositionMaker | undefined> {
    return computed(() => {
        const makerList = useCompositionMakerList();
        const maker = makerList.value.find(e => e.name === name)
        return maker;
    })
}


