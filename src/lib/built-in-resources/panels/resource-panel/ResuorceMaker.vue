<template>
    <div
        class="component-maker"
        :class="[maker.type]"
        :draggable="draggable"
        @dragstart="handleDragStart"
        @click="handelClick"
        :data-name="maker.name"
        :data-package="maker.package"
    >
        <div class="icon-wrapper">
            <n-icon size="25" :depth="3">
                <ComponentIcon v-if="maker.type === 'component'"></ComponentIcon>
                <LogicIcon v-if="maker.type === 'logic'"></LogicIcon>
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
import { computed, toRefs } from "vue"
import ComponentIcon from "$/svgs/component.svg"
import LogicIcon from "$/svgs/logic.svg"
import PanelIcon from "$/svgs/panel.svg"
import { NIcon } from "naive-ui"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable"
import IResourceMaker from "@/lib/types/IResourceMaker"
import makePanelConfigDefault from "@/lib/utils/makePanelConfigDefault"
import IPanelMaker from "@/lib/types/IPanelMaker"
import useSplitPaneConfigList from "@/lib/hooks/useSplitPaneConfigList"

const props = defineProps({
    maker: {
        type: Object as () => IResourceMaker,
        required: true
    }
})

const { maker } = toRefs(props)
const componentPickerEnable = useComponentPickerEnable()
const draggable = computed(() => {
    return maker.value.type === "component" || maker.value.type === "logic"
})
const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    e?.dataTransfer?.setData('name', maker.value.name)
    e?.dataTransfer?.setData('package', maker.value.package)
    componentPickerEnable.value = true
}
const handelClick = () => {
    if (maker.value.type === "panel") {
        const _maker = maker.value as IPanelMaker
        const config = makePanelConfigDefault(_maker)
        const splitPaneName = _maker.splitPaneName;
        const splitPane = useSplitPaneConfigList().value.find(e => e.name === splitPaneName)
        if (splitPane) {
            splitPane.list.push(config)
        }
    }
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
        border-color: #18a058;
        cursor: move;
    }
    &.panel:hover {
        cursor: pointer;
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