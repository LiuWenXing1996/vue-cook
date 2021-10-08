<template>
    <div
        class="component-maker"
        draggable="true"
        @dragstart="handleDragStart"
        :data-name="maker.name"
        :data-package="maker.package"
        :data-label="maker.label"
    >
        <div class="icon-wrapper">
            <n-icon size="25" :depth="5">
                <!-- icon 调小，然后将名字和包名显示到图标的下面，类似于文件管理器的那种 -->
                <ComponentIcon></ComponentIcon>
            </n-icon>
        </div>
        <div class="maker-detail">
            <div class="maker-name">{{ maker.name }}</div>
            <div class="maker-pkg">{{ maker.package }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue"
import type IComponentMaker from "$/types/IComponentMaker"
import ComponentIcon from "$/svgs/component.svg"
import { NIcon, NTooltip } from "naive-ui"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable"

const props = defineProps({
    maker: {
        type: Object as () => IComponentMaker,
        required: true
    }
})

const { maker } = toRefs(props)
const componentPickerEnable = useComponentPickerEnable()

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    e?.dataTransfer?.setData('name', maker.value.name)
    e?.dataTransfer?.setData('package', maker.value.package)
    componentPickerEnable.value = true
}

</script>
<style lang="less" scoped>
.component-maker {
    width: 200px;
    display: flex;
    align-items: center;
    border: #efeff5 1px solid;
    border-radius: 2px;
    padding: 5px;
    &:hover {
        border-color: #409eff;
        cursor: move;
    }

    .maker-detail {
        display: flex;
        margin-left: 10px;
        flex-grow: 1;
        flex-direction: column;
        .maker-pkg {
            color: #a0a0a0;
        }
    }
}
</style>