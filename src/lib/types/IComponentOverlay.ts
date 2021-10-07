import { IComponentRect } from "../components/cook-player/utils/getComponentRect";
import IComponentConfig from "./IComponentConfig";

export default interface IComponentOverlay {
    config: IComponentConfig,
    rect: IComponentRect
}