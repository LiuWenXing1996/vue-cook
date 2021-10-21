<template>
    <button>{{ text }}</button>
    <!-- <slot></slot> -->
</template>
<script setup lang="ts">
defineProps({
    text: {
        type: String
    }
})
</script>
<style lang="less">
</style>