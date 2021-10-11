import isTabsTitleTarget from './isTabsTitleTarget';
import isTabTarget from './isTabTarget';
export default function handleDragEnter(e: DragEvent) {
    if (isTabsTitleTarget(e) || isTabTarget(e)) {
        e.target.classList.add('dragenter')
    }
}