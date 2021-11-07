<template>
    <div
        class="event-dragger"
        @drop="handleDrop(cookEditorState, eventName, componentConfig, $event)"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
    >
        <slot>{{ eventName }}</slot>
    </div>
</template>
<script setup lang="ts">
import IComponentConfig from '@/types/IComponentConfig';
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
import ICookEditorState from '@/types/ICookEditorState';
import { inject } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
defineProps({
    eventName: {
        type: String,
        required: true
    },
    componentConfig: {
        type: Object as () => IComponentConfig
    }
})
</script>
<style lang="less" scoped>
.event-dragger {
    padding: 2px 9px;
    box-sizing: border-box;
    background-color: #efeff5;
    border-radius: 20px;
    border: 1px solid rgb(224, 224, 230);
    font-weight: bolder;
    font-size: 12px;
    &.dragenter {
        background-color: rgba(24, 160, 88, 0.1);
        color: rgb(24, 160, 88);
        border: 1px solid rgba(24, 160, 88, 0.3);
    }
}
</style>