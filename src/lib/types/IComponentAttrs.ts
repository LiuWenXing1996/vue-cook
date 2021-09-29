import { CSSProperties } from "vue";
import IComponentConfig from "./IComponentConfig";
import IFuctionConfig from "./IFuctionConfig";

export default interface IComponentAttrs {
    render?: {
        style?: CSSProperties,
        class?: string[]
    },
    style?: CSSProperties,
    class?: string[],
    props?: Record<string, any>,
    slots?: Record<string, IComponentConfig[]>,
    emits?: Record<string, IFuctionConfig[]>,
}