<template>
    <div class="tab-panel" ref="tabPanelRef" :class="{ actived: isActived }">
        <div class="tab-title">{{ config.title }}</div>
        <div class="tab-content">
            {{ config.title }}
            <keep-alive>
                <component :is="config.content"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import type { Component, } from "vue";

export interface ITabConfig {
    title: string,
    content: Component
}
const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    activeIndex: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    config: {
        type: Object as () => ITabConfig,
        required: true
    }
})

const { index, activeIndex, count, config } = toRefs(props)
const tabPanelRef = ref<HTMLDivElement>()
const toPx = (n: number) => `${n}px`
const width = computed(() => {
    let widthNumber = 0
    if (tabPanelRef.value) {
        const totalWidth = tabPanelRef.value.clientWidth;
        widthNumber = totalWidth / count.value
    }
    return toPx(widthNumber)
})
const isActived = computed(() => {
    return activeIndex.value == index.value
})
const zIndex = computed(() => {
    if (isActived.value) {
        return count.value + 1
    } else {
        return index.value
    }
})
const left = computed(() => {
    let leftNumber = 0
    if (tabPanelRef.value) {
        const totalWidth = tabPanelRef.value.clientWidth;
        const perWidth = totalWidth / count.value
        leftNumber = perWidth * (index.value)
    }
    return toPx(leftNumber)
})



</script>
<style lang="less" scoped>
.tab-panel {
    position: absolute;
    top: 20px;
    left: 0;
    width: 70%;
    height: 70%;
    padding: 20px;
    border-radius: 10px;
    background-color: beige;
    margin-bottom: 20px;
    box-sizing: border-box;
    z-index: v-bind(zIndex);
    &.actived {
        .tab-title {
            background-color: rgb(88, 88, 218);
        }
    }
    .tab-title {
        height: 20px;
        width: v-bind(width);
        background-color: rgb(220, 220, 245);
        position: absolute;
        top: -20px;
        left: v-bind(left);
        &:hover {
            background-color: rgb(88, 88, 218);
            cursor: pointer;
        }
    }
}
</style>