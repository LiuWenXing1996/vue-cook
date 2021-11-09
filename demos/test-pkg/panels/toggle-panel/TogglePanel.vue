<template>
    <button @click="openPanel">打开面板</button>
    <button @click="closePanel">关闭自己</button>
</template>
<script setup lang="ts">
import { ICookEditorState, usePanelMaker, makeDefaultPanelConfig, layoutAddTab, layoutRemoveTab, IPanelConfig } from 'vue-cook';
import { inject, toRefs } from 'vue';
const props = defineProps({
    panelConfig: {
        type: Object as () => IPanelConfig,
        required: true
    }
})
const { panelConfig } = toRefs(props)
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const openPanel = () => {
    const maker = usePanelMaker(cookEditorState, "开关面板", "test-pkg").value
    if (maker) {
        const panelConfig = makeDefaultPanelConfig(maker)
        layoutAddTab(cookEditorState, panelConfig, "right")
    }
}
const closePanel = () => {
    layoutRemoveTab(cookEditorState, panelConfig.value)
}
</script>