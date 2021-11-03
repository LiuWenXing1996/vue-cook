<template>
    <n-scrollbar style="height: 200px;">
        <div class="emit-params-edit">
            <n-form
                label-placement="left"
                :label-width="70"
                label-align="right"
                size="small"
                :model="formValue"
            >
                <n-divider title-placement="left">基础信息</n-divider>
                <n-form-item label="名字">
                    <n-input v-model:value="logicConfig.name" />
                </n-form-item>
                <n-divider title-placement="left">参数</n-divider>
                <template v-if="paramsOptions.length > 0">
                    <n-form-item :label="paramOption.label" v-for="paramOption in paramsOptions">
                        <n-input v-model:value="paramOption.value" />
                    </n-form-item>
                </template>
                <template v-else>无</template>
            </n-form>
        </div>
    </n-scrollbar>
</template>
<script setup lang="ts">
import useLogicMaker from '@/lib/hooks/useLogicMaker';
import ICookEditorState from '@/lib/types/ICookEditorState';
import ILogicConfig from '@/lib/types/ILogicConfig';
import { NScrollbar, NForm, NFormItem, NInput, NDivider } from "naive-ui"
import { inject, ref, toRefs, watch } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    logicConfig: {
        type: Object as () => ILogicConfig,
        required: true
    }
})
const { logicConfig } = toRefs(props)

interface IParamsOption {
    label: string,
    value: string
}

const paramsOptions = ref<IParamsOption[]>([])
const formValue = ref()
const updateParamsOptions = () => {
    const configValue = logicConfig.value;
    if (!configValue) {
        paramsOptions.value = [];
        return;
    };
    const maker = useLogicMaker(cookEditorState, logicConfig.value?.makerName, logicConfig.value?.makerPkg).value
    if (!maker) {
        paramsOptions.value = [];
        return;
    }
    const _paramsOptions = maker?.params || []
    const _optionsWithValue = _paramsOptions.map(e => {
        let value = logicConfig.value?.params?.[e] || ""
        return {
            label: e,
            value: value
        }
    })
    paramsOptions.value = _optionsWithValue
}

watch(logicConfig, () => {
    updateParamsOptions()
}, {
    immediate: true
})

watch(paramsOptions, () => {
    const configValue = logicConfig.value;
    if (!configValue) {
        return;
    };
    paramsOptions.value.map(e => {
        configValue.params = configValue?.params || {}
        configValue.params[e.label] = e.value
    })
}, {
    deep: true
})
</script>
<style lang="less" scoped>
.emit-params-edit {
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