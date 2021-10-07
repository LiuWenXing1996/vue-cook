import { Component } from "vue";
import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";

export default interface IPanel extends IResourceMaker<IPanelConfig> {
    makePanel: (config: IPanelConfig) => Component
}

class Maker{
    
}
