export type IResourceMakerType = "component" | "logic" | "panel"
export default interface IResourceMaker {
    readonly name: string,
    readonly package: string,
    readonly type: IResourceMakerType
}
