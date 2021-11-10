<template>
    <n-form-item :label="slotOption">
        <div class="slot-editor">
            <div class="slot-add-bar">
                <component-dragger @drop="handleComponentDrop($event)">拖拽组件到此处添加</component-dragger>
            </div>
            <n-data-table :columns="columns" :data="tableData" size="small" />
        </div>
    </n-form-item>
</template>
<script setup lang="ts">
import useComponentSelected from '@/hooks/useComponentSelected';
import IComponentConfig from '@/types/IComponentConfig';
import { computed, h, inject, ref, toRefs } from 'vue';
import { NFormItem, NDataTable } from "naive-ui"
import SlotComponentAction from "./SlotComponentAction.vue"
import { ComponentDragger } from "@/index"
import ICookEditorState from '@/types/ICookEditorState';
import addComponentConfig from '@/utils/addComponentConfig';
import removeComponentConfig from '@/utils/removeComponentConfig';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    slotOption: {
        type: String,
        required: true
    }
})
const { slotOption } = toRefs(props)

const handleComponentDrop = (componentConfig: IComponentConfig) => {
    if (config.value) {
        addComponentConfig(config.value, componentConfig, slotOption.value)
    }
}

interface IRowData {
    key: string,
    name: string,
    slotName: string,
    value: IComponentConfig
}
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})
const tableData = computed(() => {
    const slotData = config.value?.slots?.[slotOption.value] || []
    return slotData.map(e => {
        return {
            key: e.uid,
            name: e.name,
            slotName: slotOption.value,
            value: e
        }
    })
})

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
                    pageUid: selectedComponent.value?.page.uid,
                    onDel: () => {
                        if (config.value) {
                            removeComponentConfig(config.value, rowData.value.uid, rowData.slotName)
                        }
                    },
                    onSelect: () => {
                        if (selectedComponent.value?.page.uid) {
                            useComponentSelected(cookEditorState).set({
                                pageUid: selectedComponent.value?.page.uid,
                                componentUid: rowData.value.uid
                            })
                        }
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