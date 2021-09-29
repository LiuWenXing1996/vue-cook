import IEditor from "../types/IEditor";
import IEditorDataMap from "../types/IEditorDataMap";
import IEditorType from "../types/IEditorType";

export default function defineEditor<T extends IEditorType>(editor: IEditor<T>): IEditor<T> {
    return editor
}
