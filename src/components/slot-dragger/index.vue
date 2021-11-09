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
import IComponentConfig from '@/types/IComponentConfig';
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"
import { inject } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
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
// TODO:按照logic-dragger修改
// TODO:改成component-dragger???
</script>
<style lang="less" scoped>
.slot-dragger {
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