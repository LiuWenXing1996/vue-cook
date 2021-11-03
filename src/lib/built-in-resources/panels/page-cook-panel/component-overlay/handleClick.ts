import useComponentSelected from '@/lib/built-in-resources/panels/editor-panel/hooks/useComponentSelected';

import ICookEditorState from '@/lib/types/ICookEditorState';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
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
