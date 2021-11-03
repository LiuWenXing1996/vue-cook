import ICookState from "./ICookState";
import IPage from "./IPage";
import ISplitLayout from './ISplitLayout';

declare global {
    interface ICookEditorStateExtraVueCook { }
    interface ICookEditorStateExtra {
        VueCook: Partial<ICookEditorStateExtraVueCook>
    }
}

export default interface ICookEditorState extends ICookState {
    pages: IPage[],
    layout: ISplitLayout,
    extra: Partial<ICookEditorStateExtra>
}