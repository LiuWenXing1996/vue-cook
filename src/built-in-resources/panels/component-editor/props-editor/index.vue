<template>
    <template v-if="propOptions.length > 0">
        <prop-editor-item :prop-option="propOption" v-for="propOption in propOptions"></prop-editor-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentMaker from '@/hooks/useComponentMaker';
import { useComponentSelected } from '@/index';
import { computed, inject} from 'vue';
import PropEditorItem from "./PropEditorItem.vue"
import ICookEditorState from '@/types/ICookEditorState';
import IPropOption from '@/types/IPropOption';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const propOptions = computed<IPropOption[]>(() => {
    const configValue = config.value;
    if (!configValue) {
        return [];
    };
    const maker = useComponentMaker(cookEditorState, config.value?.makerName, config.value?.makerPkg).value
    if (!maker) {
        return [];;
    }
    const _propOptions = maker?.makePropOptions?.(configValue) || []
    const _optionsWithValue = _propOptions.map(e => {
        let value = config.value?.props?.[e] || ""
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