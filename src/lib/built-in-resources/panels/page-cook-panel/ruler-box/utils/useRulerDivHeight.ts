import createRenderLoop from "@/lib/utils/createRenderLoop";
import { onUnmounted, ref, Ref } from "vue";

export default function useRulerDivHeight(rulerDiv: Ref<HTMLDivElement | undefined>) {
    const height = ref(0)
    const stopFunc = createRenderLoop(() => {
        if (rulerDiv.value) {
            height.value = rulerDiv.value.clientHeight
        }
    })
    onUnmounted(() => {
        stopFunc()
    })
    return height
}