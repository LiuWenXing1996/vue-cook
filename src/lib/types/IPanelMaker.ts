import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import { SplitPaneName } from "./ISplitPaneConfig";
import IMakerMethods from './IMakerMethods';
import IPanel from "./IPanel";
import ICookEditorConfig from '@/lib/types/ICookEditorConfig';

export default interface IPanelMaker<T extends IPanelConfig = IPanelConfig> extends IResourceMaker<T, ICookEditorConfig,IPanel> {
    defaultSplitPaneName: SplitPaneName
}