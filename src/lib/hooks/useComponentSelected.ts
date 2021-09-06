import { ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";

const componentSelected = ref<IComponentConfig>();
export default function useComponentSelected() {
    return componentSelected
}