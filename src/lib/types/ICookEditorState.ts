import ICookState from "./ICookState";
import IPage from "./IPage";
import ISplitPaneConfig from "./ISplitPaneConfig";

declare global {
    interface ICookEditorStateExtraVueCook { }
    interface ICookEditorStateExtra {
        VueCook: Partial<ICookEditorStateExtraVueCook>
    }
}

export default interface ICookEditorState extends ICookState {
    pages: IPage[],
    splines: ISplitPaneConfig[],
    extra: Partial<ICookEditorStateExtra>
}