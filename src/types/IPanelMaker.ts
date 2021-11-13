import IPanelConfig from "./IPanelConfig";
import IResourceMakerBase from "./IResourceMakerBase";
import ISplitLayoutPaneName from "./ISplitLayoutPaneName";
import ICookState from "./ICookState";
import { Component } from "vue";

export default interface IPanelMaker extends IResourceMakerBase<IPanelConfig, Component> {
    readonly type: "panel",
    defaultSplitLayoutPaneName: ISplitLayoutPaneName,
    makeTitle?: (cookState: ICookState, panelConfig: IPanelConfig) => string,
    onClose?: (cookState: ICookState, panelConfig: IPanelConfig) => void
    onOpen?: (cookState: ICookState, panelConfig: IPanelConfig) => void
}