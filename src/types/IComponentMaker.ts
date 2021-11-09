import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IResourceMaker from './IResourceMaker';
import ICookPlayerState from './ICookPlayerState';

export default interface IComponentMaker<
    T extends IComponentConfig = IComponentConfig>
    extends IResourceMaker<T, ICookPlayerState, Component> {
    // TODO:每个options添加自己的tip选项应该是有用的
    // TODO:甚至可以设计让option自己返回不同的数据
    makePropOptions?: (componentConfig: T) => string[]
    makeEventOptions?: (componentConfig: T) => string[]
    makeSlotOptions?: (componentConfig: T) => string[]
}