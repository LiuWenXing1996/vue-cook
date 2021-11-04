<template>
    <cook-player :state="state" :preview="preview"></cook-player>
</template>
<script setup lang="ts">
import CookPlayer from "@/components/cook-player/index.vue"
import ICookPlayerState from "@/types/ICookPlayerState";
import getCookEditorExportDataFromWindow from "@/utils/getCookEditorExportDataFromWindow";
import { toRefs, watch } from "vue";
const props = defineProps({
    state: {
        type: Object as () => ICookPlayerState,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
})
const { preview, state } = toRefs(props)
const exportData = getCookEditorExportDataFromWindow(window.parent, preview.value)
watch(() => state.value.page, () => {
    exportData?.setPage(state.value.page)
})
</script>