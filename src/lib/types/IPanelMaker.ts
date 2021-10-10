import { Component } from "vue";
import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import { SplitPaneName } from "./ISplitPaneConfig";

export default interface IPanel extends IResourceMaker {
    splitPaneName: SplitPaneName
    makePanel: (config: IPanelConfig) => Component,
    makeTitle?: (config: IPanelConfig) => string
}