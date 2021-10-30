<template>
    <template v-if="slotOptions.length > 0">
        <n-form-item :label="slotOption.label" v-for="slotOption in slotOptions">
            <div class="slot-editor">
                <div class="slot-add-bar">
                    <slot-dragger :component-config="config" :slot-name="slotOption.label">拖拽组件到此处添加</slot-dragger>
                </div>
                <n-data-table
                    :columns="columns"
                    :data="getData(slotOption.value, slotOption.label)"
                    size="small"
                />
            </div>
        </n-form-item>
    </template>
    <template v-else>无</template>
</template>
<script setup lang="ts">
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import useComponentSelected from '@/lib/hooks/useComponentSelected';
import IComponentConfig from '@/lib/types/IComponentConfig';
import { h, inject, ref, watch } from 'vue';
import { NFormItem, NDataTable } from "naive-ui"
import SlotComponentAction from "./SlotComponentAction.vue"
import SlotDragger from "@/lib/components/slot-dragger/SlotDragger.vue"
import ICookEditorState from '@/lib/types/ICookEditorState';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

interface ISlotOption {
    label: string,
    value: IComponentConfig[]
}

interface IRowData {
    key: string,
    name: string,
    slotName: string,
    value: IComponentConfig
}
const slotOptions = ref<ISlotOption[]>([])
const config = useComponentSelected()

const columns = ref([
    {
        title: '名称',
        key: 'name',
    },
    {
        title: '操作',
        key: 'actions',
        render(rowData: IRowData, rowIndex: number) {
            return h(
                SlotComponentAction,
                {
                    config: rowData.value,
                    slotName: rowData.slotName,
                    onDel: () => {
                        const slot = config.value?.slots?.[rowData.slotName];
                        if (slot) {
                            slot.splice(rowIndex, 1)
                        }
                    },
                    onSelect: () => {
                        config.value = rowData.value
                    },
                    onUp: () => {
                        const slot = config.value?.slots?.[rowData.slotName];
                        if (slot) {
                            if (rowIndex <= 0) {
                                return
                            }
                            const temp = slot[rowIndex];
                            slot[rowIndex] = slot[rowIndex - 1]
                            slot[rowIndex - 1] = temp
                        }
                    },
                    onDown: () => {
                        const slot = config.value?.slots?.[rowData.slotName];
                        if (slot) {
                            if (rowIndex >= slot.length - 1) {
                                return
                            }
                            const temp = slot[rowIndex];
                            slot[rowIndex] = slot[rowIndex + 1]
                            slot[rowIndex + 1] = temp
                        }
                    }
                }
            )
        }
    }
])

const getData = (slotValue: IComponentConfig[], slotName: string): IRowData[] => {
    return slotValue.map(e => {
        return {
            key: e.uid,
            name: e.name,
            slotName: slotName,
            value: e
        }
    })
}

const updateSlotOptions = () => {
    const configValue = config.value;
    if (!configValue) {
        slotOptions.value = [];
        return;
    };
    const maker = useComponentMaker(cookEditorState, config.value?.makerName, config.value?.makerPkg).value
    if (!maker) {
        slotOptions.value = [];
        return;
    }
    const _slotOptions = maker?.slots || []
    const _optionsWithValue = _slotOptions.map(e => {
        let value = config.value?.slots?.[e] || []
        return {
            label: e,
            value: value
        }
    })
    slotOptions.value = _optionsWithValue
}

watch(config, () => {
    updateSlotOptions()
}, {
    immediate: true
})

watch(slotOptions, () => {
    const configValue = config.value;
    if (!configValue) {
        return;
    };
    slotOptions.value.map(e => {
        configValue.slots = configValue?.slots || {}
        configValue.slots[e.label] = e.value
    })
}, {
    deep: true
})

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