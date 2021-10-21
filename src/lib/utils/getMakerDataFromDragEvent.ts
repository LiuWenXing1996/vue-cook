import { IResourceMakerType } from "../types/IResourceMaker"

export default function getMakerDataFromDragEvent(e: DragEvent) {
    if (!e.dataTransfer) {
        return
    }
    const makerName = e.dataTransfer.getData('name')
    const makerPackage = e.dataTransfer.getData('package')
    const makerType = e.dataTransfer.getData('type') as IResourceMakerType
    if (!makerName || !makerPackage || !makerType) {
        return
    }
    return {
        name: makerName,
        package: makerPackage,
        type: makerType
    };
}