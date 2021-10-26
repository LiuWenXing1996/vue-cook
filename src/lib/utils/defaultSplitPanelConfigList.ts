import ISplitPaneConfig from '$/types/ISplitPaneConfig';
import { EditorPanelMaker, PageComponentTreeMaker, ResourcePanelMaker } from '../built-in-resources';
import makePanelConfigDefault from './makePanelConfigDefault';
const defaultSplitPanelConfigList: ISplitPaneConfig[] = [
    {
        name: "left",
        list: [
            makePanelConfigDefault(PageComponentTreeMaker),
        ]
    },
    {
        name: "center",
        list: [
            // makePanelConfigDefault(PageCookPanelMaker)
        ]
    },
    {
        name: "right",
        list: [
            makePanelConfigDefault(EditorPanelMaker),
        ]
    },
    {
        name: "bottom",
        list: [
            makePanelConfigDefault(ResourcePanelMaker)
        ]
    }
];

export default defaultSplitPanelConfigList
