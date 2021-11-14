<template>
    <a :href="withBase(path)" target="_blank">
        <slot>{{ path }}</slot>
    </a>
</template>
<script setup lang="ts">
import { withBase } from "@vuepress/client"
defineProps<{
    path: string
}>()
</script>
<style lang="less" scoped>
</style>