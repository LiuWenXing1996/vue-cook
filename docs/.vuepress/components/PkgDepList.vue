<template>
    <ul>
        <li v-for="pkg in list">
            <a :href="pkg.npmLink" target="_blank">{{ pkg.pkgName }}</a>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { devDependencies, dependencies } from "@/../package.json"

const devDepList = Object.entries(devDependencies || {}).map(e => {
    return {
        pkgName: e[0],
        pkgVersion: e[1],
        npmLink: `https://www.npmjs.com/package/${e[0]}`
    }
})

const depList = Object.entries(dependencies || {}).map(e => {
    return {
        pkgName: e[0],
        pkgVersion: e[1],
        npmLink: `https://www.npmjs.com/package/${e[0]}`
    }
})

const list = [...depList, ...devDepList]

</script>
<style lang="less" scoped>
</style>