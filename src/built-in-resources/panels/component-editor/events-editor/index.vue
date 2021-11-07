<template>
    <template v-if="eventOptions.length > 0">
        <event-editor-item :event-option="eventOption" v-for="eventOption in eventOptions"></event-editor-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentMaker from '@/hooks/useComponentMaker';
import useComponentSelected from '../hooks/useComponentSelected';
import { computed, inject } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
import IEventOption from '@/types/IEventOption';
import EventEditorItem from './EventEditorItem.vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const eventOptions = computed<IEventOption[]>(() => {
    const configValue = config.value;
    if (!configValue) {
        return [];
    };
    const maker = useComponentMaker(cookEditorState, config.value?.makerName, config.value?.makerPkg).value
    if (!maker) {
        return [];
    }
    const _eventOptions = maker?.makeEventOptions?.(configValue) || []
    const _optionsWithValue = _eventOptions.map(e => {
        let value = config.value?.events?.[e] || []
        return {
            name: e,
            value: value
        }
    })
    return _optionsWithValue
})
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})

</script>
<style lang="less" scoped>
.event-editor {
    width: 100%;
    .event-add-bar {
        width: 100%;
        margin-bottom: 10px;
        :deep(.event-dragger) {
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