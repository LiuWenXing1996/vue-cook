<template>
    <cook-player :state="state" :preview="preview"></cook-player>
</template>
<script setup lang="ts">
import CookPlayer from "@/lib/components/cook-player/CookPlayer.vue"
import ICookPlayerState from "@/lib/types/ICookPlayerState";
import getCookEditorExportDataFromWindow from "@/lib/utils/getCookEditorExportDataFromWindow";
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