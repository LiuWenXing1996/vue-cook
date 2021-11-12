
import { computed } from 'vue';
import IPanelMaker from '../types/IPanelMaker';
import ICookStateBase from '../types/ICookStateBase';

export default function usePanelMakerList(cookState: ICookStateBase) {
    return computed(() => {
        const allList = cookState.makerList
        return allList.filter(e => e.type === "panel") as IPanelMaker[]
    })
}