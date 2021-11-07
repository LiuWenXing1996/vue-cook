import ILogicConfig from "./ILogicConfig";
import IResourceConfig from "./IResourceConfig";
export default interface IComponentConfig<
    T extends Record<string, string> = Record<string, string>> extends IResourceConfig<T> {
    props?: Record<string, string>,
    slots?: Record<string, IComponentConfig[]>,
    events?: Record<string, ILogicConfig[]>,
}

