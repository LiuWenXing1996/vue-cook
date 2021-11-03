<template>
    <div
        class="component-maker"
        :class="[maker.type]"
        :draggable="draggable"
        @dragstart="handleDragStart"
        @click="handelClick"
        :data-type="maker.type"
        :data-name="maker.name"
        :data-package="maker.pkg"
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
            <div class="maker-pkg">{{ maker.pkg }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, inject, Ref, toRefs } from "vue"
import ComponentIcon from "@/lib/svgs/component.svg"
import LogicIcon from "@/lib/svgs/logic.svg"
import PanelIcon from "@/lib/svgs/panel.svg"
import { NIcon } from "naive-ui"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable"
import IResourceMaker from "@/lib/types/IResourceMaker"
import makeDefaultPanelConfig from "@/lib/utils/makeDefaultPanelConfig"
import IPanelMaker from "@/lib/types/IPanelMaker"
import { VueCookLogicMakerDraggerTag, VueCookComponentMakerDraggerTag } from "@/lib/utils/const"
import ICookEditorState from "@/lib/types/ICookEditorState"
import layoutAddTab from "@/lib/utils/layoutAddTab"
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
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
    e?.dataTransfer?.setData('package', maker.value.pkg)
    e?.dataTransfer?.setData('type', maker.value.type)
    if (maker.value.type === "logic") {
        e?.dataTransfer?.setData(VueCookLogicMakerDraggerTag, VueCookLogicMakerDraggerTag)
    }
    if (maker.value.type === "component") {
        e?.dataTransfer?.setData(VueCookComponentMakerDraggerTag, VueCookComponentMakerDraggerTag)
    }
    componentPickerEnable.value = true
}
const handelClick = () => {
    if (maker.value.type === "panel") {
        const _maker = maker.value as IPanelMaker
        const config = makeDefaultPanelConfig(_maker)
        const defaultSplitLayoutPaneName = _maker.defaultSplitLayoutPaneName;
        layoutAddTab(cookEditorState, config, defaultSplitLayoutPaneName)
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