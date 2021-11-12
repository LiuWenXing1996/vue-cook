import ICookEditorState from '@/types/ICookEditorState';
import { reactive } from 'vue';
import defaultMakerList from './defaultMakerList';
import defaultSplitLayout from './defaultSplitLayout';

type ICookEditorStateOptions = Partial<Omit<ICookEditorState, "type">>

export default function createCookEditorState(state?: Partial<ICookEditorStateOptions>) {
    state = state || {}
    const _state: ICookEditorState = reactive<ICookEditorState>({
        type: "editor",
        makerList: defaultMakerList,
        pages: [],
        layout: defaultSplitLayout,
        ...state
    })
    // 触发maker install
    const makerList = state.makerList || defaultMakerList
    makerList.map(maker => {
        maker.install?.(_state)
    })
    return _state
}