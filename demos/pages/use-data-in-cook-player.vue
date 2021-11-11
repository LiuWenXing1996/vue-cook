<template>
    <template v-if="cookPlayerState">
        <cook-player :state="cookPlayerState"></cook-player>
    </template>
</template>
<script setup lang="ts">
import { CookPlayer, ICookPlayerState, IPage } from "vue-cook"
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch-with-props"
import fecthPage from "@/../demos/utils/fecthPage"
import { defaultMakerList, createCookPlayerState } from "vue-cook"
import { ref } from "vue";
let cookPlayerState = ref<ICookPlayerState>();
fecthPage().then(pageString => {
    const page = JSON.parse(pageString) as IPage
    cookPlayerState.value = createCookPlayerState({
        page: page,
        makerList: [
            TableMaker, // import TableMaker from "./TableMaker.ts"
            FetchMaker, // import FetchMaker from "./FetchMaker.ts"
            ...defaultMakerList
        ]
    })
})
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