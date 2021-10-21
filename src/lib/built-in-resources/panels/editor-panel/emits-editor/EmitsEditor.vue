<template>
    <template v-if="emitOptions.length > 0">
        <n-form-item :label="emitOption.label" v-for="emitOption in emitOptions">
            <div class="emit-editor">
                <div
                    class="emit-add-bar"
                    @dragover="handleDragOver($event)"
                    @drop="handleDrop($event, emitOption.label, config)"
                    @dragenter="handleDragEnter($event)"
                    @dragleave="handleDragLeave($event)"
                >拖拽逻辑到此处添加</div>
                <n-data-table :columns="columns" :data="getData(emitOption.value)" size="small" />
            </div>
        </n-form-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import useComponentSelected from '@/lib/hooks/useComponentSelected';
import ILogicConfig from '@/lib/types/ILogicConfig';
import { h, ref, watch } from 'vue';
import { NFormItem, NDataTable } from "naive-ui"
import EmitLogicAction from "./EmitLogicAction.vue"
import handleDragOver from "./handleDragOver"
import handleDrop from "./handleDrop"
import handleDragEnter from "./handleDragEnter"
import handleDragLeave from "./handleDragLeave"

interface IEmitOption {
    label: string,
    value: ILogicConfig[]
}
const emitOptions = ref<IEmitOption[]>([])
const config = useComponentSelected()

const columns = ref([
    {
        title: '名称',
        key: 'name',
    },
    {
        title: '操作',
        key: 'actions',
        render(rowData: any, rowIndex: number) {
            return h(
                EmitLogicAction,
                {
                    config: rowData.value,
                    onDel: () => {
                        alert(JSON.stringify(rowData.value))
                    },
                    onLocation: () => {
                        alert(JSON.stringify(rowData.value))
                    },
                    onUp: () => {
                        alert(JSON.stringify(rowData.value))
                    },
                    onDown: () => {
                        alert(JSON.stringify(rowData.value))
                    }
                }
            )
        }
    }
])

const getData = (emitValue: ILogicConfig[]) => {
    return emitValue.map(e => {
        return {
            key: e.uid,
            name: e.name,
            value: e
        }
    })
}

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
        margin-bottom: 10px;
        &.dragenter {
            background-color: rgba(24, 160, 88, 0.1);
            color: rgb(24, 160, 88);
            border: 1px solid rgba(24, 160, 88, 0.3);
        }
    }
}
</style>