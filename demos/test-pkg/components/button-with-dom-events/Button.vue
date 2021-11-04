// Button.vue
<template>
    <button>{{ text }}</button>
</template>
<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        default: "我是默认文字"
    }
})
</script>