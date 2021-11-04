import { VueCookComponentMakerDraggerTag } from '@/utils/const';
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
        if (!e.dataTransfer.types.includes(VueCookComponentMakerDraggerTag)) {
            e.dataTransfer.dropEffect = "none"
        }
    }
}

export default handleDragOver
