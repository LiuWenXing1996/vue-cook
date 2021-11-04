<template>
    <ul>
        <li v-for="l in routes">
            <a :href="l.path">{{ l.path }}</a>
        </li>
    </ul>
</template>
<script setup lang="ts">
import useRoutes from './useRoutes';
const routes = useRoutes()
</script>
<style lang="less" scoped>
</style>