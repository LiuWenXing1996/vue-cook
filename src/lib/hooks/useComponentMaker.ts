import { computed, Ref } from "vue";
import IComponentMaker from "../types/IComponentMaker";
import useComponentMakerList from "./useComponentMakerList";



export default function useComponentMaker(name?: string, pkg?: string): Ref<IComponentMaker | undefined> {
    return computed(() => {
        const makerList = useComponentMakerList();
        const maker = makerList.value.find(e => e.name === name && e.package === pkg)
        return maker;
    })
}


