<template>
    <template v-if="slotOptions.length > 0">
        <slots-editor-item :slot-option="slotOption" v-for="slotOption in slotOptions"></slots-editor-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentSelected from '@/hooks/useComponentSelected';
import { computed, inject, } from 'vue';
import SlotsEditorItem from './SlotsEditorItem.vue';
import ICookEditorState from '@/types/ICookEditorState';
import useSlotOptions from '@/hooks/useSlotOptions';

const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})
const slotOptions = useSlotOptions(cookEditorState, config)
</script>
<style lang="less" scoped>
.slot-editor {
    width: 100%;
    .slot-add-bar {
        width: 100%;
        margin-bottom: 10px;
        :deep(.slot-dragger) {
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
    }
}
</style>