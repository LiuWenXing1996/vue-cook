// Button.vue
<template>
    <button>{{ text ? text : '我是默认文字' }}</button>
</template>
<script lang="ts" setup>
defineProps({
    text: {
        type: String
    }
})
</script>