<template>
    <Page404 v-show="show"></Page404>
</template>

<script setup lang="ts">
import Page404 from '@vuepress/theme-default/lib/client/layouts/404.vue'
import { ref } from 'vue';
const show = ref(false)
setTimeout(() => {
    show.value = true
}, 500)
</script>

<style lang="less">
</style>