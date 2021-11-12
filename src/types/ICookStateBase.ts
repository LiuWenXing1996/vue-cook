import ICookStateType from "./ICookStateType";
import IResourceMaker from "./IResourceMaker";
export default interface ICookStateBase {
    type: ICookStateType,
    makerList: IResourceMaker[]
}