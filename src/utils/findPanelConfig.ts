import ICookEditorState from "@/types/ICookEditorState";

export default function findPanelConfig(cookEditorState: ICookEditorState, panelUid?: string) {
    if (panelUid) {
        return undefined
    }
    const layout = cookEditorState.layout
    let found = undefined
    found = layout.left.find(e => e.uid === panelUid)
    if (!found) {
        found = layout.center.find(e => e.uid === panelUid)
    }
    if (!found) {
        found = layout.right.find(e => e.uid === panelUid)
    }
    if (!found) {
        found = layout.bottom.find(e => e.uid === panelUid)
    }
    return found
}