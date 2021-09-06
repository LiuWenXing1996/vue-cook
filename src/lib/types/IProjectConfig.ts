import IComponentConfig from "./IComponentConfig";
import ISplitWindowConfig from './ISplitWindowConfig';
import IFloatWindowConfig from './IFloatWindowConfig';
import ICompositionConfig from './ICompositionConfig';

export default interface IProjectConfig {
    rootComponentConfig: IComponentConfig,
    // splitWindowConfig: ISplitWindowConfig,
    floatWindowConfigList: IFloatWindowConfig[],
    compositionConfigSelected?: ICompositionConfig
}