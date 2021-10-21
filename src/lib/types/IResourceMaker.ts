export type IResourceMakerType = "component" | "logic" | "panel"
export default interface IResourceMaker {
    name: string,
    package: string,
    type: IResourceMakerType
}
