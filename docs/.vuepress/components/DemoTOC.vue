<template>
    <ul>
        <li v-for="l in routes">
            <a :href="l.path" target="_blank">{{ l.path }}</a>
        </li>
    </ul>
</template>
<script setup lang="ts">
import useRoutes from '../hooks/useRoutes';
const routes = useRoutes()
</script>
<style lang="less" scoped>
</style>