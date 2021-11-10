import ICookState from "./ICookState";
import IPage from "./IPage";
import ISplitLayout from './ISplitLayout';

export default interface ICookEditorState extends ICookState {
    pages: IPage[],
    layout: ISplitLayout,
}