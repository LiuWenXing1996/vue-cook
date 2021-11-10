import ICookState from "./ICookState";
import IPage from "./IPage";

export default interface ICookPlayerState extends ICookState {
    page: IPage
}