import IComponentConfig from '@/types/IComponentConfig';
import useComponentMaker from '@/hooks/useComponentMaker';
import makeDefaultComponentConfig from '@/utils/makeDefaultComponentConfig';
import getMakerDataFromDragEvent from '@/utils/getMakerDataFromDragEvent';
import ICookEditorState from '@/types/ICookEditorState';

export type ICallback = (componentConfig: IComponentConfig) => void

const handleDrop = (cookEditorState: ICookEditorState, e: DragEvent, callBack: ICallback) => {
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
    const componentConfig = makeDefaultComponentConfig(maker.value);
    callBack(componentConfig)
    if (e.target && e.target instanceof HTMLElement) {
        e.target.classList.remove('dragenter')
    }
}

export default handleDrop
