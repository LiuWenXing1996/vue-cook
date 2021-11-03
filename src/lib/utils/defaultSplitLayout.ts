import { EditorPanelMaker, PageComponentTreeMaker, ResourcePanelMaker } from '../built-in-resources';
import makeDefaultPanelConfig from './makeDefaultPanelConfig';
import ISplitLayout from './../types/ISplitLayout';
const defaultSplitLayout: ISplitLayout = {
    "left": [
        makeDefaultPanelConfig(PageComponentTreeMaker)
    ],
    "center": [],
    "bottom": [
        makeDefaultPanelConfig(ResourcePanelMaker)
    ],
    "right": [
        makeDefaultPanelConfig(EditorPanelMaker)
    ]
}
export default defaultSplitLayout
