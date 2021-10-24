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
                <n-icon @click="emits('location')">
                    <locate-outline></locate-outline>
                </n-icon>
            </template>
            定位
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
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline, InformationCircle } from "@vicons/ionicons5"
import { ArrowUp48Regular, ArrowDown48Regular } from "@vicons/fluent"
import { NTag, NEmpty, NIcon, NPopover, NSpace, NInputNumber, NLayout, NScrollbar, NInput } from "naive-ui"
import ComponentInfoTips from "./ComponentInfoTips.vue"
defineProps({
    config: {
        type: Object as () => IComponentConfig,
        required: true
    }
})

const emits = defineEmits(["del", "location", "up", "down"])
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