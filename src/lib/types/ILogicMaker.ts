import ILogicConfig from "./ILogicConfig";
import IResourceMaker from './IResourceMaker';

export default interface ILogicMaker extends IResourceMaker {
    makeLogic: (config: ILogicConfig) => Function,
    params?: string[]
}