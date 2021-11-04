import IPanelConfig from "./IPanelConfig";

export default interface ISplitLayout {
    "left": IPanelConfig[],
    "center": IPanelConfig[],
    "right": IPanelConfig[],
    "bottom": IPanelConfig[]
}
