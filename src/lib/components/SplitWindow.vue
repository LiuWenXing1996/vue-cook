<template>
    <splitpanes
        v-if="config.splitConfig"
        :horizontal="config.splitConfig.isH"
        class="splitpanes-theam"
    >
        <pane v-for="_config in config.splitConfig.innerWindows" min-size="15" :size="_config.size">
            <split-window :config="_config" :parent-config="config"></split-window>
        </pane>
    </splitpanes>
    <n-tabs v-else type="card" closable v-model:value="currentTabIndex" class="n-tabs-theam">
        <n-tab-pane
            :name="index"
            :tab="innerWinMaker?.title"
            v-for="(innerWinMaker,index) in innerWindowMakers"
        >
            <keep-alive>
                <component :is="innerWinMaker?.content"></component>
            </keep-alive>
        </n-tab-pane>
        <template #suffix>
            <n-icon size="20" title="垂直分割" class="icon" @click="splitWin(true)">
                <SplitHorizontal32Regular />
            </n-icon>
            <n-icon size="20" title="水平分割" class="icon" @click="splitWin(false)">
                <SplitVertical32Regular />
            </n-icon>
            <n-icon size="20" title="悬浮窗口" class="icon" @click="floatWin">
                <WindowNew20Regular />
            </n-icon>
            <n-icon size="20" title="关闭所有" class="icon" @click="closeAll">
                <CloseOutline></CloseOutline>
            </n-icon>
        </template>
    </n-tabs>
</template>
<script setup lang="ts">
import { toRefs } from '@vue/reactivity';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { NTabs, NTabPane, NIcon } from "naive-ui"
import { computed, ref } from 'vue';
import { CloseOutline } from "@vicons/ionicons5"
import { SplitHorizontal32Regular, SplitVertical32Regular, WindowNew20Regular } from "@vicons/fluent"
import useFloatWindowConfigList from '../hooks/useFloatWindowConfigList';
import type ISplitWindowConfig from '../types/ISplitWindowConfig';
import useWindowMaker from '../hooks/useWindowMaker';

const currentTabIndex = ref(0)

const props = defineProps({
    config: {
        type: Object as () => ISplitWindowConfig,
        required: true
    },
    parentConfig: {
        type: Object as () => ISplitWindowConfig
    }
})
const { config, parentConfig } = toRefs(props)
const innerWindowMakers = computed(() => {
    return config.value.innerWindows.map(e => {
        const maker = useWindowMaker(e.makerName, e.makerPackage)
        return maker.value
    })
})

const floatWin = () => {
    const winConfig = config.value.innerWindows[currentTabIndex.value]
    config.value.innerWindows = config.value.innerWindows.filter(e => e !== winConfig);
    if (winConfig) {
        useFloatWindowConfigList().value.push({
            innerWindow: winConfig
        })
    }
}

const splitWin = (isH: boolean) => {
    const winConfig = config.value.innerWindows[currentTabIndex.value]

    const restInnerWindows = config.value.innerWindows.filter(e => e !== winConfig);
    const splitConfig: ISplitWindowConfig = {
        innerWindows: [
            // winConfig
        ],
        size: config.value.size / 2
    }
    const restSplitConfig: ISplitWindowConfig = {
        innerWindows: [
            // ...restInnerWindows
        ],
        size: config.value.size / 2
    }
    config.value.innerWindows = []
    config.value.splitConfig = {
        isH: isH,
        innerWindows: [
            restSplitConfig,
            splitConfig
        ]
    }
}

const closeAll = () => {
    // if(parentConfig.value){
    //     parentConfig?.value.innerWindows=
    // }
}

</script>
<style lang="less">
.splitpanes-theam {
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
.n-tabs-theam {
    display: flex;
    flex-direction: column;
    height: 100%;
    > .n-tab-pane {
        flex-grow: 1;
    }
}
</style>