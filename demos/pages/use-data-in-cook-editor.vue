<template>
    <template v-if="cookEditorState">
        <cook-editor :state="cookEditorState" :preview="preview"></cook-editor>
    </template>
</template>
<script setup lang="ts">
import { CookEditor, ICookEditorState, IPage } from "vue-cook"
import { useRoute } from "vue-router";
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch-with-props"
import fecthPages from "@/../demos/utils/fecthPages"
import { createCookEditorState, defaultMakerList } from "vue-cook"
import { ref } from "vue";
let cookEditorState = ref<ICookEditorState>();
fecthPages().then(pagesString => {
    const pages = JSON.parse(pagesString) as IPage[]
    cookEditorState.value = createCookEditorState({
        pages: pages,
        makerList: [
            TableMaker, // import TableMaker from "./TableMaker.ts"
            FetchMaker, // import FetchMaker from "./FetchMaker.ts"
            ...defaultMakerList
        ]
    })
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