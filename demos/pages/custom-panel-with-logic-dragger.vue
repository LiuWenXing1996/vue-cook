<template>
    <ClientOnly>
        <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
    </ClientOnly>
</template>
<script setup lang="ts">
import { CookEditor } from "vue-cook"
import { useRoute } from "vue-router";
import LogicDraggerPanelMaker from "@/../demos/test-pkg/panels/logic-dragger-panel"
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch"
import { createCookEditorState, defaultMakerList } from "vue-cook"
const cookEditorState = createCookEditorState({
    makerList: [
        TableMaker,
        FetchMaker,
        LogicDraggerPanelMaker, // import LogicDraggerPanelMaker from "./LogicDraggerPanelMaker.ts"
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