import IResourceMaker from "@/types/IResourceMaker";
import PageComponentTreeMaker from "@/built-in-resources/panels/page-component-tree"
import PageEditorMaker from "@/built-in-resources/panels/page-editor"
import ComponentEditorMaker from "@/built-in-resources/panels/component-editor"
import ResourcePanelMaker from "@/built-in-resources/panels/resource-panel"
import RootAppMaker from "@/built-in-resources/components/root-app"

const defaultMakerList: IResourceMaker[] = [
    PageComponentTreeMaker,
    PageEditorMaker,
    ComponentEditorMaker,
    ResourcePanelMaker,
    RootAppMaker
]

export default defaultMakerList
