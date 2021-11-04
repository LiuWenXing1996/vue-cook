import IResourceConfig from "./IResourceConfig";

export default interface ILogicConfig<
    T extends Record<string, string> = Record<string, string>> extends IResourceConfig<T> {
    params: Record<string, string>
}

