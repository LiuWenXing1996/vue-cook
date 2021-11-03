import ICookConfig from "./ICookConfig";
import IPage from "./IPage";
import ISplitPaneConfig from "./ISplitPaneConfig";

declare global {
    interface ICookEditorConfigExtra { }
}

export default interface ICookEditorConfig extends ICookConfig<ICookEditorConfig> {
    pages: IPage[],
    splines: ISplitPaneConfig[],
    extra: Partial<ICookEditorConfigExtra>
}