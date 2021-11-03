<template>
    <template v-if="propOptions.length > 0">
        <n-form-item :label="propOption.label" v-for="propOption in propOptions">
            <n-input v-model:value="propOption.value" />
        </n-form-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import useComponentSelected from './hooks/useComponentSelected';
import { computed, inject, ref, watch } from 'vue';
import { NFormItem, NInput } from "naive-ui"
import ICookEditorState from '@/lib/types/ICookEditorState';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

interface IPropOption {
    label: string,
    value: string
}

const propOptions = ref<IPropOption[]>([])
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})

const updatePropOptions = () => {
    const configValue = config.value;
    if (!configValue) {
        propOptions.value = [];
        return;
    };
    const maker = useComponentMaker(cookEditorState, config.value?.makerName, config.value?.makerPkg).value
    if (!maker) {
        propOptions.value = [];
        return;
    }
    const _propOptions = maker?.props || []
    const _optionsWithValue = _propOptions.map(e => {
        let value = config.value?.props?.[e] || ""
        return {
            label: e,
            value: value
        }
    })
    propOptions.value = _optionsWithValue
}

watch(config, () => {
    updatePropOptions()
}, {
    immediate: true
})

watch(propOptions, () => {
    const configValue = config.value;
    if (!configValue) {
        return;
    };
    propOptions.value.map(e => {
        configValue.props = configValue?.props || {}
        configValue.props[e.label] = e.value
    })
}, {
    deep: true
})

</script>
<style lang="less" scoped>
.emit-editor {
    width: 100%;
    .emit-add-bar {
        width: 100%;
        padding: 2px 9px;
        box-sizing: border-box;
        background-color: #efeff5;
        border-radius: 20px;
        border: 1px solid rgb(224, 224, 230);
        font-weight: bolder;
        font-size: 12px;
    }
}
</style>