import ICookState from "./ICookState";
import ILogicConfig from "./ILogicConfig";
import IResourceMakerBase from './IResourceMakerBase';

export default interface ILogicMaker extends IResourceMakerBase<ILogicConfig, Function> {
    readonly type: "logic"
    makePropOptions?: (cookState: ICookState, logicConfig: ILogicConfig) => string[]
}