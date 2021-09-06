import { computed, Ref } from "vue";
import IWindowMaker from "../types/IWindowMaker";
import useWindowMakerList from "./useWindowMakerList";

export default function useComponentMaker(name?: string, pkg?: string): Ref<IWindowMaker | undefined> {
    return computed(() => {
        const makerList = useWindowMakerList();
        const maker = makerList.value.find(e => e.name === name && e.package === pkg)
        return maker;
    })
}
