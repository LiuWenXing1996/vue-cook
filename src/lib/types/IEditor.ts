import IEditorDataMap from "./IEditorDataMap";
import IEditorType from "./IEditorType";

interface IEditor<T extends IEditorType> {
    type: T,
    data: IEditorDataMap[T],
    default: any
}


export default IEditor