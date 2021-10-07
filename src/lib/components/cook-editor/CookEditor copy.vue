<template>
    <div class="cook-editor">
        <splitpanes>
            <pane min-size="15" size="20">
                <page-tree :page-list="config.pages"></page-tree>
            </pane>
            <pane min-size="15" size="60">
                <splitpanes :horizontal="true">
                    <pane min-size="15" size="80">
                        <page-cook-panel :page-list="config.pages"></page-cook-panel>
                    </pane>
                    <pane min-size="15" size="20">
                        <resource-panel></resource-panel>
                    </pane>
                </splitpanes>
            </pane>
            <pane min-size="15" size="20">
                <editor-panel></editor-panel>
            </pane>
        </splitpanes>
    </div>
</template>
<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import ResourcePanel from "./components/ResourcePanel.vue"
import PageCookPanel from "./components/page-cook-panel/PageCookPanel.vue"
import EditorPanel from "./components/EditorPanel.vue"
import PageTree from "./components/PageTree.vue"
import { onMounted, onUnmounted, toRefs } from 'vue';
import ICookConfig from '$/types/ICookConfig';
import { VueCookEditroTag } from '$/utils/const';

const props = defineProps({
    config: {
        type: Object as () => ICookConfig,
        required: true
    }
})
const { config } = toRefs(props)
onMounted(() => {
    // @ts-ignore
    window[VueCookEditroTag] = true
})
onUnmounted(() => {
    // @ts-ignore
    delete window[VueCookEditroTag]
})
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