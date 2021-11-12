import ILogicConfig from "./ILogicConfig";
import IResourceConfig from "./IResourceConfig";

export default interface IComponentConfig extends IResourceConfig {
    props?: Record<string, string>,
    slots?: Record<string, IComponentConfig[]>,
    events?: Record<string, ILogicConfig[]>,
}

