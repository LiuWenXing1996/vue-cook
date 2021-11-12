
import IResourceMakerType from './IResourceMakerType';
import IResourceConfig from './IResourceConfig';
import ICookState from './ICookState';

export default interface IResourceMakerBase<T extends IResourceConfig = IResourceConfig, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IResourceMakerType,
    make: (cookState: ICookState, resourceConfig: T) => P,
    install?: (cookState: ICookState) => void
}
