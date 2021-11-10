import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IResourceMaker from './IResourceMaker';
import ICookPlayerState from './ICookPlayerState';

export default interface IComponentMake extends IResourceMaker<IComponentConfig, ICookPlayerState, Component> {
    makePropOptions?: (componentConfig: IComponentConfig) => string[]
    makeEventOptions?: (componentConfig: IComponentConfig) => string[]
    makeSlotOptions?: (componentConfig: IComponentConfig) => string[]
}