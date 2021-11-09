<template>
    <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
</template>
<script setup lang="ts">
import { CookEditor } from "vue-cook"
import { useRoute } from "vue-router";
import ColorPanelMaker from "@/../demos/test-pkg/panels/color-panel"
import ButtonMaker from "@/../demos/test-pkg/components/button-with-color-props"
import { createCookEditorState, defaultMakerList } from "vue-cook"
const cookEditorState = createCookEditorState({
    makerList: [
        ColorPanelMaker,
        ButtonMaker,
        ...defaultMakerList
    ]
})
const route = useRoute()
const preview = route.query.preview as string
</script>
<style lang="less">
@import "@/../demos/reset.less";
body,
html,
#app {
    height: 100vh;
    padding: 0;
    margin: 0;
}
</style>