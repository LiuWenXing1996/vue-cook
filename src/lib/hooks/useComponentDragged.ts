import { ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";

const componentDragged = ref<IComponentConfig>();
export default function useComponentDragged() {
    return componentDragged
}