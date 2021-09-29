<template>
    <div class="editor-config-render">
        <component :is="editors[config.type]" :config="config" :resource-config="resourceConfig"></component>
    </div>
</template>
<script setup lang="ts">
import IEditorConfig from "$/types/IEditorConfig";
import IResourceConfig from "$/types/IResourceConfig";
import editors from "./editors"

defineProps({
    config: {
        type: Object as () => IEditorConfig,
        required: true
    },
    resourceConfig: {
        type: Object as () => IResourceConfig,
        required: true
    }
})

</script>
<style lang="less" scoped>
</style>