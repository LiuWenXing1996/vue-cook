<template>
    <template v-if="playerState">
        <cook-player-wrapper :state="playerState" :preview="preview"></cook-player-wrapper>
    </template>
    <template v-else>没有找到id为{{ preview }}的页面</template>
</template>
<script setup lang="ts">
import CookPlayer from "@/lib/components/cook-player/CookPlayer.vue"
import ICookEditorState from "@/lib/types/ICookEditorState";
import ICookPlayerState from "@/lib/types/ICookPlayerState";
import createCookPlayerState from "@/lib/utils/createCookPlayerState";
import getCookEditorExportDataFromWindow from "@/lib/utils/getCookEditorExportDataFromWindow";
import { toRefs, watch } from "vue";
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
        preInstallMakerList: state.value.getMakerList()
    })
}
</script>