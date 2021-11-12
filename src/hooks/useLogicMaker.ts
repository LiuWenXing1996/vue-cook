import { computed, Ref } from "vue";
import ICookStateBase from "../types/ICookStateBase";
import ILogicMaker from "../types/ILogicMaker";
import useLogicMakerList from "./useLogicMakerList";

export default function useLogicMaker(cookState: ICookStateBase, name?: string, pkg?: string): Ref<ILogicMaker | undefined> {
    return computed(() => {
        const makerList = useLogicMakerList(cookState);
        const maker = makerList.value.find(e => e.name === name && e.pkg === pkg)
        return maker;
    })
}


