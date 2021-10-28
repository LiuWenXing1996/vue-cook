import { IMessageBus } from "../utils/createMessageBus";
import IPage from "./IPage";
import IResourceMaker from "./IResourceMaker";
import ISplitPaneConfig from "./ISplitPaneConfig";

export default interface ICookEditorConfig {
    pages: IPage[],
    splines: ISplitPaneConfig[],
    makerList: IResourceMaker[],
    pageEditingUidList: [],
    componentSelectedUid: undefined | {
        componentUid: string,
        pageUid: string
    }
}