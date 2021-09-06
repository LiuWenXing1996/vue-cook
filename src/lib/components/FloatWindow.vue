<template>
    <div class="windows-container">
        <VueWinBox ref="winBoxRef" :options="options">
            <component :is="maker?.content"></component>
        </VueWinBox>
    </div>
    <n-popover
        :show="showPopover"
        :x="x"
        :y="y"
        trigger="manual"
        @clickoutside="showPopover = false"
    >厉害！</n-popover>TODO:浮动窗口可回收
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import { NPopover } from "naive-ui"
import type IFloatWindowConfig from "../types/IFloatWindowConfig";
import VueWinBox from 'vue-winbox'
import useWindowMaker from "../hooks/useWindowMaker";

const props = defineProps({
    config: {
        type: Object as () => IFloatWindowConfig,
        required: true
    }
})

const { config } = toRefs(props)
const options = computed(() => toWinBoxConfig(config.value))
const maker = useWindowMaker(config.value.innerWindow.makerName, config.value.innerWindow.makerPackage)
const winBoxRef = ref();
const x = ref(0)
const y = ref(0)
const showPopover = ref(false)

const winDiv = ref<HTMLDivElement>()
const toWinBoxConfig = (config: IFloatWindowConfig): WinBox.Params => {
    return {
        title: maker.value?.title,
    }
}

const overwriteMin = (winBox: WinBox) => {
    const _min = winBox.minimize
    winBox.minimize = (state: boolean): WinBox => {
        // _min.bind(winBox)(state)
        const wbMinIcon = winDiv.value?.querySelector(".winbox .wb-min") as HTMLSpanElement
        if (wbMinIcon) {
            // const rect = wbMinIcon.getBoundingClientRect()
            x.value = wbMinIcon.clientLeft;
            y.value = wbMinIcon.clientTop;
            showPopover.value = true;
        }
        return winBox
    }
}

watch(winBoxRef, () => {
    if (winBoxRef.value.winBox) {
        overwriteMin(winBoxRef.value.winBox)
    }
})

</script>
<style lang="less" scoped>
.windows-container {
    :deep(.winbox) {
        background-color: #fafafc;

        .wb-title {
            color: #000000;
            font-family: Arial, sans-serif;
            font-size: 14pt;
        }
        .wb-icon {
            filter: invert(1);
        }

        .wb-min {
            background-image: url("@sicons/fluent/WindowNew16Regular.svg");
            filter: invert(1);
            background-size: 20px;
            background-position: center;
            transform: rotate(180deg);
        }
    }
}
</style>