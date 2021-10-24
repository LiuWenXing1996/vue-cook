import ILogicConfig from "./ILogicConfig";
import IResourceConfig from "./IResourceConfig";

export default interface IComponentConfig extends IResourceConfig {
    props?: Record<string, string>,
    slots?: Record<string, IComponentConfig[]>,
    emits?: Record<string, ILogicConfig[]>,
    // TODO:增加一个extra字段专门用来设置额外配置
}

