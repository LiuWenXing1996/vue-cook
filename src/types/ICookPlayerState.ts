import ICookStateBase from "./ICookStateBase";
import IPage from "./IPage";

export default interface ICookPlayerState extends ICookStateBase {
    type: "player",
    page: IPage
}