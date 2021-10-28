import IComponentConfig from '@/lib/types/IComponentConfig';
import useComponentSelected from '@/lib/hooks/useComponentSelected';
import useComponentConfig from '@/lib/hooks/useComponentConfig';
const componentSelected = useComponentSelected();
const handleClick = (config: IComponentConfig | undefined, selected: boolean, event: MouseEvent) => {
    event.stopPropagation()
    if (!config) {
        return
    }
    if (selected) {
        componentSelected.value = undefined
    } else {
        componentSelected.value = useComponentConfig(config.uid).value
    }
}

export default handleClick
