import IEditorDataMap from "./IEditorDataMap";
import IEditorType from "./IEditorType";
import IResourceConfig from "./IResourceConfig";

export default interface IEditorConfig {
    type: IEditorType,
    name: string,
    data?: IEditorDataMap[IEditorType],
    getValue: (editorConfig: IEditorConfig, resourceConfig: IResourceConfig) => any,
    setValue: (editorConfig: IEditorConfig, resourceConfig: IResourceConfig, newValue: any) => void,
}