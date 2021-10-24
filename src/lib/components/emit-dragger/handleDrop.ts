import IComponentConfig from '$/types/IComponentConfig';
import useLogicMaker from '$/hooks/useLogicMaker';
import makeLogicConfigDefault from '@/lib/utils/makeLogicConfigDefault';
import getMakerDataFromDragEvent from '@/lib/utils/getMakerDataFromDragEvent';

const handleDrop = (emitName: string, componentConfig: IComponentConfig | undefined, e: DragEvent,) => {

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
    const maker = useLogicMaker(makerName, makerPackage)
    if (!maker.value) {
        return;
    }
    const logicConfig = makeLogicConfigDefault(maker.value);
    componentConfig.emits = componentConfig.emits || {}
    componentConfig.emits[emitName] = componentConfig.emits[emitName] || []
    componentConfig.emits[emitName].push(logicConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
