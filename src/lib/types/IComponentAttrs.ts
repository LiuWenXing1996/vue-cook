import { CSSProperties } from "vue";
import IComponentConfig from "./IComponentConfig";
import ICompositionConfig from "./ICompositionConfig";

export default interface IComponentAttrs {
    render?: {
        style?: CSSProperties,
        class?: string[]
    },
    style?: CSSProperties,
    class?: string[],
    props?: Record<string, any>,
    slots?: Record<string, IComponentConfig[]>,
    emits?: Record<string, ICompositionConfig[]>,
}