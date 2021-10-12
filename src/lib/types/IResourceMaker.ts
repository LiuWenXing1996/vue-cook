import IResourceConfig from "./IResourceConfig"
import IEditorConfig from "./IEditorConfig"

export type IResourceMakerType = "component" | "logic" | "panel"
export default interface IResourceMaker {
    name: string,
    package: string,
    type: IResourceMakerType
}
