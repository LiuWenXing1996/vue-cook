// Button.vue
<template>
    <button @click="overwriteClick">点我</button>
</template>
<script setup lang="ts">
const emits = defineEmits(["overwriteClick"])
const overwriteClick = (e: MouseEvent) => {
    emits("overwriteClick", e, "你好", "世界")
}
</script>