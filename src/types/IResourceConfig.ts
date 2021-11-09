import IMakerType from "./IMakerType";

export default interface IResourceConfig<T extends Record<string, string> = any> {
    uid: string,
    name: string,
    makerType: IMakerType,
    makerName: string,
    makerPkg: string,
    extra?: T   // TODO这个字段降级到PanelConfig
}

