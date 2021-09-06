<template>
    <FloatWindow v-for="config in list" :config="config"></FloatWindow>
</template>
<script setup lang="ts">
import type IFloatWindowConfig from "../types/IFloatWindowConfig";
import FloatWindow from "./FloatWindow.vue";

defineProps({
    list: {
        type: Object as () => IFloatWindowConfig[],
        required: true
    }
})

</script>
<style lang="less" scoped>
</style>