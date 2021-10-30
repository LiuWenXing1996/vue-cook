
import { computed } from 'vue';
import IPanelMaker from '../types/IPanelMaker';
import ICookState from '../types/ICookState';

export default function usePanelMakerList(cookState: ICookState) {
    return computed(() => {
        const allList = cookState.getMakerList()
        return allList.filter(e => e.type === "panel") as IPanelMaker[]
    })
}