import tryGetLogicMakerData from "@/lib/utils/getMakerDataFromDragEvent";

export default function handleDragLeave(e: DragEvent) {
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}