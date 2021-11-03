<template>
    <n-space align="center">
        <n-popover trigger="hover">
            <template #trigger>
                <n-icon @click="emits('del')">
                    <trash-outline></trash-outline>
                </n-icon>
            </template>
            删除
        </n-popover>
        <n-popover trigger="hover">
            <template #trigger>
                <n-icon @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
                    <locate-outline></locate-outline>
                </n-icon>
            </template>
            定位
        </n-popover>
        <n-popover trigger="hover">
            <template #trigger>
                <n-icon @click="emits('select')">
                    <select-outlined></select-outlined>
                </n-icon>
            </template>
            选择
        </n-popover>
        <n-popover trigger="hover">
            <template #trigger>
                <n-icon @click="emits('up')">
                    <arrow-up48-regular></arrow-up48-regular>
                </n-icon>
            </template>
            上移
        </n-popover>
        <n-popover trigger="hover">
            <template #trigger>
                <n-icon @click="emits('down')">
                    <arrow-down48-regular></arrow-down48-regular>
                </n-icon>
            </template>
            上移
        </n-popover>
        <n-popover trigger="hover" placement="left">
            <template #trigger>
                <n-icon>
                    <information-circle></information-circle>
                </n-icon>
            </template>
            <component-info-tips :component-config="config"></component-info-tips>
        </n-popover>
    </n-space>
</template>
<script setup lang="ts">
import IComponentConfig from "@/lib/types/IComponentConfig";
import { LocateOutline, TrashOutline, InformationCircle } from "@vicons/ionicons5"
import { ArrowUp48Regular, ArrowDown48Regular } from "@vicons/fluent"
import { SelectOutlined } from "@vicons/antd"
import { NIcon, NPopover, NSpace, } from "naive-ui"
import ComponentInfoTips from "./ComponentInfoTips.vue"
import useComponentFocused from "@/lib/built-in-resources/panels/page-cook-panel/hooks/useComponentFocused";
import { inject, toRefs } from "vue";
import ICookEditorState from "@/lib/types/ICookEditorState";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const props = defineProps({
    config: {
        type: Object as () => IComponentConfig,
        required: true
    },
    slotName: {
        type: String,
        required: true
    },
    pageUid: {
        type: String,
    }
})
const { config, pageUid } = toRefs(props)
const handleMouseLeave = () => {
    useComponentFocused(cookEditorState).set()
}

const handleMouseMove = (e: MouseEvent) => {
    if (pageUid?.value) {
        useComponentFocused(cookEditorState).set({
            pageUid: pageUid.value,
            componentUid: config.value.uid
        })
    }
}
const emits = defineEmits(["del", "location", "up", "down", "select"])
</script>
<style lang="less" scoped>
.n-icon:hover {
    cursor: pointer;
    color: rgb(24, 160, 88);
}
.n-icon.actived {
    color: rgb(24, 160, 88);
}
</style>