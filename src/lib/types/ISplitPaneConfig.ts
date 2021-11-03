import IPanelConfig from "./IPanelConfig";

export default interface ISplitPaneConfig {
    list: IPanelConfig[],
    split?: {
        isH: Boolean,
        config: ISplitPaneConfig
    }
}

// export interface ISplitPaneConfigA {
//     list: IPanelConfig[],
//     split?: {
//         isH: Boolean,
//         config: ISplitPaneConfigA
//     }
// }

