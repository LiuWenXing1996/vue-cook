import ICookStateBase from "./ICookStateBase";
import IPage from "./IPage";
import ISplitLayout from './ISplitLayout';

export default interface ICookEditorState extends ICookStateBase {
    type: "editor",
    pages: IPage[],
    layout: ISplitLayout,
}