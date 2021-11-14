<template>
    <ClientOnly>
        <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
    </ClientOnly>
</template>
<script setup lang="ts">
import { CookEditor, createCookEditorState } from "vue-cook"
import { useRoute } from "vue-router";
const cookEditorState = createCookEditorState()
const route = useRoute()
const preview = route.query.preview as string
</script>
<style lang="less">
body,
html,
#app {
    height: 100vh;
    padding: 0;
    margin: 0;
}
</style>
