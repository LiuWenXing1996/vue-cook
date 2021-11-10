// ComponentDraggerPanel.vue
<template>
    <template v-if="config">
        <logic-dragger @drop="handleLogicDrop($event)">fetch:拖拽逻辑到此处添加</logic-dragger>
    </template>
    <template v-else>请选择组件</template>
</template>
<script setup lang="ts">
import { useComponentSelected, ICookEditorState, LogicDragger, ILogicConfig, } from 'vue-cook';
import { computed, inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})
const handleLogicDrop = (logicConfig: ILogicConfig) => {
    const configValue = config.value;
    if (!configValue) {
        return;
    };
    configValue.props = configValue?.props || {}
    configValue.props["fetch"] = JSON.stringify(logicConfig)
}
</script>