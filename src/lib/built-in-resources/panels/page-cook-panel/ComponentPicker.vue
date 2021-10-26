<template>
    <div
        class="component-picker"
        @mousemove="handleMouseMove($event)"
        @dragover="handleDragOver($event)"
        @mouseleave="handleMouseLeave"
    >
        <template v-if="overlay">
            <component-overlay :overlay="overlay" :size="size"></component-overlay>
        </template>
    </div>
</template>
<script setup lang="ts">
import IComponentOverlay from "@/lib/types/IComponentOverlay"
import IPageCookPanelSize from "@/lib/types/IPageCookPanelSize"
import getCookPlayerExportDataFromWindow from "@/lib/utils/getCookPlayerExportDataFromWindow"
import { computed, ref, toRefs, watch } from "vue"
import ComponentOverlay from "./component-overlay/ComponentOverlay.vue"
import useComponentFocused from "@/lib/hooks/useComponentFocused"

const props = defineProps({
    iframeRef: {
        type: Object as () => HTMLIFrameElement,
    },
    enablePicker: {
        type: Boolean,
        required: true
    },
    size: {
        type: Object as () => IPageCookPanelSize,
        required: true
    }
})
const { iframeRef, enablePicker, size } = toRefs(props)
const componentFocused = useComponentFocused();
watch(componentFocused, () => {
    if (componentFocused.value) {
        const rect = iframeRef?.value?.getBoundingClientRect()
        if (rect) {
            const exportData = getCookPlayerExportDataFromWindow(iframeRef?.value?.contentWindow || undefined)
            if (exportData && rect) {
                const componentOverlay = exportData.getComponetnOverlayFromComponentConfigUid(componentFocused.value.uid)
                // if(!overlay.value)
                overlay.value = componentOverlay
            }
        }
    } else {
        overlay.value = undefined
    }
})
const handleMouseMove = (e: MouseEvent) => {
    if (enablePicker.value) {
        const rect = iframeRef?.value?.getBoundingClientRect()
        if (rect) {
            const el = iframeRef?.value?.contentWindow?.document.elementFromPoint((e.x - rect.x) / size.value.scale * 100, (e.y - rect.y) / size.value.scale * 100)
            const exportData = getCookPlayerExportDataFromWindow(iframeRef?.value?.contentWindow || undefined)
            if (exportData && rect && el) {
                const componentOverlay = exportData.getComponetnOverlayFromElement(el)
                // if(!overlay.value)
                overlay.value = componentOverlay
            }
        }
    }

}
const handleMouseLeave = () => {
    overlay.value = undefined;
}
const handleDragOver = (e: DragEvent) => {
    const rect = iframeRef?.value?.getBoundingClientRect()
    if (rect) {
        const el = iframeRef?.value?.contentWindow?.document.elementFromPoint((e.x - rect.x) / size.value.scale * 100, (e.y - rect.y) / size.value.scale * 100)
        const exportData = getCookPlayerExportDataFromWindow(iframeRef?.value?.contentWindow || undefined)
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