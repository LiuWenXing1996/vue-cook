<template>
    <template v-if="playerState">
        <cook-player-wrapper :state="playerState" :preview="preview"></cook-player-wrapper>
    </template>
    <template v-else>没有找到id为{{ preview }}的页面</template>
</template>
<script setup lang="ts">
import ICookEditorState from "@/types/ICookEditorState";
import ICookPlayerState from "@/types/ICookPlayerState";
import createCookPlayerState from "@/utils/createCookPlayerState";
import getCookEditorExportDataFromWindow from "@/utils/getCookEditorExportDataFromWindow";
import { toRefs } from "vue";
import CookPlayerWrapper from "./CookPlayerWrapper.vue"

const props = defineProps({
    state: {
        type: Object as () => ICookEditorState,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
})
const { preview, state } = toRefs(props)
const exportData = getCookEditorExportDataFromWindow(window.parent, preview.value)
const page = exportData?.getPage()
let playerState: ICookPlayerState | undefined
if (page) {
    playerState = createCookPlayerState({
        page: page,
        makerList: state.value.makerList
    })
}
</script>