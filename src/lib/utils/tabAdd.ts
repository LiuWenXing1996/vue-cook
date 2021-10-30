import ICookEditorState from '@/lib/types/ICookEditorState';
import IPanelConfig from '@/lib/types/IPanelConfig';
import { SplitPaneName } from '../types/ISplitPaneConfig';
export default function tabAdd(cookEditorState: ICookEditorState, panelConfig: IPanelConfig, targetSplitPaneName: SplitPaneName) {
    cookEditorState.splines.forEach(e => {
        if (e.name === targetSplitPaneName) {
            e.list.push(panelConfig)
        }
    })
}