<template>
    <n-space align="center">
        <n-popover trigger="hover" placement="bottom">
            <template #trigger>
                <n-icon @click="emits('del')">
                    <trash-outline></trash-outline>
                </n-icon>
            </template>
            删除
        </n-popover>
        <n-popover trigger="hover" placement="bottom">
            <template #trigger>
                <n-icon>
                    <edit32-regular></edit32-regular>
                </n-icon>
            </template>
            <event-params-edit :logic-config="config"></event-params-edit>
        </n-popover>
        <n-popover trigger="hover" placement="bottom">
            <template #trigger>
                <n-icon @click="emits('up')">
                    <arrow-up48-regular></arrow-up48-regular>
                </n-icon>
            </template>
            上移
        </n-popover>
        <n-popover trigger="hover" placement="bottom">
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
            <event-info-tips :logic-config="config"></event-info-tips>
        </n-popover>
    </n-space>
</template>
<script setup lang="ts">
import { TrashOutline, InformationCircle } from "@vicons/ionicons5"
import { ArrowUp48Regular, ArrowDown48Regular, Edit32Regular } from "@vicons/fluent"
import EventInfoTips from "./EventInfoTips.vue"
import EventParamsEdit from "./EventParamsEdit.vue"
import { NIcon, NPopover, NSpace } from "naive-ui"
import ILogicConfig from "@/types/ILogicConfig";
defineProps({
    config: {
        type: Object as () => ILogicConfig,
        required: true
    }
})

const emits = defineEmits(["del", "up", "down"])
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