import IPanelConfig from "./IPanelConfig";
import IResourceMakerBase from "./IResourceMakerBase";
import ISplitLayoutPaneName from "./ISplitLayoutPaneName";
import IPanel from "./IPanel";
import ICookState from "./ICookState";

export default interface IPanelMaker extends IResourceMakerBase<IPanelConfig, IPanel> {
    type: "panel",
    defaultSplitLayoutPaneName: ISplitLayoutPaneName,
    onClose?: (cookState: ICookState, panelConfig: IPanelConfig) => void
    onOpen?: (cookState: ICookState, panelConfig: IPanelConfig) => void
}