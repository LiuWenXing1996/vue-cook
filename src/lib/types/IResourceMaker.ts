import IResourceConfig from "./IResourceConfig"
import IEditorConfig from "./IEditorConfig"

export type IResourceMakerType = "component" | "logic" | "panel" | "mixin"
export default interface IResourceMaker {
    name: string,
    package: string,
    tips?: string,
    type: IResourceMakerType
}
