import ICookPlayerState from '@/lib/types/ICookPlayerState';
import { reactive, toRefs } from 'vue';
import IPage from '../types/IPage';
import defaultMakerList from './defaultMakerList';

type ICookPlayerStateOptions = Partial<Omit<ICookPlayerState, "page">> & {
    page: IPage
}

export default function createCookPlayerState(state: ICookPlayerStateOptions) {
    state = state || {}
    const makerList = state.makerList || defaultMakerList
    const _state: ICookPlayerState = reactive({
        makerList,
        page: state.page,
        extra: state.extra || {},
    })
    // 安装maker
    makerList.map(maker => {
        maker.install?.(_state)
    })
    return reactive(_state);
}