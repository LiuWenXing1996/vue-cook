import { toRefs } from 'vue';
import useProjectConfig from './useProjectConfig';

export default function useRootComponentConfig() {
    const projectConfig = useProjectConfig()
    const { rootComponentConfig } = toRefs(projectConfig)
    return rootComponentConfig
}