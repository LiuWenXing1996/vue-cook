import { VueCookComponentMakerDraggerTag } from "@/utils/const-value";

export default function handleDragEnter(e: DragEvent) {
    if (e.dataTransfer) {
        if (e.dataTransfer.types.includes(VueCookComponentMakerDraggerTag)) {
            if (e.target && e.target instanceof HTMLElement) {
                e.target.classList.add('dragenter')
            }
        }
    }

}