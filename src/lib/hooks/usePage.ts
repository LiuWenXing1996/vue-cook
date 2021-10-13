import { computed } from 'vue';
import useCookConfig from './useCookConfig';
export default function usePage(path: string) {
    return computed(() => {
        const cookConfig = useCookConfig().value
        return cookConfig.pages.find(e => e.path === path)
    })
}