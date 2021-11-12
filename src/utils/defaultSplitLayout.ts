import makeDefaultPanelConfig from './makeDefaultPanelConfig';
import ISplitLayout from '@/types/ISplitLayout';
import { ComponentEditorMaker, PageComponentTreeMaker, ResourcePanelMaker } from '..';
const defaultSplitLayout: ISplitLayout = {
    "left": [
        makeDefaultPanelConfig(PageComponentTreeMaker)
    ],
    "center": [],
    "bottom": [
        makeDefaultPanelConfig(ResourcePanelMaker)
    ],
    "right": [
        makeDefaultPanelConfig(ComponentEditorMaker)
    ]
}
export default defaultSplitLayout
