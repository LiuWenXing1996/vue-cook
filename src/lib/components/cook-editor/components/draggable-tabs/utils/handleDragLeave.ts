import isTabsTitleTarget from './isTabsTitleTarget';
import isTabTarget from './isTabTarget';
export default function handleDragLeave(e: DragEvent) {
    if (isTabsTitleTarget(e) || isTabTarget(e)) {
        e.target.classList.remove('dragenter')
    }
}