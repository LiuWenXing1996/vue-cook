import ICookConfig from "./ICookConfig";
import IPage from "./IPage";
import ISplitPaneConfig from "./ISplitPaneConfig";

export default interface ICookEditorConfig extends ICookConfig<ICookEditorConfig> {
    pages: IPage[],
    splines: ISplitPaneConfig[],
    componentSelected: undefined | {
        componentUid: string,
        pageUid: string
    }
}