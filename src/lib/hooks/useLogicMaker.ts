import { computed, Ref } from "vue";
import ILogicMaker from "../types/ILogicMaker";
import useLogicMakerList from "./useLogicMakerList";

export default function useLogicMaker(name?: string, pkg?: string): Ref<ILogicMaker | undefined> {
    return computed(() => {
        const makerList = useLogicMakerList();
        const maker = makerList.value.find(e => e.name === name && e.package === pkg)
        return maker;
    })
}


