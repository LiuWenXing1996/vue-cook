<template>
    <ComponentRender :config="state.page.component"></ComponentRender>
</template>
<script setup lang="ts">
import IComponentConfig from "@/lib/types/IComponentConfig";
import ComponentRender from "./ComponentRender.vue"
import { toRefs, provide } from "vue";
import exportData from "./utils/exportData";
import { VueCookEditroTag } from "@/lib/utils/const";
import ICookPlayerState from "@/lib/types/ICookPlayerState";
const props = defineProps(
    {
        state: {
            type: Object as () => ICookPlayerState,
            required: true
        }
    }
)


const { state } = toRefs(props)
provide("cookPlayerState", state.value)
// @ts-ignore
if (window.parent[VueCookEditroTag]) {
    exportData(state.value)
}
</script>

<style lang="less" scoped>
</style>