import ICookEditorState from '@/types/ICookEditorState';
import IPanelConfig from '@/types/IPanelConfig';
import ISplitLayoutPaneName from '@/types/ISplitLayoutPaneName';
import usePanelMaker from '@/hooks/usePanelMaker';

export default function layoutAddTab(cookEditorState: ICookEditorState, panelConfig: IPanelConfig, splitLayoutPaneName: ISplitLayoutPaneName) {
    cookEditorState.layout[splitLayoutPaneName].push(panelConfig)
    const maker = usePanelMaker(cookEditorState, panelConfig.makerName, panelConfig.makerPkg)
    maker?.value?.onOpen?.(cookEditorState, panelConfig)
}