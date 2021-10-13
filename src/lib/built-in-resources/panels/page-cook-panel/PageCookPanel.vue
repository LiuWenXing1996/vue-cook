<template>
    <div class="page-cook-panel">
        <template v-if="pageEditing">
            <div class="actions">
                <div class="action-item">
                    <div class="action-item-label">操作：</div>
                    <!-- TODO：操作栏移到右边 -->
                    <div>
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
                </div>
                <div class="action-item">
                    <div class="action-item-label">尺寸：</div>
                    <div style="width: 240px;display: flex;align-items: center;">
                        <n-input-number v-model:value="size.width" size="small" />
                        <div style="margin: 0 10px;">X</div>
                        <n-input-number v-model:value="size.height" size="small" />
                    </div>
                </div>
                <div class="action-item">
                    <div class="action-item-label">比例：</div>
                    <div style="width: 130px;">
                        <n-input-number v-model:value="size.scale" size="small">
                            <template #suffix>%</template>
                        </n-input-number>
                    </div>
                </div>
            </div>
            <div class="page-cook-contaienr">
                <div class="page-cook-wrapper">
                    <page-cook
                        :page-editing="pageEditing"
                        :enable-picker="enablePicker"
                        :size="size"
                    ></page-cook>
                </div>
            </div>
        </template>
        <template v-else>
            <n-empty description="没有正在编辑的页面"></n-empty>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NTag, NEmpty, NIcon, NTooltip, NSpace, NInputNumber, NLayout, NScrollbar } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline } from "@vicons/ionicons5"
import { computed, ref, toRefs } from "vue";
import PageCook from "./PageCook.vue"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable";
import IPage from "@/lib/types/IPage";
import { useCookConfig } from "@/lib";
import IPageCookPanelSize from "@/lib/types/IPageCookPanelSize";
// TODO:使用n scorll-bar 会出现问题，滚动条选不到
const props = defineProps({
    pageEditing: {
        type: Object as () => IPage,
    }
})
const { pageEditing } = toRefs(props)
const enablePicker = useComponentPickerEnable()
// TODO:每个panel有自己的picker enable
const cookConfig = useCookConfig()
const size = ref<IPageCookPanelSize>({
    width: 1920,
    height: 1080,
    scale: 100
})

const preview = () => {
    const path = pageEditing?.value?.path
    if (path) {
        window.open(path)
    }
}

const delPage = () => {
    const pageList = cookConfig.value.pages
    var index = pageList.findIndex(page => page.uid === pageEditing?.value?.uid)
    if (index > -1) {
        pageList.splice(index, 1);
    }
}

</script>
<style lang="less" scoped>
.page-cook-panel {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .actions {
        display: flex;
        padding: 10px;
        padding-bottom: 0;
        align-items: center;
        .action-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
            .action-item-label {
                margin-right: 10px;
            }
        }
        .n-icon:hover {
            cursor: pointer;
            color: rgb(24, 160, 88);
        }
        .n-icon.actived {
            color: rgb(24, 160, 88);
        }
    }
    .page-cook-contaienr {
        flex-grow: 1;
        overflow: hidden;
        margin: 10px;
        .page-cook-wrapper {
            width: 100%;
            height: 100%;
            overflow: auto;
        }
    }
}
</style>