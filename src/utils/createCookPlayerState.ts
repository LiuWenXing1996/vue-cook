import ICookPlayerState from '@/types/ICookPlayerState';
import { reactive, toRefs } from 'vue';
import defaultMakerList from './defaultMakerList';

type ICookPlayerStateOptions = Partial<Omit<ICookPlayerState, "page">> & {
    page: ICookPlayerState["page"]
}

export default function createCookPlayerState(state: ICookPlayerStateOptions) {
    const _state: ICookPlayerState = reactive({
        makerList: defaultMakerList,
        extra: {},
        ...state
    })
    // 安装maker
    const makerList = state.makerList || defaultMakerList
    makerList.map(maker => {
        maker.install?.(_state)
    })
    return reactive(_state);
}