import { toRefs } from 'vue';
import useProjectConfig from './useProjectConfig';

export default function useFloatWindowConfigList() {
    const projectConfig = useProjectConfig()
    const { floatWindowConfigList } = toRefs(projectConfig)
    return floatWindowConfigList
}