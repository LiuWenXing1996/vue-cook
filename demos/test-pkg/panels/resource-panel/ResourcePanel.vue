// ResourcePanel.vue
<template>
    <div style="overflow: auto;height: 100%;">
        <resource-maker v-for="maker in makerList" :maker="maker"></resource-maker>
    </div>
</template>
<script setup lang="ts">
import { ResourceMaker, ICookEditorState } from 'vue-cook';
import { computed, inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const makerList = computed(() => {
    return cookEditorState.makerList
})
</script>