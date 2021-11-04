import IComponentConfig from '@/types/IComponentConfig';
import useLogicMaker from '@/hooks/useLogicMaker';
import makeDefaultLogicConfig from '@/utils/makeDefaultLogicConfig';
import getMakerDataFromDragEvent from '@/utils/getMakerDataFromDragEvent';
import ICookEditorState from '@/types/ICookEditorState';

const handleDrop = (cookEditorState: ICookEditorState, emitName: string, componentConfig: IComponentConfig | undefined, e: DragEvent,) => {

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
    const maker = useLogicMaker(cookEditorState, makerName, makerPkg)
    if (!maker.value) {
        return;
    }
    const logicConfig = makeDefaultLogicConfig(maker.value);
    componentConfig.emits = componentConfig.emits || {}
    componentConfig.emits[emitName] = componentConfig.emits[emitName] || []
    componentConfig.emits[emitName].push(logicConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
