<template>
    <div ref="rulerDiv" class="ruler" @wheel="handleWheel"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import Ruler from "@scena/ruler";
import { RulerProps } from "@scena/ruler";
import createRenderLoop from '@/lib/utils/createRenderLoop';
import useScroll from './useScroll';

let ruler: Ruler | null = null
const rulerDiv = ref<HTMLDivElement>()
let oldWidth = 0

let stopFunc: VoidFunction | null = null

const render = () => {
    if (rulerDiv.value) {
        if (!ruler) {
            ruler = new Ruler(rulerDiv.value, {
                type: "horizontal",
                backgroundColor: "#ffffff",
                textColor: "#000000",
                unit: 100,
                zoom: 0.5
            });
        }
        const newWidth = rulerDiv.value.clientWidth
        if (oldWidth !== newWidth) {
            ruler.resize()
            oldWidth = newWidth
        }
    }
}

let scroll = useScroll();

const handleWheel = (e: WheelEvent) => {
    scroll.value.x -= e.deltaY
    ruler?.scroll(scroll.value.x)
}

onMounted(() => {
    stopFunc = createRenderLoop(render)
})
onUnmounted(() => {
    stopFunc && stopFunc()
})
</script>
<style lang="less" scoped>
.ruler {
    width: 100%;
    height: 100%;
}
</style>