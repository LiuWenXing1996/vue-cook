import ICookEditorState from '@/types/ICookEditorState';
import ISplitPaneConfig from '../types/ISplitPaneConfig';
import IPanelConfig from '@/types/IPanelConfig';
import usePanelMaker from './../hooks/usePanelMaker';
import ISplitLayoutPaneName from '../types/ISplitLayoutPaneName';

function remove(cookEditorState: ICookEditorState, panelConfig: IPanelConfig, splitLayoutPaneName: ISplitLayoutPaneName) {
    const list = cookEditorState.layout[splitLayoutPaneName]
    const index = list.findIndex(e => e.uid === panelConfig.uid)
    if (index > -1) {
        list.splice(index, 1)
        const maker = usePanelMaker(cookEditorState, panelConfig.makerName, panelConfig.makerPkg)
        maker?.value?.close?.(cookEditorState, panelConfig)
    }
}

export default function layoutRemoveTab(cookEditorState: ICookEditorState, panelConfig: IPanelConfig) {
    remove(cookEditorState, panelConfig, "left")
    remove(cookEditorState, panelConfig, "center")
    remove(cookEditorState, panelConfig, "bottom")
    remove(cookEditorState, panelConfig, "right")
}