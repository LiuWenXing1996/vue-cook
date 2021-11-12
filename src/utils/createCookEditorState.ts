import useComponentPickerEnable from '@/hooks/useComponentPickerEnable';
import ICookEditorState from '@/types/ICookEditorState';
import { reactive } from 'vue';
import defaultMakerList from './defaultMakerList';
import defaultSplitLayout from './defaultSplitLayout';

export default function createCookEditorState(state?: Partial<ICookEditorState>) {
    state = state || {}
    const _state: ICookEditorState = reactive({
        makerList: defaultMakerList,
        pages: [],
        layout: defaultSplitLayout,
        ...state
    })
    // 触发maker install
    const makerList = state.makerList || defaultMakerList
    makerList.map(maker => {
        if (maker.type === "panel") {
            maker.install?.(_state)
        }
    })
    return _state
}