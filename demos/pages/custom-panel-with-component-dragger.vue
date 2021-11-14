<template>
    <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
</template>
<script setup lang="ts">
import { CookEditor } from "vue-cook"
import { useRoute } from "vue-router";
import ComponentDraggerPanelMaker from "@/../demos/test-pkg/panels/component-dragger-panel"
import ButtonMaker from "@/../demos/test-pkg/components/button-with-multi-slots"
import EmojiMaker from "@/../demos/test-pkg/components/emoji"
import { createCookEditorState, defaultMakerList } from "vue-cook"
const cookEditorState = createCookEditorState({
    makerList: [
        ButtonMaker,
        EmojiMaker,
        ComponentDraggerPanelMaker, // import ComponentDraggerPanelMaker from "./ComponentDraggerPanelMaker.ts"
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