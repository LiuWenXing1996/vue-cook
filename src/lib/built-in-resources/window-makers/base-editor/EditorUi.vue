<template>
    <BaseEditor v-if="config" :component-config="config"></BaseEditor>
    <div v-else>请选中组件</div>
</template>
<script setup lang="ts">
import useComponentSelected from "@/lib/hooks/useComponentSelected";
import BaseEditor from "./BaseEditor.vue"
const config = useComponentSelected()
</script>
<style lang="less">
</style>