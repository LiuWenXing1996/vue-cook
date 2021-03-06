<template>
    <div class="page-cook-content">
        <!-- <input /> -->
        <iframe :src="path" ref="iframeRef"></iframe>
        <component-picker :iframe-ref="iframeRef" :enable-picker="enablePicker" :size="size"></component-picker>
    </div>
</template>
<script setup lang="ts">

import ICookEditorState from "@/types/ICookEditorState";
import IPage from "@/types/IPage";
import IPageCookPanelSize from "@/types/IPageCookPanelSize";
import exportCookEditorData from "@/utils/exportCookEditorData";
import getCookPlayerExportDataFromWindow from "@/utils/getCookPlayerExportDataFromWindow";
import { computed, inject, onMounted, ref, toRefs, watch } from "vue";
import ComponentPicker from "./ComponentPicker.vue";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    pageEditing: {
        type: Object as () => IPage,
        required: true
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

const { pageEditing, size } = toRefs(props)
const iframeRef = ref<HTMLIFrameElement>()
const path = ref(`${location.href}?preview=${pageEditing.value.uid}`)
const toPx = (n: number) => `${n}px`
const widthPx = computed(() => toPx(size.value.width * size.value.scale / 100))
const heightPx = computed(() => toPx(size.value.height * size.value.scale / 100))
const iframeWidthPx = computed(() => toPx(size.value.width))
const iframeHeightPx = computed(() => toPx(size.value.height))
const scaleString = computed(() => {
    return `scale(${size.value.scale / 100})`
})
exportCookEditorData(cookEditorState, pageEditing.value.uid)

watch(pageEditing, () => {
    const exportData = getCookPlayerExportDataFromWindow(iframeRef?.value?.contentWindow || undefined)
    if (exportData) {
        exportData.setPage(pageEditing.value)
    }
}, {
    deep: true
})

</script>
<style lang="less" scoped>
.page-cook-content {
    position: relative;
    width: v-bind(widthPx);
    height: v-bind(heightPx);

    iframe {
        border: none;
        position: absolute;
        width: v-bind(iframeWidthPx);
        height: v-bind(iframeHeightPx);
        left: 0;
        top: 0;
        z-index: 2;
        transform: v-bind(scaleString);
        transform-origin: top left;
    }
}
</style>