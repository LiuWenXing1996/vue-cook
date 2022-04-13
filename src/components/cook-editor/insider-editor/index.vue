<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" style="height: 100%;">
        <div class="cook-editor">
            <div class="left-pane">
                <panel-list :list="state.layout.left"></panel-list>
            </div>
            <div class="center-bottom-pane">
                <div class="center-pane">
                    <panel-list :list="state.layout.center"></panel-list>
                </div>
                <div class="bottom-pane">
                    <panel-list :list="state.layout.bottom"></panel-list>
                </div>
            </div>
            <div class="right-pane" min-size="15" size="20">
                <panel-list :list="state.layout.right"></panel-list>
            </div>
        </div>
    </n-config-provider>
</template>
<script setup lang="ts">
import { toRefs, provide, ref } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
import PanelList from "./PanelList.vue"
import { NConfigProvider, zhCN, dateZhCN } from "naive-ui"
// TODO:现移除splitpanes，后面参照splitpanes实现拖拽面板
const props = defineProps({
    state: {
        type: Object as () => ICookEditorState,
        required: true
    }
})
const { state } = toRefs(props)
provide('cookEditorState', state.value)
</script>
<style lang="less" scoped>
.cook-editor {
    height: 100%;
    display: flex;
    .left-pane {
        width: 20%;
        height: 100%;
        border-right: 1px solid #efeff5;
        box-sizing: border-box;
    }
    .center-bottom-pane {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .center-pane {
            height: 70%;
            width: 100%;
        }
        .bottom-pane {
            height: 30%;
            width: 100%;
            border-top: 1px solid #efeff5;
            box-sizing: border-box;
        }
    }
    .right-pane {
        width: 20%;
        height: 100%;
        border-left: 1px solid #efeff5;
        box-sizing: border-box;
    }

    :deep(table) {
        margin: unset;
        display: table;
    }

    :deep(th),
    :deep(td) {
        border: unset;
    }
}
</style>