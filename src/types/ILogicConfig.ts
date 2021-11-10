import IResourceConfig from "./IResourceConfig";

export default interface ILogicConfig extends IResourceConfig {
    props?: Record<string, string>
}

