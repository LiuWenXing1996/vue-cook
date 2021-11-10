<template>
    <div
        class="resource-maker"
        :class="[maker.type]"
        :draggable="draggable"
        @dragstart="handleDragStart"
        @click="handelClick"
        :data-type="maker.type"
        :data-name="maker.name"
        :data-package="maker.pkg"
    >
        <slot>{{ maker.name }}-{{ maker.pkg }}</slot>
    </div>
</template>
<script lang="ts" setup>
import { computed, inject, toRefs } from "vue"
import IResourceMaker from "@/types/IResourceMaker"
import makeDefaultPanelConfig from "@/utils/makeDefaultPanelConfig"
import IPanelMaker from "@/types/IPanelMaker"
import { VueCookLogicMakerDraggerTag, VueCookComponentMakerDraggerTag } from "@/utils/const-value"
import ICookEditorState from "@/types/ICookEditorState"
import layoutAddTab from "@/utils/layoutAddTab"
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const props = defineProps({
    maker: {
        type: Object as () => IResourceMaker,
        required: true
    }
})

const { maker } = toRefs(props)

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
.resource-maker {
    display: flex;
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
}
</style>