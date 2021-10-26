import IPage from "./IPage";
import IResourceMaker from "./IResourceMaker";
import ISplitPaneConfig from "./ISplitPaneConfig";

export default interface ICookConfig {
    pages: IPage[],
    resourceMakerList: IResourceMaker[],
    editor: {
        splines: ISplitPaneConfig[],
        pageEditingUidList: string[],
        componentFousedUid: string | undefined,
        componentSelectedUid: string | undefined,
    },
    palyer: {
        pageUid: string
    }
}