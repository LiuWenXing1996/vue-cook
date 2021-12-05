// Foo.vue
<template>
    <div>msg:{{ msg }}</div>
    <div>
        <button @click="emits('btnCilck')">
            <slot name="btnText"></slot>
        </button>
    </div>
</template>
<script setup lang="ts">
defineProps({
    msg: String
})
const emits = defineEmits(['btnCilck'])
</script>