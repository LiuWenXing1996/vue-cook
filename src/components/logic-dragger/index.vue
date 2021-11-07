<template>
    <div
        class="logic-dragger"
        @drop="handleDrop(cookEditorState, $event, dropCallBack)"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
    >
        <slot>拖拽逻辑到此处添加</slot>
    </div>
</template>
<script setup lang="ts">
import handleDrop from "./handleDrop";
import { ICallback } from "./handleDrop"
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
import ICookEditorState from '@/types/ICookEditorState';
import { inject } from 'vue';
import ILogicConfig from '@/types/ILogicConfig';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const emits = defineEmits<{
    (e: 'drop', logicConfig: ILogicConfig): void
}>()
const dropCallBack: ICallback = (logicConfig) => {
    emits("drop", logicConfig)
}
</script>
<style lang="less" scoped>
.logic-dragger {
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