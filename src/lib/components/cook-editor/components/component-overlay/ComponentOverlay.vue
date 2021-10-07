<template>
    <div
        class="component-overlay"
        :class="[{ selected: selected }]"
        :data-name="overlay.config.makerName"
        :draggable="true"
        :data-uid="overlay.config.uid"
        @click="handleClick(overlay.config, selected, $event)"
        @dragstart="handleDragStart(overlay.config, $event)"
    >
        <div
            class="component-slot"
            v-for="(slot,key) in overlay.config.attrs?.slots"
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
        overlay: {
            type: Object as () => IComponentOverlay,
            required: true
        }
    }
)
const { overlay } = toRefs(props)
const toPx = (n: number) => `${n}px`
const width = computed(() => toPx(overlay.value.rect.width))
const height = computed(() => toPx(overlay.value.rect.height))
const left = computed(() => toPx(overlay.value.rect.left))
const top = computed(() => toPx(overlay.value.rect.top))
const componentSelected = useComponentSelected()
const selected = computed(() => componentSelected.value?.uid === overlay.value.config.uid) // WHY为什么必须要用UID来判断，直接判断对象相等不可以呢？

</script>
<style lang="less" scoped>
.component-overlay {
    position: absolute;
    z-index: 3;
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