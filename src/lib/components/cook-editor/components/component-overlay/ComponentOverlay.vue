<template>
    <div
        class="component-overlay"
        :class="[{ selected: selected }]"
        :data-name="config.makerName"
        :draggable="true"
        :data-uid="config.uid"
        @click="handleClick(config, selected, $event)"
        @dragstart="handleDragStart(config, $event)"
    >
        <div
            class="component-slot"
            v-for="(slot,key) in config.attrs?.slots"
            @drop="handleDrop(slot, $event)"
            @dragover="handleDragOver($event)"
        >{{ key }}</div>
    </div>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue";
import IComponentConfig from "$/types/IComponentConfig";
import IComponentOverlay from "$/types/IComponentOverlay";
import handleClick from "./handleClick";
import handleDragStart from "./handleDragStart";
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import useComponentSelected from "@/lib/hooks/useComponentSelected";

const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        },
        overlay: {
            type: Object as () => IComponentOverlay,
            required: true
        }
    }
)
const { config, overlay } = toRefs(props)
const toPx = (n: number) => `${n}px`
const width = computed(() => toPx(overlay.value.width))
const height = computed(() => toPx(overlay.value.height))
const left = computed(() => toPx(overlay.value.left))
const top = computed(() => toPx(overlay.value.top))
const componentSelected = useComponentSelected()
const selected = computed(() => componentSelected.value?.uid === config.value.uid) // WHY为什么必须要用UID来判断，直接判断对象相等不可以呢？

</script>
<style lang="less" scoped>
.component-overlay {
    position: fixed;
    z-index: 9999999999;
    width: v-bind(width);
    height: v-bind(height);
    left: v-bind(left);
    top: v-bind(top);
    border: solid 3px #ebeef5;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    
    &:hover {
        border-color: #409eff;
        cursor: move;
    }
    &.selected {
        border-color: #409eff;
    }
    &::before {
        content: attr(data-name);
        position: absolute;
        top: -3px;
        left: -3px;
        background-color: #409eff;
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        z-index: 1;
    }
    .component-slot {
        border: 1px dashed rgb(216, 213, 213);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        box-sizing: border-box;
        height: 100%;
    }
}
</style>