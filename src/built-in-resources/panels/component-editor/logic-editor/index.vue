<template>
    <n-scrollbar style="height: 200px;">
        <div class="logic-params-edit">
            <n-form
                label-placement="left"
                :label-width="70"
                label-align="right"
                size="small"
                :model="formValue"
            >
                <n-divider title-placement="left">基础信息</n-divider>
                <n-form-item label="名字">
                    <n-input v-model:value="editableValue.name" />
                </n-form-item>
                <n-form-item label="唯一ID">
                    <div>{{ editableValue.uid }}</div>
                </n-form-item>
                <n-form-item label="maker">
                    <div class="round-name-tag">{{ editableValue.makerName }}</div>
                    <div style="padding: 0 2px;">-</div>
                    <div class="round-pkg-tag">{{ editableValue.makerPkg }}</div>
                </n-form-item>
                <n-divider title-placement="left">属性</n-divider>
                <template v-if="propOptions.length > 0">
                    <logic-editor-item
                        :prop-option="propOption"
                        :config="editableValue"
                        v-for="propOption in propOptions"
                    ></logic-editor-item>
                </template>
                <template v-else>无</template>
            </n-form>
        </div>
    </n-scrollbar>
</template>
<script setup lang="ts">
import useLogicMaker from '@/hooks/useLogicMaker';
import ICookEditorState from '@/types/ICookEditorState';
import ILogicConfig from '@/types/ILogicConfig';
import IPropOption from '@/types/IPropOption';
import LogicEditorItem from "./LogicEditorItem.vue"
import { NScrollbar, NForm, NFormItem, NInput, NDivider } from "naive-ui"
import { computed, inject, ref, toRefs, watch } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    logicConfig: {
        type: Object as () => ILogicConfig,
        required: true
    }
})
const emits = defineEmits<{
    (e: 'change', logicConfig: ILogicConfig): void
}>()
const { logicConfig } = toRefs(props)
const editableValue = ref(logicConfig.value)
watch(editableValue, () => {
    emits("change", editableValue.value)
}, {
    deep: true
})
const formValue = ref()

const propOptions = computed<IPropOption[]>(() => {
    const configValue = logicConfig.value;
    if (!configValue) {
        return [];
    };
    const maker = useLogicMaker(cookEditorState, logicConfig.value?.makerName, logicConfig.value?.makerPkg).value
    if (!maker) {
        return [];
    }
    const _paramsOptions = maker?.makePropOptions?.(configValue) || []
    const _optionsWithValue = _paramsOptions.map(e => {
        let value = logicConfig.value?.props?.[e] || ""
        return {
            name: e,
            value: value
        }
    })
    return _optionsWithValue
})
</script>
<style lang="less" scoped>
.logic-params-edit {
    display: flex;
    flex-direction: column;
    width: 250px;

    :deep(.n-divider) {
        margin-top: 2px;
        margin-bottom: 12px;
    }

    .round-name-tag,
    .round-pkg-tag {
        background-color: rgba(24, 160, 88, 0.1);
        border: 1px solid rgba(24, 160, 88, 0.3);
        color: #18a058;
        border-radius: 10px;
        padding: 0 5px;
        font-size: 12px;
        box-sizing: border-box;
        height: fit-content;
    }
    .round-name-tag {
        flex-shrink: 0;
    }
    .round-pkg-tag {
        flex-shrink: 1;
        word-break: break-all;
    }
}
</style>