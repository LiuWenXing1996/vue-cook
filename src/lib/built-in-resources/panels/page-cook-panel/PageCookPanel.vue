<template>
    <div class="page-cook-panel">
        <template v-if="pageEditing">
            <page-cook :page-editing="pageEditing" :enable-picker="enablePicker"></page-cook>
            <div class="actions">
                <n-space>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon>
                                <arrow-undo-outline></arrow-undo-outline>
                            </n-icon>
                        </template>
                        撤销
                    </n-tooltip>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon>
                                <arrow-redo-outline></arrow-redo-outline>
                            </n-icon>
                        </template>
                        恢复
                    </n-tooltip>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon
                                @click="enablePicker = !enablePicker"
                                :class="{ actived: enablePicker }"
                            >
                                <locate-outline></locate-outline>
                            </n-icon>
                        </template>
                        在页面上选择组件
                    </n-tooltip>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon @click="delPage">
                                <trash-outline></trash-outline>
                            </n-icon>
                        </template>
                        删除当前页面
                    </n-tooltip>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon @click="preview">
                                <eye-outline></eye-outline>
                            </n-icon>
                        </template>
                        打开一个新窗口预览当前页面
                    </n-tooltip>
                </n-space>
            </div>
        </template>
        <template v-else>
            <n-empty description="没有正在编辑的页面"></n-empty>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NTabPane, NEmpty, NTabs, NIcon, NTooltip, NSpace } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline } from "@vicons/ionicons5"
import { toRefs } from "vue";
import PageCook from "./PageCook.vue"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable";
import IPageEditing from "@/lib/types/IPageEditing";
import { useCookConfig } from "@/lib";

const props = defineProps({
    pageEditing: {
        type: Object as () => IPageEditing,
    }
})
const { pageEditing } = toRefs(props)
const enablePicker = useComponentPickerEnable()
// TODO:每个panel有自己的picker enable
const cookConfig = useCookConfig()

const preview = () => {
    const path = pageEditing?.value?.page.path
    if (path) {
        window.open(path)
    }
}

const delPage = () => {
    const pageList = cookConfig.value.pages
    var index = pageList.findIndex(page => page.uid === pageEditing?.value?.page.uid)
    if (index > -1) {
        pageList.splice(index, 1);
    }
}

</script>
<style lang="less" scoped>
.page-cook-panel {
    height: 100%;
    position: relative;
    .actions {
        padding-right: 10px;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 999;
        .n-icon:hover {
            cursor: pointer;
            color: rgb(24, 160, 88);
        }
        .n-icon.actived {
            color: rgb(24, 160, 88);
        }
    }
}
</style>