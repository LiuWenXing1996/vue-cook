import { Component } from "vue";
import IComponentAttrs from "./IComponentAttrs";
import IComponentConfig from "./IComponentConfig";
import IEditor from "./IEditor";
import IEditorType from "./IEditorType";
import IResourceMaker from './IResourceMaker';

export default interface IComponentMaker extends IResourceMaker<IComponentConfig> {
    makeComponent: (config: IComponentConfig) => Component,
    slots?: string[],
    props?: Record<string, IEditor<IEditorType>>,
    emits?: string[],
}