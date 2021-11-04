
import { Ref } from 'vue';
import ICookState from './ICookState';
import IMakerType from './IMakerType';
import IResourceConfig from './IResourceConfig';

export default interface IResourceMaker<T extends IResourceConfig = any, M extends ICookState = any, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IMakerType,
    makeDefaultConfig?: () => T,
    make: (resourceConfig: T) => P,
    install?: (cookConfig: M) => void
}
