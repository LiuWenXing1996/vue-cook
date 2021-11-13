import makeDefaultPanelConfig from './makeDefaultPanelConfig';
import ISplitLayout from '@/types/ISplitLayout';
import PageComponentTreeMaker from "@/built-in-resources/panels/page-component-tree"
import ComponentEditorMaker from "@/built-in-resources/panels/component-editor"
import ResourcePanelMaker from "@/built-in-resources/panels/resource-panel"

const resourcePanelConfig = makeDefaultPanelConfig(ResourcePanelMaker)
resourcePanelConfig.alwaysOpen = true
const defaultSplitLayout: ISplitLayout = {
    "left": [
        makeDefaultPanelConfig(PageComponentTreeMaker)
    ],
    "center": [],
    "bottom": [
        resourcePanelConfig
    ],
    "right": [
        makeDefaultPanelConfig(ComponentEditorMaker)
    ]
}
export default defaultSplitLayout
