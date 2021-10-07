import { useStorage } from '@vueuse/core'
import { defineCookConfig } from '$/index';

// TODO:将它放到lib下面，然后看下为什么config变了slot后没有更新
const cookConfig = useStorage("cookConfig", defineCookConfig({
    pages: []
}), localStorage)

export default function useCookConfig() {
    return cookConfig
}
