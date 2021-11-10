<template>
    <div class="page-cook-panel">
        <template v-if="pageEditing">
            <div class="actions">
                <n-space align="center">
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon>
                                <arrow-undo-outline></arrow-undo-outline>
                            </n-icon>
                        </template>
                        撤销
                        <!-- TODO：撤销逻辑实现 -->
                    </n-popover>
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon>
                                <arrow-redo-outline></arrow-redo-outline>
                            </n-icon>
                        </template>
                        恢复
                        <!-- TODO：恢复逻辑实现 -->
                    </n-popover>
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon
                                @click="togglePicker"
                                :class="{ actived: enablePicker }"
                            >
                                <locate-outline></locate-outline>
                            </n-icon>
                        </template>
                        在页面上选择组件
                    </n-popover>
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon @click="delPage">
                                <trash-outline></trash-outline>
                            </n-icon>
                        </template>
                        删除当前页面
                    </n-popover>
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon>
                                <page-size-icon></page-size-icon>
                            </n-icon>
                        </template>
                        <n-space vertical>
                            <n-space align="center" justify="space-around" style="width: 200px;">
                                <label>宽度：</label>
                                <div style="width: 130px;">
                                    <n-input-number v-model:value="size.width" size="small">
                                        <template #suffix>px</template>
                                    </n-input-number>
                                </div>
                            </n-space>
                            <n-space align="center" justify="space-around" style="width: 200px;">
                                <label>高度：</label>
                                <div style="width: 130px;">
                                    <n-input-number v-model:value="size.height" size="small">
                                        <template #suffix>px</template>
                                    </n-input-number>
                                </div>
                            </n-space>
                            <n-space align="center" justify="space-around" style="width: 200px;">
                                <label>比例：</label>
                                <div style="width: 130px;">
                                    <n-input-number v-model:value="size.scale" size="small">
                                        <template #suffix>%</template>
                                    </n-input-number>
                                </div>
                            </n-space>
                        </n-space>
                    </n-popover>
                    <n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                            <n-icon>
                                <information-circle></information-circle>
                            </n-icon>
                        </template>
                        <n-space vertical>
                            <n-space align="center" justify="space-around" style="width: 200px;">
                                <label>名称：</label>
                                <div style="width: 130px;">
                                    <n-input v-model:value="pageEditing.name" size="small"></n-input>
                                </div>
                            </n-space>
                            <n-space align="center" justify="space-around" style="width: 200px;">
                                <label>地址：</label>
                                <div style="width: 130px;">
                                    <n-input
                                        v-model:value="pageEditing.path"
                                        size="small"
                                        type="textarea"
                                    ></n-input>
                                </div>
                            </n-space>
                        </n-space>
                    </n-popover>
                </n-space>
            </div>
            <div class="page-cook-contaienr">
                <ruler-box :size="size">
                    <page-cook
                        :page-editing="pageEditing"
                        :enable-picker="enablePicker"
                        :size="size"
                    ></page-cook>
                </ruler-box>
            </div>
        </template>
        <template v-else>
            <n-empty description="没有正在编辑的页面"></n-empty>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NEmpty, NIcon, NPopover, NSpace, NInputNumber, NInput } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline, InformationCircle, RefreshOutline } from "@vicons/ionicons5"
import PageSizeIcon from "@/svgs/page-size.svg"
import { computed, inject, Ref, ref, toRefs, watch } from "vue";
import PageCook from "./PageCook.vue"
import useComponentPickerEnable from "@/hooks/useComponentPickerEnable";
import IPageCookPanelSize from "@/types/IPageCookPanelSize";
import RulerBox from "./ruler-box/RulerBox.vue"
import ICookEditorState from "@/types/ICookEditorState";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    pageUid: {
        type: String,
    }
})
const { pageUid } = toRefs(props)
const pageEditing = computed(() => {
    return cookEditorState.pages.find(e => e.uid === pageUid?.value)
})
const enablePicker = useComponentPickerEnable(cookEditorState).get()

const togglePicker = () => {
    useComponentPickerEnable(cookEditorState).toggle()
}
const size = ref<IPageCookPanelSize>({
    width: 1920,
    height: 1080,
    scale: 100
})

const delPage = () => {
    const pageList = cookEditorState.pages
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
        padding: 3px;
        width: 100%;
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
        position: relative;
        // margin: 10px;
        .page-cook-wrapper {
            width: 100%;
            height: 100%;
            overflow: auto;
        }
    }
}
</style>