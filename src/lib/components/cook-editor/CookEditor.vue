<template>
    <template v-if="!preview">
        <n-config-provider :locale="zhCN" :date-locale="dateZhCN" style="height: 100%;">
            <div class="cook-editor">
                <telport-box :lock="lockTelport"></telport-box>
                <splitpanes>
                    <!-- TODO：保持四个面板不变，然后开发分栏功能 -->
                    <pane min-size="15" size="20">
                        <draggable-tabs :list="getPaneData('left')"></draggable-tabs>
                    </pane>
                    <pane min-size="15" size="60">
                        <splitpanes :horizontal="true">
                            <pane min-size="15" size="80">
                                <draggable-tabs :list="getPaneData('center')"></draggable-tabs>
                            </pane>
                            <pane min-size="15" size="20">
                                <draggable-tabs :list="getPaneData('bottom')"></draggable-tabs>
                            </pane>
                        </splitpanes>
                    </pane>
                    <pane min-size="15" size="20">
                        <draggable-tabs :list="getPaneData('right')"></draggable-tabs>
                    </pane>
                </splitpanes>
            </div>
        </n-config-provider>
    </template>
    <template v-else>
        <cook-player :state="playerState"></cook-player>
    </template>
</template>
<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { onMounted, onUnmounted, ref, toRefs, provide, computed, toRaw } from 'vue';
import ICookEditorState from '@/lib/types/ICookEditorState';
import { VueCookEditroTag } from '@/lib/utils/const';
import TelportBox from './TelportBox.vue'
import DraggableTabs from './DraggableTabs.vue'
import { SplitPaneName } from '@/lib/types/ISplitPaneConfig';
import { NConfigProvider, zhCN, dateZhCN } from "naive-ui"
import CookPlayer from "@/lib/components/cook-player/CookPlayer.vue"
import { createCookPlayerState } from '@/lib';
const props = defineProps({
    state: {
        type: Object as () => ICookEditorState,
        required: true
    },
    preview: {
        type: String,
    }
})

const { preview, state } = toRefs(props)
//@ts-ignore
window.getPlayerPage = (uid: string) => {
    const page = state.value.pages.find(e => e.uid === uid)
    return page
}
//@ts-ignore
const playerPage = window.parent.getPlayerPage(preview?.value)
const playerState = createCookPlayerState({
    page: playerPage,
    preInstallMakerList: state.value.getMakerList()
})
//TODO:刷新page
provide('cookEditorState', state.value)
const lockTelport = ref(true)
onMounted(() => {
    lockTelport.value = false
    // @ts-ignore
    window[VueCookEditroTag] = true
})
onUnmounted(() => {
    // @ts-ignore
    delete window[VueCookEditroTag]
})

const splitPaneConfigList = computed(() => {
    return state.value.splines
})

const getPaneData = (name: SplitPaneName) => {
    const found = splitPaneConfigList.value.find(e => e.name === name);
    return found?.list || []
}

</script>
<style lang="less" scoped>
.cook-editor {
    height: 100%;
    :deep(.splitpanes) {
        background-color: white;

        .splitpanes__splitter {
            background-color: rgb(239, 239, 245);
            position: relative;
        }
        .splitpanes__splitter:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            transition: opacity 0.4s;
            background-color: #409eff;
            opacity: 0;
            z-index: 1;
        }
        .splitpanes__splitter:hover:before {
            opacity: 1;
        }

        &.splitpanes--vertical > .splitpanes__splitter:before {
            left: -2px;
            right: -2px;
            height: 100%;
            width: 5px;
        }
        &.splitpanes--horizontal > .splitpanes__splitter:before {
            top: -2px;
            bottom: -2px;
            width: 100%;
            height: 5px;
        }
    }
}
</style>