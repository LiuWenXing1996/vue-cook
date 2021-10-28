
import { IMessageBus } from '../utils/createMessageBus';
import ICookConfig from './ICookConfig';
import IMakerType from './IMakerType';
import IResourceConfig from './IResourceConfig';

export default interface IResourceMaker<T extends IResourceConfig = IResourceConfig, M extends ICookConfig = ICookConfig, P = any> {
    readonly name: string,
    readonly pkg: string,
    readonly type: IMakerType,
    makeDefaultConfig?: (cookConfig: M) => T,
    make: (resourceConfig: T, cookConfig: M) => P,
    install: (cookConfig: M) => void
}
