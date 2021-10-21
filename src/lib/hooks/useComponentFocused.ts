import { ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";

const config = ref<IComponentConfig>();
export default function useComponentFocused() {
    return config
}