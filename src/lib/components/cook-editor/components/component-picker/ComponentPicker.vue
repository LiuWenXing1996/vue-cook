<template>
    <div
        class="component-picker"
        @mousemove="handleMouseMove($event)"
        @dragover="handleDragOver($event)"
        @mouseleave="handleMouseLeave"
    >
        <template v-if="overlay">
            <component-overlay :overlay="overlay"></component-overlay>
        </template>
    </div>
</template>
<script setup lang="ts">
import IComponentConfig from "@/lib/types/IComponentConfig"
import IComponentOverlay from "@/lib/types/IComponentOverlay"
import getCookPlayerExportDataFromWindow from "@/lib/utils/getCookPlayerExportDataFromWindow"
import { computed, ref, toRefs } from "vue"
import ComponentOverlay from "../component-overlay/ComponentOverlay.vue"

const props = defineProps({
    iframeRef: {
        type: Object as () => HTMLIFrameElement | undefined,
        required: true
    },
    enablePicker: {
        type: Boolean,
        required: true
    }
})
const { iframeRef, enablePicker } = toRefs(props)
const handleMouseMove = (e: MouseEvent) => {
    if (enablePicker.value) {
        const rect = iframeRef.value?.getBoundingClientRect()
        if (rect) {
            const el = iframeRef.value?.contentWindow?.document.elementFromPoint(e.x - rect.x, e.y - rect.y)
            const exportData = getCookPlayerExportDataFromWindow(iframeRef.value?.contentWindow || undefined)
            if (exportData && rect && el) {
                const componentOverlay = exportData.getComponetnOverlayFromElement(el)
                overlay.value = componentOverlay
            }
        }
    }

}
const handleMouseLeave = () => {
    overlay.value = undefined;
}
const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    const rect = iframeRef.value?.getBoundingClientRect()
    if (rect) {
        const el = iframeRef.value?.contentWindow?.document.elementFromPoint(e.x - rect.x, e.y - rect.y)
        const exportData = getCookPlayerExportDataFromWindow(iframeRef.value?.contentWindow || undefined)
        if (exportData && rect && el) {
            const componentOverlay = exportData.getComponetnOverlayFromElement(el)
            overlay.value = componentOverlay
        }
    }
}
const overlay = ref<IComponentOverlay>()
const width = computed(() => {
    return enablePicker.value ? "100%" : 0
})
const height = computed(() => {
    return enablePicker.value ? "100%" : 0
})

</script>
<style lang="less" scoped>
.component-picker {
    position: absolute;
    width: v-bind(width);
    height: v-bind(height);
    left: 0;
    top: 0;
    z-index: 4;
}
</style>