<template>
    <template v-if="preview">
        <inside-player :state="state" :preview="preview"></inside-player>
    </template>
    <template v-else>
        <inside-editor :state="state"></inside-editor>
    </template>
</template>
<script setup lang="ts">
import InsidePlayer from './insider-player/index.vue';
import InsideEditor from './insider-editor/index.vue';
import ICookEditorState from '@/types/ICookEditorState';
defineProps({
    state: {
        type: Object as () => ICookEditorState,
        required: true
    },
    preview: {
        type: String,
    }
})
</script>