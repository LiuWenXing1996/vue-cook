<template>
    <div
        class="slot-dragger"
        @drop="handleDrop(cookEditorState, slotName, componentConfig, $event)"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
    >
        <slot>{{ slotName }}</slot>
    </div>
</template>
<script setup lang="ts">
import IComponentConfig from '@/lib/types/IComponentConfig';
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
import { inject } from 'vue';
import ICookEditorState from '@/lib/types/ICookEditorState';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

defineProps({
    slotName: {
        type: String,
        required: true
    },
    componentConfig: {
        type: Object as () => IComponentConfig
    }
})
</script>
<style lang="less" scoped>
.slot-dragger {
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