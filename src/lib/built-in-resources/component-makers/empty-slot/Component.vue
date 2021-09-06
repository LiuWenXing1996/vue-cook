<template>
    <div class="empty-slot">{{ name }}</div>
</template>
<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>
<style lang="less" scoped>
.empty-slot {
    width: 100px;
    height: 100px;
    border: 1px dashed rgb(216, 213, 213);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>