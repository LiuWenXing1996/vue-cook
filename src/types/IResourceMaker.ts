
import ICookState from './ICookState';
import IMakerType from './IMakerType';
import IResourceConfig from './IResourceConfig';

export default interface IResourceMaker<T extends IResourceConfig = any, M extends ICookState = any, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IMakerType,
    make: (cookState: M, resourceConfig: T) => P,
    install?: (cookState: M) => void
}
