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
    // 安装maker
    const makerList = state.makerList || defaultMakerList
    makerList.map(maker => {
        maker.install?.(_state)
    })
    // 默认的一些状态
    useComponentPickerEnable(_state).set(true)
    return _state
}