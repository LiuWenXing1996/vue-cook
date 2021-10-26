import { Component, Ref } from "vue";
import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import { SplitPaneName } from "./ISplitPaneConfig";
import ICookEditorConfig from './ICookEditorConfig';
import { WildcardHandler } from "mitt";

export default interface IPanelMaker<T extends IPanelConfig = IPanelConfig> extends IResourceMaker {
    splitPaneName: SplitPaneName
    makePanel: (config: T, cookEditorConfig: ICookEditorConfig) => Component,
    makeTitle: (config: T, cookEditorConfig: ICookEditorConfig) => string,
    on?: WildcardHandler<ICookEditorEventBusEvents>
}