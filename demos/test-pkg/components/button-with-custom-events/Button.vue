// Button.vue
<template>
    <button @click="delayClick">点我</button>
</template>
<script setup lang="ts">
const emits = defineEmits(["delayClick"])
const delayClick = (e: MouseEvent) => {
    setTimeout(() => {
        emits("delayClick", e,"aaa")
    }, 1000)
}
</script>