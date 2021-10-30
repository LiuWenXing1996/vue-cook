import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IResourceMaker from './IResourceMaker';
import ICookPlayerState from './ICookPlayerState';

export default interface IComponentMaker<
    T extends IComponentConfig = IComponentConfig>
    extends IResourceMaker<T, ICookPlayerState, Component> {
    slots?: string[],
    props?: string[],
    emits?: string[],
    //TODO:每个key都加个tips?
}