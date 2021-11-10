// ColorPanel.vue
<template>
    <resuorce-maker v-for="maker in makerList" :maker="maker"></resuorce-maker>
</template>
<script setup lang="ts">
import { ResourceMaker, ICookEditorState } from 'vue-cook';
import { computed, inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const makerList = computed(() => {
    return cookEditorState.makerList
})
</script>