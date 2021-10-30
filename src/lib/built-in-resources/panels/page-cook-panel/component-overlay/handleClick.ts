import IComponentConfig from '@/lib/types/IComponentConfig';
import useComponentSelected from '@/lib/hooks/useComponentSelected';

import ICookEditorState from '@/lib/types/ICookEditorState';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
const componentSelected = useComponentSelected();
const handleClick = (cookEditorState: ICookEditorState, overlay: IComponentOverlay, event: MouseEvent) => {
    event.stopPropagation()

    if (
        cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected &&
        cookEditorState.extra.VueCook?.ComponentEditorPanel.componetSelected.pageUid === overlay.pageUid &&
        cookEditorState.extra.VueCook?.ComponentEditorPanel.componetSelected.componentUid === overlay.configUid
    ) {
        cookEditorState.extra.VueCook!.ComponentEditorPanel.componetSelected = undefined
    } else {
        cookEditorState.extra.VueCook!.ComponentEditorPanel!.componetSelected = {
            pageUid: overlay.pageUid,
            componentUid: overlay.configUid
        }
    }
}

export default handleClick
