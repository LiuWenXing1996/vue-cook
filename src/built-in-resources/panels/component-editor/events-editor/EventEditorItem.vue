<template>
    <n-form-item :label="eventOption.name">
        <div class="event-editor">
            <div class="event-add-bar">
                <event-dragger :component-config="config" :event-name="eventOption.name">拖拽逻辑到此处添加</event-dragger>
            </div>
            <n-data-table
                :columns="columns"
                :data="getData(eventOption.value, eventOption.name)"
                size="small"
            />
        </div>
    </n-form-item>
</template>
<script setup lang="ts">
import useComponentSelected from '@/hooks/useComponentSelected';
import ILogicConfig from '@/types/ILogicConfig';
import { computed, h, inject, ref } from 'vue';
import { NFormItem, NDataTable } from "naive-ui"
import EventLogicAction from "./EventLogicAction.vue"
import { EventDragger } from "@/index"
import ICookEditorState from '@/types/ICookEditorState';
import IEventOption from '@/types/IEventOption';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
defineProps({
    eventOption: {
        type: Object as () => IEventOption,
        required: true
    }
})

interface IRawData {
    key: string,
    name: string,
    eventName: string,
    value: ILogicConfig
}
const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})
const columns = ref([
    {
        title: '名称',
        key: 'name',
    },
    {
        title: '操作',
        key: 'actions',
        render(rowData: IRawData, rowIndex: number) {
            return h(
                EventLogicAction,
                {
                    config: rowData.value,
                    onDel: () => {
                        const event = config.value?.events?.[rowData.eventName];
                        if (event) {
                            event.splice(rowIndex, 1)
                        }
                    },
                    onUp: () => {
                        const event = config.value?.events?.[rowData.eventName];
                        if (event) {
                            if (rowIndex <= 0) {
                                return
                            }
                            const temp = event[rowIndex];
                            event[rowIndex] = event[rowIndex - 1]
                            event[rowIndex - 1] = temp
                        }
                    },
                    onDown: () => {
                        const event = config.value?.events?.[rowData.eventName];
                        if (event) {
                            if (rowIndex >= event.length - 1) {
                                return
                            }
                            const temp = event[rowIndex];
                            event[rowIndex] = event[rowIndex + 1]
                            event[rowIndex + 1] = temp
                        }
                    }
                }
            )
        }
    }
])

const getData = (eventValue: ILogicConfig[], eventName: string): IRawData[] => {
    return eventValue.map(e => {
        return {
            key: e.uid,
            name: e.name,
            eventName: eventName,
            value: e
        }
    })
}

</script>
<style lang="less" scoped>
.event-editor {
    width: 100%;
    .event-add-bar {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>