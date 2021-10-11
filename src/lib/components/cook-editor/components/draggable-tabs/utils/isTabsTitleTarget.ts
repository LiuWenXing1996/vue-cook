interface TabTitleDragEvent extends DragEvent {
    target: Target
}

interface Target extends HTMLDivElement {
    dataset: Dataset
}

interface Dataset extends DOMStringMap {
    readonly tabsTitle: string
}

export default function isTabsTitleTarget(e: DragEvent): e is TabTitleDragEvent {
    if (!(e.target instanceof HTMLDivElement)) {
        return false;
    }
    if (!e?.target?.dataset?.tabsTitle) {
        return false;
    }
    return true;
}