<template>
    <div>{{ cookEditorState.extra.TestPkg?.StatePanel?.msg }}</div>
</template>
<script setup lang="ts">
import { ICookEditorState } from 'vue-cook';
import { inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
</script>