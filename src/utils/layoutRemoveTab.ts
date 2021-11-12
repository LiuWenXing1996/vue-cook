import ICookEditorState from '@/types/ICookEditorState';
import IPanelConfig from '@/types/IPanelConfig';
import usePanelMaker from '@/hooks/usePanelMaker';
import ISplitLayoutPaneName from '@/types/ISplitLayoutPaneName';

function remove(cookEditorState: ICookEditorState, splitLayoutPaneName: ISplitLayoutPaneName, panelConfig?: IPanelConfig,) {
    if (panelConfig) {
        const list = cookEditorState.layout[splitLayoutPaneName]
        const index = list.findIndex(e => e.uid === panelConfig.uid)
        if (index > -1) {
            list.splice(index, 1)
            const maker = usePanelMaker(cookEditorState, panelConfig.makerName, panelConfig.makerPkg)
            maker?.value?.onClose?.(cookEditorState, panelConfig)
        }
    }
}

export default function layoutRemoveTab(cookEditorState: ICookEditorState, panelConfig?: IPanelConfig) {
    remove(cookEditorState, "left", panelConfig)
    remove(cookEditorState, "center", panelConfig)
    remove(cookEditorState, "bottom", panelConfig)
    remove(cookEditorState, "right", panelConfig)
}