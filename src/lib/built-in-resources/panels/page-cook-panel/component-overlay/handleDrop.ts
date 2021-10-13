import IComponentConfig from '$/types/IComponentConfig';
import useComponentDragged from '$/hooks/useComponentDragged';
import useComponentMaker from '$/hooks/useComponentMaker';
import makeComponentConfigDefault from '@/lib/utils/makeComponentConfigDefault';
const componentDragged = useComponentDragged();
const handleDrop = (slotName: string, componentConfig: IComponentConfig | undefined, e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!componentConfig) {
        return
    }
    if (componentDragged.value) {

    } else {
        const makerName = e.dataTransfer?.getData('name')
        const makerPackage = e.dataTransfer?.getData('package')
        if (!makerName || !makerPackage) {
            return;
        }
        const maker = useComponentMaker(makerName, makerPackage)
        if (!maker.value) {
            return;
        }
        const childComponentConfig = makeComponentConfigDefault(maker.value);
        componentConfig.attrs = componentConfig.attrs || {}
        componentConfig.attrs.slots = componentConfig.attrs.slots || {}
        componentConfig.attrs.slots[slotName] = componentConfig.attrs.slots[slotName] || []
        componentConfig.attrs.slots[slotName].push(childComponentConfig)
    }
}

export default handleDrop
