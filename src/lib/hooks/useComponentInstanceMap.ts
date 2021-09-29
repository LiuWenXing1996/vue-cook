import { ComponentInternalInstance, ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";

const _map = new Map<IComponentConfig, ComponentInternalInstance | null>();

const map = ref(_map)

export default function useComponentInstanceMap() {
    return map
}