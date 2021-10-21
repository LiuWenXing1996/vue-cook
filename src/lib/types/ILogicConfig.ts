import IResourceConfig from "./IResourceConfig";

export default interface ILogicConfig extends IResourceConfig {
    params: Record<string, string>
}

