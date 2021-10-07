<template>
    <div>
        {{ text }}
        <div>dsdsd</div>
    </div>
    <div>
        {{ text }}
        <div>dsdsd</div>
    </div>
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