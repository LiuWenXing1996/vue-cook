import { computed, Ref } from "vue";
import IComponentMaker from "../types/IComponentMaker";
import ICookStateBase from "../types/ICookStateBase";
import useComponentMakerList from "./useComponentMakerList";

export default function useComponentMaker(cookState: ICookStateBase,name?: string, pkg?: string): Ref<IComponentMaker | undefined> {
    return computed(() => {
        const makerList = useComponentMakerList(cookState);
        const maker = makerList.value.find(e => e.name === name && e.pkg === pkg)
        return maker;
    })
}


