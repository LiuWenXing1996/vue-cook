<template>
    <div class="test">
        {{ text }}
        <div>dsdsd</div>
    </div>
    <!-- <slot></slot> -->
</template>
<script setup lang="ts">
defineProps({
    text: {
        type: String
    }
})
</script>
<style lang="less">
.test {
    // // position: fixed;
    // left: 200px;
    // top: 300px;
    height: 100px;
    width: 100px;
    background-color: aquamarine;
}
</style>