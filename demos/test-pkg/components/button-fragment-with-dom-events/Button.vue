// Button.vue
<template>
    <button>点我不触发事件</button>
    <button v-bind="attrs">点我触发事件</button>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()
</script>