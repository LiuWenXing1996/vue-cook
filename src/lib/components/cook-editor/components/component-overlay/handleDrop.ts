import IComponentConfig from '$/types/IComponentConfig';
import useComponentDragged from '$/hooks/useComponentDragged';
import useComponentMaker from '$/hooks/useComponentMaker';
import makeComponentConfigDefault from '@/lib/utils/makeComponentConfigDefault';
const componentDragged = useComponentDragged();
const handleDrop = (parentSlot: IComponentConfig[], e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
        parentSlot.push(childComponentConfig)
    }
}

export default handleDrop
