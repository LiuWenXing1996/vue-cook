<template>
    <ClientOnly>
        <Page404 v-show="show"></Page404>
    </ClientOnly>
</template>

<script setup lang="ts">
import Page404 from '@vuepress/theme-default/lib/client/layouts/404.vue'
import { computed } from 'vue';
import useRoutes from '@/../docs/.vuepress/hooks/useRoutes';
import { useRoute } from 'vue-router';
const routes = useRoutes()
const route = useRoute()
const show = computed(() => {
    return !routes.value.find(e => e.path === route.path)
})

</script>

<style lang="less">
</style>