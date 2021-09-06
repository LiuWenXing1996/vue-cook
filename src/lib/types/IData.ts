import IComponentConfig from "./IComponentConfig";
import ICompositionConfig from "./ICompositionConfig";

export default interface IData {
    components: IComponentConfig[],
    compositions: ICompositionConfig[]
}
// 每个节点都是一个组合的函数，常量值是一个函数，他是一个永远返回固定值的函数

