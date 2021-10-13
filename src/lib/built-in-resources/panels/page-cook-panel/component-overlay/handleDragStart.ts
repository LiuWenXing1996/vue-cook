import IComponentConfig from '$/types/IComponentConfig';
import useComponentDragged from '$/hooks/useComponentDragged';
const componentDragged = useComponentDragged();
const handleDragStart = (config: IComponentConfig | undefined, e: DragEvent) => {
    if (!config) {
        return
    }
    if (!(e.target instanceof HTMLElement)) {
        return;
    }
    if (!e?.target?.dataset?.uid) {
        return;
    }
    componentDragged.value = config
    e?.dataTransfer?.setData('uid', e?.target?.dataset?.uid)
}

export default handleDragStart
