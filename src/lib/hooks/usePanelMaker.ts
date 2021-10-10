import { computed, Ref } from "vue";
import IPanelMaker from "../types/IPanelMaker";
import usePanelMakerList from "./usePanelMakerList";

export default function usePanelMaker(name?: string, pkg?: string): Ref<IPanelMaker | undefined> {
    return computed(() => {
        const makerList = usePanelMakerList();
        const maker = makerList.value.find(e => e.name === name && e.package === pkg)
        return maker;
    })
}


