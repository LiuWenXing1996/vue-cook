<template>
    <button class="ttt">{{ text }}</button>
    <!-- <button class="ttt">{{ text }}</button> -->
    <!-- <button class="ttt">{{ text }}</button>
    <button class="ttt" v-for="n in Number(count)">{{ text }}+{{ n }}</button> -->
    <!-- <slot></slot> -->
</template>
<script setup lang="ts">
defineProps({
    text: {
        type: String
    },
    count: {
        type: String
    }
})
</script>
<style lang="less">
.ttt {
    height: 100px;
}
</style>