import ICookPlayerState from "./ICookPlayerState";
import ILogicConfig from "./ILogicConfig";
import IResourceMaker from './IResourceMaker';

export default interface ILogicMaker<
    T extends ILogicConfig = ILogicConfig>
    extends IResourceMaker<T, ICookPlayerState, Function> {
    makePropOptions?: (logicConfig: T) => string[]
}