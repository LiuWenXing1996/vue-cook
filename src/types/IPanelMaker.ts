import IPanelConfig from "./IPanelConfig";
import IResourceMaker from "./IResourceMaker";
import ISplitLayoutPaneName from "./ISplitLayoutPaneName";
import IPanel from "./IPanel";
import ICookEditorState from '@/types/ICookEditorState';

export default interface IPanelMaker<
    T extends IPanelConfig = IPanelConfig>
    extends IResourceMaker<T, ICookEditorState, IPanel> {
    defaultSplitLayoutPaneName: ISplitLayoutPaneName,
    close?: (cookEditorState: ICookEditorState, panelConfig: T) => void
    open?: (cookEditorState: ICookEditorState, panelConfig: T) => void
}