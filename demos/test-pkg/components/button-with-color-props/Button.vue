// Button.vue
<template>
    <button class="color-btn">我是可以配置颜色的按钮</button>
</template>
<script lang="ts" setup>
defineProps({
    color: String
})
</script>
<style lang="less">
.color-btn {
    color: v-bind(color);
}
</style>