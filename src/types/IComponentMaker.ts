import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IResourceMaker from './IResourceMaker';
import ICookPlayerState from './ICookPlayerState';
import ICookEditorState from './ICookEditorState';

export default interface IComponentMaker extends IResourceMaker<IComponentConfig, ICookPlayerState, Component> {
    makePropOptions?: (componentConfig: IComponentConfig) => string[]
    makeEventOptions?: (componentConfig: IComponentConfig) => string[]
    makeSlotOptions?: (componentConfig: IComponentConfig) => string[]
    //TODO:makePropOptions等没有传入cooksatte????
}