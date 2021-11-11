<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" style="height: 100%;">
        <div class="cook-editor">
            <splitpanes>
                <pane min-size="15" size="20">
                    <panel-list :list="state.layout.left"></panel-list>
                </pane>
                <pane min-size="15" size="60">
                    <splitpanes :horizontal="true">
                        <pane min-size="15" size="80">
                            <panel-list :list="state.layout.center"></panel-list>
                        </pane>
                        <pane min-size="15" size="20">
                            <panel-list :list="state.layout.bottom"></panel-list>
                        </pane>
                    </splitpanes>
                </pane>
                <pane min-size="15" size="20">
                    <panel-list :list="state.layout.right"></panel-list>
                </pane>
            </splitpanes>
        </div>
    </n-config-provider>
</template>
<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { ref, toRefs, provide } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
import PanelList from "./PanelList.vue"
import { NConfigProvider, zhCN, dateZhCN } from "naive-ui"
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