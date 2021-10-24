<template>
    <div
        class="emit-dragger"
        @drop="handleDrop(emitName, componentConfig, $event)"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
    >
        <slot>{{ emitName }}</slot>
    </div>
</template>
<script setup lang="ts">
import IComponentConfig from '@/lib/types/IComponentConfig';
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
defineProps({
    emitName: {
        type: String,
        required: true
    },
    componentConfig: {
        type: Object as () => IComponentConfig
    }
})
</script>
<style lang="less" scoped>
.emit-dragger {
    // TODO:默认样式改成灰色的那种
    height: 100%;
    width: 100%;
    border: 1px dashed rgb(216, 213, 213);
    background-color: rgba(24, 160, 88, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    box-sizing: border-box;
    &.dragenter {
        background-color: rgba(24, 160, 88, 0.1);
        color: rgb(24, 160, 88);
        border: 1px solid rgba(24, 160, 88, 0.3);
    }
}
</style>