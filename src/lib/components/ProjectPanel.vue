<template>
    <div class="project-panel">
        <splitpanes>
            <pane min-size="15" size="25">
                <ResourcePanel></ResourcePanel>
            </pane>
            <pane min-size="15" size="75">
                <ComponentOperate :config="config.rootComponentConfig"></ComponentOperate>
            </pane>
        </splitpanes>
        <WindowsList :list="config.floatWindowConfigList"></WindowsList>
    </div>
</template>
<script setup lang="ts">
import WindowsList from "./FlotWindowList.vue";
import type IProjectConfig from "../types/IProjectConfig";
import ResourcePanel from "./ResourcePanel.vue";
import ComponentOperate from "./ComponentOperate.vue";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

defineProps(
    {
        config: {
            type: Object as () => IProjectConfig,
            required: true
        }
    }
)

</script>
<style lang="less" scoped>
.project-panel {
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
        .icon {
            &:hover {
                cursor: pointer;
                color: #409eff;
            }
        }
    }
}
</style>