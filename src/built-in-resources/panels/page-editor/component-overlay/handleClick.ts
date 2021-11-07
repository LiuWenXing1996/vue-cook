import ICookEditorState from '@/types/ICookEditorState';
import IComponentOverlay from '@/types/IComponentOverlay';
import useComponentSelected from '../../component-editor/hooks/useComponentSelected';
const handleClick = (cookEditorState: ICookEditorState, overlay: IComponentOverlay, event: MouseEvent) => {
    event.stopPropagation()
    if (
        useComponentSelected(cookEditorState).get().value?.page.uid === overlay.pageUid &&
        useComponentSelected(cookEditorState).get().value?.component.uid === overlay.configUid
    ) {
        useComponentSelected(cookEditorState).set()
    } else {
        useComponentSelected(cookEditorState).set({
            pageUid: overlay.pageUid,
            componentUid: overlay.configUid
        })
    }
}

export default handleClick
