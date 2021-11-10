<template>
    <div
        class="component-dragger"
        @drop="handleDrop(cookEditorState, $event, dropCallBack)"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
    >
        <slot>拖拽组件到此处添加</slot>
    </div>
</template>
<script setup lang="ts">
import IComponentConfig from '@/types/IComponentConfig';
import handleDrop, { ICallback } from "./handleDrop";
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
import { inject } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const emits = defineEmits<{
    (e: 'drop', componentConfig: IComponentConfig): void
}>()
const dropCallBack: ICallback = (componentConfig) => {
    emits("drop", componentConfig)
}
</script>
<style lang="less" scoped>
.component-dragger {
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