import { VueCookLogicMakerDraggerTag } from '@/utils/const-value';
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
        if (!e.dataTransfer.types.includes(VueCookLogicMakerDraggerTag)) {
            e.dataTransfer.dropEffect = "none"
        }
    }
}

export default handleDragOver