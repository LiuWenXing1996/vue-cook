interface TabDragEvent extends DragEvent {
    target: Target
}

interface Target extends HTMLDivElement {
    dataset: Dataset
}

interface Dataset extends DOMStringMap {
    readonly uid: string
    readonly luid: string
}


export default function isTabTarget(e: DragEvent): e is TabDragEvent {
    if (!(e.target instanceof HTMLDivElement)) {
        return false;
    }
    if (!e?.target?.dataset?.uid || !e?.target?.dataset?.luid) {
        return false;
    }
    return true;
}