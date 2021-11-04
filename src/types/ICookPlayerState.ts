import ICookState from "./ICookState";
import IPage from "./IPage";


declare global {
    interface ICookPlayerStateExtraVueCook { }
    interface ICookPlayerStateExtra {
        VueCook: Partial<ICookPlayerStateExtraVueCook>
    }
}

export default interface ICookPlayerState extends ICookState {
    page: IPage
    extra: Partial<ICookPlayerStateExtra>
}