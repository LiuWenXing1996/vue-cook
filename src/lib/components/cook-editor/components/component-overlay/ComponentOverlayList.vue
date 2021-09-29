<template>
    <ComponentOverlay
        v-for="[componentConfig, overlay] in componentOverlayMap"
        :overlay="overlay"
        :config="componentConfig"
    ></ComponentOverlay>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import ComponentOverlay from "./ComponentOverlay.vue"
import IComponentConfig from "$/types/IComponentConfig";
import IComponentOverlay from "$/types/IComponentOverlay";
import createRenderLoop from "$/utils/createRenderLoop";
import getCookPlayerExportDataFromWindow from "@/lib/utils/getCookPlayerExportDataFromWindow";

const props = defineProps({
    iframeRef: {
        type: Object as () => HTMLIFrameElement | undefined,
        required: true
    }
})
const { iframeRef } = toRefs(props)
// TODO:不用一下子显示全部的overlay，每次显示选中的即可

const componentOverlayMap = ref<Map<IComponentConfig, IComponentOverlay>>(new Map());
const render = () => {
    const exportData = getCookPlayerExportDataFromWindow(iframeRef.value?.contentWindow || undefined)
    const rect = iframeRef.value?.getBoundingClientRect()
    if (exportData && rect) {
        const _componentOverlayMap = exportData.getComponentOverlayMap()
        _componentOverlayMap.forEach(e => {
            const { x, y } = rect;
            e.left += x;
            e.right += x;
            e.top += y;
            e.bottom += y;
        })
        componentOverlayMap.value = _componentOverlayMap;
    }
}
let stopFunc: VoidFunction | undefined
onMounted(() => {
    stopFunc = createRenderLoop(() => {
        render()
    })
})
onUnmounted(() => {
    stopFunc?.()
})

</script>
<style lang="less" scoped>
</style>