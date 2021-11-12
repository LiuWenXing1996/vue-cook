import { computed, Ref } from "vue";
import useComponentMaker from "./useComponentMaker";
import IComponentConfig from '@/types/IComponentConfig';
import ICookEditorState from '@/types/ICookEditorState';

export default function useSlotOptions(cookEditorState: ICookEditorState, componentConfig: Ref<IComponentConfig | undefined>) {
    return computed(() => {
        const configValue = componentConfig.value;
        if (!configValue) {
            return []
        };
        const maker = useComponentMaker(cookEditorState, componentConfig.value?.makerName, componentConfig.value?.makerPkg).value
        if (!maker) {
            return [];
        }
        return maker?.makeSlotOptions?.( configValue) || []
    })
}