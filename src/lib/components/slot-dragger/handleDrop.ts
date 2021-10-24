import IComponentConfig from '$/types/IComponentConfig';
import useComponentMaker from '$/hooks/useComponentMaker';
import makeComponentConfigDefault from '@/lib/utils/makeComponentConfigDefault';
import getMakerDataFromDragEvent from '@/lib/utils/getMakerDataFromDragEvent';
const handleDrop = (slotName: string, componentConfig: IComponentConfig | undefined, e: DragEvent) => {
    if (!componentConfig) {
        return
    }
    const data = getMakerDataFromDragEvent(e);
    if (!data) {
        return
    }
    e.preventDefault()
    e.stopPropagation()
    const makerName = data.name
    const makerPackage = data.package
    const maker = useComponentMaker(makerName, makerPackage)
    if (!maker.value) {
        return;
    }
    const childComponentConfig = makeComponentConfigDefault(maker.value);
    componentConfig.slots = componentConfig.slots || {}
    componentConfig.slots[slotName] = componentConfig.slots[slotName] || []
    componentConfig.slots[slotName].push(childComponentConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
