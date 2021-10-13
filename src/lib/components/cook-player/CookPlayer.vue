<template>
    <ComponentRender :config="page.component"></ComponentRender>
</template>
<script setup lang="ts">
import IComponentConfig from "$/types/IComponentConfig";
import ComponentRender from "./ComponentRender.vue"
import { toRefs } from "vue";
import exportData from "./exportData";
import { VueCookEditroTag } from "@/lib/utils/const";
import IPage from "@/lib/types/IPage";
const props = defineProps(
    {
        page: {
            type: Object as () => IPage,
            required: true
        }
    }
)
const { page } = toRefs(props)

// @ts-ignore
if (window.parent[VueCookEditroTag]) {
    exportData(page.value.component, page.value.path)
}
</script>

<style lang="less" scoped>
</style>