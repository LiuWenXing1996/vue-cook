import createRenderLoop from "@/lib/utils/createRenderLoop";
import { onUnmounted, ref, Ref } from "vue";

export default function useRulerDivWidth(rulerDiv: Ref<HTMLDivElement | undefined>) {
    const width = ref(0)
    const stopFunc = createRenderLoop(() => {
        if (rulerDiv.value) {
            width.value = rulerDiv.value.clientWidth
        }
    })
    onUnmounted(() => {
        stopFunc()
    })
    return width
}