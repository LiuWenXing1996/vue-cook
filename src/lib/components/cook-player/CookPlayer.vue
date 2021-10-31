<template>
    <ComponentRender :config="state.page.component"></ComponentRender>
</template>
<script setup lang="ts">
import ComponentRender from "./ComponentRender.vue"
import { toRefs, provide } from "vue";
import exportData from "./utils/exportData";
import ICookPlayerState from "@/lib/types/ICookPlayerState";
const props = defineProps(
    {
        state: {
            type: Object as () => ICookPlayerState,
            required: true
        },
        preview: {
            type: String
        }
    }
)
const { state, preview } = toRefs(props)
provide("cookPlayerState", state.value)
// @ts-ignore
if (preview.value) {
    exportData(state.value)
}
</script>

<style lang="less" scoped>
</style>