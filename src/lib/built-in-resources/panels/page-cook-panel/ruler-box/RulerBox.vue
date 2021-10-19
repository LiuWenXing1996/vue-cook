<template>
    <div class="ruler-box">
        <div class="ruler-outer-box"></div>
        <div class="ruler-horizontal-wrapper">
            <ruler-horizontal></ruler-horizontal>
        </div>
        <div class="ruler-vertical-wrapper">
            <ruler-vertical></ruler-vertical>
        </div>
        <div class="ruler-inner-box">
            <div class="ruler-inner-box-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import IPageCookPanelSize from '@/lib/types/IPageCookPanelSize';
import { computed, ref, toRefs } from 'vue';
import RulerHorizontal from "./RulerHorizontal.vue"
import RulerVertical from "./RulerVertical.vue"
import useScroll from './useScroll';
//TODO:两个直尺滚动的幅度有问题
const props = defineProps({
    size: {
        type: Object as () => IPageCookPanelSize,
        required: true
    }
})
const { size } = toRefs(props)
const scroll = useScroll();
const toPx = (n: number) => `${n}px`
const leftPx = computed(() => toPx(scroll.value.x));
const topPx = computed(() => toPx(scroll.value.y));

</script>
<style lang="less" scoped>
.ruler-box {
    width: 100%;
    height: 100%;
    position: relative;
    .ruler-outer-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: #efeff5;
        box-sizing: border-box;
    }
    .ruler-horizontal-wrapper {
        position: absolute;
        top: 0;
        left: 30px;
        width: calc(100% - 30px);
        height: 30px;
        overflow: hidden;
    }
    .ruler-vertical-wrapper {
        position: absolute;
        left: 0;
        top: 30px;
        width: 30px;
        height: calc(100% - 30px);
    }
    .ruler-inner-box {
        position: absolute;
        left: 30px;
        top: 30px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        overflow: hidden;
        .ruler-inner-box-content {
            position: absolute;
            width: fit-content;
            height: fit-content;
            position: absolute;
            left: v-bind(leftPx);
            top: v-bind(topPx);
        }
    }
}
</style>