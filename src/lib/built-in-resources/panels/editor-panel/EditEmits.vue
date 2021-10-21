<template>
    <n-form-item :label="emitOption.label" v-for="emitOption in emitOptions">
        <div class="emit-editor">
            <div class="emit-add-bar">拖拽逻辑到此处添加</div>
            <div class="emit-list">
                <div class="emit-item" v-for="emit in emitOption.value">{{ emit.name }}</div>
            </div>
        </div>
    </n-form-item>
</template>
<script setup lang="ts">
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import useComponentSelected from '@/lib/hooks/useComponentSelected';
import ILogicConfig from '@/lib/types/ILogicConfig';
import { ref, watch } from 'vue';
import { NFormItem } from "naive-ui"


interface IEmitOption {
    label: string,
    value: ILogicConfig[]
}
const emitOptions = ref<IEmitOption[]>([])
const config = useComponentSelected()

const updateEmitOptions = () => {
    const configValue = config.value;
    if (!configValue) {
        emitOptions.value = [];
        return;
    };
    const maker = useComponentMaker(config.value?.makerName, config.value?.makerPackage).value
    if (!maker) {
        emitOptions.value = [];
        return;
    }
    const _emitOptions = maker?.emits || []
    const _optionsWithValue = _emitOptions.map(e => {
        let value = config.value?.emits?.[e] || []
        return {
            label: e,
            value: value
        }
    })
    emitOptions.value = _optionsWithValue
}

watch(config, () => {
    updateEmitOptions()
}, {
    immediate: true
})

watch(emitOptions, () => {
    const configValue = config.value;
    if (!configValue) {
        return;
    };
    emitOptions.value.map(e => {
        configValue.emits = configValue?.emits || {}
        configValue.emits[e.label] = e.value
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