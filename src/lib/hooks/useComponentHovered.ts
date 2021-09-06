import { ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";

const componentHovered = ref<IComponentConfig>();
export default function useComponentHovered() {
    return componentHovered
}