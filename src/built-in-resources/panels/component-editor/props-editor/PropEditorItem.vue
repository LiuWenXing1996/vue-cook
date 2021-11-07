<template>
    <n-form-item :label="propOption.name" class="prop-editor-item">
        <n-input v-model:value="editableValue" round class="prop-editor-item-input" />
        <logic-dragger @drop="handleLogicDrop($event)">
            <n-popover trigger="hover" placement="top-end">
                <template #trigger>
                    <n-icon size="15" :depth="3">
                        <LogicIcon></LogicIcon>
                    </n-icon>
                </template>
                拖拽逻辑到此处添加
                <!-- TODO:实现逻辑的编辑 -->
            </n-popover>
        </logic-dragger>
    </n-form-item>
</template>
<script setup lang="ts">
import { useComponentSelected } from 'vue-cook';
import { computed, inject, toRefs } from 'vue';
import { NFormItem, NInput, NIcon, NPopover } from "naive-ui"
import LogicIcon from "@/svgs/logic.svg"
import ICookEditorState from '@/types/ICookEditorState';
import LogicDragger from "@/components/logic-dragger/index.vue"
import ILogicConfig from '@/types/ILogicConfig';
import IPropOption from '@/types/IPropOption';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const props = defineProps({
    propOption: {
        type: Object as () => IPropOption,
        required: true
    }
})
const { propOption } = toRefs(props)
const editableValue = computed({
    get: () => {
        return propOption.value.value
    },
    set: (value) => {
        const configValue = config.value;
        if (!configValue) {
            return;
        };
        configValue.props = configValue?.props || {}
        configValue.props[propOption.value.name] = value
    }
})

const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})

const handleLogicDrop = (logicConfig: ILogicConfig) => {
    editableValue.value = JSON.stringify(logicConfig)
}

</script>
<style lang="less" scoped>
.prop-editor-item {
    .prop-editor-item-input {
        padding-right: 30px;
    }
    :deep(.logic-dragger) {
        position: absolute;
        right: 0px;
        display: flex;
        height: 28px;
        align-items: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        &:hover {
            background-color: rgb(24, 160, 88);
        }
    }
}
</style>