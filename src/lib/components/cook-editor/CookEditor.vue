<template>
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
</template>
<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue';
import ICookConfig from '$/types/ICookConfig';
import { VueCookEditroTag } from '$/utils/const';
import IPanelConfig from '@/lib/types/IPanelConfig'
import TelportBox from './components/draggable-tabs/TelportBox.vue'
import DraggableTabs from './components/draggable-tabs/DraggableTabs.vue'
import makePanelConfigDefault from '@/lib/utils/makePanelConfigDefault';
import { PageComponentTreeMaker, ResourcePanelMaker } from '@/lib/built-in-resources/panels';

const props = defineProps({
    config: {
        type: Object as () => ICookConfig,
        required: true
    }
})
const { config } = toRefs(props)
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

type SplitPaneName = "left" | "center" | "right" | "bottom"
interface ISplitPaneConfig {
    name: SplitPaneName,
    list: IPanelConfig[]
}
const splitPaneConfigList = ref<ISplitPaneConfig[]>([
    {
        name: "left",
        list: [
            makePanelConfigDefault(PageComponentTreeMaker),
            makePanelConfigDefault(PageComponentTreeMaker),
        ]
    },
    {
        name: "center",
        list: [
            makePanelConfigDefault(PageComponentTreeMaker),
            makePanelConfigDefault(PageComponentTreeMaker),
        ]
    },
    {
        name: "right",
        list: [
            makePanelConfigDefault(PageComponentTreeMaker),
            makePanelConfigDefault(PageComponentTreeMaker),
        ]
    },
    {
        name: "bottom",
        list: [
            makePanelConfigDefault(ResourcePanelMaker)
        ]
    }
])

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