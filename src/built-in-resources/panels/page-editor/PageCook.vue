<template>
    <div class="actions">
        <n-space align="center">
            <n-popover trigger="hover" placement="bottom">
                <template #trigger>
                    <n-icon @click="undo()">
                        <arrow-undo-outline></arrow-undo-outline>
                    </n-icon>
                </template>
                撤销
            </n-popover>
            <n-popover trigger="hover" placement="bottom">
                <template #trigger>
                    <n-icon @click="redo()">
                        <arrow-redo-outline></arrow-redo-outline>
                    </n-icon>
                </template>
                恢复
            </n-popover>
            <n-popover trigger="hover" placement="bottom">
                <template #trigger>
                    <n-icon @click="togglePicker" :class="{ actived: enablePicker }">
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
                <!-- TODO:删除有问题？？？ -->
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
                            <n-input v-model:value="pageEditing.path" size="small" type="textarea"></n-input>
                        </div>
                    </n-space>
                </n-space>
            </n-popover>
        </n-space>
    </div>
    <div class="page-cook-contaienr">
        <ruler-box :size="size">
            <page-cook-content
                :page-editing="pageEditing"
                :enable-picker="enablePicker"
                :size="size"
            ></page-cook-content>
        </ruler-box>
    </div>
</template>
<script setup lang="ts">
import { NIcon, NPopover, NSpace, NInputNumber, NInput } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, InformationCircle } from "@vicons/ionicons5"
import PageSizeIcon from "@/svgs/page-size.svg"
import { computed, inject, ref, toRefs } from "vue";
import { useRefHistory } from '@vueuse/core'
import PageCookContent from "./PageCookContent.vue"
import useComponentPickerEnable from "@/hooks/useComponentPickerEnable";
import IPageCookPanelSize from "@/types/IPageCookPanelSize";
import RulerBox from "./ruler-box/RulerBox.vue"
import ICookEditorState from "@/types/ICookEditorState";
import usePageEditingUidList from "@/hooks/usePageEditingUidList";
import IPage from "@/types/IPage";

const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps<{
    page: IPage
}>()
const { page } = toRefs(props)

const pageEditing = computed({
    get: () => {
        return page.value
    },
    set: (value) => {
        if (value) {
            Object.assign(page.value, value)
        }
    }
})
const { undo, redo, dispose } = useRefHistory(pageEditing, {
    deep: true
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
    dispose()
    usePageEditingUidList(cookEditorState).remove(page.value.uid)
    cookEditorState.pages = cookEditorState.pages.filter(e => e.uid !== page.value.uid)
}

</script>
<style lang="less" scoped>
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
</style>