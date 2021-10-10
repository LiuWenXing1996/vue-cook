
import { computed } from 'vue';
import useResourceMakerList from './useResourceMakerList';
import IPanelMaker from '../types/IPanelMaker';

export default function usePanelMakerList() {
    return computed(() => {
        const allList = useResourceMakerList().value
        return allList.filter(e => e.type === "panel") as IPanelMaker[]
    })
}