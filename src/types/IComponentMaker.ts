import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IResourceMakerBase from './IResourceMakerBase';
import ICookState from "./ICookState";

export default interface IComponentMaker extends IResourceMakerBase<IComponentConfig, Component> {
    type: "component",
    makePropOptions?: (cookState: ICookState, componentConfig: IComponentConfig) => string[]
    makeEventOptions?: (cookState: ICookState, componentConfig: IComponentConfig) => string[]
    makeSlotOptions?: (cookState: ICookState, componentConfig: IComponentConfig) => string[]
}