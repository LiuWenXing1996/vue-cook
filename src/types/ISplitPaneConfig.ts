import IPanelConfig from "./IPanelConfig";

export default interface ISplitPaneConfig {
    list: IPanelConfig[],
    split?: {
        isH: Boolean,
        config: ISplitPaneConfig
    }
}
