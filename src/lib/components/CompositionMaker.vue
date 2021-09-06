<template>
    <div
        class="composition-maker"
        draggable="true"
        @dragstart="handleDragStart"
        :data-name="maker.name"
        :data-label="maker.label"
    >{{ maker.name }}</div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue"
import type ICompositionMaker from "$/types/ICompositionMaker"

const props = defineProps({
    maker: {
        type: Object as () => ICompositionMaker,
        required: true
    }
})

const { maker } = toRefs(props)

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    e?.dataTransfer?.setData('name', maker.value.name)
}

</script>
<style lang="less" scoped>
.composition-maker {
    position: relative;
    width: calc(100% - 20px);
    // margin-left: 10px;
    border: solid 3px #ebeef5;
    // margin-top: 20px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    box-sizing: border-box;
    &:hover {
        border-color: #409eff;
        cursor: move;
    }
    &:last-of-type {
        margin-bottom: 20px;
    }
    &::before {
        content: attr(data-label);
        position: absolute;
        top: -3px;
        left: -3px;
        background-color: #409eff;
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        z-index: 1;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
}
</style>