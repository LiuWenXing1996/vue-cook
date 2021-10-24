import tryGetLogicMakerData from '@/lib/utils/getMakerDataFromDragEvent';
import { VueCookLogicMakerDraggerTag } from '@/lib/utils/const';
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
        if (!e.dataTransfer.types.includes(VueCookLogicMakerDraggerTag)) {
            e.dataTransfer.dropEffect = "none"
        }
    }
}

export default handleDragOver