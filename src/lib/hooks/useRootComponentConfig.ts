import { toRefs } from 'vue';
import useCookEditorConfig from './useCookEditorConfig';

export default function useRootComponentConfig() {
    const cookEditorConfig = useCookEditorConfig()
    const { rootComponentConfig } = toRefs(cookEditorConfig)
    return rootComponentConfig
}