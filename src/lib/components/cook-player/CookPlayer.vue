<template>
    <ComponentRender :config="config"></ComponentRender>
</template>
<script setup lang="ts">
import IComponentConfig from "$/types/IComponentConfig";
import ComponentRender from "./ComponentRender.vue"
import { toRefs } from "vue";
import exportData from "./exportData";
import { VueCookEditroTag } from "@/lib/utils/const";
const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    }
)
const { config, path } = toRefs(props)

// @ts-ignore
if (window.parent[VueCookEditroTag]) {
    exportData(config.value, path.value)
}
</script>

<style lang="less" scoped>
</style>