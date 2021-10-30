import IComponentConfig from '@/lib/types/IComponentConfig';
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import makeDefaultComponentConfig from '@/lib/utils/makeDefaultComponentConfig';
import getMakerDataFromDragEvent from '@/lib/utils/getMakerDataFromDragEvent';
import ICookEditorState from '@/lib/types/ICookEditorState';
const handleDrop = (cookEditorState: ICookEditorState, slotName: string, componentConfig: IComponentConfig | undefined, e: DragEvent) => {
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
    const makerPkg = data.package
    const maker = useComponentMaker(cookEditorState, makerName, makerPkg)
    if (!maker.value) {
        return;
    }
    const childComponentConfig = makeDefaultComponentConfig(maker.value);
    componentConfig.slots = componentConfig.slots || {}
    componentConfig.slots[slotName] = componentConfig.slots[slotName] || []
    componentConfig.slots[slotName].push(childComponentConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
