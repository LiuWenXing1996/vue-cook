import IMakerType from "./IMakerType";

export default interface IResourceConfig {
    uid: string,
    name: string,
    makerType: IMakerType,
    makerName: string,
    makerPkg: string
}

