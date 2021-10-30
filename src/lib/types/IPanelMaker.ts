import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import { SplitPaneName } from "./ISplitPaneConfig";
import IPanel from "./IPanel";
import ICookEditorState from '@/lib/types/ICookEditorState';

export default interface IPanelMaker<
    T extends IPanelConfig = IPanelConfig>
    extends IResourceMaker<T, ICookEditorState, IPanel> {
    defaultSplitPaneName: SplitPaneName
}