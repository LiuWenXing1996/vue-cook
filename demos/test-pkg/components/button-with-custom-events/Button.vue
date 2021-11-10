// Button.vue
<template>
    <button @click="delayClick">点我，2秒后触发事件</button>
</template>
<script setup lang="ts">
const emits = defineEmits(["delayClick"])
const delayClick = (e: MouseEvent) => {
    setTimeout(() => {
        emits("delayClick", e)
    }, 2000)
}
</script>