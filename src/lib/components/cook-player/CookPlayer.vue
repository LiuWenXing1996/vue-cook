<template>
    <ComponentRender :config="config.page.component"></ComponentRender>
</template>
<script setup lang="ts">
import IComponentConfig from "@/lib/types/IComponentConfig";
import ComponentRender from "./ComponentRender.vue"
import { toRefs, provide } from "vue";
import exportData from "./utils/exportData";
import { VueCookEditroTag } from "@/lib/utils/const";
import IPlayerConfig from "./IPlayerConfig";
const props = defineProps(
    {
        config: {
            type: Object as () => IPlayerConfig,
            required: true
        }
    }
)
const { config } = toRefs(props)
provide("playerConfig", config)
// @ts-ignore
if (window.parent[VueCookEditroTag]) {
    exportData(config.value.page.component, config.value.page.path)
}
</script>

<style lang="less" scoped>
</style>