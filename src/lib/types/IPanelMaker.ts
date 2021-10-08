import { Component } from "vue";
import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";

export default interface IPanel extends IResourceMaker {
    makePanel: (config: IPanelConfig) => Component
}

class Maker{
    
}
