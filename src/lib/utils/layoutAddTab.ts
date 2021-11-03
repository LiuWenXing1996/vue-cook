import ICookEditorState from '@/lib/types/ICookEditorState';
import IPanelConfig from '@/lib/types/IPanelConfig';
import ISplitLayoutPaneName from '@/lib/types/ISplitLayoutPaneName';
import usePanelMaker from '../hooks/usePanelMaker';

export default function layoutAddTab(cookEditorState: ICookEditorState, panelConfig: IPanelConfig, splitLayoutPaneName: ISplitLayoutPaneName) {
    cookEditorState.layout[splitLayoutPaneName].push(panelConfig)
    const maker = usePanelMaker(cookEditorState, panelConfig.makerName, panelConfig.makerPkg)
    maker?.value?.open?.(cookEditorState, panelConfig)
}