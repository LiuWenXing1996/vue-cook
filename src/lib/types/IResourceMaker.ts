import IResourceConfig from "./IResourceConfig"
import IEditorConfig from "./IEditorConfig"

export default interface IResourceMaker<T extends IResourceConfig> {
    name: string,
    package: string,
    label: string,
    tips?: string,
}