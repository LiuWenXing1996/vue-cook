import { toRefs } from 'vue';
import useProjectConfig from './useProjectConfig';

export default function useCompositionConfigSelected() {
    const projectConfig = useProjectConfig()
    const { compositionConfigSelected } = toRefs(projectConfig)
    return compositionConfigSelected
}