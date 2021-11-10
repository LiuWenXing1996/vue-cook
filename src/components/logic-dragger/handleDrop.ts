import useLogicMaker from '@/hooks/useLogicMaker';
import makeDefaultLogicConfig from '@/utils/makeDefaultLogicConfig';
import getMakerDataFromDragEvent from '@/utils/getMakerDataFromDragEvent';
import ICookEditorState from '@/types/ICookEditorState';
import ILogicConfig from '@/types/ILogicConfig';

export type ICallback = (logicConfig: ILogicConfig) => void

const handleDrop = (cookEditorState: ICookEditorState, e: DragEvent, callBack: ICallback) => {
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
    callBack(logicConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
