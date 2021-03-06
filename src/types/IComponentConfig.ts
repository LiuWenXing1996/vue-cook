import ILogicConfig from "./ILogicConfig";
import IResourceConfigBase from "./IResourceConfigBase";

export default interface IComponentConfig extends IResourceConfigBase {
    makerType: "component",
    props?: Record<string, string>,
    slots?: Record<string, IComponentConfig[]>,
    events?: Record<string, ILogicConfig[]>,
}

