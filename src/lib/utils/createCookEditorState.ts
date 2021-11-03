import ICookEditorState from '@/lib/types/ICookEditorState';
import { reactive } from 'vue';
import defaultSplitLayout from './defaultSplitLayout';
import { defaultMakerList } from '..';

export default function createCookEditorState(state?: Partial<ICookEditorState>) {
    state = state || {}
    const makerList = state.makerList || defaultMakerList
    const _state: ICookEditorState = reactive({
        makerList,
        pages: state.pages || [],
        layout: state.layout || defaultSplitLayout,
        extra: state.extra || {},
    })
    // 安装maker
    makerList.map(maker => {
        maker.install?.(_state)
    })
    return _state
}