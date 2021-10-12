import { useStorage } from '@vueuse/core'
import { defineCookConfig } from '$/index';

const cookConfig = useStorage("cookConfig", defineCookConfig({
    pages: []
}), localStorage)

export default function useCookConfig() {
    return cookConfig
}
