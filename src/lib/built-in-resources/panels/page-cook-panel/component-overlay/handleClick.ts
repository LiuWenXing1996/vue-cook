import IComponentConfig from '$/types/IComponentConfig';
import useComponentSelected from '$/hooks/useComponentSelected';
import useComponentConfig from '@/lib/hooks/useComponentConfig';
const componentSelected = useComponentSelected();
const handleClick = (config: IComponentConfig, selected: boolean, event: MouseEvent) => {
    event.stopPropagation()
    if (selected) {
        componentSelected.value = undefined
    } else {
        componentSelected.value = useComponentConfig(config.uid).value
    }
}

export default handleClick
