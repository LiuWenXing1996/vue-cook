<template>
    <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
</template>
<script setup lang="ts">
import { CookEditor } from "vue-cook"
import { useRoute } from "vue-router";
import ButtonMaker from "@/../demos/test-pkg/components/button-with-send-extra-param-to-event"
import AlertMaker from "@/../demos/test-pkg/logic/alert-with-receive-extra-params"
import { createCookEditorState, defaultMakerList } from "vue-cook"
const cookEditorState = createCookEditorState({
    makerList: [
        ButtonMaker, // import ButtonMaker from "./ButtonMaker.ts"
        AlertMaker, // import AlertMaker from "./AlertMaker.ts"
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