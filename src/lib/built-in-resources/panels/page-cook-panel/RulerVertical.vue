<template>
    <div ref="rulerDiv" class="ruler"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import Ruler from "@scena/ruler";
import { RulerProps } from "@scena/ruler";
import createRenderLoop from '@/lib/utils/createRenderLoop';


let ruler: Ruler | null = null
const rulerDiv = ref<HTMLDivElement>()
let oldHeight = 0

let stopFunc: VoidFunction | null = null

const render = () => {
    if (rulerDiv.value) {
        if (!ruler) {
            ruler = new Ruler(rulerDiv.value, {
                type: "vertical",
                backgroundColor: "#ffffff",
                textColor: "#000000"
            });
        }
        const newHeight = rulerDiv.value.clientHeight
        if (oldHeight !== newHeight) {
            ruler.resize()
            oldHeight = newHeight
        }
    }
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