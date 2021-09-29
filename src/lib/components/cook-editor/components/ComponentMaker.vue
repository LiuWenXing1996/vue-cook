<template>
    <div
        class="component-maker"
        draggable="true"
        @dragstart="handleDragStart"
        :data-name="maker.name"
        :data-package="maker.package"
        :data-label="maker.label"
    >
        <n-icon size="50" :depth="5">
            <ComponentIcon></ComponentIcon>
        </n-icon>
    </div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue"
import type IComponentMaker from "$/types/IComponentMaker"
import ComponentIcon from "$/svgs/component.svg"
import { NIcon } from "naive-ui"

const props = defineProps({
    maker: {
        type: Object as () => IComponentMaker,
        required: true
    }
})

const { maker } = toRefs(props)

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    e?.dataTransfer?.setData('name', maker.value.name)
    e?.dataTransfer?.setData('package', maker.value.package)
}

</script>
<style lang="less" scoped>
.component-maker {
    position: relative;
    width: 100px;
    height: 100px;
    border: solid 3px #ebeef5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    box-sizing: border-box;
    &:hover {
        border-color: #409eff;
        cursor: move;
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
}
</style>