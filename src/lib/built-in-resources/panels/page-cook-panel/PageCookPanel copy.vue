<template>
    <div class="page-cook-panel">
        <template v-if="pageEditingList.length <= 0">
            <div class="title">
                <div>无页面</div>
            </div>
            <div class="content">
                <n-empty description="没有正在编辑的页面"></n-empty>
            </div>
        </template>
        <template v-else>
            <n-tabs
                type="card"
                size="small"
                closable
                v-model:value="currenPageUid"
                @close="handleClose"
                :style="{ height: '100%', display: 'flex', flexDirection: ' column' }"
                :pane-style="{ flexGrow: 1, padding: 0 }"
            >
                <n-tab-pane
                    :name="pageEditing.page.uid"
                    :tab="pageEditing.page.name"
                    display-directive="show"
                    v-for="pageEditing in pageEditingList"
                >
                    <page-cook :page-editing="pageEditing" :enable-picker="enablePicker"></page-cook>
                </n-tab-pane>
                <template #prefix>
                    <div></div>
                </template>
                <template #suffix>
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
            </n-tabs>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NTabPane, NEmpty, NTabs, NIcon, NTooltip, NSpace } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline } from "@vicons/ionicons5"
import IPage from "$/types/IPage";
import { computed, ref, toRefs, watch } from "vue";
import usePageEditingList from "$/hooks/usePageEditingList";
import PageCook from "./PageCook.vue"
import useComponentPickerEnable from "@/lib/hooks/useComponentPickerEnable";

const props = defineProps({
    pageList: {
        type: Object as () => IPage[],
        required: true
    }
})
const currenPageUid = ref<string>()
const enablePicker = useComponentPickerEnable()

const pageEditingList = usePageEditingList()
// TODO:通过自己的data获取数据

watch(pageEditingList, () => {
    if (pageEditingList.value.length > 0) {
        if (!currenPageUid.value) {
            currenPageUid.value = pageEditingList.value[0].page.uid
        } else {
            const length = pageEditingList.value.length
            currenPageUid.value = pageEditingList.value[length - 1].page.uid
        }
    } else {
        currenPageUid.value = undefined
    }
}, {
    deep: true
})

const handleClose = (name: string) => {
    const nameIndex = pageEditingList.value.findIndex(pageEditing => pageEditing.page.uid === name)
    if (!~nameIndex) return
    pageEditingList.value.splice(nameIndex, 1)
}

const preview = () => {
    const pageFound = pageList.value.find(page => page.uid === currenPageUid.value)
    if (pageFound) {
        const path = pageFound.path;
        window.open(path)
    }
}

const { pageList } = toRefs(props)

const delPage = () => {
    var index = pageList.value.findIndex(page => page.uid === currenPageUid.value)
    if (index > -1) {
        pageList.value.splice(index, 1);
    }
    const nameIndex = pageEditingList.value.findIndex(pageEditing => pageEditing.page.uid === currenPageUid.value)
    if (!~nameIndex) return
    pageEditingList.value.splice(nameIndex, 1)
}

</script>
<style lang="less" scoped>
.page-cook-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 6px 10px;
        justify-content: space-between;
        border-bottom: 1px solid rgb(239, 239, 245);
    }
    :deep(.n-tabs-nav) {
        .actions {
            padding-right: 10px;

            .n-icon:hover {
                cursor: pointer;
                color: rgb(24, 160, 88);
            }
            .n-icon.actived {
                color: rgb(24, 160, 88);
            }
        }
    }
    .content {
        flex-grow: 1;
        padding: 10px;
    }
}
</style>