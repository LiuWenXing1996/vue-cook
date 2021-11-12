import IResourceMakerType from "@/types/IResourceMakerType"


export default function getMakerDataFromDragEvent(e: DragEvent) {
    if (!e.dataTransfer) {
        return
    }
    const makerName = e.dataTransfer.getData('name')
    const makerPkg = e.dataTransfer.getData('package')
    const makerType = e.dataTransfer.getData('type') as IResourceMakerType
    if (!makerName || !makerPkg || !makerType) {
        return
    }
    return {
        name: makerName,
        package: makerPkg,
        type: makerType
    };
}