<template>
    <button class="ttt">{{ text }}</button>
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
.ttt {
    height: 100px;
}
</style>