import isTabTarget from './isTabTarget';
export default function handleDragStart(e: DragEvent) {
    if (isTabTarget(e)) {
        e.dataTransfer?.setData('uid', e.target.dataset.uid)
        e.dataTransfer?.setData('luid', e.target.dataset.luid)
    }
}