import ISplitPaneConfig from '@/lib/types/ISplitPaneConfig';
import { EditorPanelMaker, PageComponentTreeMaker, ResourcePanelMaker } from '../built-in-resources';
import makeDefaultPanelConfig from './makeDefaultPanelConfig';
const defaultSplitPanelConfigList: ISplitPaneConfig[] = [
    {
        name: "left",
        list: [
            makeDefaultPanelConfig(PageComponentTreeMaker)
        ]
    },
    {
        name: "center",
        list: [
            // makeDefaultPanelConfig(PageCookPanelMaker)
        ]
    },
    {
        name: "right",
        list: [
            makeDefaultPanelConfig(EditorPanelMaker),
        ]
    },
    {
        name: "bottom",
        list: [
            makeDefaultPanelConfig(ResourcePanelMaker)
        ]
    }
];

export default defaultSplitPanelConfigList
