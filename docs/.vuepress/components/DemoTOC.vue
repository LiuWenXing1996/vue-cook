<template>
    <ul>
        <li v-for="l in routes">
            <demo-link :path="l.path">{{ l.path }}</demo-link>
        </li>
    </ul>
</template>
<script setup lang="ts">
import useRoutes from '../hooks/useRoutes';
import DemoLink from "./DemoLink.vue"
const routes = useRoutes()
</script>
<style lang="less" scoped>
</style>