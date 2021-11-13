import IResourceConfigBase from "./IResourceConfigBase";

export default interface ILogicConfig extends IResourceConfigBase {
    makerType: "logic",
    props?: Record<string, string>
}

