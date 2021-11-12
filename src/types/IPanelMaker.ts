import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import ISplitLayoutPaneName from "./ISplitLayoutPaneName";
import IPanel from "./IPanel";
import ICookEditorState from '@/types/ICookEditorState';

export default interface IPanelMaker extends IResourceMaker<IPanelConfig, ICookEditorState, IPanel> {
    defaultSplitLayoutPaneName: ISplitLayoutPaneName,
    onClose?: (cookEditorState: ICookEditorState, panelConfig: IPanelConfig) => void
    onOpen?: (cookEditorState: ICookEditorState, panelConfig: IPanelConfig) => void
}