import useComponentDragged from '$/hooks/useComponentDragged';
const componentDragged = useComponentDragged();
const handleDragOver = (e: DragEvent, hasSlot: boolean,) => {
    // TODO:参考事件的编辑drag over 事件，改造这个事件
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
