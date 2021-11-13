<template>
    <ComponentRender :config="state.page.component" :dev="dev"></ComponentRender>
</template>
<script setup lang="ts">
import ComponentRender from "./ComponentRender.vue"
import { toRefs, provide, ref } from "vue";
import exportData from "./utils/exportData";
import ICookPlayerState from "@/types/ICookPlayerState";
const props = defineProps<{
    state: ICookPlayerState,
    preview?: string
}>()
let dev = ref(false)
const { state, preview } = toRefs(props)
provide("cookPlayerState", state.value)
// @ts-ignore
if (preview.value) {
    exportData(state.value)
    dev.value = true
}
</script>

<style lang="less" scoped>
</style>