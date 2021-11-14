<template>
    <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
</template>
<script setup lang="ts">
import { CookEditor } from "vue-cook"
import { useRoute } from "vue-router";
import SimplePanelMaker from "@/../demos/test-pkg/panels/simple-panel"
import { createCookEditorState, defaultMakerList } from "vue-cook"
const cookEditorState = createCookEditorState({
    makerList: [
        SimplePanelMaker, // import SimplePanelMaker from "./SimplePanelMaker.ts"
        ...defaultMakerList
    ]
})
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