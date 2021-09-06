import { CSSProperties } from "vue";
import IComponentAttrs from "./IComponentAttrs";
import ICompositionConfig from './ICompositionConfig';

export default interface IComponentConfig {
    uid: string,
    makerName: string,
    makerPackage: string,
    attrs?: IComponentAttrs
}

