import { VueCookLogicMakerDraggerTag } from "@/utils/const";

export default function handleDragEnter(e: DragEvent) {
    if (e.dataTransfer) {
        if (e.dataTransfer.types.includes(VueCookLogicMakerDraggerTag)) {
            if (e.target && e.target instanceof HTMLElement) {
                e.target.classList.add('dragenter')
            }
        }
    }

}