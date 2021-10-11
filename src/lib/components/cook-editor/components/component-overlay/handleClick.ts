import IComponentConfig from '$/types/IComponentConfig';
import useComponentSelected from '$/hooks/useComponentSelected';
const componentSelected = useComponentSelected();
const handleClick = (config: IComponentConfig, selected: boolean, event: MouseEvent) => {
    event.stopPropagation()
    if (selected) {
        componentSelected.value = undefined
    } else {
        componentSelected.value = config
    }
}

export default handleClick
