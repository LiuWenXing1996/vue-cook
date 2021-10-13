import useComponentDragged from '$/hooks/useComponentDragged';
const componentDragged = useComponentDragged();
const handleDragOver = (e: DragEvent, hasSlot: boolean,) => {

    if (!hasSlot) {
        e.stopPropagation()
        return
    }
    if (e?.dataTransfer?.dropEffect) {
        if (componentDragged.value) {
            e.dataTransfer.dropEffect = 'move'
        } else {
            e.dataTransfer.dropEffect = 'copy'
        }
    }
}

export default handleDragOver
