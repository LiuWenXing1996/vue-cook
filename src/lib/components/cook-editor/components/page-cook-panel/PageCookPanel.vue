<template>
    <div class="page-cook-panel">
        <template v-if="pageEditingList.length <= 0">
            <div class="title">
                <div>页面编辑</div>
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
                    v-for="pageEditing in pageEditingList"
                >
                    <page-cook :page-editing="pageEditing"></page-cook>
                </n-tab-pane>
                <template #prefix>
                    <div></div>
                </template>
                <template #suffix>
                    <div class="actions">
                        <n-button round size="tiny">
                            <template #icon>
                                <n-icon>
                                    <arrow-undo-outline></arrow-undo-outline>
                                </n-icon>
                            </template>
                            撤销
                        </n-button>
                        <n-button round size="tiny">
                            <template #icon>
                                <n-icon>
                                    <arrow-redo-outline></arrow-redo-outline>
                                </n-icon>
                            </template>
                            恢复
                        </n-button>
                        <n-button round size="tiny">
                            <template #icon>
                                <n-icon>
                                    <locate-outline></locate-outline>
                                </n-icon>
                            </template>
                            选择
                        </n-button>
                        <!-- <n-switch size="small" v-model:value="showOverlay">
                            <template #checked>编辑</template>
                            <template #unchecked>编辑</template>
                        </n-switch>-->
                        <n-button round size="tiny" @click="delPage(currenPageUid)">
                            <template #icon>
                                <n-icon>
                                    <trash-outline></trash-outline>
                                </n-icon>
                            </template>
                            删除
                        </n-button>
                        <n-button round size="tiny">
                            <template #icon>
                                <n-icon>
                                    <eye-outline></eye-outline>
                                </n-icon>
                            </template>
                            预览
                        </n-button>
                    </div>
                </template>
            </n-tabs>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NButton, NTabPane, NEmpty, NTabs, NSwitch, NIcon } from "naive-ui"
import { LocateOutline, ArrowUndoOutline, ArrowRedoOutline, TrashOutline, EyeOutline } from "@vicons/ionicons5"
import IPage from "$/types/IPage";
import { computed, ref, toRefs, watch } from "vue";
import usePageEditingList from "$/hooks/usePageEditingList";
import PageCook from "./PageCook.vue"

const props = defineProps({
    pageList: {
        type: Object as () => IPage[],
        required: true
    }
})
const currenPageUid = ref<string>()
const showOverlay = ref<boolean>(false)
const pageEditingList = usePageEditingList()
watch(showOverlay, () => {
    const currentPageEditing = pageEditingList.value.find(pageEditing => {
        return pageEditing.page.uid === currenPageUid.value
    })
    if (currentPageEditing) {
        currentPageEditing.showOverlay = showOverlay.value
    }
})

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

const { pageList } = toRefs(props)

const delPage = (uid?: string) => {
    var index = pageList.value.findIndex(page => page.uid === uid)
    if (index > -1) {
        pageList.value.splice(index, 1);
    }
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
            display: flex;
            .n-button {
                margin-right: 10px;
                &:last-child {
                    margin-left: 0;
                }
            }
        }
    }
    .content {
        flex-grow: 1;
        padding: 10px;
    }
}
</style>