import IResourceMakerType from "./IResourceMakerType";

export default interface IResourceConfigBase {
    uid: string,
    name: string,
    makerType: IResourceMakerType,
    makerName: string,
    makerPkg: string
}

