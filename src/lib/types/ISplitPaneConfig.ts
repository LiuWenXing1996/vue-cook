import IPanelConfig from "./IPanelConfig";

export type SplitPaneName = "left" | "center" | "right" | "bottom"
export default interface ISplitPaneConfig {
    name: SplitPaneName,
    list: IPanelConfig[]
}
// TODO:改成含有四个值的对象