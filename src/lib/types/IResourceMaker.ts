import IMakerType from './IMakerType';
import IResourceConfig from './IResourceConfig';



export default interface IResourceMaker<T extends IResourceConfig = IResourceConfig, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IMakerType,
    makeDefaultConfig?: () => T,
    //TODO:尝试将make参数的类型也做成泛型
    make: (config: T) => P,
}
