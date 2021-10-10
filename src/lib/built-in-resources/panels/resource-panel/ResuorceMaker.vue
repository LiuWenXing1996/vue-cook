<template>
    <div
        class="component-maker"
        draggable="true"
        @dragstart="handleDragStart"
        :data-name="maker.name"
        :data-package="maker.package"
    >
        <div class="icon-wrapper">
            <n-icon size="25" :depth="3">
                <!-- TODO:tips也展示出来 -->
                <ComponentIcon v-if="maker.type === 'component'"></ComponentIcon>
                <LogicIcon v-if="maker.type === 'logic'"></LogicIcon>
                <MixinIcon v-if="maker.type === 'mixin'"></MixinIcon>
                <PanelIcon v-if="maker.type === 'panel'"></PanelIcon>
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
import ComponentIcon from "$/svgs/component.svg"
import LogicIcon from "$/svgs/logic.svg"
import MixinIcon from "$/svgs/mixin.svg"
import PanelIcon from "$/svgs/panel.svg"
import { NIcon, NTooltip } from "naive-ui"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable"
import IResourceMaker from "@/lib/types/IResourceMaker"

const props = defineProps({
    maker: {
        type: Object as () => IResourceMaker,
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