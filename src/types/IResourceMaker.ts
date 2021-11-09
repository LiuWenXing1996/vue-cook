
import ICookState from './ICookState';
import IMakerType from './IMakerType';
import IResourceConfig from './IResourceConfig';

export default interface IResourceMaker<T extends IResourceConfig = any, M extends ICookState = any, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IMakerType,
    makeDefaultConfig?: () => T,
    // TODO:添加 cooksatte状态注入
    make: (resourceConfig: T, cookState: M) => P,
    install?: (cookState: M) => void
}
