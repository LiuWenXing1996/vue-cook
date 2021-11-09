// ColorPanel.vue
<template>
    <template v-if="config">
        <input type="color" v-model="colorString" />
    </template>
    <template v-else>请选择组件</template>
</template>
<script setup lang="ts">
import { useComponentSelected, ICookEditorState } from 'vue-cook';
import { computed, inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const selectedComponent = useComponentSelected(cookEditorState).get()
const colorString = computed({
    get: () => config.value?.props?.color,
    set: (value) => {
        if (config.value) {
            config.value.props = config.value.props || {}
            config.value.props.color = value || ""
        }
    }
})
const config = computed(() => {
    return selectedComponent.value?.component
})
</script>