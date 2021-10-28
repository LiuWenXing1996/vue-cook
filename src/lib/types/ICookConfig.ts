import { IMessageBus } from "../utils/createMessageBus";
import IResourceMaker from "./IResourceMaker";
export default interface ICookConfig<T = any> {
    resourceMakerList: IResourceMaker[],
    messageBus: IMessageBus,
    findMaker: () => IResourceMaker,
    installMaker: (cookConfig: T) => T
}