import { IMessageBus } from "../utils/createMessageBus";
import IPage from "./IPage";
import IResourceMaker from "./IResourceMaker";

export default interface ICookPlayerConfig {
    page: IPage
    makerList: IResourceMaker[]
}