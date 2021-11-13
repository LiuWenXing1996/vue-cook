import ICookPlayerState from '@/types/ICookPlayerState';
import { reactive } from 'vue';
import defaultMakerList from './defaultMakerList';

type ICookPlayerStateOptions = Partial<Omit<ICookPlayerState, "page" | "type">> & {
    page: ICookPlayerState["page"]
}

export default function createCookPlayerState(state: ICookPlayerStateOptions): ICookPlayerState {
    const _state: ICookPlayerState = reactive<ICookPlayerState>({
        type: "player",
        makerList: defaultMakerList,
        ...state
    })
    // 触发maker install
    const makerList = state.makerList || defaultMakerList
    makerList.map(maker => {
        maker.install?.(_state)
    })
    return reactive(_state);
}