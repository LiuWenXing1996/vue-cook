import { ComponentOptions } from "vue"
import IMixinConfig from './IMixinConfig';
import IResourceMaker from './IResourceMaker';
export default interface IMixinMaker extends IResourceMaker<IMixinConfig> {
    makeMixin: (config: IMixinConfig) => ComponentOptions,
}
