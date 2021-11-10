// ComponentDraggerPanel.vue
<template>
    <template v-if="config">
        <div v-for="slotOption in slotOptions" style="margin-bottom: 10px;">
            <div>{{ slotOption }}</div>
            <component-dragger @drop="handleComponentDrop($event, slotOption)">拖拽组件到此处添加</component-dragger>
            <div v-for="componentConfig in getSlotData(slotOption)">
                <div style="margin-bottom:3px;">
                    <div>uid:{{ componentConfig.uid }}</div>
                    <div>name:{{ componentConfig.name }}</div>
                    <button @click="del(slotOption, componentConfig)">删除</button>
                </div>
            </div>
        </div>
    </template>
    <template v-else>请选择组件</template>
</template>
<script setup lang="ts">
import { useComponentSelected, ICookEditorState, ComponentDragger, useSlotOptions, IComponentConfig, addComponentConfig, removeComponentConfig } from 'vue-cook';
import { computed, inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})
const slotOptions = useSlotOptions(cookEditorState, config)
const del = (slotName: string, componentConfig: IComponentConfig) => {
    if (config.value) {
        removeComponentConfig(config.value, componentConfig.uid, slotName)
    }
}
const handleComponentDrop = (componentConfig: IComponentConfig, slotName: string) => {
    if (config.value) {
        addComponentConfig(config.value, componentConfig, slotName)
    }
}
const getSlotData = (slotName: string) => {
    return config.value?.slots?.[slotName] || []
}
</script>