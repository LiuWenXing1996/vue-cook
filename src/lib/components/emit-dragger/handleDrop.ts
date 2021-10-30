import IComponentConfig from '@/lib/types/IComponentConfig';
import useLogicMaker from '@/lib/hooks/useLogicMaker';
import makeDefaultLogicConfig from '@/lib/utils/makeDefaultLogicConfig';
import getMakerDataFromDragEvent from '@/lib/utils/getMakerDataFromDragEvent';
import ICookEditorState from '@/lib/types/ICookEditorState';

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
