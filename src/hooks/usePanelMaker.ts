import { computed, Ref } from "vue";
import ICookStateBase from "../types/ICookStateBase";
import IPanelMaker from "../types/IPanelMaker";
import usePanelMakerList from "./usePanelMakerList";

export default function usePanelMaker(cookState: ICookStateBase, name?: string, pkg?: string): Ref<IPanelMaker | undefined> {
    return computed(() => {
        const makerList = usePanelMakerList(cookState);
        const maker = makerList.value.find(e => e.name === name && e.pkg === pkg)
        return maker;
    })
}


