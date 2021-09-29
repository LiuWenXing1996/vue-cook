<template>
    <n-input v-model:value="editorValue" type="text" @input="handleInput" placeholder="基本的 Input" />
</template>
<script setup lang="ts">
import IEditorConfig from "@/lib/types/IEditorConfig";
import IResourceConfig from "@/lib/types/IResourceConfig";
import { toRefs } from "@vue/reactivity";
import { NInput } from "naive-ui"
import { ref } from "vue";
const props = defineProps({
    config: {
        type: Object as () => IEditorConfig,
        required: true
    },
    resourceConfig: {
        type: Object as () => IResourceConfig,
        required: true
    }
})
const { config, resourceConfig } = toRefs(props)

const editorValue = ref(config.value.getValue(config.value, resourceConfig.value));
const handleInput = (value: any) => {
    config.value.setValue(config.value, resourceConfig.value, value)
}

</script>
<style lang="less" scoped>
</style>