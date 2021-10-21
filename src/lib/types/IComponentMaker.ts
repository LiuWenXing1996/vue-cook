import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";

import IResourceMaker from './IResourceMaker';

export default interface IComponentMaker extends IResourceMaker {
    makeComponent: (config: IComponentConfig) => Component,
    slots?: string[],
    props?: string[],
    emits?: string[],
    //TODO:每个key都加个tips?
}