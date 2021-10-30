import { IComponentRect } from "../components/cook-player/utils/getComponentRect";

export default interface IComponentOverlay {
    configUid: string,
    pageUid: string,
    rect: IComponentRect
}